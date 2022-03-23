import { MemberExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class MemberExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MemberExpressionTree, private isType: boolean) {}

  toString(): String {
    const instance = getExpressionTranslator(this.tree.instance, this.isType);
    return `${instance}.${this.tree.name}`;
  }
}
