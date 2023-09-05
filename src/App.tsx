import { useState } from "react";
import words from "./wordList.json";
import "./styles.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
function App() {
  //Get random word from wordList.
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  //
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <>
      <div className="box">
        <div className="box-win">Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
