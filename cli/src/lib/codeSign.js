// @flow

import md5 from 'md5';

const VERSION_COMMENT_RE = /\/\/ flow-typed version: (.*)$/;
export function getSignedCodeVersion(signedCode: string): string | null {
  const [_, versionComment] = signedCode.split('\n');
  const versionMatches = versionComment.trim().match(VERSION_COMMENT_RE);
  if (versionMatches == null) {
    return null;
  }
  return versionMatches[1];
}

export function signCode(code: string, version: string): string {
  const versionedCode = `// flow-typed version: ${version}\n\n${code}`;
  const hash = md5(versionedCode);
  return `// flow-typed signature: ${hash}\n${versionedCode}`;
}

export function signCodeStream(version: string): (code: string) => string {
  return (code: string) => signCode(code, version);
}

const HASH_COMMENT_RE = /\/\/ flow-typed signature: (.*)$/;
export function verifySignedCode(signedCode: string): boolean {
  const signedCodeLines = signedCode.split('\n');
  const [hashComment] = signedCodeLines;
  const hashMatches = hashComment.trim().match(HASH_COMMENT_RE);
  if (hashMatches == null) {
    return false;
  }
  const [_, hash] = hashMatches;
  const versionedCode = signedCodeLines.slice(1).join('\n');
  return md5(versionedCode) === hash;
}
