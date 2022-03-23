import { Issue, none, ParameterTree } from '@xon/core';
import { ParameterTranslator } from './parameter-translator';

export function getParameterTranslator(tree: ParameterTree, isType: boolean): ParameterTranslator {
  if (!tree) return none;
  try {
    if (tree instanceof ParameterTree) return new ParameterTranslator(tree, isType);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getParameterTranslators = (
  trees: ParameterTree[],
  isType: boolean,
): ParameterTranslator[] => {
  return trees?.map((x) => getParameterTranslator(x, isType)) || [];
};
