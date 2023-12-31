var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _constructing, _max, _maxSize, _dispose, _disposeAfter, _fetchMethod, _size, _calculatedSize, _keyMap, _keyList, _valList, _next, _prev, _head, _tail, _free, _disposed, _sizes, _starts, _ttls, _hasDispose, _hasFetchMethod, _hasDisposeAfter, _initializeTTLTracking, initializeTTLTracking_fn, _updateItemAge, _statusTTL, _setItemTTL, _isStale, _initializeSizeTracking, initializeSizeTracking_fn, _removeItemSize, _addItemSize, _requireSize, _indexes, indexes_fn, _rindexes, rindexes_fn, _isValidIndex, isValidIndex_fn, _evict, evict_fn, _backgroundFetch, backgroundFetch_fn, _isBackgroundFetch, isBackgroundFetch_fn, _connect, connect_fn, _moveToTail, moveToTail_fn;
import { b3 as getDefaultExportFromCjs, b4 as getAugmentedNamespace, d as defineComponent, i as onBeforeUnmount, v as createVNode, p as inject, L as Fragment, a1 as provide, f as computed, o as onMounted, e as watch, t as toRef, r as ref, n as nextTick, b5 as shallowRef, b6 as __vitePreload, J as useAppStore, y as openBlock, B as createBlock, G as unref, D as createCommentVNode } from "./index-7a7392d0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-e34dca77.js";
const a = "md-editor", o = "md-editor-v3", r$2 = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.js", n$1 = "https://at.alicdn.com/t/c/font_2605852_prouiefeic.css", e$1 = "https://cdnjs.cloudflare.com/ajax/libs", c = `${e$1}/highlight.js/11.9.0/highlight.min.js`, m = [
  "bold",
  "underline",
  "italic",
  "strikeThrough",
  "-",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "prettier",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
  "github"
], p$1 = ["markdownTotal", "=", "scrollSwitch"], u = {
  "zh-CN": {
    toolbarTips: {
      bold: "加粗",
      underline: "下划线",
      italic: "斜体",
      strikeThrough: "删除线",
      title: "标题",
      sub: "下标",
      sup: "上标",
      quote: "引用",
      unorderedList: "无序列表",
      orderedList: "有序列表",
      task: "任务列表",
      codeRow: "行内代码",
      code: "块级代码",
      link: "链接",
      image: "图片",
      table: "表格",
      mermaid: "mermaid图",
      katex: "katex公式",
      revoke: "后退",
      next: "前进",
      save: "保存",
      prettier: "美化",
      pageFullscreen: "浏览器全屏",
      fullscreen: "屏幕全屏",
      preview: "预览",
      htmlPreview: "html代码预览",
      catalog: "目录",
      github: "源码地址"
    },
    titleItem: {
      h1: "一级标题",
      h2: "二级标题",
      h3: "三级标题",
      h4: "四级标题",
      h5: "五级标题",
      h6: "六级标题"
    },
    imgTitleItem: {
      link: "添加链接",
      upload: "上传图片",
      clip2upload: "裁剪上传"
    },
    linkModalTips: {
      linkTitle: "添加链接",
      imageTitle: "添加图片",
      descLabel: "链接描述：",
      descLabelPlaceHolder: "请输入描述...",
      urlLabel: "链接地址：",
      urlLabelPlaceHolder: "请输入链接...",
      buttonOK: "确定"
    },
    clipModalTips: {
      title: "裁剪图片上传",
      buttonUpload: "上传"
    },
    copyCode: {
      text: "复制代码",
      successTips: "已复制！",
      failTips: "复制失败！"
    },
    mermaid: {
      flow: "流程图",
      sequence: "时序图",
      gantt: "甘特图",
      class: "类图",
      state: "状态图",
      pie: "饼图",
      relationship: "关系图",
      journey: "旅程图"
    },
    katex: {
      inline: "行内公式",
      block: "块级公式"
    },
    footer: {
      markdownTotal: "字数",
      scrollAuto: "同步滚动"
    }
  },
  "en-US": {
    toolbarTips: {
      bold: "bold",
      underline: "underline",
      italic: "italic",
      strikeThrough: "strikeThrough",
      title: "title",
      sub: "subscript",
      sup: "superscript",
      quote: "quote",
      unorderedList: "unordered list",
      orderedList: "ordered list",
      task: "task list",
      codeRow: "inline code",
      code: "block-level code",
      link: "link",
      image: "image",
      table: "table",
      mermaid: "mermaid",
      katex: "formula",
      revoke: "revoke",
      next: "undo revoke",
      save: "save",
      prettier: "prettier",
      pageFullscreen: "fullscreen in page",
      fullscreen: "fullscreen",
      preview: "preview",
      htmlPreview: "html preview",
      catalog: "catalog",
      github: "source code"
    },
    titleItem: {
      h1: "Lv1 Heading",
      h2: "Lv2 Heading",
      h3: "Lv3 Heading",
      h4: "Lv4 Heading",
      h5: "Lv5 Heading",
      h6: "Lv6 Heading"
    },
    imgTitleItem: {
      link: "Add Img Link",
      upload: "Upload Img",
      clip2upload: "Clip Upload"
    },
    linkModalTips: {
      linkTitle: "Add Link",
      imageTitle: "Add Image",
      descLabel: "Desc:",
      descLabelPlaceHolder: "Enter a description...",
      urlLabel: "Link:",
      urlLabelPlaceHolder: "Enter a link...",
      buttonOK: "OK"
    },
    clipModalTips: {
      title: "Crop Image",
      buttonUpload: "Upload"
    },
    copyCode: {
      text: "Copy",
      successTips: "Copied!",
      failTips: "Copy failed!"
    },
    mermaid: {
      flow: "flow",
      sequence: "sequence",
      gantt: "gantt",
      class: "class",
      state: "state",
      pie: "pie",
      relationship: "relationship",
      journey: "journey"
    },
    katex: {
      inline: "inline",
      block: "block"
    },
    footer: {
      markdownTotal: "Word Count",
      scrollAuto: "Scroll Auto"
    }
  }
}, k = `${e$1}/mermaid/10.6.1/mermaid.esm.min.mjs`, b$1 = {
  js: `${e$1}/KaTeX/0.16.9/katex.min.js`,
  css: `${e$1}/KaTeX/0.16.9/katex.min.css`
}, f = {
  a11y: {
    light: `${e$1}/highlight.js/11.9.0/styles/a11y-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${e$1}/highlight.js/11.9.0/styles/atom-one-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${e$1}/highlight.js/11.9.0/styles/github.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${e$1}/highlight.js/11.9.0/styles/gradient-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${e$1}/highlight.js/11.9.0/styles/kimbie-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${e$1}/highlight.js/11.9.0/styles/paraiso-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${e$1}/highlight.js/11.9.0/styles/qtcreator-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${e$1}/highlight.js/11.9.0/styles/stackoverflow-light.min.css`,
    dark: `${e$1}/highlight.js/11.9.0/styles/stackoverflow-dark.min.css`
  }
}, l = {
  editorExtensions: {},
  editorConfig: {},
  codeMirrorExtensions: (i2, t2) => t2,
  markdownItConfig: () => {
  },
  markdownItPlugins: (i2) => i2,
  iconfontType: "svg",
  mermaidConfig: (i2) => i2
};
const x = (e2, n2 = 200) => {
  let t2 = 0;
  return (...o2) => new Promise((r2) => {
    t2 && (clearTimeout(t2), r2("cancel")), t2 = window.setTimeout(() => {
      e2.apply(void 0, o2), t2 = 0, r2("done");
    }, n2);
  });
};
var r$1 = Object.defineProperty;
var p = (o2, s, t2) => s in o2 ? r$1(o2, s, { enumerable: true, configurable: true, writable: true, value: t2 }) : o2[s] = t2;
var i$2 = (o2, s, t2) => (p(o2, typeof s != "symbol" ? s + "" : s, t2), t2);
let h$1 = class h {
  constructor() {
    i$2(this, "pools", {});
  }
  // 移除事件监听
  remove(s, t2, n2) {
    const a2 = this.pools[s] && this.pools[s][t2];
    a2 && (this.pools[s][t2] = a2.filter((e2) => e2 !== n2));
  }
  // 清空全部事件，由于单一实例，多次注册会被共享内容
  clear(s) {
    this.pools[s] = {};
  }
  // 注册事件监听
  on(s, t2) {
    return this.pools[s] || (this.pools[s] = {}), this.pools[s][t2.name] || (this.pools[s][t2.name] = []), this.pools[s][t2.name].push(t2.callback), this.pools[s][t2.name].includes(t2.callback);
  }
  // 触发事件
  emit(s, t2, ...n2) {
    this.pools[s] || (this.pools[s] = {});
    const a2 = this.pools[s][t2];
    a2 && a2.forEach((e2) => {
      try {
        e2(...n2);
      } catch (c2) {
        console.error(`${t2} monitor event exception！`, c2);
      }
    });
  }
};
const C = new h$1(), S = "buildFinished", I = "catalogChanged", D = "pushCatalog", w = (o2) => {
  if (!o2)
    return o2;
  const s = o2.split(`
`), t2 = ['<span rn-wrapper aria-hidden="true">'];
  return s.forEach(() => {
    t2.push("<span></span>");
  }), t2.push("</span>"), `<span class="code-block">${o2}</span>${t2.join("")}`;
}, U = () => `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
const h2 = (e2, d = "") => {
  const t2 = document.getElementById(e2.id), n2 = e2.onload;
  e2.onload = null;
  const o2 = function(i2) {
    typeof n2 == "function" && n2.bind(this)(i2), e2.removeEventListener("load", o2);
  };
  t2 ? d !== "" && (t2.addEventListener("load", o2), Reflect.get(window, d) && t2.dispatchEvent(new Event("load"))) : (e2.addEventListener("load", o2), document.head.appendChild(e2));
}, b = x((e2, d, t2) => {
  const n2 = document.getElementById(e2);
  n2 && n2.setAttribute(d, t2);
}, 10);
const DefaultBufferLength = 1024;
let nextPropID = 0;
class NodeProp {
  /**
  Create a new node prop type.
  */
  constructor(config2 = {}) {
    this.id = nextPropID++;
    this.perNode = !!config2.perNode;
    this.deserialize = config2.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(match2) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    if (typeof match2 != "function")
      match2 = NodeType.match(match2);
    return (type) => {
      let result = match2(type);
      return result === void 0 ? null : [this, result];
    };
  }
}
NodeProp.closedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
NodeProp.openedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
NodeProp.group = new NodeProp({ deserialize: (str) => str.split(" ") });
NodeProp.isolate = new NodeProp({ deserialize: (value) => {
  if (value && value != "rtl" && value != "ltr" && value != "auto")
    throw new RangeError("Invalid value for isolate: " + value);
  return value || "auto";
} });
NodeProp.contextHash = new NodeProp({ perNode: true });
NodeProp.lookAhead = new NodeProp({ perNode: true });
NodeProp.mounted = new NodeProp({ perNode: true });
class MountedTree {
  constructor(tree, overlay, parser) {
    this.tree = tree;
    this.overlay = overlay;
    this.parser = parser;
  }
  /**
  @internal
  */
  static get(tree) {
    return tree && tree.props && tree.props[NodeProp.mounted.id];
  }
}
const noProps = /* @__PURE__ */ Object.create(null);
class NodeType {
  /**
  @internal
  */
  constructor(name2, props, id, flags = 0) {
    this.name = name2;
    this.props = props;
    this.id = id;
    this.flags = flags;
  }
  /**
  Define a node type.
  */
  static define(spec) {
    let props = spec.props && spec.props.length ? /* @__PURE__ */ Object.create(null) : noProps;
    let flags = (spec.top ? 1 : 0) | (spec.skipped ? 2 : 0) | (spec.error ? 4 : 0) | (spec.name == null ? 8 : 0);
    let type = new NodeType(spec.name || "", props, spec.id, flags);
    if (spec.props)
      for (let src of spec.props) {
        if (!Array.isArray(src))
          src = src(type);
        if (src) {
          if (src[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          props[src[0].id] = src[1];
        }
      }
    return type;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(prop2) {
    return this.props[prop2.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(name2) {
    if (typeof name2 == "string") {
      if (this.name == name2)
        return true;
      let group = this.prop(NodeProp.group);
      return group ? group.indexOf(name2) > -1 : false;
    }
    return this.id == name2;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(map2) {
    let direct = /* @__PURE__ */ Object.create(null);
    for (let prop2 in map2)
      for (let name2 of prop2.split(" "))
        direct[name2] = map2[prop2];
    return (node) => {
      for (let groups = node.prop(NodeProp.group), i2 = -1; i2 < (groups ? groups.length : 0); i2++) {
        let found = direct[i2 < 0 ? node.name : groups[i2]];
        if (found)
          return found;
      }
    };
  }
}
NodeType.none = new NodeType(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const CachedNode = /* @__PURE__ */ new WeakMap(), CachedInnerNode = /* @__PURE__ */ new WeakMap();
var IterMode;
(function(IterMode2) {
  IterMode2[IterMode2["ExcludeBuffers"] = 1] = "ExcludeBuffers";
  IterMode2[IterMode2["IncludeAnonymous"] = 2] = "IncludeAnonymous";
  IterMode2[IterMode2["IgnoreMounts"] = 4] = "IgnoreMounts";
  IterMode2[IterMode2["IgnoreOverlays"] = 8] = "IgnoreOverlays";
})(IterMode || (IterMode = {}));
class Tree {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(type, children, positions, length, props) {
    this.type = type;
    this.children = children;
    this.positions = positions;
    this.length = length;
    this.props = null;
    if (props && props.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [prop2, value] of props)
        this.props[typeof prop2 == "number" ? prop2 : prop2.id] = value;
    }
  }
  /**
  @internal
  */
  toString() {
    let mounted = MountedTree.get(this);
    if (mounted && !mounted.overlay)
      return mounted.tree.toString();
    let children = "";
    for (let ch of this.children) {
      let str = ch.toString();
      if (str) {
        if (children)
          children += ",";
        children += str;
      }
    }
    return !this.type.name ? children : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (children.length ? "(" + children + ")" : "");
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(mode = 0) {
    return new TreeCursor(this.topNode, mode);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(pos, side = 0, mode = 0) {
    let scope = CachedNode.get(this) || this.topNode;
    let cursor = new TreeCursor(scope);
    cursor.moveTo(pos, side);
    CachedNode.set(this, cursor._tree);
    return cursor;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new TreeNode(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(pos, side = 0) {
    let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
    CachedNode.set(this, node);
    return node;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(pos, side = 0) {
    let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
    CachedInnerNode.set(this, node);
    return node;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(pos, side = 0) {
    return stackIterator(this, pos, side);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(spec) {
    let { enter, leave, from = 0, to = this.length } = spec;
    let mode = spec.mode || 0, anon = (mode & IterMode.IncludeAnonymous) > 0;
    for (let c2 = this.cursor(mode | IterMode.IncludeAnonymous); ; ) {
      let entered = false;
      if (c2.from <= to && c2.to >= from && (!anon && c2.type.isAnonymous || enter(c2) !== false)) {
        if (c2.firstChild())
          continue;
        entered = true;
      }
      for (; ; ) {
        if (entered && leave && (anon || !c2.type.isAnonymous))
          leave(c2);
        if (c2.nextSibling())
          break;
        if (!c2.parent())
          return;
        entered = true;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(prop2) {
    return !prop2.perNode ? this.type.prop(prop2) : this.props ? this.props[prop2.id] : void 0;
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let result = [];
    if (this.props)
      for (let id in this.props)
        result.push([+id, this.props[id]]);
    return result;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(config2 = {}) {
    return this.children.length <= 8 ? this : balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new Tree(this.type, children, positions, length, this.propValues), config2.makeTree || ((children, positions, length) => new Tree(NodeType.none, children, positions, length)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(data) {
    return buildTree(data);
  }
}
Tree.empty = new Tree(NodeType.none, [], [], 0);
class FlatBufferCursor {
  constructor(buffer, index) {
    this.buffer = buffer;
    this.index = index;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new FlatBufferCursor(this.buffer, this.index);
  }
}
class TreeBuffer {
  /**
  Create a tree buffer.
  */
  constructor(buffer, length, set2) {
    this.buffer = buffer;
    this.length = length;
    this.set = set2;
  }
  /**
  @internal
  */
  get type() {
    return NodeType.none;
  }
  /**
  @internal
  */
  toString() {
    let result = [];
    for (let index = 0; index < this.buffer.length; ) {
      result.push(this.childString(index));
      index = this.buffer[index + 3];
    }
    return result.join(",");
  }
  /**
  @internal
  */
  childString(index) {
    let id = this.buffer[index], endIndex = this.buffer[index + 3];
    let type = this.set.types[id], result = type.name;
    if (/\W/.test(result) && !type.isError)
      result = JSON.stringify(result);
    index += 4;
    if (endIndex == index)
      return result;
    let children = [];
    while (index < endIndex) {
      children.push(this.childString(index));
      index = this.buffer[index + 3];
    }
    return result + "(" + children.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(startIndex, endIndex, dir, pos, side) {
    let { buffer } = this, pick = -1;
    for (let i2 = startIndex; i2 != endIndex; i2 = buffer[i2 + 3]) {
      if (checkSide(side, pos, buffer[i2 + 1], buffer[i2 + 2])) {
        pick = i2;
        if (dir > 0)
          break;
      }
    }
    return pick;
  }
  /**
  @internal
  */
  slice(startI, endI, from) {
    let b2 = this.buffer;
    let copy2 = new Uint16Array(endI - startI), len = 0;
    for (let i2 = startI, j = 0; i2 < endI; ) {
      copy2[j++] = b2[i2++];
      copy2[j++] = b2[i2++] - from;
      let to = copy2[j++] = b2[i2++] - from;
      copy2[j++] = b2[i2++] - startI;
      len = Math.max(len, to);
    }
    return new TreeBuffer(copy2, len, this.set);
  }
}
function checkSide(side, pos, from, to) {
  switch (side) {
    case -2:
      return from < pos;
    case -1:
      return to >= pos && from < pos;
    case 0:
      return from < pos && to > pos;
    case 1:
      return from <= pos && to > pos;
    case 2:
      return to > pos;
    case 4:
      return true;
  }
}
function resolveNode(node, pos, side, overlays) {
  var _a;
  while (node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)) {
    let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
    if (!parent)
      return node;
    node = parent;
  }
  let mode = overlays ? 0 : IterMode.IgnoreOverlays;
  if (overlays)
    for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) {
      if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode)) === null || _a === void 0 ? void 0 : _a.from) != scan.from)
        node = parent;
    }
  for (; ; ) {
    let inner = node.enter(pos, side, mode);
    if (!inner)
      return node;
    node = inner;
  }
}
class BaseNode {
  cursor(mode = 0) {
    return new TreeCursor(this, mode);
  }
  getChild(type, before = null, after = null) {
    let r2 = getChildren(this, type, before, after);
    return r2.length ? r2[0] : null;
  }
  getChildren(type, before = null, after = null) {
    return getChildren(this, type, before, after);
  }
  resolve(pos, side = 0) {
    return resolveNode(this, pos, side, false);
  }
  resolveInner(pos, side = 0) {
    return resolveNode(this, pos, side, true);
  }
  matchContext(context) {
    return matchNodeContext(this, context);
  }
  enterUnfinishedNodesBefore(pos) {
    let scan = this.childBefore(pos), node = this;
    while (scan) {
      let last = scan.lastChild;
      if (!last || last.to != scan.to)
        break;
      if (last.type.isError && last.from == last.to) {
        node = scan;
        scan = last.prevSibling;
      } else {
        scan = last;
      }
    }
    return node;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class TreeNode extends BaseNode {
  constructor(_tree, from, index, _parent) {
    super();
    this._tree = _tree;
    this.from = from;
    this.index = index;
    this._parent = _parent;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(i2, dir, pos, side, mode = 0) {
    for (let parent = this; ; ) {
      for (let { children, positions } = parent._tree, e2 = dir > 0 ? children.length : -1; i2 != e2; i2 += dir) {
        let next = children[i2], start = positions[i2] + parent.from;
        if (!checkSide(side, pos, start, start + next.length))
          continue;
        if (next instanceof TreeBuffer) {
          if (mode & IterMode.ExcludeBuffers)
            continue;
          let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
          if (index > -1)
            return new BufferNode(new BufferContext(parent, next, i2, start), null, index);
        } else if (mode & IterMode.IncludeAnonymous || (!next.type.isAnonymous || hasChild(next))) {
          let mounted;
          if (!(mode & IterMode.IgnoreMounts) && (mounted = MountedTree.get(next)) && !mounted.overlay)
            return new TreeNode(mounted.tree, start, i2, parent);
          let inner = new TreeNode(next, start, i2, parent);
          return mode & IterMode.IncludeAnonymous || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
        }
      }
      if (mode & IterMode.IncludeAnonymous || !parent.type.isAnonymous)
        return null;
      if (parent.index >= 0)
        i2 = parent.index + dir;
      else
        i2 = dir < 0 ? -1 : parent._parent._tree.children.length;
      parent = parent._parent;
      if (!parent)
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(pos) {
    return this.nextChild(
      0,
      1,
      pos,
      2
      /* Side.After */
    );
  }
  childBefore(pos) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      pos,
      -2
      /* Side.Before */
    );
  }
  enter(pos, side, mode = 0) {
    let mounted;
    if (!(mode & IterMode.IgnoreOverlays) && (mounted = MountedTree.get(this._tree)) && mounted.overlay) {
      let rPos = pos - this.from;
      for (let { from, to } of mounted.overlay) {
        if ((side > 0 ? from <= rPos : from < rPos) && (side < 0 ? to >= rPos : to > rPos))
          return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
      }
    }
    return this.nextChild(0, 1, pos, side, mode);
  }
  nextSignificantParent() {
    let val = this;
    while (val.type.isAnonymous && val._parent)
      val = val._parent;
    return val;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function getChildren(node, type, before, after) {
  let cur = node.cursor(), result = [];
  if (!cur.firstChild())
    return result;
  if (before != null) {
    while (!cur.type.is(before))
      if (!cur.nextSibling())
        return result;
  }
  for (; ; ) {
    if (after != null && cur.type.is(after))
      return result;
    if (cur.type.is(type))
      result.push(cur.node);
    if (!cur.nextSibling())
      return after == null ? result : [];
  }
}
function matchNodeContext(node, context, i2 = context.length - 1) {
  for (let p2 = node.parent; i2 >= 0; p2 = p2.parent) {
    if (!p2)
      return false;
    if (!p2.type.isAnonymous) {
      if (context[i2] && context[i2] != p2.name)
        return false;
      i2--;
    }
  }
  return true;
}
class BufferContext {
  constructor(parent, buffer, index, start) {
    this.parent = parent;
    this.buffer = buffer;
    this.index = index;
    this.start = start;
  }
}
class BufferNode extends BaseNode {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(context, _parent, index) {
    super();
    this.context = context;
    this._parent = _parent;
    this.index = index;
    this.type = context.buffer.set.types[context.buffer.buffer[index]];
  }
  child(dir, pos, side) {
    let { buffer } = this.context;
    let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
    return index < 0 ? null : new BufferNode(this.context, this, index);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(pos) {
    return this.child(
      1,
      pos,
      2
      /* Side.After */
    );
  }
  childBefore(pos) {
    return this.child(
      -1,
      pos,
      -2
      /* Side.Before */
    );
  }
  enter(pos, side, mode = 0) {
    if (mode & IterMode.ExcludeBuffers)
      return null;
    let { buffer } = this.context;
    let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
    return index < 0 ? null : new BufferNode(this.context, this, index);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(dir) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + dir,
      dir,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer } = this.context;
    let after = buffer.buffer[this.index + 3];
    if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
      return new BufferNode(this.context, this._parent, after);
    return this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer } = this.context;
    let parentStart = this._parent ? this._parent.index + 4 : 0;
    if (this.index == parentStart)
      return this.externalSibling(-1);
    return new BufferNode(this.context, this._parent, buffer.findChild(
      parentStart,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let children = [], positions = [];
    let { buffer } = this.context;
    let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
    if (endI > startI) {
      let from = buffer.buffer[this.index + 1];
      children.push(buffer.slice(startI, endI, from));
      positions.push(0);
    }
    return new Tree(this.type, children, positions, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function iterStack(heads) {
  if (!heads.length)
    return null;
  let pick = 0, picked = heads[0];
  for (let i2 = 1; i2 < heads.length; i2++) {
    let node = heads[i2];
    if (node.from > picked.from || node.to < picked.to) {
      picked = node;
      pick = i2;
    }
  }
  let next = picked instanceof TreeNode && picked.index < 0 ? null : picked.parent;
  let newHeads = heads.slice();
  if (next)
    newHeads[pick] = next;
  else
    newHeads.splice(pick, 1);
  return new StackIterator(newHeads, picked);
}
class StackIterator {
  constructor(heads, node) {
    this.heads = heads;
    this.node = node;
  }
  get next() {
    return iterStack(this.heads);
  }
}
function stackIterator(tree, pos, side) {
  let inner = tree.resolveInner(pos, side), layers = null;
  for (let scan = inner instanceof TreeNode ? inner : inner.context.parent; scan; scan = scan.parent) {
    if (scan.index < 0) {
      let parent = scan.parent;
      (layers || (layers = [inner])).push(parent.resolve(pos, side));
      scan = parent;
    } else {
      let mount = MountedTree.get(scan.tree);
      if (mount && mount.overlay && mount.overlay[0].from <= pos && mount.overlay[mount.overlay.length - 1].to >= pos) {
        let root = new TreeNode(mount.tree, mount.overlay[0].from + scan.from, -1, scan);
        (layers || (layers = [inner])).push(resolveNode(root, pos, side, false));
      }
    }
  }
  return layers ? iterStack(layers) : inner;
}
class TreeCursor {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(node, mode = 0) {
    this.mode = mode;
    this.buffer = null;
    this.stack = [];
    this.index = 0;
    this.bufferNode = null;
    if (node instanceof TreeNode) {
      this.yieldNode(node);
    } else {
      this._tree = node.context.parent;
      this.buffer = node.context;
      for (let n2 = node._parent; n2; n2 = n2._parent)
        this.stack.unshift(n2.index);
      this.bufferNode = node;
      this.yieldBuf(node.index);
    }
  }
  yieldNode(node) {
    if (!node)
      return false;
    this._tree = node;
    this.type = node.type;
    this.from = node.from;
    this.to = node.to;
    return true;
  }
  yieldBuf(index, type) {
    this.index = index;
    let { start, buffer } = this.buffer;
    this.type = type || buffer.set.types[buffer.buffer[index]];
    this.from = start + buffer.buffer[index + 1];
    this.to = start + buffer.buffer[index + 2];
    return true;
  }
  /**
  @internal
  */
  yield(node) {
    if (!node)
      return false;
    if (node instanceof TreeNode) {
      this.buffer = null;
      return this.yieldNode(node);
    }
    this.buffer = node.context;
    return this.yieldBuf(node.index, node.type);
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(dir, pos, side) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(dir < 0 ? this._tree._tree.children.length - 1 : 0, dir, pos, side, this.mode));
    let { buffer } = this.buffer;
    let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
    if (index < 0)
      return false;
    this.stack.push(this.index);
    return this.yieldBuf(index);
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(pos) {
    return this.enterChild(
      1,
      pos,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(pos) {
    return this.enterChild(
      -1,
      pos,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(pos, side, mode = this.mode) {
    if (!this.buffer)
      return this.yield(this._tree.enter(pos, side, mode));
    return mode & IterMode.ExcludeBuffers ? false : this.enterChild(1, pos, side);
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & IterMode.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let parent = this.mode & IterMode.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    this.buffer = null;
    return this.yieldNode(parent);
  }
  /**
  @internal
  */
  sibling(dir) {
    if (!this.buffer)
      return !this._tree._parent ? false : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4, this.mode));
    let { buffer } = this.buffer, d = this.stack.length - 1;
    if (dir < 0) {
      let parentStart = d < 0 ? 0 : this.stack[d] + 4;
      if (this.index != parentStart)
        return this.yieldBuf(buffer.findChild(
          parentStart,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let after = buffer.buffer[this.index + 3];
      if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
        return this.yieldBuf(after);
    }
    return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4, this.mode)) : false;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(dir) {
    let index, parent, { buffer } = this;
    if (buffer) {
      if (dir > 0) {
        if (this.index < buffer.buffer.buffer.length)
          return false;
      } else {
        for (let i2 = 0; i2 < this.index; i2++)
          if (buffer.buffer.buffer[i2 + 3] < this.index)
            return false;
      }
      ({ index, parent } = buffer);
    } else {
      ({ index, _parent: parent } = this._tree);
    }
    for (; parent; { index, _parent: parent } = parent) {
      if (index > -1)
        for (let i2 = index + dir, e2 = dir < 0 ? -1 : parent._tree.children.length; i2 != e2; i2 += dir) {
          let child = parent._tree.children[i2];
          if (this.mode & IterMode.IncludeAnonymous || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child))
            return false;
        }
    }
    return true;
  }
  move(dir, enter) {
    if (enter && this.enterChild(
      dir,
      0,
      4
      /* Side.DontCare */
    ))
      return true;
    for (; ; ) {
      if (this.sibling(dir))
        return true;
      if (this.atLastNode(dir) || !this.parent())
        return false;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(enter = true) {
    return this.move(1, enter);
  }
  /**
  Move to the next node in a last-to-first pre-order traveral. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(enter = true) {
    return this.move(-1, enter);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(pos, side = 0) {
    while (this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos))
      if (!this.parent())
        break;
    while (this.enterChild(1, pos, side)) {
    }
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let cache = this.bufferNode, result = null, depth = 0;
    if (cache && cache.context == this.buffer) {
      scan:
        for (let index = this.index, d = this.stack.length; d >= 0; ) {
          for (let c2 = cache; c2; c2 = c2._parent)
            if (c2.index == index) {
              if (index == this.index)
                return c2;
              result = c2;
              depth = d + 1;
              break scan;
            }
          index = this.stack[--d];
        }
    }
    for (let i2 = depth; i2 < this.stack.length; i2++)
      result = new BufferNode(this.buffer, result, this.stack[i2]);
    return this.bufferNode = new BufferNode(this.buffer, result, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(enter, leave) {
    for (let depth = 0; ; ) {
      let mustLeave = false;
      if (this.type.isAnonymous || enter(this) !== false) {
        if (this.firstChild()) {
          depth++;
          continue;
        }
        if (!this.type.isAnonymous)
          mustLeave = true;
      }
      for (; ; ) {
        if (mustLeave && leave)
          leave(this);
        mustLeave = this.type.isAnonymous;
        if (this.nextSibling())
          break;
        if (!depth)
          return;
        this.parent();
        depth--;
        mustLeave = true;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(context) {
    if (!this.buffer)
      return matchNodeContext(this.node, context);
    let { buffer } = this.buffer, { types } = buffer.set;
    for (let i2 = context.length - 1, d = this.stack.length - 1; i2 >= 0; d--) {
      if (d < 0)
        return matchNodeContext(this.node, context, i2);
      let type = types[buffer.buffer[this.stack[d]]];
      if (!type.isAnonymous) {
        if (context[i2] && context[i2] != type.name)
          return false;
        i2--;
      }
    }
    return true;
  }
}
function hasChild(tree) {
  return tree.children.some((ch) => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
}
function buildTree(data) {
  var _a;
  let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
  let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
  let types = nodeSet.types;
  let contextHash = 0, lookAhead = 0;
  function takeNode(parentStart, minPos, children2, positions2, inRepeat, depth) {
    let { id, start, end, size } = cursor;
    let lookAheadAtStart = lookAhead;
    while (size < 0) {
      cursor.next();
      if (size == -1) {
        let node2 = reused[id];
        children2.push(node2);
        positions2.push(start - parentStart);
        return;
      } else if (size == -3) {
        contextHash = id;
        return;
      } else if (size == -4) {
        lookAhead = id;
        return;
      } else {
        throw new RangeError(`Unrecognized record size: ${size}`);
      }
    }
    let type = types[id], node, buffer2;
    let startPos = start - parentStart;
    if (end - start <= maxBufferLength && (buffer2 = findBufferSize(cursor.pos - minPos, inRepeat))) {
      let data2 = new Uint16Array(buffer2.size - buffer2.skip);
      let endPos = cursor.pos - buffer2.size, index = data2.length;
      while (cursor.pos > endPos)
        index = copyToBuffer(buffer2.start, data2, index);
      node = new TreeBuffer(data2, end - buffer2.start, nodeSet);
      startPos = buffer2.start - parentStart;
    } else {
      let endPos = cursor.pos - size;
      cursor.next();
      let localChildren = [], localPositions = [];
      let localInRepeat = id >= minRepeatType ? id : -1;
      let lastGroup = 0, lastEnd = end;
      while (cursor.pos > endPos) {
        if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
          if (cursor.end <= lastEnd - maxBufferLength) {
            makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
            lastGroup = localChildren.length;
            lastEnd = cursor.end;
          }
          cursor.next();
        } else if (depth > 2500) {
          takeFlatNode(start, endPos, localChildren, localPositions);
        } else {
          takeNode(start, endPos, localChildren, localPositions, localInRepeat, depth + 1);
        }
      }
      if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length)
        makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
      localChildren.reverse();
      localPositions.reverse();
      if (localInRepeat > -1 && lastGroup > 0) {
        let make = makeBalanced(type);
        node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
      } else {
        node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
      }
    }
    children2.push(node);
    positions2.push(startPos);
  }
  function takeFlatNode(parentStart, minPos, children2, positions2) {
    let nodes = [];
    let nodeCount = 0, stopAt = -1;
    while (cursor.pos > minPos) {
      let { id, start, end, size } = cursor;
      if (size > 4) {
        cursor.next();
      } else if (stopAt > -1 && start < stopAt) {
        break;
      } else {
        if (stopAt < 0)
          stopAt = end - maxBufferLength;
        nodes.push(id, start, end);
        nodeCount++;
        cursor.next();
      }
    }
    if (nodeCount) {
      let buffer2 = new Uint16Array(nodeCount * 4);
      let start = nodes[nodes.length - 2];
      for (let i2 = nodes.length - 3, j = 0; i2 >= 0; i2 -= 3) {
        buffer2[j++] = nodes[i2];
        buffer2[j++] = nodes[i2 + 1] - start;
        buffer2[j++] = nodes[i2 + 2] - start;
        buffer2[j++] = j;
      }
      children2.push(new TreeBuffer(buffer2, nodes[2] - start, nodeSet));
      positions2.push(start - parentStart);
    }
  }
  function makeBalanced(type) {
    return (children2, positions2, length2) => {
      let lookAhead2 = 0, lastI = children2.length - 1, last, lookAheadProp;
      if (lastI >= 0 && (last = children2[lastI]) instanceof Tree) {
        if (!lastI && last.type == type && last.length == length2)
          return last;
        if (lookAheadProp = last.prop(NodeProp.lookAhead))
          lookAhead2 = positions2[lastI] + last.length + lookAheadProp;
      }
      return makeTree(type, children2, positions2, length2, lookAhead2);
    };
  }
  function makeRepeatLeaf(children2, positions2, base2, i2, from, to, type, lookAhead2) {
    let localChildren = [], localPositions = [];
    while (children2.length > i2) {
      localChildren.push(children2.pop());
      localPositions.push(positions2.pop() + base2 - from);
    }
    children2.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead2 - to));
    positions2.push(from - base2);
  }
  function makeTree(type, children2, positions2, length2, lookAhead2 = 0, props) {
    if (contextHash) {
      let pair = [NodeProp.contextHash, contextHash];
      props = props ? [pair].concat(props) : [pair];
    }
    if (lookAhead2 > 25) {
      let pair = [NodeProp.lookAhead, lookAhead2];
      props = props ? [pair].concat(props) : [pair];
    }
    return new Tree(type, children2, positions2, length2, props);
  }
  function findBufferSize(maxSize, inRepeat) {
    let fork2 = cursor.fork();
    let size = 0, start = 0, skip = 0, minStart = fork2.end - maxBufferLength;
    let result = { size: 0, start: 0, skip: 0 };
    scan:
      for (let minPos = fork2.pos - maxSize; fork2.pos > minPos; ) {
        let nodeSize2 = fork2.size;
        if (fork2.id == inRepeat && nodeSize2 >= 0) {
          result.size = size;
          result.start = start;
          result.skip = skip;
          skip += 4;
          size += 4;
          fork2.next();
          continue;
        }
        let startPos = fork2.pos - nodeSize2;
        if (nodeSize2 < 0 || startPos < minPos || fork2.start < minStart)
          break;
        let localSkipped = fork2.id >= minRepeatType ? 4 : 0;
        let nodeStart = fork2.start;
        fork2.next();
        while (fork2.pos > startPos) {
          if (fork2.size < 0) {
            if (fork2.size == -3)
              localSkipped += 4;
            else
              break scan;
          } else if (fork2.id >= minRepeatType) {
            localSkipped += 4;
          }
          fork2.next();
        }
        start = nodeStart;
        size += nodeSize2;
        skip += localSkipped;
      }
    if (inRepeat < 0 || size == maxSize) {
      result.size = size;
      result.start = start;
      result.skip = skip;
    }
    return result.size > 4 ? result : void 0;
  }
  function copyToBuffer(bufferStart, buffer2, index) {
    let { id, start, end, size } = cursor;
    cursor.next();
    if (size >= 0 && id < minRepeatType) {
      let startIndex = index;
      if (size > 4) {
        let endPos = cursor.pos - (size - 4);
        while (cursor.pos > endPos)
          index = copyToBuffer(bufferStart, buffer2, index);
      }
      buffer2[--index] = startIndex;
      buffer2[--index] = end - bufferStart;
      buffer2[--index] = start - bufferStart;
      buffer2[--index] = id;
    } else if (size == -3) {
      contextHash = id;
    } else if (size == -4) {
      lookAhead = id;
    }
    return index;
  }
  let children = [], positions = [];
  while (cursor.pos > 0)
    takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1, 0);
  let length = (_a = data.length) !== null && _a !== void 0 ? _a : children.length ? positions[0] + children[0].length : 0;
  return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
}
const nodeSizeCache = /* @__PURE__ */ new WeakMap();
function nodeSize(balanceType, node) {
  if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)
    return 1;
  let size = nodeSizeCache.get(node);
  if (size == null) {
    size = 1;
    for (let child of node.children) {
      if (child.type != balanceType || !(child instanceof Tree)) {
        size = 1;
        break;
      }
      size += nodeSize(balanceType, child);
    }
    nodeSizeCache.set(node, size);
  }
  return size;
}
function balanceRange(balanceType, children, positions, from, to, start, length, mkTop, mkTree) {
  let total = 0;
  for (let i2 = from; i2 < to; i2++)
    total += nodeSize(balanceType, children[i2]);
  let maxChild = Math.ceil(
    total * 1.5 / 8
    /* Balance.BranchFactor */
  );
  let localChildren = [], localPositions = [];
  function divide2(children2, positions2, from2, to2, offset) {
    for (let i2 = from2; i2 < to2; ) {
      let groupFrom = i2, groupStart = positions2[i2], groupSize = nodeSize(balanceType, children2[i2]);
      i2++;
      for (; i2 < to2; i2++) {
        let nextSize = nodeSize(balanceType, children2[i2]);
        if (groupSize + nextSize >= maxChild)
          break;
        groupSize += nextSize;
      }
      if (i2 == groupFrom + 1) {
        if (groupSize > maxChild) {
          let only = children2[groupFrom];
          divide2(only.children, only.positions, 0, only.children.length, positions2[groupFrom] + offset);
          continue;
        }
        localChildren.push(children2[groupFrom]);
      } else {
        let length2 = positions2[i2 - 1] + children2[i2 - 1].length - groupStart;
        localChildren.push(balanceRange(balanceType, children2, positions2, groupFrom, i2, groupStart, length2, null, mkTree));
      }
      localPositions.push(groupStart + offset - start);
    }
  }
  divide2(children, positions, from, to, 0);
  return (mkTop || mkTree)(localChildren, localPositions, length);
}
new NodeProp({ perNode: true });
let nextTagID = 0;
class Tag {
  /**
  @internal
  */
  constructor(set2, base2, modified) {
    this.set = set2;
    this.base = base2;
    this.modified = modified;
    this.id = nextTagID++;
  }
  /**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */
  static define(parent) {
    if (parent === null || parent === void 0 ? void 0 : parent.base)
      throw new Error("Can not derive from a modified tag");
    let tag = new Tag([], null, []);
    tag.set.push(tag);
    if (parent)
      for (let t2 of parent.set)
        tag.set.push(t2);
    return tag;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier() {
    let mod = new Modifier();
    return (tag) => {
      if (tag.modified.indexOf(mod) > -1)
        return tag;
      return Modifier.get(tag.base || tag, tag.modified.concat(mod).sort((a2, b2) => a2.id - b2.id));
    };
  }
}
let nextModifierID = 0;
class Modifier {
  constructor() {
    this.instances = [];
    this.id = nextModifierID++;
  }
  static get(base2, mods) {
    if (!mods.length)
      return base2;
    let exists = mods[0].instances.find((t2) => t2.base == base2 && sameArray(mods, t2.modified));
    if (exists)
      return exists;
    let set2 = [], tag = new Tag(set2, base2, mods);
    for (let m2 of mods)
      m2.instances.push(tag);
    let configs = powerSet(mods);
    for (let parent of base2.set)
      if (!parent.modified.length)
        for (let config2 of configs)
          set2.push(Modifier.get(parent, config2));
    return tag;
  }
}
function sameArray(a2, b2) {
  return a2.length == b2.length && a2.every((x2, i2) => x2 == b2[i2]);
}
function powerSet(array) {
  let sets = [[]];
  for (let i2 = 0; i2 < array.length; i2++) {
    for (let j = 0, e2 = sets.length; j < e2; j++) {
      sets.push(sets[j].concat(array[i2]));
    }
  }
  return sets.sort((a2, b2) => b2.length - a2.length);
}
new NodeProp();
function tagHighlighter(tags2, options) {
  let map2 = /* @__PURE__ */ Object.create(null);
  for (let style2 of tags2) {
    if (!Array.isArray(style2.tag))
      map2[style2.tag.id] = style2.class;
    else
      for (let tag of style2.tag)
        map2[tag.id] = style2.class;
  }
  let { scope, all = null } = options || {};
  return {
    style: (tags3) => {
      let cls = all;
      for (let tag of tags3) {
        for (let sub2 of tag.set) {
          let tagClass = map2[sub2.id];
          if (tagClass) {
            cls = cls ? cls + " " + tagClass : tagClass;
            break;
          }
        }
      }
      return cls;
    },
    scope
  };
}
const t$1 = Tag.define;
const comment$1 = t$1(), name = t$1(), typeName = t$1(name), propertyName = t$1(name), literal = t$1(), string = t$1(literal), number = t$1(literal), content = t$1(), heading$1 = t$1(content), keyword = t$1(), operator = t$1(), punctuation = t$1(), bracket = t$1(punctuation), meta = t$1();
const tags = {
  /**
  A comment.
  */
  comment: comment$1,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: t$1(comment$1),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: t$1(comment$1),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: t$1(comment$1),
  /**
  Any kind of identifier.
  */
  name,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: t$1(name),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: t$1(typeName),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: t$1(propertyName),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: t$1(name),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: t$1(name),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: t$1(name),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: t$1(name),
  /**
  A literal value.
  */
  literal,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: t$1(string),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: t$1(string),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: t$1(string),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: t$1(number),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: t$1(number),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: t$1(literal),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: t$1(literal),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: t$1(literal),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: t$1(literal),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: t$1(literal),
  /**
  A language keyword.
  */
  keyword,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: t$1(keyword),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: t$1(keyword),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: t$1(keyword),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: t$1(keyword),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: t$1(keyword),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: t$1(keyword),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: t$1(keyword),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: t$1(keyword),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: t$1(keyword),
  /**
  An operator.
  */
  operator,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: t$1(operator),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: t$1(operator),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: t$1(operator),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: t$1(operator),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: t$1(operator),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: t$1(operator),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: t$1(operator),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: t$1(operator),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: t$1(operator),
  /**
  Program or markup punctuation.
  */
  punctuation,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: t$1(punctuation),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: t$1(bracket),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: t$1(bracket),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: t$1(bracket),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: t$1(bracket),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: heading$1,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: t$1(heading$1),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: t$1(heading$1),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: t$1(heading$1),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: t$1(heading$1),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: t$1(heading$1),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: t$1(heading$1),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: t$1(content),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: t$1(content),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: t$1(content),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: t$1(content),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: t$1(content),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: t$1(content),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: t$1(content),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: t$1(content),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: t$1(),
  /**
  Deleted text.
  */
  deleted: t$1(),
  /**
  Changed text.
  */
  changed: t$1(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: t$1(),
  /**
  Metadata or meta-instruction.
  */
  meta,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: t$1(meta),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: t$1(meta),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: t$1(meta),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Tag.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Tag.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Tag.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Tag.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Tag.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Tag.defineModifier()
};
tagHighlighter([
  { tag: tags.link, class: "tok-link" },
  { tag: tags.heading, class: "tok-heading" },
  { tag: tags.emphasis, class: "tok-emphasis" },
  { tag: tags.strong, class: "tok-strong" },
  { tag: tags.keyword, class: "tok-keyword" },
  { tag: tags.atom, class: "tok-atom" },
  { tag: tags.bool, class: "tok-bool" },
  { tag: tags.url, class: "tok-url" },
  { tag: tags.labelName, class: "tok-labelName" },
  { tag: tags.inserted, class: "tok-inserted" },
  { tag: tags.deleted, class: "tok-deleted" },
  { tag: tags.literal, class: "tok-literal" },
  { tag: tags.string, class: "tok-string" },
  { tag: tags.number, class: "tok-number" },
  { tag: [tags.regexp, tags.escape, tags.special(tags.string)], class: "tok-string2" },
  { tag: tags.variableName, class: "tok-variableName" },
  { tag: tags.local(tags.variableName), class: "tok-variableName tok-local" },
  { tag: tags.definition(tags.variableName), class: "tok-variableName tok-definition" },
  { tag: tags.special(tags.variableName), class: "tok-variableName2" },
  { tag: tags.definition(tags.propertyName), class: "tok-propertyName tok-definition" },
  { tag: tags.typeName, class: "tok-typeName" },
  { tag: tags.namespace, class: "tok-namespace" },
  { tag: tags.className, class: "tok-className" },
  { tag: tags.macroName, class: "tok-macroName" },
  { tag: tags.propertyName, class: "tok-propertyName" },
  { tag: tags.operator, class: "tok-operator" },
  { tag: tags.comment, class: "tok-comment" },
  { tag: tags.meta, class: "tok-meta" },
  { tag: tags.invalid, class: "tok-invalid" },
  { tag: tags.punctuation, class: "tok-punctuation" }
]);
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode2(selector) {
  return selector && selector.nodeType === 1;
};
var isSvg = function isSvg2(image3) {
  var source = image3.currentSrc || image3.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }
    if (isNodeList(selector)) {
      return [].slice.call(selector).filter(isSupported);
    }
    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }
    if (typeof selector === "string") {
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top2 = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top2 + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom = function mediumZoom2(selector) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop() {
    }
    fn(noop, noop);
  };
  var _handleClick = function _handleClick2(event) {
    var target2 = event.target;
    if (target2 === overlay) {
      close();
      return;
    }
    if (images.indexOf(target2) === -1) {
      return;
    }
    toggle({ target: target2 });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions = _extends({}, zoomOptions, newOptions);
    images.forEach(function(image3) {
      image3.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom2(_extends({}, zoomOptions, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image3) {
        image3.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image3) {
      image3.classList.remove("medium-zoom-image");
      image3.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image3) {
      return imagesToDetach.indexOf(image3) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image3) {
      image3.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image3) {
      image3.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target2 = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          container = _extends({}, container, zoomOptions.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top2 = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top2 + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target2 && images.indexOf(target2) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active.zoomed) {
        resolve(zoom);
        return;
      }
      if (target2) {
        active.original = target2;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target2 = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target: target2 });
  };
  var getOptions = function getOptions2() {
    return zoomOptions;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  if (Object.prototype.toString.call(selector) === "[object Object]") {
    zoomOptions = selector;
  } else if (selector || typeof selector === "string") {
    attach(selector);
  }
  zoomOptions = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);
  var overlay = createOverlay(zoomOptions.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css2;
  } else {
    style2.appendChild(document.createTextNode(css2));
  }
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
const Te = mediumZoom;
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i2 = 0; i2 < selection.rangeCount; i2++) {
    ranges.push(selection.getRangeAt(i2));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range2) {
        selection.addRange(range2);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format$1(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy$1(text3, options) {
  var debug, message, reselectPrevious, range2, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range2 = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text3;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format3, text3);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text3);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range2.selectNodeContents(mark);
    selection.addRange(range2);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text3);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format$1("message" in options ? options.message : defaultMessage);
      window.prompt(message, text3);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range2);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy$1;
const _e = /* @__PURE__ */ getDefaultExportFromCjs(copyToClipboard);
var utils$1 = {};
const Aacute = "Á";
const aacute = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const Acy = "А";
const acy = "а";
const AElig = "Æ";
const aelig = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave = "À";
const agrave = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp = "&";
const AMP = "&";
const andand = "⩕";
const And = "⩓";
const and = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring = "Å";
const aring = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block$1 = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil = "Ç";
const ccedil = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy = "©";
const COPY = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute = "É";
const eacute = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc = "Ê";
const ecirc = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave = "È";
const egrave = "è";
const egs = "⪖";
const egsdot = "⪘";
const el = "⪙";
const Element = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12 = "½";
const frac13 = "⅓";
const frac14 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt = ">";
const GT = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute = "Í";
const iacute = "í";
const ic = "⁣";
const Icirc = "Î";
const icirc = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave = "Ì";
const igrave = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image$1 = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it$1 = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml = "Ï";
const iuml = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le$1 = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt$1 = "<";
const LT = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map$1 = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde = "Ñ";
const ntilde = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute = "Ó";
const oacute = "ó";
const oast = "⊛";
const Ocirc = "Ô";
const ocirc = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve = "Ò";
const ograve = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf = "ª";
const ordm = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash = "Ø";
const oslash = "ø";
const osol = "⊘";
const Otilde = "Õ";
const otilde = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml = "Ö";
const ouml = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot = '"';
const QUOT = '"';
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range = "⦥";
const rangle = "⟩";
const raquo = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re$1 = "ℜ";
const rect = "▭";
const reg = "®";
const REG = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum = "∑";
const Sum = "∑";
const sung = "♪";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig = "ß";
const Tab = "	";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN = "Þ";
const thorn = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute = "Ú";
const uacute = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc = "Û";
const ucirc = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave = "Ù";
const ugrave = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml = "Ü";
const uuml = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute = "Ý";
const yacute = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
const require$$0 = {
  Aacute,
  aacute,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc,
  acirc,
  acute,
  Acy,
  acy,
  AElig,
  aelig,
  af,
  Afr,
  afr,
  Agrave,
  agrave,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp,
  AMP,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos,
  ApplyFunction,
  approx,
  approxeq,
  Aring,
  aring,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde,
  atilde,
  Auml,
  auml,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block: block$1,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil,
  ccedil,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil,
  Cedilla,
  cemptyv,
  cent,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy,
  COPY,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute,
  eacute,
  easter,
  Ecaron,
  ecaron,
  Ecirc,
  ecirc,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave,
  egrave,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH,
  eth,
  Euml,
  euml,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12,
  frac13,
  frac14,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt,
  GT,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute,
  iacute,
  ic,
  Icirc,
  icirc,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl,
  iff,
  ifr,
  Ifr,
  Igrave,
  igrave,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image: image$1,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "∈",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it: it$1,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml,
  iuml,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le: le$1,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$1,
  LT,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr,
  male,
  malt,
  maltese,
  "Map": "⤅",
  map: map$1,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro,
  midast,
  midcir,
  mid,
  middot,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde,
  ntilde,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute,
  oacute,
  oast,
  Ocirc,
  ocirc,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve,
  ograve,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf,
  ordm,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash,
  oslash,
  osol,
  Otilde,
  otilde,
  otimesas,
  Otimes,
  otimes,
  Ouml,
  ouml,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot,
  QUOT,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re: Re$1,
  rect,
  reg,
  REG,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1,
  sup2,
  sup3,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN,
  thorn,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute,
  uacute,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc,
  ucirc,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave,
  ugrave,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml,
  uuml,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute,
  yacute,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
var entities$1 = require$$0;
var regex$4 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var mdurl$1 = {};
var encodeCache = {};
function getEncodeCache(exclude) {
  var i2, ch, cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (i2 = 0; i2 < 128; i2++) {
    ch = String.fromCharCode(i2);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache.push(ch);
    } else {
      cache.push("%" + ("0" + i2.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i2 = 0; i2 < exclude.length; i2++) {
    cache[exclude.charCodeAt(i2)] = exclude[i2];
  }
  return cache;
}
function encode$1(string2, exclude, keepEscaped) {
  var i2, l2, code3, nextCode, cache, result = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode$1.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache = getEncodeCache(exclude);
  for (i2 = 0, l2 = string2.length; i2 < l2; i2++) {
    code3 = string2.charCodeAt(i2);
    if (keepEscaped && code3 === 37 && i2 + 2 < l2) {
      if (/^[0-9a-f]{2}$/i.test(string2.slice(i2 + 1, i2 + 3))) {
        result += string2.slice(i2, i2 + 3);
        i2 += 2;
        continue;
      }
    }
    if (code3 < 128) {
      result += cache[code3];
      continue;
    }
    if (code3 >= 55296 && code3 <= 57343) {
      if (code3 >= 55296 && code3 <= 56319 && i2 + 1 < l2) {
        nextCode = string2.charCodeAt(i2 + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string2[i2] + string2[i2 + 1]);
          i2++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string2[i2]);
  }
  return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
var encode_1 = encode$1;
var decodeCache = {};
function getDecodeCache(exclude) {
  var i2, ch, cache = decodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = decodeCache[exclude] = [];
  for (i2 = 0; i2 < 128; i2++) {
    ch = String.fromCharCode(i2);
    cache.push(ch);
  }
  for (i2 = 0; i2 < exclude.length; i2++) {
    ch = exclude.charCodeAt(i2);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode$1(string2, exclude) {
  var cache;
  if (typeof exclude !== "string") {
    exclude = decode$1.defaultChars;
  }
  cache = getDecodeCache(exclude);
  return string2.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i2, l2, b1, b2, b3, b4, chr, result = "";
    for (i2 = 0, l2 = seq.length; i2 < l2; i2 += 3) {
      b1 = parseInt(seq.slice(i2 + 1, i2 + 3), 16);
      if (b1 < 128) {
        result += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i2 + 3 < l2) {
        b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        if ((b2 & 192) === 128) {
          chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result += "��";
          } else {
            result += String.fromCharCode(chr);
          }
          i2 += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i2 + 6 < l2) {
        b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result += "���";
          } else {
            result += String.fromCharCode(chr);
          }
          i2 += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i2 + 9 < l2) {
        b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        b4 = parseInt(seq.slice(i2 + 10, i2 + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result += "����";
          } else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i2 += 9;
          continue;
        }
      }
      result += "�";
    }
    return result;
  });
}
decode$1.defaultChars = ";/?:@&=+$,#";
decode$1.componentChars = "";
var decode_1 = decode$1;
var format = function format2(url) {
  var result = "";
  result += url.protocol || "";
  result += url.slashes ? "//" : "";
  result += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) {
    result += "[" + url.hostname + "]";
  } else {
    result += url.hostname || "";
  }
  result += url.port ? ":" + url.port : "";
  result += url.pathname || "";
  result += url.search || "";
  result += url.hash || "";
  return result;
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
  "javascript": true,
  "javascript:": true
}, slashedProtocol = {
  "http": true,
  "https": true,
  "ftp": true,
  "gopher": true,
  "file": true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) {
    return url;
  }
  var u2 = new Url();
  u2.parse(url, slashesDenoteHost);
  return u2;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  var i2, l2, lowerProto, hec, slashes, rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i2 = 0; i2 < hostEndingChars.length; i2++) {
      hec = rest.indexOf(hostEndingChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (i2 = 0; i2 < nonHostChars.length; i2++) {
      hec = rest.indexOf(nonHostChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i2 = 0, l2 = hostparts.length; i2 < l2; i2++) {
        var part2 = hostparts[i2];
        if (!part2) {
          continue;
        }
        if (!part2.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k2 = part2.length; j < k2; j++) {
            if (part2.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part2[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i2);
            var notHost = hostparts.slice(i2 + 1);
            var bit = part2.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
var parse = urlParse;
mdurl$1.encode = encode_1;
mdurl$1.decode = decode_1;
mdurl$1.format = format;
mdurl$1.parse = parse;
var uc_micro = {};
var regex$3;
var hasRequiredRegex$3;
function requireRegex$3() {
  if (hasRequiredRegex$3)
    return regex$3;
  hasRequiredRegex$3 = 1;
  regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  return regex$3;
}
var regex$2;
var hasRequiredRegex$2;
function requireRegex$2() {
  if (hasRequiredRegex$2)
    return regex$2;
  hasRequiredRegex$2 = 1;
  regex$2 = /[\0-\x1F\x7F-\x9F]/;
  return regex$2;
}
var regex$1;
var hasRequiredRegex$1;
function requireRegex$1() {
  if (hasRequiredRegex$1)
    return regex$1;
  hasRequiredRegex$1 = 1;
  regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  return regex$1;
}
var regex;
var hasRequiredRegex;
function requireRegex() {
  if (hasRequiredRegex)
    return regex;
  hasRequiredRegex = 1;
  regex = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  return regex;
}
var hasRequiredUc_micro;
function requireUc_micro() {
  if (hasRequiredUc_micro)
    return uc_micro;
  hasRequiredUc_micro = 1;
  uc_micro.Any = requireRegex$3();
  uc_micro.Cc = requireRegex$2();
  uc_micro.Cf = requireRegex$1();
  uc_micro.P = regex$4;
  uc_micro.Z = requireRegex();
  return uc_micro;
}
(function(exports) {
  function _class2(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString2(obj) {
    return _class2(obj) === "[object String]";
  }
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function has2(object, key) {
    return _hasOwnProperty.call(object, key);
  }
  function assign2(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  function arrayReplaceAt2(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  }
  function isValidEntityCode2(c2) {
    if (c2 >= 55296 && c2 <= 57343) {
      return false;
    }
    if (c2 >= 64976 && c2 <= 65007) {
      return false;
    }
    if ((c2 & 65535) === 65535 || (c2 & 65535) === 65534) {
      return false;
    }
    if (c2 >= 0 && c2 <= 8) {
      return false;
    }
    if (c2 === 11) {
      return false;
    }
    if (c2 >= 14 && c2 <= 31) {
      return false;
    }
    if (c2 >= 127 && c2 <= 159) {
      return false;
    }
    if (c2 > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint2(c2) {
    if (c2 > 65535) {
      c2 -= 65536;
      var surrogate1 = 55296 + (c2 >> 10), surrogate2 = 56320 + (c2 & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c2);
  }
  var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
  var entities2 = entities$1;
  function replaceEntityPattern(match2, name2) {
    var code3;
    if (has2(entities2, name2)) {
      return entities2[name2];
    }
    if (name2.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name2)) {
      code3 = name2[1].toLowerCase() === "x" ? parseInt(name2.slice(2), 16) : parseInt(name2.slice(1), 10);
      if (isValidEntityCode2(code3)) {
        return fromCodePoint2(code3);
      }
    }
    return match2;
  }
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function unescapeAll2(str) {
    if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_ALL_RE, function(match2, escaped, entity3) {
      if (escaped) {
        return escaped;
      }
      return replaceEntityPattern(match2, entity3);
    });
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }
  function escapeHtml2(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
  function escapeRE2(str) {
    return str.replace(REGEXP_ESCAPE_RE, "\\$&");
  }
  function isSpace2(code3) {
    switch (code3) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function isWhiteSpace2(code3) {
    if (code3 >= 8192 && code3 <= 8202) {
      return true;
    }
    switch (code3) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  var UNICODE_PUNCT_RE = regex$4;
  function isPunctChar2(ch) {
    return UNICODE_PUNCT_RE.test(ch);
  }
  function isMdAsciiPunct2(ch) {
    switch (ch) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function normalizeReference2(str) {
    str = str.trim().replace(/\s+/g, " ");
    if ("ẞ".toLowerCase() === "Ṿ") {
      str = str.replace(/ẞ/g, "ß");
    }
    return str.toLowerCase().toUpperCase();
  }
  exports.lib = {};
  exports.lib.mdurl = mdurl$1;
  exports.lib.ucmicro = requireUc_micro();
  exports.assign = assign2;
  exports.isString = isString2;
  exports.has = has2;
  exports.unescapeMd = unescapeMd;
  exports.unescapeAll = unescapeAll2;
  exports.isValidEntityCode = isValidEntityCode2;
  exports.fromCodePoint = fromCodePoint2;
  exports.escapeHtml = escapeHtml2;
  exports.arrayReplaceAt = arrayReplaceAt2;
  exports.isSpace = isSpace2;
  exports.isWhiteSpace = isWhiteSpace2;
  exports.isMdAsciiPunct = isMdAsciiPunct2;
  exports.isPunctChar = isPunctChar2;
  exports.escapeRE = escapeRE2;
  exports.normalizeReference = normalizeReference2;
})(utils$1);
var helpers$1 = {};
var parse_link_label = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker2, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
  state.pos = start + 1;
  level = 1;
  while (state.pos < max) {
    marker2 = state.src.charCodeAt(state.pos);
    if (marker2 === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker2 === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  if (found) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
};
var unescapeAll$2 = utils$1.unescapeAll;
var parse_link_destination = function parseLinkDestination(str, start, max) {
  var code3, level, pos = start, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code3 = str.charCodeAt(pos);
      if (code3 === 10) {
        return result;
      }
      if (code3 === 60) {
        return result;
      }
      if (code3 === 62) {
        result.pos = pos + 1;
        result.str = unescapeAll$2(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code3 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  level = 0;
  while (pos < max) {
    code3 = str.charCodeAt(pos);
    if (code3 === 32) {
      break;
    }
    if (code3 < 32 || code3 === 127) {
      break;
    }
    if (code3 === 92 && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 32) {
        break;
      }
      pos += 2;
      continue;
    }
    if (code3 === 40) {
      level++;
      if (level > 32) {
        return result;
      }
    }
    if (code3 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start === pos) {
    return result;
  }
  if (level !== 0) {
    return result;
  }
  result.str = unescapeAll$2(str.slice(start, pos));
  result.pos = pos;
  result.ok = true;
  return result;
};
var unescapeAll$1 = utils$1.unescapeAll;
var parse_link_title = function parseLinkTitle(str, start, max) {
  var code3, marker2, lines = 0, pos = start, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (pos >= max) {
    return result;
  }
  marker2 = str.charCodeAt(pos);
  if (marker2 !== 34 && marker2 !== 39 && marker2 !== 40) {
    return result;
  }
  pos++;
  if (marker2 === 40) {
    marker2 = 41;
  }
  while (pos < max) {
    code3 = str.charCodeAt(pos);
    if (code3 === marker2) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll$1(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code3 === 40 && marker2 === 41) {
      return result;
    } else if (code3 === 10) {
      lines++;
    } else if (code3 === 92 && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
    pos++;
  }
  return result;
};
helpers$1.parseLinkLabel = parse_link_label;
helpers$1.parseLinkDestination = parse_link_destination;
helpers$1.parseLinkTitle = parse_link_title;
var assign$1 = utils$1.assign;
var unescapeAll = utils$1.unescapeAll;
var escapeHtml = utils$1.escapeHtml;
var default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<code" + slf.renderAttrs(token2) + ">" + escapeHtml(token2.content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<pre" + slf.renderAttrs(token2) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx], info = token2.info ? unescapeAll(token2.info).trim() : "", langName = "", langAttrs = "", highlighted, i2, arr, tmpAttrs, tmpToken;
  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join("");
  }
  if (options.highlight) {
    highlighted = options.highlight(token2.content, langName, langAttrs) || escapeHtml(token2.content);
  } else {
    highlighted = escapeHtml(token2.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    i2 = token2.attrIndex("class");
    tmpAttrs = token2.attrs ? token2.attrs.slice() : [];
    if (i2 < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i2] = tmpAttrs[i2].slice();
      tmpAttrs[i2][1] += " " + options.langPrefix + langName;
    }
    tmpToken = {
      attrs: tmpAttrs
    };
    return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
  }
  return "<pre><code" + slf.renderAttrs(token2) + ">" + highlighted + "</code></pre>\n";
};
default_rules.image = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  token2.attrs[token2.attrIndex("alt")][1] = slf.renderInlineAsText(token2.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer$1() {
  this.rules = assign$1({}, default_rules);
}
Renderer$1.prototype.renderAttrs = function renderAttrs(token2) {
  var i2, l2, result;
  if (!token2.attrs) {
    return "";
  }
  result = "";
  for (i2 = 0, l2 = token2.attrs.length; i2 < l2; i2++) {
    result += " " + escapeHtml(token2.attrs[i2][0]) + '="' + escapeHtml(token2.attrs[i2][1]) + '"';
  }
  return result;
};
Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken, result = "", needLf = false, token2 = tokens[idx];
  if (token2.hidden) {
    return "";
  }
  if (token2.block && token2.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += "\n";
  }
  result += (token2.nesting === -1 ? "</" : "<") + token2.tag;
  result += this.renderAttrs(token2);
  if (token2.nesting === 0 && options.xhtmlOut) {
    result += " /";
  }
  if (token2.block) {
    needLf = true;
    if (token2.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token2.tag) {
          needLf = false;
        }
      }
    }
  }
  result += needLf ? ">\n" : ">";
  return result;
};
Renderer$1.prototype.renderInline = function(tokens, options, env) {
  var type, result = "", rules = this.rules;
  for (var i2 = 0, len = tokens.length; i2 < len; i2++) {
    type = tokens[i2].type;
    if (typeof rules[type] !== "undefined") {
      result += rules[type](tokens, i2, options, env, this);
    } else {
      result += this.renderToken(tokens, i2, options);
    }
  }
  return result;
};
Renderer$1.prototype.renderInlineAsText = function(tokens, options, env) {
  var result = "";
  for (var i2 = 0, len = tokens.length; i2 < len; i2++) {
    if (tokens[i2].type === "text") {
      result += tokens[i2].content;
    } else if (tokens[i2].type === "image") {
      result += this.renderInlineAsText(tokens[i2].children, options, env);
    } else if (tokens[i2].type === "softbreak") {
      result += "\n";
    }
  }
  return result;
};
Renderer$1.prototype.render = function(tokens, options, env) {
  var i2, len, type, result = "", rules = this.rules;
  for (i2 = 0, len = tokens.length; i2 < len; i2++) {
    type = tokens[i2].type;
    if (type === "inline") {
      result += this.renderInline(tokens[i2].children, options, env);
    } else if (typeof rules[type] !== "undefined") {
      result += rules[type](tokens, i2, options, env, this);
    } else {
      result += this.renderToken(tokens, i2, options, env);
    }
  }
  return result;
};
var renderer = Renderer$1;
function Ruler$3() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler$3.prototype.__find__ = function(name2) {
  for (var i2 = 0; i2 < this.__rules__.length; i2++) {
    if (this.__rules__[i2].name === name2) {
      return i2;
    }
  }
  return -1;
};
Ruler$3.prototype.__compile__ = function() {
  var self = this;
  var chains = [""];
  self.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self.__cache__ = {};
  chains.forEach(function(chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler$3.prototype.at = function(name2, fn, options) {
  var index = this.__find__(name2);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + name2);
  }
  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler$3.prototype.before = function(beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.after = function(afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.push = function(ruleName, fn, options) {
  var opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler$3.prototype.enable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name2) {
    var idx = this.__find__(name2);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name2);
    }
    this.__rules__[idx].enabled = true;
    result.push(name2);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler$3.prototype.enableOnly = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list3, ignoreInvalid);
};
Ruler$3.prototype.disable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name2) {
    var idx = this.__find__(name2);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name2);
    }
    this.__rules__[idx].enabled = false;
    result.push(name2);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler$3.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
var ruler = Ruler$3;
var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;
var normalize = function normalize2(state) {
  var str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "�");
  state.src = str;
};
var block = function block2(state) {
  var token2;
  if (state.inlineMode) {
    token2 = new state.Token("inline", "", 0);
    token2.content = state.src;
    token2.map = [0, 1];
    token2.children = [];
    state.tokens.push(token2);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};
var inline = function inline2(state) {
  var tokens = state.tokens, tok, i2, l2;
  for (i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
    tok = tokens[i2];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};
var arrayReplaceAt = utils$1.arrayReplaceAt;
function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}
var linkify$1 = function linkify(state) {
  var i2, j, l2, tokens, token2, currentToken, nodes, ln, text3, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
  if (!state.md.options.linkify) {
    return;
  }
  for (j = 0, l2 = blockTokens.length; j < l2; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    tokens = blockTokens[j].children;
    htmlLinkLevel = 0;
    for (i2 = tokens.length - 1; i2 >= 0; i2--) {
      currentToken = tokens[i2];
      if (currentToken.type === "link_close") {
        i2--;
        while (tokens[i2].level !== currentToken.level && tokens[i2].type !== "link_open") {
          i2--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose$1(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        text3 = currentToken.content;
        links = state.md.linkify.match(text3);
        nodes = [];
        level = currentToken.level;
        lastPos = 0;
        if (links.length > 0 && links[0].index === 0 && i2 > 0 && tokens[i2 - 1].type === "text_special") {
          links = links.slice(1);
        }
        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          pos = links[ln].index;
          if (pos > lastPos) {
            token2 = new state.Token("text", "", 0);
            token2.content = text3.slice(lastPos, pos);
            token2.level = level;
            nodes.push(token2);
          }
          token2 = new state.Token("link_open", "a", 1);
          token2.attrs = [["href", fullUrl]];
          token2.level = level++;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          token2 = new state.Token("text", "", 0);
          token2.content = urlText;
          token2.level = level;
          nodes.push(token2);
          token2 = new state.Token("link_close", "a", -1);
          token2.level = --level;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text3.length) {
          token2 = new state.Token("text", "", 0);
          token2.content = text3.slice(lastPos);
          token2.level = level;
          nodes.push(token2);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i2, nodes);
      }
    }
  }
};
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: "©",
  r: "®",
  tm: "™"
};
function replaceFn(match2, name2) {
  return SCOPED_ABBR[name2.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  var i2, token2, inside_autolink = 0;
  for (i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    token2 = inlineTokens[i2];
    if (token2.type === "text" && !inside_autolink) {
      token2.content = token2.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  var i2, token2, inside_autolink = 0;
  for (i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    token2 = inlineTokens[i2];
    if (token2.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token2.content)) {
        token2.content = token2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
      }
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
var replacements = function replace(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
};
var isWhiteSpace$1 = utils$1.isWhiteSpace;
var isPunctChar$1 = utils$1.isPunctChar;
var isMdAsciiPunct$1 = utils$1.isMdAsciiPunct;
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "’";
function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}
function process_inlines(tokens, state) {
  var i2, token2, text3, t2, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
  stack = [];
  for (i2 = 0; i2 < tokens.length; i2++) {
    token2 = tokens[i2];
    thisLevel = tokens[i2].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token2.type !== "text") {
      continue;
    }
    text3 = token2.content;
    pos = 0;
    max = text3.length;
    OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t2 = QUOTE_RE.exec(text3);
        if (!t2) {
          break;
        }
        canOpen = canClose = true;
        pos = t2.index + 1;
        isSingle = t2[0] === "'";
        lastChar = 32;
        if (t2.index - 1 >= 0) {
          lastChar = text3.charCodeAt(t2.index - 1);
        } else {
          for (j = i2 - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        nextChar = 32;
        if (pos < max) {
          nextChar = text3.charCodeAt(pos);
        } else {
          for (j = i2 + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t2[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token2.content = replaceAt(token2.content, t2.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token2.content = replaceAt(token2.content, t2.index, closeQuote);
              tokens[item.token].content = replaceAt(
                tokens[item.token].content,
                item.pos,
                openQuote
              );
              pos += closeQuote.length - 1;
              if (item.token === i2) {
                pos += openQuote.length - 1;
              }
              text3 = token2.content;
              max = text3.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i2,
            pos: t2.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token2.content = replaceAt(token2.content, t2.index, APOSTROPHE);
        }
      }
  }
}
var smartquotes = function smartquotes2(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
};
var text_join = function text_join2(state) {
  var j, l2, tokens, curr, max, last, blockTokens = state.tokens;
  for (j = 0, l2 = blockTokens.length; j < l2; j++) {
    if (blockTokens[j].type !== "inline")
      continue;
    tokens = blockTokens[j].children;
    max = tokens.length;
    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === "text_special") {
        tokens[curr].type = "text";
      }
    }
    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  }
};
function Token$3(type, tag, nesting) {
  this.type = type;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token$3.prototype.attrIndex = function attrIndex(name2) {
  var attrs, i2, len;
  if (!this.attrs) {
    return -1;
  }
  attrs = this.attrs;
  for (i2 = 0, len = attrs.length; i2 < len; i2++) {
    if (attrs[i2][0] === name2) {
      return i2;
    }
  }
  return -1;
};
Token$3.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token$3.prototype.attrSet = function attrSet(name2, value) {
  var idx = this.attrIndex(name2), attrData = [name2, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token$3.prototype.attrGet = function attrGet(name2) {
  var idx = this.attrIndex(name2), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token$3.prototype.attrJoin = function attrJoin(name2, value) {
  var idx = this.attrIndex(name2);
  if (idx < 0) {
    this.attrPush([name2, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
var token = Token$3;
var Token$2 = token;
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = Token$2;
var state_core = StateCore;
var Ruler$2 = ruler;
var _rules$2 = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline],
  ["linkify", linkify$1],
  ["replacements", replacements],
  ["smartquotes", smartquotes],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", text_join]
];
function Core() {
  this.ruler = new Ruler$2();
  for (var i2 = 0; i2 < _rules$2.length; i2++) {
    this.ruler.push(_rules$2[i2][0], _rules$2[i2][1]);
  }
}
Core.prototype.process = function(state) {
  var i2, l2, rules;
  rules = this.ruler.getRules("");
  for (i2 = 0, l2 = rules.length; i2 < l2; i2++) {
    rules[i2](state);
  }
};
Core.prototype.State = state_core;
var parser_core = Core;
var isSpace$a = utils$1.isSpace;
function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
  return state.src.slice(pos, max);
}
function escapedSplit(str) {
  var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
  ch = str.charCodeAt(pos);
  while (pos < max) {
    if (ch === 124) {
      if (!isEscaped) {
        result.push(current + str.substring(lastPos, pos));
        current = "";
        lastPos = pos + 1;
      } else {
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result.push(current + str.substring(lastPos));
  return result;
}
var table = function table2(state, startLine, endLine, silent) {
  var ch, lineText, pos, i2, l2, nextLine, columns, columnCount, token2, aligns, t2, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
  if (startLine + 2 > endLine) {
    return false;
  }
  nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
    return false;
  }
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace$a(secondCh)) {
    return false;
  }
  if (firstCh === 45 && isSpace$a(secondCh)) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace$a(ch)) {
      return false;
    }
    pos++;
  }
  lineText = getLine(state, startLine + 1);
  columns = lineText.split("|");
  aligns = [];
  for (i2 = 0; i2 < columns.length; i2++) {
    t2 = columns[i2].trim();
    if (!t2) {
      if (i2 === 0 || i2 === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t2)) {
      return false;
    }
    if (t2.charCodeAt(t2.length - 1) === 58) {
      aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t2.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "")
    columns.shift();
  if (columns.length && columns[columns.length - 1] === "")
    columns.pop();
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  oldParentType = state.parentType;
  state.parentType = "table";
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  token2 = state.push("table_open", "table", 1);
  token2.map = tableLines = [startLine, 0];
  token2 = state.push("thead_open", "thead", 1);
  token2.map = [startLine, startLine + 1];
  token2 = state.push("tr_open", "tr", 1);
  token2.map = [startLine, startLine + 1];
  for (i2 = 0; i2 < columns.length; i2++) {
    token2 = state.push("th_open", "th", 1);
    if (aligns[i2]) {
      token2.attrs = [["style", "text-align:" + aligns[i2]]];
    }
    token2 = state.push("inline", "", 0);
    token2.content = columns[i2].trim();
    token2.children = [];
    token2 = state.push("th_close", "th", -1);
  }
  token2 = state.push("tr_close", "tr", -1);
  token2 = state.push("thead_close", "thead", -1);
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    if (nextLine === startLine + 2) {
      token2 = state.push("tbody_open", "tbody", 1);
      token2.map = tbodyLines = [startLine + 2, 0];
    }
    token2 = state.push("tr_open", "tr", 1);
    token2.map = [nextLine, nextLine + 1];
    for (i2 = 0; i2 < columnCount; i2++) {
      token2 = state.push("td_open", "td", 1);
      if (aligns[i2]) {
        token2.attrs = [["style", "text-align:" + aligns[i2]]];
      }
      token2 = state.push("inline", "", 0);
      token2.content = columns[i2] ? columns[i2].trim() : "";
      token2.children = [];
      token2 = state.push("td_close", "td", -1);
    }
    token2 = state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    token2 = state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  token2 = state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};
var code = function code2(state, startLine, endLine) {
  var nextLine, last, token2;
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  last = nextLine = startLine + 1;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  token2 = state.push("code_block", "code", 0);
  token2.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
  token2.map = [startLine, state.line];
  return true;
};
var fence = function fence2(state, startLine, endLine, silent) {
  var marker2, len, params, nextLine, mem, token2, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos);
  if (marker2 !== 126 && marker2 !== 96) {
    return false;
  }
  mem = pos;
  pos = state.skipChars(pos, marker2);
  len = pos - mem;
  if (len < 3) {
    return false;
  }
  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);
  if (marker2 === 96) {
    if (params.indexOf(String.fromCharCode(marker2)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  nextLine = startLine;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker2) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker2);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token2 = state.push("fence", "code", 0);
  token2.info = params;
  token2.content = state.getLines(startLine + 1, nextLine, len, true);
  token2.markup = markup;
  token2.map = [startLine, state.line];
  return true;
};
var isSpace$9 = utils$1.isSpace;
var blockquote = function blockquote2(state, startLine, endLine, silent) {
  var adjustTab, ch, i2, initial, l2, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token2, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  oldBMarks = [];
  oldBSCount = [];
  oldSCount = [];
  oldTShift = [];
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  oldParentType = state.parentType;
  state.parentType = "blockquote";
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos >= max) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      initial = state.sCount[nextLine] + 1;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          pos++;
          initial++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (isSpace$9(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  oldIndent = state.blkIndent;
  state.blkIndent = 0;
  token2 = state.push("blockquote_open", "blockquote", 1);
  token2.markup = ">";
  token2.map = lines = [startLine, 0];
  state.md.block.tokenize(state, startLine, nextLine);
  token2 = state.push("blockquote_close", "blockquote", -1);
  token2.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (i2 = 0; i2 < oldTShift.length; i2++) {
    state.bMarks[i2 + startLine] = oldBMarks[i2];
    state.tShift[i2 + startLine] = oldTShift[i2];
    state.sCount[i2 + startLine] = oldSCount[i2];
    state.bsCount[i2 + startLine] = oldBSCount[i2];
  }
  state.blkIndent = oldIndent;
  return true;
};
var isSpace$8 = utils$1.isSpace;
var hr = function hr2(state, startLine, endLine, silent) {
  var marker2, cnt, ch, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 95) {
    return false;
  }
  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker2 && !isSpace$8(ch)) {
      return false;
    }
    if (ch === marker2) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  token2 = state.push("hr", "hr", 0);
  token2.map = [startLine, state.line];
  token2.markup = Array(cnt + 1).join(String.fromCharCode(marker2));
  return true;
};
var isSpace$7 = utils$1.isSpace;
function skipBulletListMarker(state, startLine) {
  var marker2, pos, max, ch;
  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 43) {
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
  if (pos + 1 >= max) {
    return -1;
  }
  ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  var i2, l2, level = state.level + 2;
  for (i2 = idx + 2, l2 = state.tokens.length - 2; i2 < l2; i2++) {
    if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
      state.tokens[i2 + 2].hidden = true;
      state.tokens[i2].hidden = true;
      i2 += 2;
    }
  }
}
var list = function list2(state, startLine, endLine, silent) {
  var ch, contentStart, i2, indent, indentAfterMarker, initial, isOrdered, itemLines, l2, listLines, listTokIdx, markerCharCode, markerValue, max, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token2, nextLine = startLine, isTerminatingParagraph = false, tight = true;
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[nextLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
      return false;
  }
  if (silent) {
    return true;
  }
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  listTokIdx = state.tokens.length;
  if (isOrdered) {
    token2 = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token2.attrs = [["start", markerValue]];
    }
  } else {
    token2 = state.push("bullet_list_open", "ul", 1);
  }
  token2.map = listLines = [nextLine, 0];
  token2.markup = String.fromCharCode(markerCharCode);
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules("list");
  oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset++;
      } else {
        break;
      }
      pos++;
    }
    contentStart = pos;
    if (contentStart >= max) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    indent = initial + indentAfterMarker;
    token2 = state.push("list_item_open", "li", 1);
    token2.markup = String.fromCharCode(markerCharCode);
    token2.map = itemLines = [nextLine, 0];
    if (isOrdered) {
      token2.info = state.src.slice(start, posAfterMarker - 1);
    }
    oldTight = state.tight;
    oldTShift = state.tShift[nextLine];
    oldSCount = state.sCount[nextLine];
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;
    if (contentStart >= max && state.isEmpty(nextLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, nextLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;
    token2 = state.push("list_item_close", "li", -1);
    token2.markup = String.fromCharCode(markerCharCode);
    nextLine = state.line;
    itemLines[1] = nextLine;
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token2 = state.push("ordered_list_close", "ol", -1);
  } else {
    token2 = state.push("bullet_list_close", "ul", -1);
  }
  token2.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
};
var normalizeReference$2 = utils$1.normalizeReference;
var isSpace$6 = utils$1.isSpace;
var reference = function reference2(state, startLine, _endLine, silent) {
  var ch, destEndPos, destEndLineNo, endLine, href, i2, l2, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
      if (pos + 1 === max) {
        return false;
      }
      if (state.src.charCodeAt(pos + 1) !== 58) {
        return false;
      }
      break;
    }
  }
  endLine = state.lineMax;
  terminatorRules = state.md.block.ruler.getRules("reference");
  oldParentType = state.parentType;
  state.parentType = "reference";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;
  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      lines++;
    } else if (ch === 92) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) {
    return false;
  }
  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = res.pos;
  lines += res.lines;
  destEndPos = pos;
  destEndLineNo = lines;
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = "";
    pos = destEndPos;
    lines = destEndLineNo;
  }
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace$6(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace$6(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    return false;
  }
  label = normalizeReference$2(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = { title, href };
  }
  state.parentType = oldParentType;
  state.line = startLine + lines + 1;
  return true;
};
var html_blocks = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var html_re = {};
var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
var unquoted = "[^\"'=<>`\\x00-\\x20]+";
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';
var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
var processing = "<[?][\\s\\S]*?[?]>";
var declaration = "<![A-Z]+\\s+[^>]*>";
var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
var HTML_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
html_re.HTML_TAG_RE = HTML_TAG_RE$1;
html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;
var block_names = html_blocks;
var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;
var HTML_SEQUENCES = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
];
var html_block = function html_block2(state, startLine, endLine, silent) {
  var i2, nextLine, token2, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  lineText = state.src.slice(pos, max);
  for (i2 = 0; i2 < HTML_SEQUENCES.length; i2++) {
    if (HTML_SEQUENCES[i2][0].test(lineText)) {
      break;
    }
  }
  if (i2 === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i2][2];
  }
  nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i2][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);
      if (HTML_SEQUENCES[i2][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  token2 = state.push("html_block", "", 0);
  token2.map = [startLine, nextLine];
  token2.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
};
var isSpace$5 = utils$1.isSpace;
var heading = function heading2(state, startLine, endLine, silent) {
  var ch, level, tmp, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) {
    return false;
  }
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && !isSpace$5(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 35, pos);
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }
  state.line = startLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = "########".slice(0, level);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = state.src.slice(pos, max).trim();
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = "########".slice(0, level);
  return true;
};
var lheading = function lheading2(state, startLine, endLine) {
  var content2, terminate, i2, l2, token2, pos, max, level, marker2, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max) {
        marker2 = state.src.charCodeAt(pos);
        if (marker2 === 45 || marker2 === 61) {
          pos = state.skipChars(pos, marker2);
          pos = state.skipSpaces(pos);
          if (pos >= max) {
            level = marker2 === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  content2 = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = String.fromCharCode(marker2);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content2;
  token2.map = [startLine, state.line - 1];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = String.fromCharCode(marker2);
  state.parentType = oldParentType;
  return true;
};
var paragraph = function paragraph2(state, startLine, endLine) {
  var content2, terminate, i2, l2, token2, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
      if (terminatorRules[i2](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  content2 = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  token2 = state.push("paragraph_open", "p", 1);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content2;
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
};
var Token$1 = token;
var isSpace$4 = utils$1.isSpace;
function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  this.result = "";
  s = this.src;
  indent_found = false;
  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace$4(ch)) {
        indent++;
        if (ch === 9) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type, tag, nesting) {
  var token2 = new Token$1(type, tag, nesting);
  token2.block = true;
  if (nesting < 0)
    this.level--;
  token2.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token2);
  return token2;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;
  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace$4(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (!isSpace$4(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code3) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code3) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code3, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (code3 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i2, lineIndent, ch, first, last, queue, lineStart, line = begin;
  if (begin >= end) {
    return "";
  }
  queue = new Array(end - begin);
  for (i2 = 0; line < end; line++, i2++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];
    if (line + 1 < end || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);
      if (isSpace$4(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first++;
    }
    if (lineIndent > indent) {
      queue[i2] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
    } else {
      queue[i2] = this.src.slice(first, last);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = Token$1;
var state_block = StateBlock;
var Ruler$1 = ruler;
var _rules$1 = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["heading", heading, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
function ParserBlock$1() {
  this.ruler = new Ruler$1();
  for (var i2 = 0; i2 < _rules$1.length; i2++) {
    this.ruler.push(_rules$1[i2][0], _rules$1[i2][1], { alt: (_rules$1[i2][2] || []).slice() });
  }
}
ParserBlock$1.prototype.tokenize = function(state, startLine, endLine) {
  var ok, i2, prevLine, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    prevLine = state.line;
    for (i2 = 0; i2 < len; i2++) {
      ok = rules[i2](state, line, endLine, false);
      if (ok) {
        if (prevLine >= state.line) {
          throw new Error("block rule didn't increment state.line");
        }
        break;
      }
    }
    if (!ok)
      throw new Error("none of the block rules matched");
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock$1.prototype.parse = function(src, md, env, outTokens) {
  var state;
  if (!src) {
    return;
  }
  state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock$1.prototype.State = state_block;
var parser_block = ParserBlock$1;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var text = function text2(state, silent) {
  var pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
};
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
var linkify2 = function linkify3(state, silent) {
  var pos, max, match2, proto, link3, url, fullUrl, token2;
  if (!state.md.options.linkify)
    return false;
  if (state.linkLevel > 0)
    return false;
  pos = state.pos;
  max = state.posMax;
  if (pos + 3 > max)
    return false;
  if (state.src.charCodeAt(pos) !== 58)
    return false;
  if (state.src.charCodeAt(pos + 1) !== 47)
    return false;
  if (state.src.charCodeAt(pos + 2) !== 47)
    return false;
  match2 = state.pending.match(SCHEME_RE);
  if (!match2)
    return false;
  proto = match2[1];
  link3 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link3)
    return false;
  url = link3.url;
  if (url.length <= proto.length)
    return false;
  url = url.replace(/\*+$/, "");
  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl))
    return false;
  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    token2 = state.push("link_open", "a", 1);
    token2.attrs = [["href", fullUrl]];
    token2.markup = "linkify";
    token2.info = "auto";
    token2 = state.push("text", "", 0);
    token2.content = state.md.normalizeLinkText(url);
    token2 = state.push("link_close", "a", -1);
    token2.markup = "linkify";
    token2.info = "auto";
  }
  state.pos += url.length - proto.length;
  return true;
};
var isSpace$3 = utils$1.isSpace;
var newline = function newline2(state, silent) {
  var pmax, max, ws, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  pmax = state.pending.length - 1;
  max = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
          ws--;
        state.pending = state.pending.slice(0, ws);
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max && isSpace$3(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
};
var isSpace$2 = utils$1.isSpace;
var ESCAPED = [];
for (var i$1 = 0; i$1 < 256; i$1++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
var _escape = function escape(state, silent) {
  var ch1, ch2, origStr, escapedStr, token2, pos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(pos) !== 92)
    return false;
  pos++;
  if (pos >= max)
    return false;
  ch1 = state.src.charCodeAt(pos);
  if (ch1 === 10) {
    if (!silent) {
      state.push("hardbreak", "br", 0);
    }
    pos++;
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace$2(ch1))
        break;
      pos++;
    }
    state.pos = pos;
    return true;
  }
  escapedStr = state.src[pos];
  if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 >= 56320 && ch2 <= 57343) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }
  origStr = "\\" + escapedStr;
  if (!silent) {
    token2 = state.push("text_special", "", 0);
    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token2.content = escapedStr;
    } else {
      token2.content = origStr;
    }
    token2.markup = origStr;
    token2.info = "escape";
  }
  state.pos = pos + 1;
  return true;
};
var backticks = function backtick(state, silent) {
  var start, max, marker2, token2, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  start = pos;
  pos++;
  max = state.posMax;
  while (pos < max && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  marker2 = state.src.slice(start, pos);
  openerLength = marker2.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent)
      state.pending += marker2;
    state.pos += openerLength;
    return true;
  }
  matchEnd = pos;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        token2 = state.push("code_inline", "code", 0);
        token2.markup = marker2;
        token2.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent)
    state.pending += marker2;
  state.pos += openerLength;
  return true;
};
var strikethrough = {};
strikethrough.tokenize = function strikethrough2(state, silent) {
  var i2, scanned, token2, len, ch, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 126) {
    return false;
  }
  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker2);
  if (len < 2) {
    return false;
  }
  if (len % 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch;
    len--;
  }
  for (i2 = 0; i2 < len; i2 += 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch + ch;
    state.delimiters.push({
      marker: marker2,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess$1(state, delimiters) {
  var i2, j, startDelim, endDelim, token2, loneMarkers = [], max = delimiters.length;
  for (i2 = 0; i2 < max; i2++) {
    startDelim = delimiters[i2];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    token2 = state.tokens[startDelim.token];
    token2.type = "s_open";
    token2.tag = "s";
    token2.nesting = 1;
    token2.markup = "~~";
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = "s_close";
    token2.tag = "s";
    token2.nesting = -1;
    token2.markup = "~~";
    token2.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    i2 = loneMarkers.pop();
    j = i2 + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i2 !== j) {
      token2 = state.tokens[j];
      state.tokens[j] = state.tokens[i2];
      state.tokens[i2] = token2;
    }
  }
}
strikethrough.postProcess = function strikethrough3(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
};
var emphasis = {};
emphasis.tokenize = function emphasis2(state, silent) {
  var i2, scanned, token2, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 95 && marker2 !== 42) {
    return false;
  }
  scanned = state.scanDelims(state.pos, marker2 === 42);
  for (i2 = 0; i2 < scanned.length; i2++) {
    token2 = state.push("text", "", 0);
    token2.content = String.fromCharCode(marker2);
    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker2,
      // Total length of these series of delimiters.
      //
      length: scanned.length,
      // A position of the token this delimiter corresponds to.
      //
      token: state.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess(state, delimiters) {
  var i2, startDelim, endDelim, token2, ch, isStrong, max = delimiters.length;
  for (i2 = max - 1; i2 >= 0; i2--) {
    startDelim = delimiters[i2];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    isStrong = i2 > 0 && delimiters[i2 - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
    delimiters[i2 - 1].marker === startDelim.marker && delimiters[i2 - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    delimiters[startDelim.end + 1].token === endDelim.token + 1;
    ch = String.fromCharCode(startDelim.marker);
    token2 = state.tokens[startDelim.token];
    token2.type = isStrong ? "strong_open" : "em_open";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = 1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = isStrong ? "strong_close" : "em_close";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = -1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    if (isStrong) {
      state.tokens[delimiters[i2 - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i2--;
    }
  }
}
emphasis.postProcess = function emphasis3(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};
var normalizeReference$1 = utils$1.normalizeReference;
var isSpace$1 = utils$1.isSpace;
var link = function link2(state, silent) {
  var attrs, code3, label, labelEnd, labelStart, pos, res, ref2, token2, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$1(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace$1(code3) && code3 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code3 = state.src.charCodeAt(pos);
          if (!isSpace$1(code3) && code3 !== 10) {
            break;
          }
        }
      }
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference$1(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    token2 = state.push("link_open", "a", 1);
    token2.attrs = attrs = [["href", href]];
    if (title) {
      attrs.push(["title", title]);
    }
    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    token2 = state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
};
var normalizeReference = utils$1.normalizeReference;
var isSpace = utils$1.isSpace;
var image = function image2(state, silent) {
  var attrs, code3, content2, label, labelEnd, labelStart, pos, ref2, res, title, token2, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace(code3) && code3 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    content2 = state.src.slice(labelStart, labelEnd);
    state.md.inline.parse(
      content2,
      state.md,
      state.env,
      tokens = []
    );
    token2 = state.push("image", "img", 0);
    token2.attrs = attrs = [["src", href], ["alt", ""]];
    token2.children = tokens;
    token2.content = content2;
    if (title) {
      attrs.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max;
  return true;
};
var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
var autolink = function autolink2(state, silent) {
  var url, fullUrl, token2, ch, start, max, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  start = state.pos;
  max = state.posMax;
  for (; ; ) {
    if (++pos >= max)
      return false;
    ch = state.src.charCodeAt(pos);
    if (ch === 60)
      return false;
    if (ch === 62)
      break;
  }
  url = state.src.slice(start + 1, pos);
  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink("mailto:" + url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  return false;
};
var HTML_TAG_RE = html_re.HTML_TAG_RE;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
var html_inline = function html_inline2(state, silent) {
  var ch, match2, max, token2, pos = state.pos;
  if (!state.md.options.html) {
    return false;
  }
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
    return false;
  }
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) {
    return false;
  }
  if (!silent) {
    token2 = state.push("html_inline", "", 0);
    token2.content = match2[0];
    if (isLinkOpen(token2.content))
      state.linkLevel++;
    if (isLinkClose(token2.content))
      state.linkLevel--;
  }
  state.pos += match2[0].length;
  return true;
};
var entities = entities$1;
var has = utils$1.has;
var isValidEntityCode = utils$1.isValidEntityCode;
var fromCodePoint = utils$1.fromCodePoint;
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
var entity = function entity2(state, silent) {
  var ch, code3, match2, token2, pos = state.pos, max = state.posMax;
  if (state.src.charCodeAt(pos) !== 38)
    return false;
  if (pos + 1 >= max)
    return false;
  ch = state.src.charCodeAt(pos + 1);
  if (ch === 35) {
    match2 = state.src.slice(pos).match(DIGITAL_RE);
    if (match2) {
      if (!silent) {
        code3 = match2[1][0].toLowerCase() === "x" ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
        token2 = state.push("text_special", "", 0);
        token2.content = isValidEntityCode(code3) ? fromCodePoint(code3) : fromCodePoint(65533);
        token2.markup = match2[0];
        token2.info = "entity";
      }
      state.pos += match2[0].length;
      return true;
    }
  } else {
    match2 = state.src.slice(pos).match(NAMED_RE);
    if (match2) {
      if (has(entities, match2[1])) {
        if (!silent) {
          token2 = state.push("text_special", "", 0);
          token2.content = entities[match2[1]];
          token2.markup = match2[0];
          token2.info = "entity";
        }
        state.pos += match2[0].length;
        return true;
      }
    }
  }
  return false;
};
function processDelimiters(delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
  if (!max)
    return;
  var headerIdx = 0;
  var lastTokenIdx = -2;
  var jumps = [];
  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }
    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    openerIdx = headerIdx - jumps[headerIdx] - 1;
    newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (opener.open && opener.end < 0) {
        isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
var balance_pairs = function link_pairs(state) {
  var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
  processDelimiters(state.delimiters);
  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(tokens_meta[curr].delimiters);
    }
  }
};
var fragments_join = function fragments_join2(state) {
  var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
  for (curr = last = 0; curr < max; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }
      last++;
    }
  }
  if (curr !== last) {
    tokens.length = last;
  }
};
var Token = token;
var isWhiteSpace = utils$1.isWhiteSpace;
var isPunctChar = utils$1.isPunctChar;
var isMdAsciiPunct = utils$1.isMdAsciiPunct;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
  this.backticks = {};
  this.backticksScanned = false;
  this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
  var token2 = new Token("text", "", 0);
  token2.content = this.pending;
  token2.level = this.pendingLevel;
  this.tokens.push(token2);
  this.pending = "";
  return token2;
};
StateInline.prototype.push = function(type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  var token2 = new Token(type, tag, nesting);
  var token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token2.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }
  this.pendingLevel = this.level;
  this.tokens.push(token2);
  this.tokens_meta.push(token_meta);
  return token2;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker2 = this.src.charCodeAt(start);
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
  while (pos < max && this.src.charCodeAt(pos) === marker2) {
    pos++;
  }
  count = pos - start;
  nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);
  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }
  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }
  if (!canSplitWord) {
    can_open = left_flanking && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking || isNextPunctChar);
  } else {
    can_open = left_flanking;
    can_close = right_flanking;
  }
  return {
    can_open,
    can_close,
    length: count
  };
};
StateInline.prototype.Token = Token;
var state_inline = StateInline;
var Ruler = ruler;
var _rules = [
  ["text", text],
  ["linkify", linkify2],
  ["newline", newline],
  ["escape", _escape],
  ["backticks", backticks],
  ["strikethrough", strikethrough.tokenize],
  ["emphasis", emphasis.tokenize],
  ["link", link],
  ["image", image],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
var _rules2 = [
  ["balance_pairs", balance_pairs],
  ["strikethrough", strikethrough.postProcess],
  ["emphasis", emphasis.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", fragments_join]
];
function ParserInline$1() {
  var i2;
  this.ruler = new Ruler();
  for (i2 = 0; i2 < _rules.length; i2++) {
    this.ruler.push(_rules[i2][0], _rules[i2][1]);
  }
  this.ruler2 = new Ruler();
  for (i2 = 0; i2 < _rules2.length; i2++) {
    this.ruler2.push(_rules2[i2][0], _rules2[i2][1]);
  }
}
ParserInline$1.prototype.skipToken = function(state) {
  var ok, i2, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
  if (typeof cache[pos] !== "undefined") {
    state.pos = cache[pos];
    return;
  }
  if (state.level < maxNesting) {
    for (i2 = 0; i2 < len; i2++) {
      state.level++;
      ok = rules[i2](state, true);
      state.level--;
      if (ok) {
        if (pos >= state.pos) {
          throw new Error("inline rule didn't increment state.pos");
        }
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok) {
    state.pos++;
  }
  cache[pos] = state.pos;
};
ParserInline$1.prototype.tokenize = function(state) {
  var ok, i2, prevPos, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
  while (state.pos < end) {
    prevPos = state.pos;
    if (state.level < maxNesting) {
      for (i2 = 0; i2 < len; i2++) {
        ok = rules[i2](state, false);
        if (ok) {
          if (prevPos >= state.pos) {
            throw new Error("inline rule didn't increment state.pos");
          }
          break;
        }
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline$1.prototype.parse = function(str, md, env, outTokens) {
  var i2, rules, len;
  var state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  rules = this.ruler2.getRules("");
  len = rules.length;
  for (i2 = 0; i2 < len; i2++) {
    rules[i2](state);
  }
};
ParserInline$1.prototype.State = state_inline;
var parser_inline = ParserInline$1;
var re;
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe)
    return re;
  hasRequiredRe = 1;
  re = function(opts) {
    var re2 = {};
    opts = opts || {};
    re2.src_Any = requireRegex$3().source;
    re2.src_Cc = requireRegex$2().source;
    re2.src_Z = requireRegex().source;
    re2.src_P = regex$4.source;
    re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
    re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
    var text_separators = "[><｜]";
    re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
    re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
    re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re2.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re2.src_ZCc + "|$)|;(?!" + re2.src_ZCc + "|$)|\\!+(?!" + re2.src_ZCc + "|[!]|$)|\\?(?!" + re2.src_ZCc + "|[?]|$))+|\\/)?";
    re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
    re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
    re2.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
    re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
    re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
    re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
    re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
    re2.src_host_strict = re2.src_host + re2.src_host_terminator;
    re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
    re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
    re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
    re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
    re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
    re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
    re2.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
    re2.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
    return re2;
  };
  return re;
}
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k2) {
    return acc || defaultOptions.hasOwnProperty(k2);
  }, false);
}
var defaultSchemas = {
  "http:": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.http) {
        self.re.http = new RegExp(
          "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
          "i"
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.no_http) {
        self.re.no_http = new RegExp(
          "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
          "i"
        );
      }
      if (self.re.no_http.test(tail)) {
        if (pos >= 3 && text3[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text3[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text3, pos, self) {
      var tail = text3.slice(pos);
      if (!self.re.mailto) {
        self.re.mailto = new RegExp(
          "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
          "i"
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text3, pos) {
    var tail = text3.slice(pos);
    if (re2.test(tail)) {
      return tail.match(re2)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile(self) {
  var re2 = self.re = requireRe()(self.__opts__);
  var tlds2 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re2.src_xn);
  re2.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re2.src_tlds);
  }
  re2.email_fuzzy = RegExp(untpl(re2.tpl_email_fuzzy), "i");
  re2.link_fuzzy = RegExp(untpl(re2.tpl_link_fuzzy), "i");
  re2.link_no_ip_fuzzy = RegExp(untpl(re2.tpl_link_no_ip_fuzzy), "i");
  re2.host_fuzzy_test = RegExp(untpl(re2.tpl_host_fuzzy_test), "i");
  var aliases = [];
  self.__compiled__ = {};
  function schemaError(name2, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name2 + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name2) {
    var val = self.__schemas__[name2];
    if (val === null) {
      return;
    }
    var compiled = { validate: null, link: null };
    self.__compiled__[name2] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name2, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name2, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name2);
      return;
    }
    schemaError(name2, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      return;
    }
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  var slist = Object.keys(self.__compiled__).filter(function(name2) {
    return name2.length > 0 && self.__compiled__[name2];
  }).map(escapeRE).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
  self.re.pretest = RegExp(
    "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
    "i"
  );
  resetScanCache(self);
}
function Match(self, shift) {
  var start = self.__index__, end = self.__last_index__, text3 = self.__text_cache__.slice(start, end);
  this.schema = self.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text3;
  this.text = text3;
  this.url = text3;
}
function createMatch(self, shift) {
  var match2 = new Match(self, shift);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt$1(schemas, options) {
  if (!(this instanceof LinkifyIt$1)) {
    return new LinkifyIt$1(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt$1.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt$1.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt$1.prototype.test = function test(text3) {
  this.__text_cache__ = text3;
  this.__index__ = -1;
  if (!text3.length) {
    return false;
  }
  var m2, ml, me, len, shift, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text3)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m2 = re2.exec(text3)) !== null) {
      len = this.testSchemaAt(text3, m2[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m2[2];
        this.__index__ = m2.index + m2[1].length;
        this.__last_index__ = m2.index + m2[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text3.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text3.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text3.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text3.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt$1.prototype.pretest = function pretest(text3) {
  return this.re.pretest.test(text3);
};
LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text3, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text3, pos, this);
};
LinkifyIt$1.prototype.match = function match(text3) {
  var shift = 0, result = [];
  if (this.__index__ >= 0 && this.__text_cache__ === text3) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  var tail = shift ? text3.slice(shift) : text3;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt$1.prototype.matchAtStart = function matchAtStart(text3) {
  this.__text_cache__ = text3;
  this.__index__ = -1;
  if (!text3.length)
    return null;
  var m2 = this.re.schema_at_start.exec(text3);
  if (!m2)
    return null;
  var len = this.testSchemaAt(text3, m2[2], m2[0].length);
  if (!len)
    return null;
  this.__schema__ = m2[2];
  this.__index__ = m2.index + m2[1].length;
  this.__last_index__ = m2.index + m2[0].length + len;
  return createMatch(this, 0);
};
LinkifyIt$1.prototype.tlds = function tlds(list3, keepOld) {
  list3 = Array.isArray(list3) ? list3 : [list3];
  if (!keepOld) {
    this.__tlds__ = list3.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list3).sort().filter(function(el2, idx, arr) {
    return el2 !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt$1.prototype.normalize = function normalize3(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt$1.prototype.onCompile = function onCompile() {
};
var linkifyIt = LinkifyIt$1;
const maxInt = 2147483647;
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128;
const delimiter = "-";
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/;
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
const errors = {
  "overflow": "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, callback) {
  const result = [];
  let length = array.length;
  while (length--) {
    result[length] = callback(array[length]);
  }
  return result;
}
function mapDomain(domain, callback) {
  const parts = domain.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    domain = parts[1];
  }
  domain = domain.replace(regexSeparators, ".");
  const labels = domain.split(".");
  const encoded = map(labels, callback).join(".");
  return result + encoded;
}
function ucs2decode(string2) {
  const output = [];
  let counter = 0;
  const length = string2.length;
  while (counter < length) {
    const value = string2.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string2.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
const ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
const basicToDigit = function(codePoint) {
  if (codePoint >= 48 && codePoint < 58) {
    return 26 + (codePoint - 48);
  }
  if (codePoint >= 65 && codePoint < 91) {
    return codePoint - 65;
  }
  if (codePoint >= 97 && codePoint < 123) {
    return codePoint - 97;
  }
  return base;
};
const digitToBasic = function(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
const adapt = function(delta2, numPoints, firstTime) {
  let k2 = 0;
  delta2 = firstTime ? floor(delta2 / damp) : delta2 >> 1;
  delta2 += floor(delta2 / numPoints);
  for (; delta2 > baseMinusTMin * tMax >> 1; k2 += base) {
    delta2 = floor(delta2 / baseMinusTMin);
  }
  return floor(k2 + (baseMinusTMin + 1) * delta2 / (delta2 + skew));
};
const decode = function(input) {
  const output = [];
  const inputLength = input.length;
  let i2 = 0;
  let n2 = initialN;
  let bias = initialBias;
  let basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (let j = 0; j < basic; ++j) {
    if (input.charCodeAt(j) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j));
  }
  for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
    const oldi = i2;
    for (let w2 = 1, k2 = base; ; k2 += base) {
      if (index >= inputLength) {
        error("invalid-input");
      }
      const digit = basicToDigit(input.charCodeAt(index++));
      if (digit >= base) {
        error("invalid-input");
      }
      if (digit > floor((maxInt - i2) / w2)) {
        error("overflow");
      }
      i2 += digit * w2;
      const t2 = k2 <= bias ? tMin : k2 >= bias + tMax ? tMax : k2 - bias;
      if (digit < t2) {
        break;
      }
      const baseMinusT = base - t2;
      if (w2 > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w2 *= baseMinusT;
    }
    const out = output.length + 1;
    bias = adapt(i2 - oldi, out, oldi == 0);
    if (floor(i2 / out) > maxInt - n2) {
      error("overflow");
    }
    n2 += floor(i2 / out);
    i2 %= out;
    output.splice(i2++, 0, n2);
  }
  return String.fromCodePoint(...output);
};
const encode = function(input) {
  const output = [];
  input = ucs2decode(input);
  const inputLength = input.length;
  let n2 = initialN;
  let delta2 = 0;
  let bias = initialBias;
  for (const currentValue of input) {
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  const basicLength = output.length;
  let handledCPCount = basicLength;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    let m2 = maxInt;
    for (const currentValue of input) {
      if (currentValue >= n2 && currentValue < m2) {
        m2 = currentValue;
      }
    }
    const handledCPCountPlusOne = handledCPCount + 1;
    if (m2 - n2 > floor((maxInt - delta2) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta2 += (m2 - n2) * handledCPCountPlusOne;
    n2 = m2;
    for (const currentValue of input) {
      if (currentValue < n2 && ++delta2 > maxInt) {
        error("overflow");
      }
      if (currentValue === n2) {
        let q = delta2;
        for (let k2 = base; ; k2 += base) {
          const t2 = k2 <= bias ? tMin : k2 >= bias + tMax ? tMax : k2 - bias;
          if (q < t2) {
            break;
          }
          const qMinusT = q - t2;
          const baseMinusT = base - t2;
          output.push(
            stringFromCharCode(digitToBasic(t2 + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta2, handledCPCountPlusOne, handledCPCount === basicLength);
        delta2 = 0;
        ++handledCPCount;
      }
    }
    ++delta2;
    ++n2;
  }
  return output.join("");
};
const toUnicode = function(input) {
  return mapDomain(input, function(string2) {
    return regexPunycode.test(string2) ? decode(string2.slice(4).toLowerCase()) : string2;
  });
};
const toASCII = function(input) {
  return mapDomain(input, function(string2) {
    return regexNonASCII.test(string2) ? "xn--" + encode(string2) : string2;
  });
};
const punycode$1 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  "version": "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  "ucs2": {
    "decode": ucs2decode,
    "encode": ucs2encode
  },
  "decode": decode,
  "encode": encode,
  "toASCII": toASCII,
  "toUnicode": toUnicode
};
const punycode_es6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode,
  default: punycode$1,
  encode,
  toASCII,
  toUnicode,
  ucs2decode,
  ucs2encode
}, Symbol.toStringTag, { value: "Module" }));
const require$$8 = /* @__PURE__ */ getAugmentedNamespace(punycode_es6);
var _default = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var zero = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
};
var commonmark = {
  options: {
    html: true,
    // Enable HTML tags in source
    xhtmlOut: true,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
};
var utils = utils$1;
var helpers = helpers$1;
var Renderer = renderer;
var ParserCore = parser_core;
var ParserBlock = parser_block;
var ParserInline = parser_inline;
var LinkifyIt = linkifyIt;
var mdurl = mdurl$1;
var punycode = require$$8;
var config = {
  default: _default,
  zero,
  commonmark
};
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
  var str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
}
var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.encode(mdurl.format(parsed));
}
function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new ParserCore();
  this.renderer = new Renderer();
  this.linkify = new LinkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = utils.assign({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  utils.assign(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  var self = this, presetName;
  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name2) {
      if (presets.components[name2].rules) {
        self[name2].ruler.enableOnly(presets.components[name2].rules);
      }
      if (presets.components[name2].rules2) {
        self[name2].ruler2.enableOnly(presets.components[name2].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.enable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list3, true));
  var missed = list3.filter(function(name2) {
    return result.indexOf(name2) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.disable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list3, true));
  var missed = list3.filter(function(name2) {
    return result.indexOf(name2) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  var args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  var state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  var state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
var lib = MarkdownIt;
var markdownIt = lib;
const Fe = /* @__PURE__ */ getDefaultExportFromCjs(markdownIt);
const t = /* @__PURE__ */ new Set([true, false, "alt", "title"]);
function e(t2, e2) {
  return (Array.isArray(t2) ? t2 : []).filter(([t3]) => t3 !== e2);
}
function n(t2, n2) {
  t2 && t2.attrs && (t2.attrs = e(t2.attrs, n2));
}
function i(e2, i2) {
  if (!t.has(e2))
    throw new TypeError(`figcaption must be one of: ${[...t]}.`);
  if ("alt" === e2)
    return i2.content;
  const r2 = i2.attrs.find(([t2]) => "title" === t2);
  return Array.isArray(r2) && r2[1] ? (n(i2, "title"), r2[1]) : void 0;
}
function r(t2, r2) {
  r2 = r2 || {}, t2.core.ruler.before("linkify", "image_figures", function(s) {
    let a2 = 1;
    for (let o2 = 1, c2 = s.tokens.length; o2 < c2 - 1; ++o2) {
      const l2 = s.tokens[o2];
      if ("inline" !== l2.type)
        continue;
      if (!l2.children || 1 !== l2.children.length && 3 !== l2.children.length)
        continue;
      if (1 === l2.children.length && "image" !== l2.children[0].type)
        continue;
      if (3 === l2.children.length) {
        const [t3, e2, n2] = l2.children;
        if ("link_open" !== t3.type || "image" !== e2.type || "link_close" !== n2.type)
          continue;
      }
      if (0 !== o2 && "paragraph_open" !== s.tokens[o2 - 1].type)
        continue;
      if (o2 !== c2 - 1 && "paragraph_close" !== s.tokens[o2 + 1].type)
        continue;
      const f2 = s.tokens[o2 - 1];
      let h3;
      if (f2.type = "figure_open", f2.tag = "figure", s.tokens[o2 + 1].type = "figure_close", s.tokens[o2 + 1].tag = "figure", r2.dataType && s.tokens[o2 - 1].attrPush(["data-type", "image"]), r2.link && 1 === l2.children.length) {
        [h3] = l2.children;
        const t3 = new s.Token("link_open", "a", 1);
        t3.attrPush(["href", h3.attrGet("src")]), l2.children.unshift(t3), l2.children.push(new s.Token("link_close", "a", -1));
      }
      if (h3 = 1 === l2.children.length ? l2.children[0] : l2.children[1], r2.figcaption) {
        const n2 = i(r2.figcaption, h3);
        if (n2) {
          const [i2] = t2.parseInline(n2, s.env);
          l2.children.push(new s.Token("figcaption_open", "figcaption", 1)), l2.children.push(...i2.children), l2.children.push(new s.Token("figcaption_close", "figcaption", -1)), h3.attrs && (h3.attrs = e(h3.attrs, "title"));
        }
      }
      if (r2.copyAttrs && h3.attrs) {
        const t3 = true === r2.copyAttrs ? "" : r2.copyAttrs;
        f2.attrs = h3.attrs.filter(([e2]) => e2.match(t3)).map((t4) => Array.from(t4));
      }
      if (r2.tabindex && (s.tokens[o2 - 1].attrPush(["tabindex", a2]), a2++), r2.lazy && (h3.attrs.some(([t3]) => "loading" === t3) || h3.attrs.push(["loading", "lazy"])), r2.async && (h3.attrs.some(([t3]) => "decoding" === t3) || h3.attrs.push(["decoding", "async"])), r2.classes && "string" == typeof r2.classes) {
        let t3 = false;
        for (let e2 = 0, n2 = h3.attrs.length; e2 < n2 && !t3; e2++) {
          const n3 = h3.attrs[e2];
          "class" === n3[0] && (n3[1] = `${n3[1]} ${r2.classes}`, t3 = true);
        }
        t3 || h3.attrs.push(["class", r2.classes]);
      }
      if (r2.removeSrc) {
        const t3 = h3.attrs.find(([t4]) => "src" === t4);
        h3.attrs.push(["data-src", t3[1]]), n(h3, "src");
      }
    }
  });
}
var disableCheckboxes = true;
var useLabelWrapper = false;
var useLabelAfter = false;
var markdownItTaskLists = function(md, options) {
  if (options) {
    disableCheckboxes = !options.enabled;
    useLabelWrapper = !!options.label;
    useLabelAfter = !!options.labelAfter;
  }
  md.core.ruler.after("inline", "github-task-lists", function(state) {
    var tokens = state.tokens;
    for (var i2 = 2; i2 < tokens.length; i2++) {
      if (isTodoItem(tokens, i2)) {
        todoify(tokens[i2], state.Token);
        attrSet2(tokens[i2 - 2], "class", "task-list-item" + (!disableCheckboxes ? " enabled" : ""));
        attrSet2(tokens[parentToken(tokens, i2 - 2)], "class", "contains-task-list");
      }
    }
  });
};
function attrSet2(token2, name2, value) {
  var index = token2.attrIndex(name2);
  var attr = [name2, value];
  if (index < 0) {
    token2.attrPush(attr);
  } else {
    token2.attrs[index] = attr;
  }
}
function parentToken(tokens, index) {
  var targetLevel = tokens[index].level - 1;
  for (var i2 = index - 1; i2 >= 0; i2--) {
    if (tokens[i2].level === targetLevel) {
      return i2;
    }
  }
  return -1;
}
function isTodoItem(tokens, index) {
  return isInline(tokens[index]) && isParagraph(tokens[index - 1]) && isListItem(tokens[index - 2]) && startsWithTodoMarkdown(tokens[index]);
}
function todoify(token2, TokenConstructor) {
  token2.children.unshift(makeCheckbox(token2, TokenConstructor));
  token2.children[1].content = token2.children[1].content.slice(3);
  token2.content = token2.content.slice(3);
  if (useLabelWrapper) {
    if (useLabelAfter) {
      token2.children.pop();
      var id = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
      token2.children[0].content = token2.children[0].content.slice(0, -1) + ' id="' + id + '">';
      token2.children.push(afterLabel(token2.content, id, TokenConstructor));
    } else {
      token2.children.unshift(beginLabel(TokenConstructor));
      token2.children.push(endLabel(TokenConstructor));
    }
  }
}
function makeCheckbox(token2, TokenConstructor) {
  var checkbox = new TokenConstructor("html_inline", "", 0);
  var disabledAttr = disableCheckboxes ? ' disabled="" ' : "";
  if (token2.content.indexOf("[ ] ") === 0) {
    checkbox.content = '<input class="task-list-item-checkbox"' + disabledAttr + 'type="checkbox">';
  } else if (token2.content.indexOf("[x] ") === 0 || token2.content.indexOf("[X] ") === 0) {
    checkbox.content = '<input class="task-list-item-checkbox" checked=""' + disabledAttr + 'type="checkbox">';
  }
  return checkbox;
}
function beginLabel(TokenConstructor) {
  var token2 = new TokenConstructor("html_inline", "", 0);
  token2.content = "<label>";
  return token2;
}
function endLabel(TokenConstructor) {
  var token2 = new TokenConstructor("html_inline", "", 0);
  token2.content = "</label>";
  return token2;
}
function afterLabel(content2, id, TokenConstructor) {
  var token2 = new TokenConstructor("html_inline", "", 0);
  token2.content = '<label class="task-list-item-label" for="' + id + '">' + content2 + "</label>";
  token2.attrs = [{ for: id }];
  return token2;
}
function isInline(token2) {
  return token2.type === "inline";
}
function isParagraph(token2) {
  return token2.type === "paragraph_open";
}
function isListItem(token2) {
  return token2.type === "list_item_open";
}
function startsWithTodoMarkdown(token2) {
  return token2.content.indexOf("[ ] ") === 0 || token2.content.indexOf("[x] ") === 0 || token2.content.indexOf("[X] ") === 0;
}
const Me = /* @__PURE__ */ getDefaultExportFromCjs(markdownItTaskLists);
const perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
const warned = /* @__PURE__ */ new Set();
const emitWarning = (msg, type, code3, fn) => {
  typeof process === "object" && process && typeof process.emitWarning === "function" ? process.emitWarning(msg, type, code3, fn) : console.error(`[${code3}] ${type}: ${msg}`);
};
const shouldWarn = (code3) => !warned.has(code3);
const isPosInt = (n2) => n2 && n2 === Math.floor(n2) && n2 > 0 && isFinite(n2);
const getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
class ZeroArray extends Array {
  constructor(size) {
    super(size);
    this.fill(0);
  }
}
const _Stack = class _Stack {
  constructor(max, HeapCls) {
    __publicField(this, "heap");
    __publicField(this, "length");
    if (!__privateGet(_Stack, _constructing)) {
      throw new TypeError("instantiate Stack using Stack.create(n)");
    }
    this.heap = new HeapCls(max);
    this.length = 0;
  }
  static create(max) {
    const HeapCls = getUintArray(max);
    if (!HeapCls)
      return [];
    __privateSet(_Stack, _constructing, true);
    const s = new _Stack(max, HeapCls);
    __privateSet(_Stack, _constructing, false);
    return s;
  }
  push(n2) {
    this.heap[this.length++] = n2;
  }
  pop() {
    return this.heap[--this.length];
  }
};
_constructing = new WeakMap();
// private constructor
__privateAdd(_Stack, _constructing, false);
let Stack = _Stack;
const _LRUCache = class _LRUCache {
  constructor(options) {
    __privateAdd(this, _initializeTTLTracking);
    __privateAdd(this, _initializeSizeTracking);
    __privateAdd(this, _indexes);
    __privateAdd(this, _rindexes);
    __privateAdd(this, _isValidIndex);
    __privateAdd(this, _evict);
    __privateAdd(this, _backgroundFetch);
    __privateAdd(this, _isBackgroundFetch);
    __privateAdd(this, _connect);
    __privateAdd(this, _moveToTail);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    __privateAdd(this, _max, void 0);
    __privateAdd(this, _maxSize, void 0);
    __privateAdd(this, _dispose, void 0);
    __privateAdd(this, _disposeAfter, void 0);
    __privateAdd(this, _fetchMethod, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    __publicField(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    __publicField(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    __publicField(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    __publicField(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    __publicField(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    __publicField(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    __publicField(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    __publicField(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    __publicField(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    __publicField(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    __publicField(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    __publicField(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    __publicField(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    __publicField(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    __publicField(this, "ignoreFetchAbort");
    // computed properties
    __privateAdd(this, _size, void 0);
    __privateAdd(this, _calculatedSize, void 0);
    __privateAdd(this, _keyMap, void 0);
    __privateAdd(this, _keyList, void 0);
    __privateAdd(this, _valList, void 0);
    __privateAdd(this, _next, void 0);
    __privateAdd(this, _prev, void 0);
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _free, void 0);
    __privateAdd(this, _disposed, void 0);
    __privateAdd(this, _sizes, void 0);
    __privateAdd(this, _starts, void 0);
    __privateAdd(this, _ttls, void 0);
    __privateAdd(this, _hasDispose, void 0);
    __privateAdd(this, _hasFetchMethod, void 0);
    __privateAdd(this, _hasDisposeAfter, void 0);
    // conditionally set private methods related to TTL
    __privateAdd(this, _updateItemAge, () => {
    });
    __privateAdd(this, _statusTTL, () => {
    });
    __privateAdd(this, _setItemTTL, () => {
    });
    /* c8 ignore stop */
    __privateAdd(this, _isStale, () => false);
    __privateAdd(this, _removeItemSize, (_i) => {
    });
    __privateAdd(this, _addItemSize, (_i, _s, _st) => {
    });
    __privateAdd(this, _requireSize, (_k, _v, size, sizeCalculation) => {
      if (size || sizeCalculation) {
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      }
      return 0;
    });
    const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError("max option must be a nonnegative integer");
    }
    const UintArray = max ? getUintArray(max) : Array;
    if (!UintArray) {
      throw new Error("invalid max value: " + max);
    }
    __privateSet(this, _max, max);
    __privateSet(this, _maxSize, maxSize);
    this.maxEntrySize = maxEntrySize || __privateGet(this, _maxSize);
    this.sizeCalculation = sizeCalculation;
    if (this.sizeCalculation) {
      if (!__privateGet(this, _maxSize) && !this.maxEntrySize) {
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      }
      if (typeof this.sizeCalculation !== "function") {
        throw new TypeError("sizeCalculation set to non-function");
      }
    }
    if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
      throw new TypeError("fetchMethod must be a function if specified");
    }
    __privateSet(this, _fetchMethod, fetchMethod);
    __privateSet(this, _hasFetchMethod, !!fetchMethod);
    __privateSet(this, _keyMap, /* @__PURE__ */ new Map());
    __privateSet(this, _keyList, new Array(max).fill(void 0));
    __privateSet(this, _valList, new Array(max).fill(void 0));
    __privateSet(this, _next, new UintArray(max));
    __privateSet(this, _prev, new UintArray(max));
    __privateSet(this, _head, 0);
    __privateSet(this, _tail, 0);
    __privateSet(this, _free, Stack.create(max));
    __privateSet(this, _size, 0);
    __privateSet(this, _calculatedSize, 0);
    if (typeof dispose === "function") {
      __privateSet(this, _dispose, dispose);
    }
    if (typeof disposeAfter === "function") {
      __privateSet(this, _disposeAfter, disposeAfter);
      __privateSet(this, _disposed, []);
    } else {
      __privateSet(this, _disposeAfter, void 0);
      __privateSet(this, _disposed, void 0);
    }
    __privateSet(this, _hasDispose, !!__privateGet(this, _dispose));
    __privateSet(this, _hasDisposeAfter, !!__privateGet(this, _disposeAfter));
    this.noDisposeOnSet = !!noDisposeOnSet;
    this.noUpdateTTL = !!noUpdateTTL;
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
    this.ignoreFetchAbort = !!ignoreFetchAbort;
    if (this.maxEntrySize !== 0) {
      if (__privateGet(this, _maxSize) !== 0) {
        if (!isPosInt(__privateGet(this, _maxSize))) {
          throw new TypeError("maxSize must be a positive integer if specified");
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      }
      __privateMethod(this, _initializeSizeTracking, initializeSizeTracking_fn).call(this);
    }
    this.allowStale = !!allowStale;
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
    this.updateAgeOnGet = !!updateAgeOnGet;
    this.updateAgeOnHas = !!updateAgeOnHas;
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
    this.ttlAutopurge = !!ttlAutopurge;
    this.ttl = ttl || 0;
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError("ttl must be a positive integer if specified");
      }
      __privateMethod(this, _initializeTTLTracking, initializeTTLTracking_fn).call(this);
    }
    if (__privateGet(this, _max) === 0 && this.ttl === 0 && __privateGet(this, _maxSize) === 0) {
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    }
    if (!this.ttlAutopurge && !__privateGet(this, _max) && !__privateGet(this, _maxSize)) {
      const code3 = "LRU_CACHE_UNBOUNDED";
      if (shouldWarn(code3)) {
        warned.add(code3);
        const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
        emitWarning(msg, "UnboundedCacheWarning", code3, _LRUCache);
      }
    }
  }
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(c2) {
    return {
      // properties
      starts: __privateGet(c2, _starts),
      ttls: __privateGet(c2, _ttls),
      sizes: __privateGet(c2, _sizes),
      keyMap: __privateGet(c2, _keyMap),
      keyList: __privateGet(c2, _keyList),
      valList: __privateGet(c2, _valList),
      next: __privateGet(c2, _next),
      prev: __privateGet(c2, _prev),
      get head() {
        return __privateGet(c2, _head);
      },
      get tail() {
        return __privateGet(c2, _tail);
      },
      free: __privateGet(c2, _free),
      // methods
      isBackgroundFetch: (p2) => {
        var _a;
        return __privateMethod(_a = c2, _isBackgroundFetch, isBackgroundFetch_fn).call(_a, p2);
      },
      backgroundFetch: (k2, index, options, context) => {
        var _a;
        return __privateMethod(_a = c2, _backgroundFetch, backgroundFetch_fn).call(_a, k2, index, options, context);
      },
      moveToTail: (index) => {
        var _a;
        return __privateMethod(_a = c2, _moveToTail, moveToTail_fn).call(_a, index);
      },
      indexes: (options) => {
        var _a;
        return __privateMethod(_a = c2, _indexes, indexes_fn).call(_a, options);
      },
      rindexes: (options) => {
        var _a;
        return __privateMethod(_a = c2, _rindexes, rindexes_fn).call(_a, options);
      },
      isStale: (index) => {
        var _a;
        return __privateGet(_a = c2, _isStale).call(_a, index);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return __privateGet(this, _max);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return __privateGet(this, _maxSize);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return __privateGet(this, _calculatedSize);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return __privateGet(this, _size);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return __privateGet(this, _fetchMethod);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return __privateGet(this, _dispose);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return __privateGet(this, _disposeAfter);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(key) {
    return __privateGet(this, _keyMap).has(key) ? Infinity : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      if (__privateGet(this, _valList)[i2] !== void 0 && __privateGet(this, _keyList)[i2] !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield [__privateGet(this, _keyList)[i2], __privateGet(this, _valList)[i2]];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      if (__privateGet(this, _valList)[i2] !== void 0 && __privateGet(this, _keyList)[i2] !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield [__privateGet(this, _keyList)[i2], __privateGet(this, _valList)[i2]];
      }
    }
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const k2 = __privateGet(this, _keyList)[i2];
      if (k2 !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield k2;
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const k2 = __privateGet(this, _keyList)[i2];
      if (k2 !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield k2;
      }
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      if (v !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield __privateGet(this, _valList)[i2];
      }
    }
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      if (v !== void 0 && !__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, __privateGet(this, _valList)[i2])) {
        yield __privateGet(this, _valList)[i2];
      }
    }
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(fn, getOptions = {}) {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      if (fn(value, __privateGet(this, _keyList)[i2], this)) {
        return this.get(__privateGet(this, _keyList)[i2], getOptions);
      }
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(fn, thisp = this) {
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, __privateGet(this, _keyList)[i2], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(fn, thisp = this) {
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this)) {
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, __privateGet(this, _keyList)[i2], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let deleted = false;
    for (const i2 of __privateMethod(this, _rindexes, rindexes_fn).call(this, { allowStale: true })) {
      if (__privateGet(this, _isStale).call(this, i2)) {
        this.delete(__privateGet(this, _keyList)[i2]);
        deleted = true;
      }
    }
    return deleted;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const arr = [];
    for (const i2 of __privateMethod(this, _indexes, indexes_fn).call(this, { allowStale: true })) {
      const key = __privateGet(this, _keyList)[i2];
      const v = __privateGet(this, _valList)[i2];
      const value = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
      if (value === void 0 || key === void 0)
        continue;
      const entry = { value };
      if (__privateGet(this, _ttls) && __privateGet(this, _starts)) {
        entry.ttl = __privateGet(this, _ttls)[i2];
        const age = perf.now() - __privateGet(this, _starts)[i2];
        entry.start = Math.floor(Date.now() - age);
      }
      if (__privateGet(this, _sizes)) {
        entry.size = __privateGet(this, _sizes)[i2];
      }
      arr.unshift([key, entry]);
    }
    return arr;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(arr) {
    this.clear();
    for (const [key, entry] of arr) {
      if (entry.start) {
        const age = Date.now() - entry.start;
        entry.start = perf.now() - age;
      }
      this.set(key, entry.value, entry);
    }
  }
  /**
   * Add a value to the cache.
   */
  set(k2, v, setOptions = {}) {
    var _a, _b, _c;
    const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
    let { noUpdateTTL = this.noUpdateTTL } = setOptions;
    const size = __privateGet(this, _requireSize).call(this, k2, v, setOptions.size || 0, sizeCalculation);
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = "miss";
        status.maxEntrySizeExceeded = true;
      }
      this.delete(k2);
      return this;
    }
    let index = __privateGet(this, _size) === 0 ? void 0 : __privateGet(this, _keyMap).get(k2);
    if (index === void 0) {
      index = __privateGet(this, _size) === 0 ? __privateGet(this, _tail) : __privateGet(this, _free).length !== 0 ? __privateGet(this, _free).pop() : __privateGet(this, _size) === __privateGet(this, _max) ? __privateMethod(this, _evict, evict_fn).call(this, false) : __privateGet(this, _size);
      __privateGet(this, _keyList)[index] = k2;
      __privateGet(this, _valList)[index] = v;
      __privateGet(this, _keyMap).set(k2, index);
      __privateGet(this, _next)[__privateGet(this, _tail)] = index;
      __privateGet(this, _prev)[index] = __privateGet(this, _tail);
      __privateSet(this, _tail, index);
      __privateWrapper(this, _size)._++;
      __privateGet(this, _addItemSize).call(this, index, size, status);
      if (status)
        status.set = "add";
      noUpdateTTL = false;
    } else {
      __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index);
      const oldVal = __privateGet(this, _valList)[index];
      if (v !== oldVal) {
        if (__privateGet(this, _hasFetchMethod) && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, oldVal)) {
          oldVal.__abortController.abort(new Error("replaced"));
        } else if (!noDisposeOnSet) {
          if (__privateGet(this, _hasDispose)) {
            (_a = __privateGet(this, _dispose)) == null ? void 0 : _a.call(this, oldVal, k2, "set");
          }
          if (__privateGet(this, _hasDisposeAfter)) {
            (_b = __privateGet(this, _disposed)) == null ? void 0 : _b.push([oldVal, k2, "set"]);
          }
        }
        __privateGet(this, _removeItemSize).call(this, index);
        __privateGet(this, _addItemSize).call(this, index, size, status);
        __privateGet(this, _valList)[index] = v;
        if (status) {
          status.set = "replace";
          const oldValue = oldVal && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, oldVal) ? oldVal.__staleWhileFetching : oldVal;
          if (oldValue !== void 0)
            status.oldValue = oldValue;
        }
      } else if (status) {
        status.set = "update";
      }
    }
    if (ttl !== 0 && !__privateGet(this, _ttls)) {
      __privateMethod(this, _initializeTTLTracking, initializeTTLTracking_fn).call(this);
    }
    if (__privateGet(this, _ttls)) {
      if (!noUpdateTTL) {
        __privateGet(this, _setItemTTL).call(this, index, ttl, start);
      }
      if (status)
        __privateGet(this, _statusTTL).call(this, status, index);
    }
    if (!noDisposeOnSet && __privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_c = __privateGet(this, _disposeAfter)) == null ? void 0 : _c.call(this, ...task);
      }
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var _a;
    try {
      while (__privateGet(this, _size)) {
        const val = __privateGet(this, _valList)[__privateGet(this, _head)];
        __privateMethod(this, _evict, evict_fn).call(this, true);
        if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, val)) {
          if (val.__staleWhileFetching) {
            return val.__staleWhileFetching;
          }
        } else if (val !== void 0) {
          return val;
        }
      }
    } finally {
      if (__privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
        const dt = __privateGet(this, _disposed);
        let task;
        while (task = dt == null ? void 0 : dt.shift()) {
          (_a = __privateGet(this, _disposeAfter)) == null ? void 0 : _a.call(this, ...task);
        }
      }
    }
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(k2, hasOptions = {}) {
    const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
    const index = __privateGet(this, _keyMap).get(k2);
    if (index !== void 0) {
      const v = __privateGet(this, _valList)[index];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) && v.__staleWhileFetching === void 0) {
        return false;
      }
      if (!__privateGet(this, _isStale).call(this, index)) {
        if (updateAgeOnHas) {
          __privateGet(this, _updateItemAge).call(this, index);
        }
        if (status) {
          status.has = "hit";
          __privateGet(this, _statusTTL).call(this, status, index);
        }
        return true;
      } else if (status) {
        status.has = "stale";
        __privateGet(this, _statusTTL).call(this, status, index);
      }
    } else if (status) {
      status.has = "miss";
    }
    return false;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(k2, peekOptions = {}) {
    const { allowStale = this.allowStale } = peekOptions;
    const index = __privateGet(this, _keyMap).get(k2);
    if (index !== void 0 && (allowStale || !__privateGet(this, _isStale).call(this, index))) {
      const v = __privateGet(this, _valList)[index];
      return __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v) ? v.__staleWhileFetching : v;
    }
  }
  async fetch(k2, fetchOptions = {}) {
    const {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      context,
      forceRefresh = false,
      status,
      signal
    } = fetchOptions;
    if (!__privateGet(this, _hasFetchMethod)) {
      if (status)
        status.fetch = "get";
      return this.get(k2, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status
      });
    }
    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal
    };
    let index = __privateGet(this, _keyMap).get(k2);
    if (index === void 0) {
      if (status)
        status.fetch = "miss";
      const p2 = __privateMethod(this, _backgroundFetch, backgroundFetch_fn).call(this, k2, index, options, context);
      return p2.__returned = p2;
    } else {
      const v = __privateGet(this, _valList)[index];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
        const stale = allowStale && v.__staleWhileFetching !== void 0;
        if (status) {
          status.fetch = "inflight";
          if (stale)
            status.returnedStale = true;
        }
        return stale ? v.__staleWhileFetching : v.__returned = v;
      }
      const isStale = __privateGet(this, _isStale).call(this, index);
      if (!forceRefresh && !isStale) {
        if (status)
          status.fetch = "hit";
        __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index);
        if (updateAgeOnGet) {
          __privateGet(this, _updateItemAge).call(this, index);
        }
        if (status)
          __privateGet(this, _statusTTL).call(this, status, index);
        return v;
      }
      const p2 = __privateMethod(this, _backgroundFetch, backgroundFetch_fn).call(this, k2, index, options, context);
      const hasStale = p2.__staleWhileFetching !== void 0;
      const staleVal = hasStale && allowStale;
      if (status) {
        status.fetch = isStale ? "stale" : "refresh";
        if (staleVal && isStale)
          status.returnedStale = true;
      }
      return staleVal ? p2.__staleWhileFetching : p2.__returned = p2;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(k2, getOptions = {}) {
    const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
    const index = __privateGet(this, _keyMap).get(k2);
    if (index !== void 0) {
      const value = __privateGet(this, _valList)[index];
      const fetching = __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, value);
      if (status)
        __privateGet(this, _statusTTL).call(this, status, index);
      if (__privateGet(this, _isStale).call(this, index)) {
        if (status)
          status.get = "stale";
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k2);
          }
          if (status && allowStale)
            status.returnedStale = true;
          return allowStale ? value : void 0;
        } else {
          if (status && allowStale && value.__staleWhileFetching !== void 0) {
            status.returnedStale = true;
          }
          return allowStale ? value.__staleWhileFetching : void 0;
        }
      } else {
        if (status)
          status.get = "hit";
        if (fetching) {
          return value.__staleWhileFetching;
        }
        __privateMethod(this, _moveToTail, moveToTail_fn).call(this, index);
        if (updateAgeOnGet) {
          __privateGet(this, _updateItemAge).call(this, index);
        }
        return value;
      }
    } else if (status) {
      status.get = "miss";
    }
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(k2) {
    var _a, _b, _c, _d;
    let deleted = false;
    if (__privateGet(this, _size) !== 0) {
      const index = __privateGet(this, _keyMap).get(k2);
      if (index !== void 0) {
        deleted = true;
        if (__privateGet(this, _size) === 1) {
          this.clear();
        } else {
          __privateGet(this, _removeItemSize).call(this, index);
          const v = __privateGet(this, _valList)[index];
          if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
            v.__abortController.abort(new Error("deleted"));
          } else if (__privateGet(this, _hasDispose) || __privateGet(this, _hasDisposeAfter)) {
            if (__privateGet(this, _hasDispose)) {
              (_a = __privateGet(this, _dispose)) == null ? void 0 : _a.call(this, v, k2, "delete");
            }
            if (__privateGet(this, _hasDisposeAfter)) {
              (_b = __privateGet(this, _disposed)) == null ? void 0 : _b.push([v, k2, "delete"]);
            }
          }
          __privateGet(this, _keyMap).delete(k2);
          __privateGet(this, _keyList)[index] = void 0;
          __privateGet(this, _valList)[index] = void 0;
          if (index === __privateGet(this, _tail)) {
            __privateSet(this, _tail, __privateGet(this, _prev)[index]);
          } else if (index === __privateGet(this, _head)) {
            __privateSet(this, _head, __privateGet(this, _next)[index]);
          } else {
            __privateGet(this, _next)[__privateGet(this, _prev)[index]] = __privateGet(this, _next)[index];
            __privateGet(this, _prev)[__privateGet(this, _next)[index]] = __privateGet(this, _prev)[index];
          }
          __privateWrapper(this, _size)._--;
          __privateGet(this, _free).push(index);
        }
      }
    }
    if (__privateGet(this, _hasDisposeAfter) && ((_c = __privateGet(this, _disposed)) == null ? void 0 : _c.length)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_d = __privateGet(this, _disposeAfter)) == null ? void 0 : _d.call(this, ...task);
      }
    }
    return deleted;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var _a, _b, _c;
    for (const index of __privateMethod(this, _rindexes, rindexes_fn).call(this, { allowStale: true })) {
      const v = __privateGet(this, _valList)[index];
      if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
        v.__abortController.abort(new Error("deleted"));
      } else {
        const k2 = __privateGet(this, _keyList)[index];
        if (__privateGet(this, _hasDispose)) {
          (_a = __privateGet(this, _dispose)) == null ? void 0 : _a.call(this, v, k2, "delete");
        }
        if (__privateGet(this, _hasDisposeAfter)) {
          (_b = __privateGet(this, _disposed)) == null ? void 0 : _b.push([v, k2, "delete"]);
        }
      }
    }
    __privateGet(this, _keyMap).clear();
    __privateGet(this, _valList).fill(void 0);
    __privateGet(this, _keyList).fill(void 0);
    if (__privateGet(this, _ttls) && __privateGet(this, _starts)) {
      __privateGet(this, _ttls).fill(0);
      __privateGet(this, _starts).fill(0);
    }
    if (__privateGet(this, _sizes)) {
      __privateGet(this, _sizes).fill(0);
    }
    __privateSet(this, _head, 0);
    __privateSet(this, _tail, 0);
    __privateGet(this, _free).length = 0;
    __privateSet(this, _calculatedSize, 0);
    __privateSet(this, _size, 0);
    if (__privateGet(this, _hasDisposeAfter) && __privateGet(this, _disposed)) {
      const dt = __privateGet(this, _disposed);
      let task;
      while (task = dt == null ? void 0 : dt.shift()) {
        (_c = __privateGet(this, _disposeAfter)) == null ? void 0 : _c.call(this, ...task);
      }
    }
  }
};
_max = new WeakMap();
_maxSize = new WeakMap();
_dispose = new WeakMap();
_disposeAfter = new WeakMap();
_fetchMethod = new WeakMap();
_size = new WeakMap();
_calculatedSize = new WeakMap();
_keyMap = new WeakMap();
_keyList = new WeakMap();
_valList = new WeakMap();
_next = new WeakMap();
_prev = new WeakMap();
_head = new WeakMap();
_tail = new WeakMap();
_free = new WeakMap();
_disposed = new WeakMap();
_sizes = new WeakMap();
_starts = new WeakMap();
_ttls = new WeakMap();
_hasDispose = new WeakMap();
_hasFetchMethod = new WeakMap();
_hasDisposeAfter = new WeakMap();
_initializeTTLTracking = new WeakSet();
initializeTTLTracking_fn = function() {
  const ttls = new ZeroArray(__privateGet(this, _max));
  const starts = new ZeroArray(__privateGet(this, _max));
  __privateSet(this, _ttls, ttls);
  __privateSet(this, _starts, starts);
  __privateSet(this, _setItemTTL, (index, ttl, start = perf.now()) => {
    starts[index] = ttl !== 0 ? start : 0;
    ttls[index] = ttl;
    if (ttl !== 0 && this.ttlAutopurge) {
      const t2 = setTimeout(() => {
        if (__privateGet(this, _isStale).call(this, index)) {
          this.delete(__privateGet(this, _keyList)[index]);
        }
      }, ttl + 1);
      if (t2.unref) {
        t2.unref();
      }
    }
  });
  __privateSet(this, _updateItemAge, (index) => {
    starts[index] = ttls[index] !== 0 ? perf.now() : 0;
  });
  __privateSet(this, _statusTTL, (status, index) => {
    if (ttls[index]) {
      const ttl = ttls[index];
      const start = starts[index];
      status.ttl = ttl;
      status.start = start;
      status.now = cachedNow || getNow();
      status.remainingTTL = status.now + ttl - start;
    }
  });
  let cachedNow = 0;
  const getNow = () => {
    const n2 = perf.now();
    if (this.ttlResolution > 0) {
      cachedNow = n2;
      const t2 = setTimeout(() => cachedNow = 0, this.ttlResolution);
      if (t2.unref) {
        t2.unref();
      }
    }
    return n2;
  };
  this.getRemainingTTL = (key) => {
    const index = __privateGet(this, _keyMap).get(key);
    if (index === void 0) {
      return 0;
    }
    return ttls[index] === 0 || starts[index] === 0 ? Infinity : starts[index] + ttls[index] - (cachedNow || getNow());
  };
  __privateSet(this, _isStale, (index) => {
    return ttls[index] !== 0 && starts[index] !== 0 && (cachedNow || getNow()) - starts[index] > ttls[index];
  });
};
_updateItemAge = new WeakMap();
_statusTTL = new WeakMap();
_setItemTTL = new WeakMap();
_isStale = new WeakMap();
_initializeSizeTracking = new WeakSet();
initializeSizeTracking_fn = function() {
  const sizes = new ZeroArray(__privateGet(this, _max));
  __privateSet(this, _calculatedSize, 0);
  __privateSet(this, _sizes, sizes);
  __privateSet(this, _removeItemSize, (index) => {
    __privateSet(this, _calculatedSize, __privateGet(this, _calculatedSize) - sizes[index]);
    sizes[index] = 0;
  });
  __privateSet(this, _requireSize, (k2, v, size, sizeCalculation) => {
    if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
      return 0;
    }
    if (!isPosInt(size)) {
      if (sizeCalculation) {
        if (typeof sizeCalculation !== "function") {
          throw new TypeError("sizeCalculation must be a function");
        }
        size = sizeCalculation(v, k2);
        if (!isPosInt(size)) {
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        }
      } else {
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      }
    }
    return size;
  });
  __privateSet(this, _addItemSize, (index, size, status) => {
    sizes[index] = size;
    if (__privateGet(this, _maxSize)) {
      const maxSize = __privateGet(this, _maxSize) - sizes[index];
      while (__privateGet(this, _calculatedSize) > maxSize) {
        __privateMethod(this, _evict, evict_fn).call(this, true);
      }
    }
    __privateSet(this, _calculatedSize, __privateGet(this, _calculatedSize) + sizes[index]);
    if (status) {
      status.entrySize = size;
      status.totalCalculatedSize = __privateGet(this, _calculatedSize);
    }
  });
};
_removeItemSize = new WeakMap();
_addItemSize = new WeakMap();
_requireSize = new WeakMap();
_indexes = new WeakSet();
indexes_fn = function* ({ allowStale = this.allowStale } = {}) {
  if (__privateGet(this, _size)) {
    for (let i2 = __privateGet(this, _tail); true; ) {
      if (!__privateMethod(this, _isValidIndex, isValidIndex_fn).call(this, i2)) {
        break;
      }
      if (allowStale || !__privateGet(this, _isStale).call(this, i2)) {
        yield i2;
      }
      if (i2 === __privateGet(this, _head)) {
        break;
      } else {
        i2 = __privateGet(this, _prev)[i2];
      }
    }
  }
};
_rindexes = new WeakSet();
rindexes_fn = function* ({ allowStale = this.allowStale } = {}) {
  if (__privateGet(this, _size)) {
    for (let i2 = __privateGet(this, _head); true; ) {
      if (!__privateMethod(this, _isValidIndex, isValidIndex_fn).call(this, i2)) {
        break;
      }
      if (allowStale || !__privateGet(this, _isStale).call(this, i2)) {
        yield i2;
      }
      if (i2 === __privateGet(this, _tail)) {
        break;
      } else {
        i2 = __privateGet(this, _next)[i2];
      }
    }
  }
};
_isValidIndex = new WeakSet();
isValidIndex_fn = function(index) {
  return index !== void 0 && __privateGet(this, _keyMap).get(__privateGet(this, _keyList)[index]) === index;
};
_evict = new WeakSet();
evict_fn = function(free) {
  var _a, _b;
  const head = __privateGet(this, _head);
  const k2 = __privateGet(this, _keyList)[head];
  const v = __privateGet(this, _valList)[head];
  if (__privateGet(this, _hasFetchMethod) && __privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
    v.__abortController.abort(new Error("evicted"));
  } else if (__privateGet(this, _hasDispose) || __privateGet(this, _hasDisposeAfter)) {
    if (__privateGet(this, _hasDispose)) {
      (_a = __privateGet(this, _dispose)) == null ? void 0 : _a.call(this, v, k2, "evict");
    }
    if (__privateGet(this, _hasDisposeAfter)) {
      (_b = __privateGet(this, _disposed)) == null ? void 0 : _b.push([v, k2, "evict"]);
    }
  }
  __privateGet(this, _removeItemSize).call(this, head);
  if (free) {
    __privateGet(this, _keyList)[head] = void 0;
    __privateGet(this, _valList)[head] = void 0;
    __privateGet(this, _free).push(head);
  }
  if (__privateGet(this, _size) === 1) {
    __privateSet(this, _head, __privateSet(this, _tail, 0));
    __privateGet(this, _free).length = 0;
  } else {
    __privateSet(this, _head, __privateGet(this, _next)[head]);
  }
  __privateGet(this, _keyMap).delete(k2);
  __privateWrapper(this, _size)._--;
  return head;
};
_backgroundFetch = new WeakSet();
backgroundFetch_fn = function(k2, index, options, context) {
  const v = index === void 0 ? void 0 : __privateGet(this, _valList)[index];
  if (__privateMethod(this, _isBackgroundFetch, isBackgroundFetch_fn).call(this, v)) {
    return v;
  }
  const ac2 = new AbortController();
  const { signal } = options;
  signal == null ? void 0 : signal.addEventListener("abort", () => ac2.abort(signal.reason), {
    signal: ac2.signal
  });
  const fetchOpts = {
    signal: ac2.signal,
    options,
    context
  };
  const cb = (v2, updateCache = false) => {
    const { aborted } = ac2.signal;
    const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
    if (options.status) {
      if (aborted && !updateCache) {
        options.status.fetchAborted = true;
        options.status.fetchError = ac2.signal.reason;
        if (ignoreAbort)
          options.status.fetchAbortIgnored = true;
      } else {
        options.status.fetchResolved = true;
      }
    }
    if (aborted && !ignoreAbort && !updateCache) {
      return fetchFail(ac2.signal.reason);
    }
    const bf2 = p2;
    if (__privateGet(this, _valList)[index] === p2) {
      if (v2 === void 0) {
        if (bf2.__staleWhileFetching) {
          __privateGet(this, _valList)[index] = bf2.__staleWhileFetching;
        } else {
          this.delete(k2);
        }
      } else {
        if (options.status)
          options.status.fetchUpdated = true;
        this.set(k2, v2, fetchOpts.options);
      }
    }
    return v2;
  };
  const eb = (er) => {
    if (options.status) {
      options.status.fetchRejected = true;
      options.status.fetchError = er;
    }
    return fetchFail(er);
  };
  const fetchFail = (er) => {
    const { aborted } = ac2.signal;
    const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
    const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
    const noDelete = allowStale || options.noDeleteOnFetchRejection;
    const bf2 = p2;
    if (__privateGet(this, _valList)[index] === p2) {
      const del = !noDelete || bf2.__staleWhileFetching === void 0;
      if (del) {
        this.delete(k2);
      } else if (!allowStaleAborted) {
        __privateGet(this, _valList)[index] = bf2.__staleWhileFetching;
      }
    }
    if (allowStale) {
      if (options.status && bf2.__staleWhileFetching !== void 0) {
        options.status.returnedStale = true;
      }
      return bf2.__staleWhileFetching;
    } else if (bf2.__returned === bf2) {
      throw er;
    }
  };
  const pcall = (res, rej) => {
    var _a;
    const fmp = (_a = __privateGet(this, _fetchMethod)) == null ? void 0 : _a.call(this, k2, v, fetchOpts);
    if (fmp && fmp instanceof Promise) {
      fmp.then((v2) => res(v2), rej);
    }
    ac2.signal.addEventListener("abort", () => {
      if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
        res();
        if (options.allowStaleOnFetchAbort) {
          res = (v2) => cb(v2, true);
        }
      }
    });
  };
  if (options.status)
    options.status.fetchDispatched = true;
  const p2 = new Promise(pcall).then(cb, eb);
  const bf = Object.assign(p2, {
    __abortController: ac2,
    __staleWhileFetching: v,
    __returned: void 0
  });
  if (index === void 0) {
    this.set(k2, bf, { ...fetchOpts.options, status: void 0 });
    index = __privateGet(this, _keyMap).get(k2);
  } else {
    __privateGet(this, _valList)[index] = bf;
  }
  return bf;
};
_isBackgroundFetch = new WeakSet();
isBackgroundFetch_fn = function(p2) {
  if (!__privateGet(this, _hasFetchMethod))
    return false;
  const b2 = p2;
  return !!b2 && b2 instanceof Promise && b2.hasOwnProperty("__staleWhileFetching") && b2.__abortController instanceof AbortController;
};
_connect = new WeakSet();
connect_fn = function(p2, n2) {
  __privateGet(this, _prev)[n2] = p2;
  __privateGet(this, _next)[p2] = n2;
};
_moveToTail = new WeakSet();
moveToTail_fn = function(index) {
  if (index !== __privateGet(this, _tail)) {
    if (index === __privateGet(this, _head)) {
      __privateSet(this, _head, __privateGet(this, _next)[index]);
    } else {
      __privateMethod(this, _connect, connect_fn).call(this, __privateGet(this, _prev)[index], __privateGet(this, _next)[index]);
    }
    __privateMethod(this, _connect, connect_fn).call(this, __privateGet(this, _tail), index);
    __privateSet(this, _tail, index);
  }
};
let LRUCache = _LRUCache;
const xe = LRUCache;
const Ae = (e2, r2) => {
  const l2 = inject("editorId"), { noImgZoomIn: t2 } = e2, n2 = x(() => {
    const o2 = document.querySelectorAll(`#${l2}-preview img`);
    o2.length !== 0 && Te(o2, {
      background: "#00000073"
    });
  });
  onMounted(() => {
    !t2 && n2();
  }), watch([r2, toRef(e2.setting, "preview")], () => {
    !t2 && n2();
  });
}, Re = Ae, Be = (e2, r2) => {
  if (typeof r2[e2] == "string")
    return r2[e2];
  const l$1 = `<i class="${a}-iconfont ${a}-icon-${e2}"></i>`;
  switch (l.iconfontType) {
    case "svg":
      return `<svg class="${a}-icon" aria-hidden="true"><use xlink:href="#${a}-icon-${e2}"></use></svg>`;
    default:
      return l$1;
  }
}, Le = (e2, r2) => {
  const l2 = inject("editorId"), t2 = inject("usedLanguageText"), n2 = inject("customIcon"), o2 = () => {
    document.querySelectorAll(`#${l2}-preview pre`).forEach((d) => {
      var b2, y;
      let s = -1;
      (b2 = d.querySelector(".copy-button")) == null || b2.remove();
      const a2 = ((y = t2.value.copyCode) == null ? void 0 : y.text) || "复制代码", u2 = document.createElement("span");
      u2.setAttribute("class", "copy-button"), u2.dataset.tips = a2, u2.innerHTML = Be("copy", n2.value), u2.addEventListener("click", () => {
        var g, w2;
        clearTimeout(s);
        const m2 = d.querySelector("code").innerText, p2 = _e(e2.formatCopiedText(m2)), f2 = ((g = t2.value.copyCode) == null ? void 0 : g.successTips) || "已复制！", $ = ((w2 = t2.value.copyCode) == null ? void 0 : w2.failTips) || "已复制！";
        u2.dataset.tips = p2 ? f2 : $, s = window.setTimeout(() => {
          u2.dataset.tips = a2;
        }, 1500);
      }), d.appendChild(u2);
    });
  }, i2 = () => {
    nextTick(o2);
  }, c2 = (d) => {
    d && nextTick(o2);
  };
  watch(() => r2.value, i2), watch(() => e2.setting.preview, c2), watch(() => e2.setting.htmlPreview, c2), watch(() => t2.value, o2), onMounted(o2);
}, Ne = Le, Oe = (e2) => {
  var o2;
  const r2 = (o2 = l.editorExtensions) == null ? void 0 : o2.highlight, l$1 = r2 == null ? void 0 : r2.instance, t2 = inject("highlight"), n2 = shallowRef(l$1);
  return onMounted(() => {
    if (!e2.noHighlight && !n2.value) {
      const i2 = document.createElement("script");
      i2.src = t2.value.js, i2.onload = () => {
        n2.value = window.hljs;
      }, i2.id = `${a}-hljs`, h2(i2, "hljs");
      const c2 = document.createElement("link");
      c2.rel = "stylesheet", c2.href = t2.value.css, c2.id = `${a}-hlCss`, h2(c2);
    }
  }), watch(
    () => t2.value.css,
    (i2) => {
      b(`${a}-hlCss`, "href", i2);
    }
  ), n2;
}, Ue = Oe, je = (e2) => {
  const r2 = inject("theme"), { editorExtensions: l$1, mermaidConfig: t2 } = l, n2 = l$1 == null ? void 0 : l$1.mermaid, o2 = shallowRef(n2 == null ? void 0 : n2.instance), i2 = shallowRef(-1), c2 = new xe({
    max: 1e3,
    // 缓存10分钟
    ttl: 6e5
  }), d = () => {
    const a2 = o2.value;
    !e2.noMermaid && a2 && (a2.initialize(
      t2({
        startOnLoad: false,
        theme: r2.value === "dark" ? "dark" : "default"
      })
    ), i2.value = i2.value + 1);
  };
  return watch(
    () => r2.value,
    () => {
      c2.clear(), d();
    }
  ), onMounted(() => {
    if (!e2.noMermaid && !(n2 != null && n2.instance)) {
      const a$1 = (n2 == null ? void 0 : n2.js) || k;
      if (/\.mjs/.test(a$1))
        __vitePreload(() => import(
          /* @vite-ignore */
          /* webpackIgnore: true */
          a$1
        ), true ? [] : void 0).then((u2) => {
          o2.value = u2.default, d();
        });
      else {
        const u2 = document.createElement("script");
        u2.id = `${a}-mermaid`, u2.src = a$1, u2.onload = () => {
          o2.value = window.mermaid, d();
        }, h2(u2, "mermaid");
      }
    }
  }), { mermaidRef: o2, reRenderRef: i2, replaceMermaid: () => {
    nextTick(() => {
      if (!e2.noMermaid && o2.value) {
        const a$1 = document.querySelectorAll(
          `div.${a}-mermaid`
        ), u2 = document.createElement("div");
        u2.style.width = document.body.offsetWidth + "px", u2.style.height = document.body.offsetHeight + "px", u2.style.position = "fixed", u2.style.zIndex = "-10000", u2.style.top = "-10000";
        let b2 = a$1.length;
        b2 > 0 && document.body.appendChild(u2), a$1.forEach(async (y) => {
          let m2 = c2.get(y.innerText);
          if (!m2) {
            const f2 = U(), $ = o2.value.renderAsync || o2.value.render;
            let g = "";
            try {
              g = await $(f2, y.innerText, u2);
            } catch {
            }
            m2 = await e2.sanitizeMermaid(
              typeof g == "string" ? g : g.svg
            ), c2.set(y.innerText, m2);
          }
          const p2 = document.createElement("p");
          p2.className = `${a}-mermaid`, p2.setAttribute("data-processed", ""), p2.innerHTML = m2, y.dataset.line !== void 0 && (p2.dataset.line = y.dataset.line), y.replaceWith(p2), --b2 === 0 && u2.remove();
        });
      }
    });
  } };
}, Ge = je, De = (e2) => {
  var n2;
  const r2 = (n2 = l.editorExtensions) == null ? void 0 : n2.katex, l$1 = r2 == null ? void 0 : r2.instance, t2 = shallowRef(l$1);
  return onMounted(() => {
    if (!e2.noKatex && !t2.value) {
      const o2 = document.createElement("script");
      o2.src = (r2 == null ? void 0 : r2.js) || b$1.js, o2.onload = () => {
        t2.value = window.katex;
      }, o2.id = `${a}-katex`;
      const i2 = document.createElement("link");
      i2.rel = "stylesheet", i2.href = (r2 == null ? void 0 : r2.css) || b$1.css, i2.id = `${a}-katexCss`, h2(o2, "katex"), h2(i2);
    }
  }), t2;
}, Ve = De, ze = (e2, r2) => {
  const l2 = e2.renderer.rules.fence.bind(e2.renderer.rules);
  e2.renderer.rules.fence = (t2, n2, o2, i2, c2) => {
    const d = t2[n2], s = d.content.trim();
    if (d.info === "mermaid") {
      let a$1;
      return t2[n2].map && t2[n2].level === 0 && (a$1 = t2[n2].map[0], t2[n2].attrSet("data-line", String(a$1))), `<div class="${a}-mermaid" ${a$1 !== void 0 ? "data-line=" + a$1 : ""} data-mermaid-theme=${r2.themeRef.value}>${s}</div>`;
    }
    return l2(t2, n2, o2, i2, c2);
  };
}, We = ze, Q = (e2, r2) => {
  let l2 = true, t2 = true;
  const n2 = e2.posMax, o2 = r2 > 0 ? e2.src.charCodeAt(r2 - 1) : -1, i2 = r2 + 1 <= n2 ? e2.src.charCodeAt(r2 + 1) : -1;
  return (o2 === 32 || o2 === 9 || i2 >= 48 && i2 <= 57) && (t2 = false), (i2 === 32 || i2 === 9) && (l2 = false), {
    can_open: l2,
    can_close: t2
  };
}, Ke = (e2, r2) => {
  let l2, t2, n2, o2;
  if (e2.src[e2.pos] !== "$")
    return false;
  if (n2 = Q(e2, e2.pos), !n2.can_open)
    return r2 || (e2.pending += "$"), e2.pos += 1, true;
  const i2 = e2.pos + 1;
  for (l2 = i2; (l2 = e2.src.indexOf("$", l2)) !== -1; ) {
    for (o2 = l2 - 1; e2.src[o2] === "\\"; )
      o2 -= 1;
    if ((l2 - o2) % 2 == 1)
      break;
    l2 += 1;
  }
  return l2 === -1 ? (r2 || (e2.pending += "$"), e2.pos = i2, true) : l2 - i2 === 0 ? (r2 || (e2.pending += "$$"), e2.pos = i2 + 1, true) : (n2 = Q(e2, l2), n2.can_close ? (r2 || (t2 = e2.push("math_inline", "math", 0), t2.markup = "$", t2.content = e2.src.slice(i2, l2)), e2.pos = l2 + 1, true) : (r2 || (e2.pending += "$"), e2.pos = i2, true));
}, qe = (e2, r2, l2, t2) => {
  let n2, o2, i2, c2, d = false, s = e2.bMarks[r2] + e2.tShift[r2], a2 = e2.eMarks[r2];
  if (s + 2 > a2 || e2.src.slice(s, s + 2) !== "$$")
    return false;
  if (s += 2, n2 = e2.src.slice(s, a2), t2)
    return true;
  for (n2.trim().slice(-2) === "$$" && (n2 = n2.trim().slice(0, -2), d = true), i2 = r2; !d && (i2++, !(i2 >= l2 || (s = e2.bMarks[i2] + e2.tShift[i2], a2 = e2.eMarks[i2], s < a2 && e2.tShift[i2] < e2.blkIndent))); )
    e2.src.slice(s, a2).trim().slice(-2) === "$$" && (c2 = e2.src.slice(0, a2).lastIndexOf("$$"), o2 = e2.src.slice(s, c2), d = true);
  e2.line = i2 + 1;
  const u2 = e2.push("math_block", "math", 0);
  return u2.block = true, u2.content = (n2 && n2.trim() ? n2 + `
` : "") + e2.getLines(r2 + 1, i2, e2.tShift[r2], true) + (o2 && o2.trim() ? o2 : ""), u2.map = [r2, e2.line], u2.markup = "$$", true;
}, Ze = (e2, r2) => {
  const l2 = (n2) => {
    if (r2.katexRef.value) {
      const o2 = r2.katexRef.value.renderToString(n2, {
        throwOnError: false
      });
      return `<span class="${a}-katex-inline" data-processed>${o2}</span>`;
    } else
      return `<span class="${a}-katex-inline">${n2}</span>`;
  }, t2 = (n2, o2) => {
    if (r2.katexRef.value) {
      const i2 = r2.katexRef.value.renderToString(n2, {
        throwOnError: false,
        displayMode: true
      });
      return `<p class="${a}-katex-block" data-line=${o2} data-processed>${i2}</p>`;
    } else
      return `<p class="${a}-katex-block" data-line=${o2}>${n2}</p>`;
  };
  e2.inline.ruler.after("escape", "math_inline", Ke), e2.block.ruler.after("blockquote", "math_block", qe, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  }), e2.renderer.rules.math_inline = (n2, o2) => l2(n2[o2].content), e2.renderer.rules.math_block = (n2, o2) => t2(n2[o2].content, n2[o2].map[0]) + `
`;
}, Je = Ze, Xe = (e2, r2) => {
  r2 = r2 || {};
  const l2 = 3, t2 = r2.marker || "!", n2 = t2.charCodeAt(0), o2 = t2.length;
  let i2 = "", c2 = "";
  const d = (a$1, u2, b2, y, m2) => {
    const p2 = a$1[u2];
    return p2.type === "admonition_open" ? (a$1[u2].attrPush([
      "class",
      `${a}-admonition ${a}-admonition-${p2.info}`
    ]), a$1[u2].attrSet("data-line", String(a$1[u2].map[0]))) : p2.type === "admonition_title_open" && a$1[u2].attrPush(["class", `${a}-admonition-title`]), m2.renderToken(a$1, u2, b2);
  }, s = (a2) => {
    const u2 = a2.trim().split(" ", 2);
    c2 = "", i2 = u2[0], u2.length > 1 && (c2 = a2.substring(i2.length + 2)), (c2 === "" || !c2) && (c2 = i2);
  };
  e2.block.ruler.before(
    "code",
    "admonition",
    (a2, u2, b2, y) => {
      let m2, p2, f2, $ = false, g = a2.bMarks[u2] + a2.tShift[u2], w2 = a2.eMarks[u2];
      if (n2 !== a2.src.charCodeAt(g))
        return false;
      for (m2 = g + 1; m2 <= w2 && t2[(m2 - g) % o2] === a2.src[m2]; m2++)
        ;
      const k2 = Math.floor((m2 - g) / o2);
      if (k2 !== l2)
        return false;
      m2 -= (m2 - g) % o2;
      const E = a2.src.slice(g, m2), T = a2.src.slice(m2, w2);
      if (s(T), y)
        return true;
      for (p2 = u2; p2++, !(p2 >= b2 || (g = a2.bMarks[p2] + a2.tShift[p2], w2 = a2.eMarks[p2], g < w2 && a2.sCount[p2] < a2.blkIndent)); )
        if (n2 === a2.src.charCodeAt(g) && !(a2.sCount[p2] - a2.blkIndent >= 4)) {
          for (m2 = g + 1; m2 <= w2 && t2[(m2 - g) % o2] === a2.src[m2]; m2++)
            ;
          if (!(Math.floor((m2 - g) / o2) < k2) && (m2 -= (m2 - g) % o2, m2 = a2.skipSpaces(m2), !(m2 < w2))) {
            $ = true;
            break;
          }
        }
      const M = a2.parentType, B = a2.lineMax;
      return a2.parentType = "root", a2.lineMax = p2, f2 = a2.push("admonition_open", "div", 1), f2.markup = E, f2.block = true, f2.info = i2, f2.map = [u2, p2], f2 = a2.push("admonition_title_open", "p", 1), f2.markup = E + " " + i2, f2.map = [u2, p2], f2 = a2.push("inline", "", 0), f2.content = c2, f2.map = [u2, a2.line - 1], f2.children = [], f2 = a2.push("admonition_title_close", "p", -1), f2.markup = E + " " + i2, a2.md.block.tokenize(a2, u2 + 1, p2), f2 = a2.push("admonition_close", "div", -1), f2.markup = a2.src.slice(g, m2), f2.block = true, a2.parentType = M, a2.lineMax = B, a2.line = p2 + ($ ? 1 : 0), true;
    },
    {
      alt: ["paragraph", "reference", "blockquote", "list"]
    }
  ), e2.renderer.rules.admonition_open = d, e2.renderer.rules.admonition_title_open = d, e2.renderer.rules.admonition_title_close = d, e2.renderer.rules.admonition_close = d;
}, Qe = Xe, Ye = (e2, r2) => {
  e2.renderer.rules.heading_open = (l2, t2) => {
    var c2;
    const n2 = l2[t2], o2 = ((c2 = l2[t2 + 1].children) == null ? void 0 : c2.reduce((d, s) => d + (s.content || ""), "")) || "", i2 = n2.markup.length;
    return r2.headsRef.value.push({
      text: o2,
      level: i2
    }), n2.map && n2.level === 0 && (n2.attrSet("data-line", String(n2.map[0])), n2.attrSet(
      "id",
      r2.mdHeadingId(o2, i2, r2.headsRef.value.length)
    )), e2.renderer.renderToken(l2, t2, r2);
  }, e2.renderer.rules.heading_close = (l2, t2, n2, o2, i2) => i2.renderToken(l2, t2, n2);
}, et = Ye, tt = (e2, r2) => {
  const l2 = e2.renderer.rules.fence, t2 = e2.utils.unescapeAll, n2 = /\[(\w*)(?::([\w ]*))?\]/;
  function o2(s) {
    return s.info ? t2(s.info).trim() : "";
  }
  function i2(s) {
    const a2 = o2(s), [u2 = null, b2 = ""] = (n2.exec(a2) || []).slice(1);
    return [u2, b2];
  }
  function c2(s) {
    const a2 = o2(s);
    return a2 ? a2.split(/(\s+)/g)[0] : "";
  }
  const d = (s, a2, u2, b2, y) => {
    if (s[a2].hidden)
      return "";
    const [m2, p2] = i2(s[a2]);
    if (m2 === null)
      return l2(s, a2, u2, b2, y);
    let f2, $, g, w2, k2 = "", E = "";
    for (let T = a2; T < s.length && (f2 = s[T], [$, g] = i2(f2), $ === m2); T++)
      f2.info = f2.info.replace(n2, ""), f2.hidden = true, w2 = T - a2 > 0 ? "" : " checked", k2 += `<li><input type="radio" name="label-group-${r2.editorId}-${a2}"${w2}><label for="group-${r2.editorId}-${a2}-tab-${T - a2}" onclick="this.previousElementSibling.click()">${g || c2(f2)}</label></li>
`, E += `<input type="radio" id="group-${r2.editorId}-${a2}-tab-${T - a2}" name="group-${r2.editorId}-${a2}"${w2}>
` + l2(s, T, u2, b2, y);
    return `<div class="code-tabs">
<ul>
` + k2 + `</ul>
` + E + "</div>";
  };
  e2.renderer.rules.fence = d;
}, nt = tt, ot = (e2) => {
  [
    "paragraph_open",
    "table_open",
    "ordered_list_open",
    "bullet_list_open",
    "blockquote_open",
    "hr",
    "html_block",
    "fence"
  ].forEach((r2) => {
    const l2 = e2.renderer.rules[r2];
    l2 ? e2.renderer.rules[r2] = (t2, n2, o2, i2, c2) => {
      let d;
      const s = l2(t2, n2, o2, i2, c2);
      return t2[n2].map && t2[n2].level === 0 && !/^<!--/.test(s) ? (d = t2[n2].map[0], s.replace(/^(<[^>]*)/, `$1 data-line="${d}"`)) : s;
    } : e2.renderer.rules[r2] = (t2, n2, o2, i2, c2) => {
      let d;
      return t2[n2].map && t2[n2].level === 0 && (d = t2[n2].map[0], t2[n2].attrSet("data-line", String(d))), c2.renderToken(t2, n2, o2);
    };
  });
}, rt = (e2, r$12) => {
  const { editorConfig: l$1, markdownItConfig: t2, markdownItPlugins: n2 } = l, o2 = inject("editorId"), i2 = inject("showCodeRowNumber"), c2 = inject("theme"), d = ref([]), s = Ue(e2), a2 = Ve(e2), { reRenderRef: u2, replaceMermaid: b2 } = Ge(e2), y = Fe({
    html: true,
    breaks: true
  });
  t2(y, {
    editorId: o2
  });
  const m2 = [
    {
      type: "katex",
      plugin: Je,
      options: { katexRef: a2 }
    },
    {
      type: "image",
      plugin: r,
      options: { figcaption: true, classes: "md-zoom" }
    },
    {
      type: "admonition",
      plugin: Qe,
      options: {}
    },
    {
      type: "taskList",
      plugin: Me,
      options: {}
    },
    {
      type: "heading",
      plugin: et,
      options: { mdHeadingId: e2.mdHeadingId, headsRef: d }
    },
    {
      type: "codeTabs",
      plugin: nt,
      options: { editorId: o2 }
    }
  ];
  e2.noMermaid || m2.push({
    type: "mermaid",
    plugin: We,
    options: { themeRef: c2 }
  }), n2(m2, {
    editorId: o2
  }).forEach((k2) => {
    y.use(k2.plugin, k2.options);
  });
  const p2 = y.options.highlight;
  y.set({
    highlight: (k2, E, T) => {
      if (p2) {
        const L = p2(k2, E, T);
        if (L)
          return L;
      }
      let M;
      !e2.noHighlight && s.value ? s.value.getLanguage(E) ? M = s.value.highlight(k2, {
        language: E,
        ignoreIllegals: true
      }).value : M = s.value.highlightAuto(k2).value : M = y.utils.escapeHtml(k2);
      const B = i2 ? w(M.replace(/^\n+|\n+$/g, "")) : `<span class="code-block">${M.replace(/^\n+|\n+$/g, "")}</span>`;
      return `<pre><code class="language-${E}" language=${E}>${B}</code></pre>`;
    }
  }), ot(y);
  const f2 = ref(e2.sanitize(y.render(e2.modelValue))), $ = () => {
    C.emit(o2, S, f2.value), e2.onHtmlChanged(f2.value), e2.onGetCatalog(d.value), C.emit(o2, I, d.value), b2();
  };
  onMounted($);
  const g = x(
    async () => {
      d.value = [], f2.value = e2.sanitize(y.render(e2.modelValue)), $();
    },
    (l$1 == null ? void 0 : l$1.renderDelay) !== void 0 ? l$1 == null ? void 0 : l$1.renderDelay : r$12 ? 0 : 500
  ), w$1 = computed(() => (e2.noKatex || a2.value) && (e2.noHighlight || s.value));
  return watch([toRef(e2, "modelValue"), w$1, u2], g), onMounted(() => {
    C.on(o2, {
      name: D,
      callback() {
        C.emit(o2, I, d.value);
      }
    });
  }), { html: f2 };
}, at = rt, le = {
  modelValue: {
    type: String,
    default: ""
  },
  setting: {
    type: Object,
    default: () => ({})
  },
  onHtmlChanged: {
    type: Function,
    default: () => {
    }
  },
  onGetCatalog: {
    type: Function,
    default: () => {
    }
  },
  mdHeadingId: {
    type: Function,
    default: () => ""
  },
  noMermaid: {
    type: Boolean,
    default: false
  },
  sanitize: {
    type: Function,
    default: (e2) => e2
  },
  // 不使用该函数功能
  noKatex: {
    type: Boolean,
    default: false
  },
  formatCopiedText: {
    type: Function,
    default: (e2) => e2
  },
  noHighlight: {
    type: Boolean,
    default: false
  },
  previewOnly: {
    type: Boolean,
    default: false
  },
  noImgZoomIn: {
    type: Boolean
  },
  sanitizeMermaid: {
    type: Function
  }
};
({
  ...le,
  onChange: {
    type: Function,
    default: () => {
    }
  },
  placeholder: {
    type: String,
    default: ""
  },
  scrollAuto: {
    type: Boolean
  },
  autofocus: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  readonly: {
    type: Boolean
  },
  maxlength: {
    type: Number
  },
  autoDetectCode: {
    type: Boolean
  },
  /**
   * 输入框失去焦点时触发事件
   */
  onBlur: {
    type: Function,
    default: () => {
    }
  },
  /**
   * 输入框获得焦点时触发事件
   */
  onFocus: {
    type: Function,
    default: () => {
    }
  },
  noPrettier: {
    type: Boolean
  },
  completions: {
    type: Array
  },
  catalogVisible: {
    type: Boolean
  },
  theme: {
    type: String,
    default: "light"
  },
  onInput: {
    type: Function
  },
  onDrop: {
    type: Function,
    default: () => {
    }
  },
  inputBoxWitdh: {
    type: String
  },
  onInputBoxWitdhChange: {
    type: Function
  }
});
const lt = /* @__PURE__ */ defineComponent({
  name: "ContentPreview",
  props: le,
  setup(e2) {
    const r2 = inject("editorId"), l2 = inject("previewTheme"), t2 = inject("showCodeRowNumber"), {
      html: n2
    } = at(e2, e2.previewOnly);
    return Ne(e2, n2), Re(e2, n2), () => createVNode(Fragment, null, [createVNode("div", {
      id: `${r2}-preview-wrapper`,
      class: `${a}-preview-wrapper`,
      "data-show": e2.setting.preview,
      key: "content-preview-wrapper"
    }, [createVNode("article", {
      id: `${r2}-preview`,
      class: [`${a}-preview`, `${l2 == null ? void 0 : l2.value}-theme`, t2 && `${a}-scrn`],
      innerHTML: n2.value
    }, null)]), !e2.previewOnly && createVNode("div", {
      id: `${r2}-html-wrapper`,
      class: `${a}-preview-wrapper`,
      "data-show": e2.setting.htmlPreview,
      key: "html-preview-wrapper"
    }, [createVNode("div", {
      class: `${a}-html`
    }, [n2.value])])]);
  }
}), ie = (e2) => {
  var n2, o2;
  const { editorId: r2 } = e2, l$1 = (o2 = (n2 = l) == null ? void 0 : n2.editorExtensions) == null ? void 0 : o2.highlight;
  provide("editorId", r2), provide(
    "theme",
    computed(() => e2.theme)
  ), provide(
    "language",
    computed(() => e2.language)
  ), provide(
    "highlight",
    computed(() => {
      const i2 = {
        ...f,
        ...l$1 == null ? void 0 : l$1.css
      }, c$1 = e2.codeStyleReverse && e2.codeStyleReverseList.includes(e2.previewTheme) ? "dark" : e2.theme;
      return {
        js: (l$1 == null ? void 0 : l$1.js) || c,
        css: i2[e2.codeTheme] ? i2[e2.codeTheme][c$1] : f.atom[c$1]
      };
    })
  ), provide("showCodeRowNumber", e2.showCodeRowNumber);
  const t2 = computed(() => {
    var c2, d;
    const i2 = {
      ...u,
      ...(d = (c2 = l) == null ? void 0 : c2.editorConfig) == null ? void 0 : d.languageUserDefined
    };
    return i2[e2.language] ? i2[e2.language] : u["zh-CN"];
  });
  provide("usedLanguageText", t2), provide(
    "previewTheme",
    computed(() => e2.previewTheme)
  ), provide(
    "customIcon",
    computed(() => e2.customIcon)
  );
}, ce = (e2) => {
  onMounted(() => {
    var r2, l$1;
    if (!e2.noIconfont)
      if (l.iconfontType === "svg") {
        const t2 = document.createElement("script");
        t2.src = ((r2 = l.editorExtensions) == null ? void 0 : r2.iconfont) || r$2, t2.id = `${a}-icon`, h2(t2);
      } else {
        const t2 = document.createElement("link");
        t2.rel = "stylesheet", t2.href = ((l$1 = l.editorExtensions) == null ? void 0 : l$1.iconfontClass) || n$1, t2.id = `${a}-icon-class`, h2(t2);
      }
  });
}, it = (e2) => e2, se = {
  /**
   * markdown content.
   *
   * @default ''
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * 主题，支持light和dark
   *
   * @default 'light'
   */
  theme: {
    type: String,
    default: "light"
  },
  /**
   * 外层类名
   *
   * @default ''
   */
  class: {
    type: String,
    default: ""
  },
  /**
   * 预设语言名称
   *
   * @default 'zh-CN'
   */
  language: {
    type: String,
    default: "zh-CN"
  },
  /**
   * html变化事件
   */
  onHtmlChanged: {
    type: Function
  },
  /**
   * 获取目录结构
   */
  onGetCatalog: {
    type: Function
  },
  /**
   * 编辑器唯一标识
   *
   * @default 'md-editor-v3'
   */
  editorId: {
    type: String,
    default: o
  },
  /**
   * 预览中代码是否显示行号
   *
   * @default false
   */
  showCodeRowNumber: {
    type: Boolean,
    default: false
  },
  /**
   * 预览内容样式
   *
   * @default 'default'
   */
  previewTheme: {
    type: String,
    default: "default"
  },
  /**
   * 编辑器样式
   */
  style: {
    type: Object,
    default: () => ({})
  },
  /**
   * 标题的id生成方式
   *
   * @default (text: string) => text
   */
  mdHeadingId: {
    type: Function,
    default: it
  },
  /**
   *
   * 不能保证文本正确的情况，在marked编译md文本后通过该方法处理
   * 推荐DOMPurify、sanitize-html
   *
   * @default (text: string) => text
   */
  sanitize: {
    type: Function,
    default: (e2) => e2
  },
  /**
   * 不使用该mermaid
   *
   * @default false
   */
  noMermaid: {
    type: Boolean,
    default: false
  },
  /**
   * 不使用katex
   *
   * @default false
   */
  noKatex: {
    type: Boolean,
    default: false
  },
  /**
   * 代码主题
   *
   * @default 'atom'
   */
  codeTheme: {
    type: String,
    default: "atom"
  },
  /**
   * 不插入iconfont链接
   *
   * @default false
   */
  noIconfont: {
    type: Boolean
  },
  /**
   * 复制代码格式化方法
   *
   * @default (text) => text
   */
  formatCopiedText: {
    type: Function,
    default: (e2) => e2
  },
  /**
   * 某些预览主题的代码模块背景是暗色系
   * 将这个属性设置为true，会自动在该主题下的light模式下使用暗色系的代码风格
   *
   * @default true
   */
  codeStyleReverse: {
    type: Boolean,
    default: true
  },
  /**
   * 需要自动调整的预览主题
   *
   * @default ['default', 'mk-cute']
   */
  codeStyleReverseList: {
    type: Array,
    default: ["default", "mk-cute"]
  },
  noHighlight: {
    type: Boolean,
    default: false
  },
  /**
   * 是否关闭编辑器默认的放大缩小功能
   */
  noImgZoomIn: {
    type: Boolean,
    default: false
  },
  /**
   * 自定义的图标
   */
  customIcon: {
    type: Object,
    default: {}
  },
  sanitizeMermaid: {
    type: Function,
    default: (e2) => Promise.resolve(e2)
  }
};
({
  ...se,
  /**
   * input回调事件
   */
  onChange: {
    type: Function
  },
  /**
   * input回调事件
   */
  onSave: {
    type: Function
  },
  /**
   * 上传图片事件
   */
  onUploadImg: {
    type: Function
  },
  /**
   * 是否页面内全屏
   *
   * @default false
   */
  pageFullscreen: {
    type: Boolean,
    default: false
  },
  /**
   * 是否展开预览
   *
   * @default true
   */
  preview: {
    type: Boolean,
    default: true
  },
  /**
   * 是否展开html预览
   *
   * @default false
   */
  htmlPreview: {
    type: Boolean,
    default: false
  },
  /**
   * 仅预览模式，不显示toolbar和编辑框
   *
   * @4.0.0开始移除该设置，使用组件MdPreview替换
   *
   * @default false
   */
  // previewOnly: {
  //   type: Boolean as PropType<boolean>,
  //   default: false
  // },
  /**
   * 工具栏选择显示
   *
   * @default allToolbar
   */
  toolbars: {
    type: Array,
    default: m
  },
  /**
   * 工具栏选择不显示
   *
   * @default []
   */
  toolbarsExclude: {
    type: Array,
    default: []
  },
  /**
   * 格式化md
   *
   * @default true
   */
  noPrettier: {
    type: Boolean,
    default: false
  },
  /**
   * 一个tab等于空格数
   *
   * @default 2
   */
  tabWidth: {
    type: Number,
    default: 2
  },
  /**
   * 表格预设格子数
   *
   * @default [6, 4]
   */
  tableShape: {
    type: Array,
    default: () => [6, 4]
  },
  /**
   * 空提示
   *
   * @default ''
   */
  placeholder: {
    type: String,
    default: ""
  },
  /**
   * 自定义的工具栏列表
   */
  defToolbars: {
    type: [String, Object]
  },
  /**
   * 内部错误捕获
   */
  onError: {
    type: Function
  },
  /**
   * 页脚列表显示顺序
   */
  footers: {
    type: Array,
    default: p$1
  },
  /**
   * 是否默认激活输入框和预览框同步滚动
   *
   * @default true
   */
  scrollAuto: {
    type: Boolean,
    default: true
  },
  /**
   * 自定义的也叫工具组件列表
   */
  defFooters: {
    type: [String, Object]
  },
  /**
   * 是否禁用上传图片
   *
   * @default false
   */
  noUploadImg: {
    type: Boolean
  },
  /**
   * 文本区域自动获得焦点
   *
   * @default false
   */
  autoFocus: {
    type: Boolean
  },
  /**
   * 禁用文本区域
   *
   * @default false
   */
  disabled: {
    type: Boolean
  },
  /**
   * 文本区域为只读
   *
   * @default false
   */
  readOnly: {
    type: Boolean
  },
  /**
   * 文本区域允许的最大字符数
   */
  maxLength: {
    type: Number
  },
  /**
   * 是否启用自动识别粘贴代码类别
   * 目前支持 vscode 复制的代码识别
   *
   * @default false
   */
  autoDetectCode: {
    type: Boolean
  },
  /**
   * 输入框失去焦点时触发事件
   */
  onBlur: {
    type: Function
  },
  /**
   * 输入框获得焦点时触发事件
   */
  onFocus: {
    type: Function
  },
  /**
   * @codemirror/autocomplete匹配关键词的方法列表
   *
   * 它会被像下面这样嵌入编辑器
   *
   * import { autocompletion } from '@codemirror/autocomplete';
   * autocompletion({
   *   override: [...completions]
   * })
   */
  completions: {
    type: Array
  },
  /**
   * 是否在工具栏下面显示对应的文字名称
   *
   * @default false
   */
  showToolbarName: {
    type: Boolean,
    default: false
  },
  /**
   * 字符输入事件
   */
  onInput: {
    type: Function
  },
  onDrop: {
    type: Function
  },
  /**
   * 输入框的默认宽度
   *
   * @example '100px'/'50%'
   * @default '50%
   */
  inputBoxWitdh: {
    type: String,
    default: "50%"
  },
  /**
   * 输入框宽度变化事件
   */
  onInputBoxWitdhChange: {
    type: Function
  }
});
const ue = ["onHtmlChanged", "onGetCatalog"];
[
  ...ue,
  "onChange",
  "onSave",
  "onUploadImg",
  "onError",
  "update:modelValue",
  "onBlur",
  "onFocus",
  "onInput",
  "onDrop",
  "onInputBoxWitdhChange"
];
const ct = /* @__PURE__ */ defineComponent({
  name: "MdPreview",
  props: se,
  emits: ue,
  setup(e2, r2) {
    const {
      editorId: l2,
      noKatex: t2,
      noMermaid: n2,
      noHighlight: o2
    } = e2;
    return ie(e2), ce(e2), onBeforeUnmount(() => {
      C.clear(l2);
    }), () => createVNode("div", {
      id: l2,
      class: [a, e2.class, e2.theme === "dark" && `${a}-dark`, `${a}-previewOnly`],
      style: e2.style
    }, [createVNode(lt, {
      modelValue: e2.modelValue,
      onHtmlChanged: (i2) => {
        e2.onHtmlChanged ? e2.onHtmlChanged(i2) : r2.emit("onHtmlChanged", i2);
      },
      onGetCatalog: (i2) => {
        e2.onGetCatalog ? e2.onGetCatalog(i2) : r2.emit("onGetCatalog", i2);
      },
      mdHeadingId: e2.mdHeadingId,
      noMermaid: n2,
      sanitize: e2.sanitize,
      noKatex: t2,
      formatCopiedText: e2.formatCopiedText,
      noHighlight: o2,
      noImgZoomIn: e2.noImgZoomIn,
      previewOnly: true,
      sanitizeMermaid: e2.sanitizeMermaid
    }, null)]);
  }
}), N = ct;
N.install = (e2) => (e2.component(N.name, N), e2);
const style = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CMarkdown",
  props: {
    text: {},
    id: {}
  },
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _cache) => {
      return _ctx.text != null ? (openBlock(), createBlock(unref(N), {
        key: 0,
        modelValue: _ctx.text,
        theme: unref(appStore).theme.markdown,
        editorId: "editor-" + _ctx.id
      }, null, 8, ["modelValue", "theme", "editorId"])) : createCommentVNode("", true);
    };
  }
});
const CMarkdown_vue_vue_type_style_index_0_scoped_8410ca4c_lang = "";
const CMarkdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8410ca4c"]]);
export {
  CMarkdown as C
};
