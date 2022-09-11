export function handleError(e: any, fallback?: string): string {
  return e?.response?.data?.message || e.message || fallback
}
