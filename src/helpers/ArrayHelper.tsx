export function chunkArrayToSmallerParts<T extends string | number>(
  arrayToSplitToChunks: T[], // Accept array of either string or number
  howManyValuesInChunk: number // Chunk size
): T[][] {
  // Return type is inferred as T[][] (string[][] or number[][])
  return Array.from(
    {
      length: Math.ceil(arrayToSplitToChunks.length / howManyValuesInChunk),
    },
    (_, index) =>
      arrayToSplitToChunks.slice(
        index * howManyValuesInChunk,
        (index + 1) * howManyValuesInChunk
      )
  );
}

export function shuffleArray(
  arrayToShuffle: Array<string | number>
): Array<string | number> {
  if (!Array.isArray(arrayToShuffle)) {
    console.error("shuffleArray received invalid data:", arrayToShuffle);
    return [];
  }
  const shuffledArray = [...arrayToShuffle];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function addCurrentAnswerToArray(
  valuesInArray: Array<string | number>,
  valueToFindInArray: number | string
): Array<string | number> {
  if (valuesInArray.includes(valueToFindInArray)) {
    return valuesInArray;
  }

  const randomIndex = Math.floor(Math.random() * valuesInArray.length);

  const newArray = [...valuesInArray];
  newArray[randomIndex] = valueToFindInArray;

  return newArray;
}
