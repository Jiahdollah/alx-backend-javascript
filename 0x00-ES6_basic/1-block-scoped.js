export default function taskBlock(trueOrFalse) {
  const task = false; // Use 'let' instead of 'var'
  const task2 = true; // Use 'let' instead of 'var'

  if (trueOrFalse) {
  const task = true; // Do not re-declare, just assign the value
  const task2 = false; // Do not re-declare, just assign the value
  }

  return [task, task2];
}

