import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import cardGameReducer from "../reducer/cardGameReducer";
import {
  CardGameState,
  CardGameAction,
  SET_INCORECT_PRESS,
} from "../actions/cardGameActions";
import {
  shuffleArray,
  chunkArrayToSmallerParts,
  addCurrentAnswerToArray,
} from "../helpers/ArrayHelper";
import { getRandomLightColor } from "../helpers/RandomColorGeneratorHelper";
import { startTimer, endTimer } from "../helpers/CountTimeHelper";
import {
  SET_SOUND,
  SET_TALKING_SOUND,
  SET_SHUFFLED_ITEMS,
  SET_CARDS_BACKGROUND_COLORS,
  SET_CHUNKED_ITMES,
  SET_INITIAL_ITEMS,
  SET_CURRENT_ITEMS_INDEX_TO_FIND,
  SET_IS_ANSWER_CORRECT,
  SET_GAME_OVER,
  SET_ELAPSED_TIME,
} from "../actions/cardGameActions";
import correctSound from "../assets/sounds/correct-sound.wav";

const initialState: CardGameState = {
  soundON: true,
  talkingSoundON: true,
  currentItemIndex: 0,
  incorectPress: 0,
  initialItems: [],
  shuffledItems: [],
  chunkedItems: [],
  itemsBackgroundColors: [],
  isAnswerCorrect: null,
  gameOver: false,
  elapsedTime: "",
};

const CardGameContext = createContext<
  | {
      state: CardGameState;
      dispatch: React.Dispatch<CardGameAction>;
      startGame: (currentItems: (string | number)[]) => void;
      handleCardClick: (card: string | number) => void;
      toggleSound: (sountType: string) => void;
    }
  | undefined
>(undefined);

export const CardGameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardGameReducer, initialState);

  const toggleSound = (soundType: string) => {
    if (soundType === "sound") {
      dispatch({ type: SET_SOUND, payload: !state.soundON });
    } else if (soundType === "talking-sound") {
      dispatch({ type: SET_TALKING_SOUND, payload: !state.talkingSoundON });
    }
  };

  const startGame = (newItems: (string | number)[]) => {
    if (!Array.isArray(newItems) || newItems.length === 0) {
      console.error("Error: newItems is not a valid array", newItems);
      return;
    }
    dispatch({ type: SET_INCORECT_PRESS, payload: 0 });
    dispatch({ type: SET_INITIAL_ITEMS, payload: newItems });
    dispatch({ type: SET_ELAPSED_TIME, payload: startTimer() });
    dispatch({ type: SET_GAME_OVER, payload: false });

    const shuffledArray = addCurrentAnswerToArray(
      shuffleArray(newItems).slice(0, 9),
      newItems[0]
    );

    dispatch({ type: SET_SHUFFLED_ITEMS, payload: shuffledArray });
    dispatch({
      type: SET_CARDS_BACKGROUND_COLORS,
      payload: Array.from({ length: 9 }, () => getRandomLightColor()),
    });

    dispatch({ type: SET_CURRENT_ITEMS_INDEX_TO_FIND, payload: 0 });
  };

  const handleCardClick = (card: string | number) => {
    if (state.currentItemIndex + 1 === card) {
      if (state.soundON) {
        const audio = new Audio(correctSound);
        audio.play();
      }

      dispatch({ type: SET_IS_ANSWER_CORRECT, payload: true });

      const nextIndex = state.currentItemIndex + 1;

      const newShuffledArray = addCurrentAnswerToArray(
        shuffleArray(state.initialItems).slice(0, 9),
        state.initialItems[(state.currentItemIndex + 1) % 10]
      );

      dispatch({ type: SET_SHUFFLED_ITEMS, payload: newShuffledArray });

      setTimeout(() => {
        dispatch({
          type: SET_CURRENT_ITEMS_INDEX_TO_FIND,
          payload: nextIndex,
        });
        if (nextIndex === 10) {
          dispatch({ type: SET_GAME_OVER, payload: true });
          dispatch({ type: SET_ELAPSED_TIME, payload: endTimer() });
          dispatch({ type: SET_CURRENT_ITEMS_INDEX_TO_FIND, payload: 0 });

          const newShuffledArray = addCurrentAnswerToArray(
            shuffleArray(state.initialItems).slice(0, 9),
            state.initialItems[0]
          );
          dispatch({ type: SET_SHUFFLED_ITEMS, payload: newShuffledArray });
        }

        dispatch({ type: SET_IS_ANSWER_CORRECT, payload: null });
      }, 500);
    } else {
      dispatch({ type: SET_IS_ANSWER_CORRECT, payload: false });
      dispatch({ type: SET_INCORECT_PRESS, payload: state.incorectPress + 1 });
      setTimeout(() => {
        dispatch({ type: SET_IS_ANSWER_CORRECT, payload: null });
      }, 500);
    }
  };

  useEffect(() => {
    if (state.shuffledItems.length > 0) {
      dispatch({
        type: SET_CHUNKED_ITMES,
        payload: chunkArrayToSmallerParts(state.shuffledItems, 3),
      });
    }
  }, [state.shuffledItems]);

  return (
    <CardGameContext.Provider
      value={{ state, dispatch, startGame, handleCardClick, toggleSound }}
    >
      {children}
    </CardGameContext.Provider>
  );
};

export const useCardGameContext = () => {
  const context = useContext(CardGameContext);
  if (!context) {
    throw new Error(
      "useCardGameContext must be used within a CardGameProvider"
    );
  }
  return context;
};

export default CardGameContext;
