export type Lang = 'en' | 'de'

export const languageIds: Record<Lang, number> = {
  de: 9,
  en: 5,
} as const;

export interface ImageType {
  url: string;
  name?: string;
}