<!-- eslint-disable -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>(null!)

/**
 * 点相对另一个点旋转n度后结果
 * @param x 旋转点x
 * @param y 旋转点y
 * @param deg 角度 0-360
 * @param cx 中心点x
 * @param cy 中心点y
 */
function rotatePoint(x: number, y: number, deg: number, cx: number, cy: number): Coordinate {
  const radian = Math.PI * (deg / 180)
  const rotatedX = (x - cx) * Math.cos(radian) + (y - cy) * Math.sin(radian) + cx
  const rotatedY = -(x - cx) * Math.sin(radian) + (y - cy) * Math.cos(radian) + cy
  return {
    x: rotatedX,
    y: rotatedY,
  }
}

/**
 * 范围随机数
 * @param start 最小值
 * @param end 最大值
 */
function random(start: number, end: number) {
  return start + Math.round(Math.random() * (end - start))
}

/**
 * 随机数组
 * @param l 数组
 */
function randomList<T>(l: T[]) {
  return l[random(0, l.length - 1)]
}

/**
 * 生成空数组
 * @param len 数组容量
 */
function entryList(len: number) {
  return Array.from({ length: len })
}

/**
 * HSV颜色转RGB颜色
 */
function hsv2rgb(h: number, s: number, v: number) {
  let i: number, f: number, p1: number, p2: number, p3: number
  let r = 0; let g = 0; let b = 0
  if (s < 0)
    s = 0
  if (s > 1)
    s = 1
  if (v < 0)
    v = 0
  if (v > 1)
    v = 1
  h %= 360
  if (h < 0)
    h += 360
  h /= 60
  i = Math.floor(h)
  f = h - i
  p1 = v * (1 - s)
  p2 = v * (1 - s * f)
  p3 = v * (1 - s * (1 - f))
  switch (i) {
    case 0: r = v; g = p3; b = p1; break
    case 1: r = p2; g = v; b = p1; break
    case 2: r = p1; g = v; b = p3; break
    case 3: r = p1; g = p2; b = v; break
    case 4: r = p3; g = p1; b = v; break
    case 5: r = v; g = p1; b = p2; break
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

interface Coordinate {
  x: number
  y: number
}

// 基础点
class Point {
  protected ctx: CanvasRenderingContext2D
  constructor(protected canvas: HTMLCanvasElement, protected x: number, protected y: number, protected width: number, protected deg: number, protected xSteep: number, protected ySteep: number, protected dSteep: number, protected color: [s: string, e: string], protected period: number) {
    this.ctx = canvas.getContext('2d')!
  }

  protected getGradient() {
    // 渐变背景 范围 (2 * width)^2
    const gradient = this.ctx.createLinearGradient(this.width, this.width, -1 * this.width, -1 * this.width)
    gradient.addColorStop(0, this.color[0])
    gradient.addColorStop(1, this.color[1])
    this.ctx.fillStyle = gradient
  }

  draw() {
    this.ctx.beginPath()
    // 暂存
    this.ctx.save()
    // 移动中心点
    this.ctx.translate(this.x + this.width / 2, this.y + this.width / 2)
    // 旋转
    this.ctx.rotate(this.deg * Math.PI / 180)
    // 绘制坐标 0,0
    this.drawBody()
    // 恢复
    this.ctx.restore()
    this.ctx.closePath()
  }

  /**
   * 绘制圆形
   */
  protected drawCircle(x: number, y: number, w: number) {
    const path = new Path2D()
    path.arc(x, y, w, 0, 2 * Math.PI)
    this.ctx.fill(path)
  }

  /**
   * 绘制多点
   */
  protected drawPoints(points: Coordinate[]) {
    const path = new Path2D()
    points.forEach((p, i) => i == 0 ? path.moveTo(p.x, p.y) : path.lineTo(p.x, p.y))
    this.ctx.fill(path)
  }

  drawBody() { }

  move() {
    // 步进
    this.x += this.xSteep
    // 函数变化避免直线单调
    this.y += Math.sin(this.x / this.period) * this.ySteep

    // 超出范围修正
    if (this.x > this.canvas.width + 2 * this.width) {
      this.x = -1 * this.width
    }
    else if (this.x < -1 * this.width) {
      this.x = this.canvas.width + this.width
    }
    if (this.y > this.canvas.height + 2 * this.width) {
      this.y = -1 * this.width
    }
    else if (this.y < -1 * this.width) {
      this.y = this.canvas.height + this.width
    }
    // 角度变化
    this.deg = (this.deg + this.dSteep) % 360
  }
}

// 圆形
class CirclePoint extends Point {
  drawBody() {
    this.getGradient()
    this.drawCircle(0, 0, this.width)
  }
}

// Emoji
class EmojiPoint extends Point {
  private emojis: string[] = ['🎉', '😀', '😂', '😚', '🌞']
  private emoji: string
  constructor(protected canvas: HTMLCanvasElement, x: number, y: number, width: number, deg: number, xSteep: number, ySteep: number, dSteep: number, color: [s: string, e: string], period: number) {
    super(canvas, x, y, width, deg, xSteep, ySteep, dSteep, color, period)
    // 宽度补偿
    this.width *= 1.9
    // 随机emoji
    this.emoji = randomList(this.emojis)
  }

  drawBody() {
    this.ctx.font = `${this.width}px v-sans`
    this.ctx.fillText(this.emoji, 0, 0)
  }
}

// 猫爪
class CatPawPoint extends Point {
  constructor(protected canvas: HTMLCanvasElement, x: number, y: number, width: number, deg: number, xSteep: number, ySteep: number, dSteep: number, color: [s: string, e: string], period: number) {
    super(canvas, x, y, width, deg, xSteep, ySteep, dSteep, color, period)
    this.width += 4
  }

  drawBody() {
    const hw = this.width / 2
    const sw = this.width / 4
    this.getGradient()
    // 掌心
    this.drawCircle(0, 0, hw)

    // 左小指
    let p = rotatePoint(hw + sw, 0, 330, 0, 0)
    this.drawCircle(p.x, p.y, sw / 1.5)

    // 左大指
    p = rotatePoint(hw + sw, 0, 290, 0, 0)
    this.drawCircle(p.x, p.y, sw / 1.2)

    // 右大指
    p = rotatePoint(hw + sw, 0, 250, 0, 0)
    this.drawCircle(p.x, p.y, sw / 1.2)

    // 右小指
    p = rotatePoint(hw + sw, 0, 210, 0, 0)
    this.drawCircle(p.x, p.y, sw / 1.5)
  }
}

// 多边形
class PolygonPoint extends Point {
  private sum: number
  constructor(protected canvas: HTMLCanvasElement, x: number, y: number, width: number, deg: number, xSteep: number, ySteep: number, dSteep: number, color: [s: string, e: string], period: number) {
    super(canvas, x, y, width, deg, xSteep, ySteep, dSteep, color, period)
    // 边数
    this.sum = random(3, 8)
  }

  drawBody() {
    if (this.sum < 3) {
      return
    }
    // 每一边角度
    const iDeg = (Math.PI * 2) / this.sum
    const points: Coordinate[] = entryList(this.sum).map((_, index) => {
      const d = iDeg * index
      return {
        x: this.width * Math.sin(d),
        y: this.width * Math.cos(d),
      }
    })
    this.getGradient()
    this.drawPoints(points)
  }
}

interface PointBackgroundConfig {
  // 宽度范围
  widthSize: [start: number, end: number]
  // 初始角度范围
  degSize: [start: number, end: number]
  // x轴步进范围
  xSteepSize: [start: number, end: number]
  // y轴步进范围
  ySteepSize: [start: number, end: number]
  // 旋转角度步进范围
  dSteepSize: [start: number, end: number]
  // 移动周期范围
  periodSize: [start: number, end: number]
  // 颜色透明度
  colorOpacity: number
  // 生成数量
  count: number
  // 初始坐标范围
  xSize: [start: number, end: number]
  ySize: [start: number, end: number]
}

class PointBackground {
  private pointType: (typeof Point)[] = [PolygonPoint, CatPawPoint, CirclePoint, EmojiPoint]

  private ctx: CanvasRenderingContext2D
  private points: Point[] = []
  private colors: string[] = []
  private an?: number
  constructor(private canvas: HTMLCanvasElement, private config: PointBackgroundConfig) {
    this.ctx = canvas.getContext('2d')!

    // 线性360渐变色
    this.colors = entryList(360)
      .map((_, index) => hsv2rgb(index, 1, 1))
      .map(i => `rgba(${i.join(',')},${this.config.colorOpacity})`)

    this.points = entryList(this.config.count).map(this.createPoint)
  }

  private createPoint = () => {
    const { xSize, ySize, widthSize, degSize, xSteepSize, ySteepSize, dSteepSize, periodSize } = this.config

    const startColor = random(0, this.colors.length - 1)

    const xFlag = randomList([-1, 1])
    const yFLag = randomList([-1, 1])
    const dFLag = randomList([-1, 1])

    const P = this.pointType[random(0, this.pointType.length - 1)]
    return new P(this.canvas, random(xSize[0], xSize[1]), random(ySize[0], ySize[1]), random(widthSize[0], widthSize[1]), random(degSize[0], degSize[1]), random(xSteepSize[0], xSteepSize[1]) * 0.1 * xFlag, random(ySteepSize[0], ySteepSize[1]) * 0.1 * yFLag, random(dSteepSize[0], dSteepSize[1]) * 0.1 * dFLag, [
      // 取60度临近色, 变化柔和
      this.colors[startColor],
      this.colors[(startColor + this.colors.length / 6) % this.colors.length],
    ], random(periodSize[0], periodSize[1]))
  }

  private animation = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.points.forEach((p) => {
      p.draw()
      p.move()
    })
    this.an = window.requestAnimationFrame(this.animation)
  }

  /**
   * 开始
   */
  start() {
    this.animation()
  }

  /**
   * 停止
   */
  stop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.an) {
      window.cancelAnimationFrame(this.an)
    }
  }
}

function resize() {
  canvasRef.value.width = document.documentElement.clientWidth
  canvasRef.value.height = document.documentElement.clientHeight
}

let pointBackground: PointBackground

onMounted(() => {
  resize()
  pointBackground = new PointBackground(canvasRef.value, {
    widthSize: [10, 12],
    degSize: [0, 360],
    xSteepSize: [1, 8],
    ySteepSize: [1, 8],
    dSteepSize: [3, 9],
    periodSize: [100, 900],
    colorOpacity: 0.8,
    count: 50,
    xSize: [0, canvasRef.value.width],
    ySize: [0, canvasRef.value.height],
  })
  pointBackground.start()
})

let st: number
window.addEventListener('resize', () => {
  if (st) {
    window.clearTimeout(st)
  }
  st = window.setTimeout(() => {
    resize()
  }, 500)
})

onUnmounted(() => {
  pointBackground?.stop()
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvasRef" />
</template>
