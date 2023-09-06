import { useState } from "react";
import words from "./wordList.json";
import "./styles.css";
import HangmanDrawing from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
function App() {
  //Get random word from wordList.
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  //
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <>
      <div className="box">
        <div className="box-win">Lose Win</div>
        <HangmanDrawing numberofGuesses={incorrectLetters.length} />
        <HangmanWord />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div>
      </div>
    </>
  );
}

export default App;
