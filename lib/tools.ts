import { readExternalContent, type ExternalContentItem } from './content-data';

export type Tool = ExternalContentItem;

export async function getAllTools(): Promise<Tool[]> {
  return readExternalContent('tools');
}
