// import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function Room() {
  const { roomID } = useParams();
  let myMeeting = async (element) => {
    const appID = 956286900;
    const serverSecret = "722a44a2aaba1fe8cb93b275dddedf13";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "HelloSharks"
    );
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost3000/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls,
        // modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].

        //mode: ZegoUIKitPrebuilt.GroupCall,//grop call
      },
      showRoomTimer: true,
    });
  };
  return <div ref={myMeeting}></div>;
}

export default Room;
