import { useEffect, useState } from "react";
import CN from "classnames";

import { Button } from "components";
import { GIFS } from "gifs/index";

import styles from "./Content.module.scss";

const TEXT: Record<number, string> = {
  0: "ТЫ БУДЕШЬ МОЕЙ ВАЛЕНТИНКОЙ?",
  1: "ТЫ ПРАВДА НЕ ХОЧЕШЬ БЫТЬ МОЕЙ ВАЛЕНТИНКОЙ?",
  2: "GAME OVER",
  3: "ПРАВДА ПРАВДА?!",
  4: "УРААА!!! БЕГИ КО МНЕ МОЯ ХОРОШАЯ",
  5: "ЦЕЛОВАТЬСЯ",
  6: "КОНЕЦ?",
  7: "ШЛЕП-ШЛЕ-ШЛЕП",
  8: "ТЫ ЧЕ ПЁС!!!",
  9: "ВАЛИМ-ВАЛИМ-ВАЛИМ!!!",
  10: "СТОЙ СКОТИНА!!!",
  11: "ТЕБЕ ПИ@*$!!!",
  12: "СТОЙ-СТОЙ-СТОЙ!!!",
  13: "МЕСТЬ!!!",
  14: "ПОЛУЧАЙ-ПОЛУЧАЙ-ПОЛУЧАЙ!!!",
  15: "СЛАВЯНСКИЙ ЗАЖИМ ПЕРСИКОМ!!!",
  16: "ПОБЕДА!!!",
  17: "ПОСМОТРИ ЧТО ТАМ!!!",
  18: "ЗЛОСТЬ ВИКУСИ",
  19: "МОЯ ЗВЕЗДОЧКА",
  20: "МИРИМСЯ <3",
  21: "ПРОДОЛЖАЕМ МИРИТЬСЯ <3",
  22: "ТУТ ЕЩЕ МИРИМСЯ <3",
  23: "ПОМИРИЛИСЬ?)",
  24: "ТЕПЕРЬ ТОЧНО МИР <3",
  25: "ЛОЖИМСЯ СПАТЬ",
  26: "СЛАДКИХ СНОВ СОЛНЫШКО :*",
  27: "Я ЛЮБЛЮ ТЕБЯ ЗВЕЗДОЧКА <3",
};

const BTN_TEXT = [
  "",
  "",
  "ПРАВДА.",
  "ДА!",
  "БЕЖАТЬ",
  "ПОЦЕЛОВАТЬ",
  "ШЛЕПНУТЬ...",
  "ВААААААА!!!",
  "!!!RUN!!!",
  "БЫСТРЕЕ ВЕТРА!!!",
  "ДАЛЬШЕ",
  "ДОГНАТЬ",
  "КУСЬ!!!",
  "ДАЛЬШЕ",
  "ДАЛЬШЕ",
  "WIN!!!",
  "ДАЛЬШЕ",
  "ДАЛЬШЕ",
  "...МИРИТЬСЯ",
  "ЕЩЕ",
  "ПРОДОЛЖИТЬ",
  "ПОВАЛИТЬ",
  "ЕЩЕ НЕМНОГО...",
  "ДАЛЬШЕ ;)",
  "СПАТЬ)",
  "ТИКИТАКИ И СПАТЬ",
  "ПЕРЕЙТИ К КОНЦУ",
  "КОНЕЦ.",
];

const Content = () => {
  const [btnPosition, setBtnPosition] = useState(false);
  const [noCounter, setNoCounter] = useState(0);
  const [gameState, setGameState] = useState(0);

  const onMouseOverNo = () => {
    setNoCounter((prev) => prev + 1);
    setBtnPosition((prev) => !prev);
  };

  const onClickNo = () => {
    if (noCounter >= 1) {
      setNoCounter((prev) => prev + 1);
      setBtnPosition((prev) => !prev);
    }
  };

  const onSetGameState = (number: number) => () => setGameState(number);

  const onResetGame = () => {
    setBtnPosition(false);
    setNoCounter(0);
    setGameState(0);
  };

  useEffect(() => {
    if (noCounter >= 7) {
      setGameState(1);
    }
  }, [noCounter]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{TEXT[gameState]}</div>
      <img className={styles.gif} src={GIFS[gameState]} alt="" />
      <div
        className={CN(styles.btnWrapper, {
          [styles.btnGroupReverse]: btnPosition,
        })}
      >
        {gameState === 0 && (
          <div
            className={CN(styles.btnGroup, {
              [styles.btnGroupReverse]: btnPosition,
            })}
          >
            <Button onClick={onSetGameState(3)} color="green">
              ДА
            </Button>
            <Button onClick={onClickNo} color="red" onMouseOver={onMouseOverNo}>
              НЕТ
            </Button>
          </div>
        )}
        {gameState === 1 && (
          <Button onClick={onSetGameState(2)}>ПРАВДА.</Button>
        )}
        {gameState === 2 && (
          <Button onClick={onResetGame}>НАЧАТЬ СНАЧАЛА</Button>
        )}
        {gameState >= 3 && gameState < 27 && (
          <Button onClick={onSetGameState(gameState + 1)}>
            {BTN_TEXT[gameState]}
          </Button>
        )}
        {gameState === 27 && (
          <Button onClick={onResetGame}>{BTN_TEXT[27]}</Button>
        )}
      </div>
    </div>
  );
};

export default Content;
