export const SET_SOUND = "SET_SOUND";
export const SET_TALKING_SOUND = "SET_TALKING_SOUND"
export const SET_INCORECT_PRESS = "SET_INCORECT_PRESS";
export const SET_INITIAL_ITEMS = "SET_INITIAL_ITEMS";
export const SET_CURRENT_ITEMS_INDEX_TO_FIND = "SET_CURRENT_ITEMS_INDEX_TO_FIND";
export const SET_SHUFFLED_ITEMS = "SET_SHUFFLED_ITEMS";
export const SET_CHUNKED_ITMES = "SET_CHUNKED_ITMES";
export const SET_CARDS_BACKGROUND_COLORS = "SET_CARDS_BACKGROUND_COLORS";
export const SET_IS_ANSWER_CORRECT = "SET_IS_ANSWER_CORRECT";
export const SET_GAME_OVER = "SET_GAME_OVER";
export const SET_ELAPSED_TIME = "SET_ELAPSED_TIME";
export const SET_DISPLAY_TEXT = "SET_DISPLAY_TEXT";

export interface CardGameState {
  displayCardText: boolean;
  soundON: boolean;
  talkingSoundON: boolean;
  currentItemIndex: number;
  incorectPress: number;
  initialItems: (string | number)[];
  shuffledItems: (string | number)[];
  chunkedItems: (string[] | number[])[];
  itemsBackgroundColors: string[];
  isAnswerCorrect: boolean | null;
  gameOver: boolean;
  elapsedTime: string;
}

export interface CardGameAction {
  type: string;
  payload: any; 
}
