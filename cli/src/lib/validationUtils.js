// @flow strict

function validateString(name: string, value: mixed): string {
  if (typeof value !== 'string') {
    throw new Error(`${name} should be a string`);
  }

  return value;
}

function validateStringArray(name: string, value: mixed): string[] {
  if (!Array.isArray(value)) {
    throw new Error(`${name} should be an array`);
  }

  return value.map(item => {
    if (typeof item !== 'string') {
      throw new Error(`${name} should be an array of strings`);
    }
    return item;
  });
}

export {validateString, validateStringArray};
