export const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export function shuffleArray(arrayToShuffle: number[]): number[] {
  const shuffledArray = [...arrayToShuffle];
  const arrayLength = shuffledArray.length;

  for (let i = arrayLength - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}

export function addUniqueValueToArray(array: number[], valueToAdd: number) {
  if (!array.includes(valueToAdd)) {
    const index = Math.floor(Math.random() * array.length);
    array[index] = valueToAdd;
  }
  return array;
}
