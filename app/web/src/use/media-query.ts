import { onUnmounted, ref } from 'vue'

export function useMediaQuery(query: string) {
  const mediaQueryList = window.matchMedia(query)
  const matches = ref(mediaQueryList.matches)

  const changeHandler = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  mediaQueryList.addEventListener('change', changeHandler)

  onUnmounted(() => mediaQueryList.removeEventListener('change', changeHandler))

  return matches
}

// sm
export function useIsSmScreen() {
  return useMediaQuery('(min-width: 640px)')
}

// md
export function useIsMdScreen() {
  return useMediaQuery('(min-width: 768px)')
}

// lg
export function useIsLgScreen() {
  return useMediaQuery('(min-width: 1024px)')
}

// xl
export function useIsXlScreen() {
  return useMediaQuery('(min-width: 1280px)')
}

// 2xl
export function useIs2XlScreen() {
  return useMediaQuery('(min-width: 1536px)')
}

// [0,sm)
export function useIsLessThanSmScreen() {
  return useMediaQuery('(max-width: 639px)')
}

// [sm,md)
export function useIsBetweenSmAndMdScreen() {
  return useMediaQuery('(min-width: 640px) and (max-width: 767px)')
}

// [md,lg)
export function useIsBetweenMdAndLgScreen() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

// [lg,xl)
export function useIsBetweenLgAndXlScreen() {
  return useMediaQuery('(min-width: 1024px) and (max-width: 1279px)')
}
