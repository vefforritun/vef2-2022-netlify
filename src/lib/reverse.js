
export function reverse(str) {
  if (!str) {
    return undefined
  }

  const split = str.split('');

  split.reverse();
  

  return split.join('');
}
