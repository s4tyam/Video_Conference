import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { id } = useParams();

  const myMeeting = async (element) => {
    const appID = 1619261591;
    const serverSecret = "01bb9005553d141036fa43dba5312109";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Satyam"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      }
    })
  };

  return <div className="room-page">
    <div ref={myMeeting} />
  </div>;
};

export default RoomPage;
