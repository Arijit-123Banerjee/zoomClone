import AiResume from "./AiResume";
import { useParams } from "react-router-dom";
import ManualResume from "./ManualResume";

export const ResumeTemplate = () => {
  const { id } = useParams(); // Destructure `id` from `useParams`

  console.log(id); // Log the ID to the console for debugging

  return (
    <div>
      {id === "1" ? (
        <ManualResume />
      ) : (
        <AiResume /> // Render the AiResume component if the ID is not 1
      )}
    </div>
  );
};
