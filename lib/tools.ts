import { readExternalContent, type ExternalContentItem } from './content-data';
import type { Locale } from './i18n/dictionaries';

export type Tool = ExternalContentItem;

export async function getAllTools(locale: Locale = 'ja'): Promise<Tool[]> {
  return readExternalContent('tools', locale);
}
