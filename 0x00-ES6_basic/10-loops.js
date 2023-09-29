export default function appendToEachArrayValue(array, appendString) {
  // for (var idx in array) {
  const newArray = [];
  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }

  return newArray;
}
