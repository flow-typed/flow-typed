/* @flow */

import globAsync from 'glob';

export default function glob(
  pattern: string,
  options?: Object,
): Promise<Array<string>> {
  return new Promise((resolve, reject) =>
    globAsync(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    }),
  );
}
