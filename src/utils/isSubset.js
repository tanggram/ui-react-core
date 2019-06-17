export default function isSubset(candidates, pool) {
  // The pool is invalid or empty.
  if (!Array.isArray(pool) || pool.length === 0) {
    return false;
  }
  const _candidates = Array.isArray(candidates) ? candidates : [candidates];
  return _candidates.every(val => pool.includes(val));
}