export type Lang = 'ru' | 'en' | 'de'

export const languageIds: Record<Lang, number> = {
  ru: 2,
  de: 9,
  en: 5,
} as const;

export interface ImageType {
  url: string;
  name?: string;
}