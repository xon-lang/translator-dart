import { DefinitionTree, none } from '@xon/core';
import { DefinitionTranslator } from './definition-translator';

export const getDefinitionTranslator = (tree: DefinitionTree): DefinitionTranslator => {
  if (!tree) return none;

  return new DefinitionTranslator(tree);
};

export const getDefinitionTranslators = (trees: DefinitionTree[]): DefinitionTranslator[] => {
  return trees?.map(getDefinitionTranslator) || [];
};
