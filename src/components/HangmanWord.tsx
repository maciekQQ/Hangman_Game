interface HangmanWordProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="box-keyboard">
      {wordToGuess.split("").map((letter) => (
        <>
          <span className="word-keyboard">
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
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
