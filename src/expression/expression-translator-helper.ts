import {
  ArrayExpressionTree,
  ExpressionTree,
  GroupExpressionTree,
  IdExpressionTree,
  InfixExpressionTree,
  InvokeExpressionTree,
  Issue,
  LiteralExpressionTree,
  MemberExpressionTree,
  MethodExpressionTree,
  none,
  NullableExpressionTree,
  PrefixExpressionTree,
  PreprocessorExpressionTree,
} from '@xon/core';
import { ArrayExpressionTranslator } from './array/array-expression-translator';
import { ExpressionTranslator } from './expression-translator';
import { GroupExpressionTranslator } from './group/group-expression-translator';
import { IdExpressionTranslator } from './id/id-expression-translator';
import { InfixExpressionTranslator } from './infix/infix-expression-translator';
import { InvokeExpressionTranslator } from './invoke/invoke-expression-translator';
import { LiteralExpressionTranslator } from './literal/literal-expression-translator';
import { MemberExpressionTranslator } from './member/member-expression-translator';
import { MethodExpressionTranslator } from './method/method-expression-translator';
import { NullableExpressionTranslator } from './nullable/nullable-expression-translator';
import { PrefixExpressionTranslator } from './prefix/prefix-expression-translator';
import { PreprocessorExpressionTranslator } from './preprocessor/preprocessor-expression-translator';

export function getExpressionTranslator(
  tree: ExpressionTree,
  isType: boolean,
): ExpressionTranslator {
  if (!tree) return none;
  try {
    if (tree instanceof PreprocessorExpressionTree)
      return new PreprocessorExpressionTranslator(tree, isType);
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionTranslator(tree, isType);
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree, isType);
    if (tree instanceof InfixExpressionTree) return new InfixExpressionTranslator(tree, isType);
    if (tree instanceof InvokeExpressionTree) return new InvokeExpressionTranslator(tree, isType);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree, isType);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree, isType);
    if (tree instanceof MethodExpressionTree) return new MethodExpressionTranslator(tree, isType);
    if (tree instanceof PrefixExpressionTree) return new PrefixExpressionTranslator(tree, isType);
    if (tree instanceof GroupExpressionTree) return new GroupExpressionTranslator(tree, isType);
    if (tree instanceof NullableExpressionTree)
      return new NullableExpressionTranslator(tree, isType);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getExpressionTranslators = (
  trees: ExpressionTree[],
  isType: boolean,
): ExpressionTranslator[] => {
  return trees?.map((x) => getExpressionTranslator(x, isType)) || [];
};
