import { parseSource, parseSourceFile } from '@xon/core';
import * as fs from 'fs';
import { SourceTranslator } from './source-translator';
import { getSourceTranslator } from './source-translator-helper';

test('1.xon', () => {
  const tree = parseSourceFile('src/source/test-files/1.xon');
  const translator = getSourceTranslator(tree);

  expect(translator).toBeInstanceOf(SourceTranslator);
  const translated = translator.toString();
  fs.writeFileSync('src/source/test-files/1.gen.ts', translated);
  // expect(code).toBe(translated);
});

test('1.xon', () => {
  const code = '_escapeIfString(s Unknown) = s is String';
  const tree = parseSource(code);
  const translator = getSourceTranslator(tree);

  expect(translator).toBeInstanceOf(SourceTranslator);
  const translated = translator.toString();
  expect(translated).toBe(
    `
// this code was generated

function _escapeIfString(s: Unknown) {
  return typeof s === 'string'
}

// this code was generated
`.trim() + '\n',
  );
});
