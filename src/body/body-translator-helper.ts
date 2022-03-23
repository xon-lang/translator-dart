import { BodyTree, Issue, MultipleBodyTree, none, SingleBodyTree } from '@xon/core';
import { BodyTranslator } from './body-translator';
import { MultipleBodyTranslator } from './multiple/multiple-body-translator';
import { SingleBodyTranslator } from './single/single-body-translator';

export const getBodyTranslator = (tree: BodyTree): BodyTranslator => {
  if (!tree) return none;
  try {
    if (tree instanceof SingleBodyTree) return new SingleBodyTranslator(tree);
    if (tree instanceof MultipleBodyTree) return new MultipleBodyTranslator(tree);
    throw `Body translator not found for '${tree.constructor.name}'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
};
