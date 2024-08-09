/* eslint-disable no-unused-vars */
import { useUser } from "@clerk/clerk-react";
import Layout from "./layout/Layout";
import { Navigate } from "react-router-dom";
import meetingLoadingGif from "./assert/Meeting.mp4";

const App = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <video
          src={meetingLoadingGif}
          autoPlay
          loop
          muted
          className="w-[230px]"
        ></video>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
