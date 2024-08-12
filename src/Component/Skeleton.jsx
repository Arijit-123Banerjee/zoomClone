import React from "react";
import meetingLoadingGif from "../assert/Meeting.mp4";

const Skeleton = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-white">
        <video
          src={meetingLoadingGif}
          autoPlay
          loop
          muted
          className="w-[230px]"
        ></video>
      </div>
    </div>
  );
};

export default Skeleton;
