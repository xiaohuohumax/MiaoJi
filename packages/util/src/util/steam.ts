export function filterNullFunc<T>(item?: T | null): item is NonNullable<T> {
  return item !== null && item !== undefined
}
