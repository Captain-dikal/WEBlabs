function check(data, expectedType) {
  if (expectedType === 'array' && !Array.isArray(data)) {
    return false;
  }

  if (expectedType === 'number' && !(typeof(data) === 'number')) {
    return false;
  }

  if (expectedType === 'null' && !(data === null)) {
    return false;
  }

  if (expectedType === 'string' && !(typeof(data) === 'string')) {
    return false;
  }

  return true;
}

check([], 'number'); // false or throw ValidationError
check([], 'array'); // false or throw ValidationError

check(null, 'null'); // true
check('test', 'string'); // true
