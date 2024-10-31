import { scoreDisplayClasses } from "@/utils/cardClasses";

const ScoreDisplay = ({ score, total }) => (
    <div className={scoreDisplayClasses}>
      <h1 className="text-white text-7xl font-bold">{score}</h1>
      <p className="text-neutral-lightLavender/60 text-lg font-semibold">
        of {total}
      </p>
    </div>
  );

  export default ScoreDisplay