export const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export function shuffleArray(arrayToShuffle: number[]): number[] {
  const shuffledArray = [...arrayToShuffle];
  const arrayLength = arrayToShuffle.length;

  for (let i = 0; i < arrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * (arrayLength - 1)) + 1;
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}

export function addUniqueValueToArray(array: number[], valueToAdd: number) {
  if (!array.includes(valueToAdd)) {
    array[array.length - 1] = valueToAdd; // Add the value to the last index for consistency
  }
  return array;
}
