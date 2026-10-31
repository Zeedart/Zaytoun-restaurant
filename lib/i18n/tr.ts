import type { Lang } from './dictionary'

export const tr = (
  field: { en?: string | null; ar?: string | null } | null | undefined,
  lang: Lang,
  fallback: string,
) => field?.[lang] || fallback