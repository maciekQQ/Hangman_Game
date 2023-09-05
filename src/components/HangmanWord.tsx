export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div className="box-keyboard">
      {word.split("").map((letter) => (
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
