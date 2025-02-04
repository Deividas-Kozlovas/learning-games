export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_CURRENT_ITEM_TO_FIND = "SET_CURRENT_ITEM_TO_FIND";
export const SET_SHUFFLED_ITEMS = "SET_SHUFFLED_ITEMS";
export const SET_CHUNKED_ITMES = "SET_CHUNKED_ITMES";
export const SET_CARDS_BACKGROUND_COLORS = "SET_CARDS_BACKGROUND_COLORS";
export const SET_IS_ANSWER_CORRECT = "SET_IS_ANSWER_CORRECT";
export const SET_GAME_OVER = "SET_GAME_OVER";
export const SET_ELAPSED_TIME = "SET_ELAPSED_TIME";

export interface CardGameState {
  currentItemIndex: number;
  shuffledItems: any[];
  chunkedItems: any[];
  itemsBackgroundColors: string[];
  isAnswerCorrect: boolean | null;
  gameOver: boolean;
  elapsedTime: string;
}

export interface CardGameAction {
  type: string;
  payload: any; 
}
