const matchingMap = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const validBraces = (inputStr: string): boolean => {
  const inputArr: string[] = inputStr.split('');
  return validBracesInternal(inputArr, []);
};

const validBracesInternal = (input: string[], open: string[]): boolean => {
  // First exit condition - check if we have run out of characters
  if (input.length === 0) {
    return open.length === 0;
  }

  const [head, ...rest] = input;

  switch (head) {
    case '(':
    case '[':
    case '{':
      return validBracesInternal(rest, [head, ...open]);

    case ')':
    case ']':
    case '}':
      const expectedClose: string = matchingMap[head];
      const [mostRecentOpen, ...otherOpen] = open;
      if (expectedClose === mostRecentOpen) {
        return validBracesInternal(rest, otherOpen);
      }
      return false;
      
    default:
      return validBracesInternal(rest, open);
  }
};

export default validBraces;
