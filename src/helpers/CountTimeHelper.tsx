let startTime: number | null = null;

export const startTimer = (): void => {
  startTime = Date.now();
};

export const endTimer = (): string => {
  if (startTime === null) return "00:00";

  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, "0");

  startTime = null;
  return `${minutes}min:${seconds}sec`;
};
