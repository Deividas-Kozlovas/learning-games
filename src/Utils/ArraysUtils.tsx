export const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export function shuffleArray(numbersToFindOnCards: number[]): number[] {
  const shuffledArray = [...numbersToFindOnCards];
  const arrayLength = numbersToFindOnCards.length;

  for (let i = 0; i < arrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * (arrayLength - 1)) + 1;
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}
