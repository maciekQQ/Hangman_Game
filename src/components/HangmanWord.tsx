interface HangmanWordProps {
  guessedLetters: string[];
  wordToGuess: string;
}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className="box-keyboard">
      {wordToGuess.split("").map((letter) => (
        <>
          <span className="word-keyboard">
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        </>
      ))}
    </div>
  );
}
