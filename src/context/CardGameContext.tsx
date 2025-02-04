import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import cardGameReducer from "../reducer/cardGameReducer";
import { CardGameState, CardGameAction } from "../actions/cardGameActions";
import {
  shuffleArray,
  chunkArrayToSmallerParts,
  addCurrentAnswerToArray,
} from "../helpers/ArrayHelper";
import { getRandomLightColor } from "../helpers/RandomColorGeneratorHelper";
import { startTimer, endTimer } from "../helpers/CountTimeHelper";
import {
  SET_SHUFFLED_ITEMS,
  SET_CARDS_BACKGROUND_COLORS,
  SET_CHUNKED_ITMES,
  SET_CURRENT_ITEM_TO_FIND,
  SET_IS_ANSWER_CORRECT,
  SET_GAME_OVER,
  SET_ELAPSED_TIME,
} from "../actions/cardGameActions";
import { numbersToShowOnCards } from "../pages/games/numberGames/findNumberByWord/findNumberByWordData";

const initialState: CardGameState = {
  currentItemIndex: 0,
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
      startGame: () => void;
      handleCardClick: (card: string | number) => void;
    }
  | undefined
>(undefined);

export const CardGameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardGameReducer, initialState);

  useEffect(() => {
    startTimer();
  }, []);

  // Start the game and shuffle items
  const startGame = () => {
    dispatch({ type: SET_GAME_OVER, payload: false });

    const shuffledArray = addCurrentAnswerToArray(
      shuffleArray(numbersToShowOnCards).slice(0, 9), // Shuffle first
      1 // Ensure correct answer starts from 1
    );

    dispatch({ type: SET_SHUFFLED_ITEMS, payload: shuffledArray });
    dispatch({
      type: SET_CARDS_BACKGROUND_COLORS,
      payload: Array.from({ length: 9 }, () => getRandomLightColor()),
    });

    dispatch({ type: SET_CURRENT_ITEM_TO_FIND, payload: 0 });
  };

  // Handle card click logic
  const handleCardClick = (card: string | number) => {
    if (state.currentItemIndex + 1 === card) {
      dispatch({ type: SET_IS_ANSWER_CORRECT, payload: true });

      // Calculate the next index using the most up-to-date state (using a functional update)
      const nextIndex = state.currentItemIndex + 1;

      console.log("Next Index:", nextIndex); // Log the correct sequence

      // Shuffle and include the correct answer for the next index
      const newShuffledArray = addCurrentAnswerToArray(
        shuffleArray(numbersToShowOnCards).slice(0, 9), // Shuffle first
        nextIndex // Ensure next correct answer is included
      );

      // Update the shuffled array and the current item index
      dispatch({
        type: SET_SHUFFLED_ITEMS,
        payload: newShuffledArray,
      });

      // Proceed to the next index after a short delay
      setTimeout(() => {
        dispatch({
          type: SET_CURRENT_ITEM_TO_FIND,
          payload: nextIndex,
        });

        if (nextIndex === 10) {
          // End game when all items have been found
          dispatch({ type: SET_GAME_OVER, payload: true });
          dispatch({ type: SET_ELAPSED_TIME, payload: endTimer() });
          dispatch({ type: SET_CURRENT_ITEM_TO_FIND, payload: 0 });
        }

        // Reset the correctness flag
        dispatch({ type: SET_IS_ANSWER_CORRECT, payload: null });
      }, 500);
    } else {
      dispatch({ type: SET_IS_ANSWER_CORRECT, payload: false });
      setTimeout(() => {
        dispatch({ type: SET_IS_ANSWER_CORRECT, payload: null });
      }, 500);
    }
  };

  // Automatically chunk items when shuffledItems updates
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
      value={{ state, dispatch, startGame, handleCardClick }}
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
