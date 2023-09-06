const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHT_ARM = <div className="right_arm" />;
const LEFT_ARM = <div className="left_arm" />;
const RIGHT_LEG = <div className="right_leg" />;
const LEFT_LEG = <div className="left_leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
interface HangmanDrawingProps {
  numberofGuesses: number;
}
const HangmanDrawing = ({ numberofGuesses }: HangmanDrawingProps) => {
  return (
    <div className="box-drawing">
      {BODY_PARTS.slice(0, numberofGuesses)}
      <div className="hang-part" />
      <div className="top-part" />
      <div className="stem-part" />
      <div className="bottom-part" />
    </div>
  );
};

export default HangmanDrawing;
