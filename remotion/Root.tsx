import {Composition} from "remotion";
import {
  EXPLAINER_DURATION,
  PhilippineAthleticsExplainer,
} from "./PhilippineAthleticsExplainer";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PhilippineAthleticsExplainer"
      component={PhilippineAthleticsExplainer}
      durationInFrames={EXPLAINER_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
