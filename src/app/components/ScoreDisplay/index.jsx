
const ScoreDisplay = ({ score, total }) => (
    <div className="flex flex-col justify-center items-center gap-3 rounded-full w-52 aspect-[1/1] bg-gradient-to-b from-gradient-violetBlue">
      <h1 className="text-white text-7xl font-bold">{score}</h1>
      <p className="text-neutral-lightLavender/60 text-lg font-semibold">
        of {total}
      </p>
    </div>
  );

  export default ScoreDisplay