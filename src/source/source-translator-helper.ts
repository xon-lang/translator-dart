import { none, SourceTree } from '@xon/core';
import { SourceTranslator } from './source-translator';

export const getSourceTranslator = (tree: SourceTree): SourceTranslator => {
  if (!tree) return none;

  return new SourceTranslator(tree);
};
