const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Keyboard = () => {
  return (
    <div className="keyboard-div">
      {KEYS.map((key) => {
        return (
          <button className="btn-keyboard" key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
