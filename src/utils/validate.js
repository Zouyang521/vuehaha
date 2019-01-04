export function isvalidUsername(str) {
  const valid_map = ['admin','test']
  return valid_map.indexOf(str.trim()) >= 0
}
