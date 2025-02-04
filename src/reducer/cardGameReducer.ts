import {
  SET_CURRENT_ITEM_TO_FIND,
  SET_SHUFFLED_ITEMS,
  SET_CHUNKED_ITMES,
  SET_CARDS_BACKGROUND_COLORS,
  SET_IS_ANSWER_CORRECT,
  SET_GAME_OVER,
  SET_ELAPSED_TIME,
  ADD_CURRENT_ANSWER_TO_ARRAY,
  CardGameState,
  CardGameAction,
} from "../actions/cardGameActions";

const initialState: CardGameState = {
  currentItemIndex: 0,
  shuffledItems: [],
  chunkedItems: [],
  itemsBackgroundColors: [],
  isAnswerCorrect: null,
  gameOver: false,
  elapsedTime: "",
};

const cardGameReducer = (state: CardGameState = initialState, action: CardGameAction): CardGameState => {
  switch (action.type) {
    case SET_CURRENT_ITEM_TO_FIND:
      return { ...state, currentItemIndex: action.payload };
    case SET_SHUFFLED_ITEMS:
      return { ...state, shuffledItems: action.payload };
    case SET_CHUNKED_ITMES:
      return { ...state, chunkedItems: action.payload };
    case SET_CARDS_BACKGROUND_COLORS:
      return { ...state, itemsBackgroundColors: action.payload };
    case SET_IS_ANSWER_CORRECT:
      return { ...state, isAnswerCorrect: action.payload };
    case SET_GAME_OVER:
      return { ...state, gameOver: action.payload };
    case SET_ELAPSED_TIME:
      return { ...state, elapsedTime: action.payload };
    default:
      return state;
  }
};

export default cardGameReducer;
