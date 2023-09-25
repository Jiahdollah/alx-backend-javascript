export default function taskBlock(trueOrFalse) {
  let task = false; // Use 'let' instead of 'var'
  let task2 = true; // Use 'let' instead of 'var'

  if (trueOrFalse) {
    task = true; // Do not re-declare, just assign the value
    task2 = false; // Do not re-declare, just assign the value
  }

  return [task, task2];
}

