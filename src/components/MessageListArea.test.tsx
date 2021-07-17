import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MessageListArea } from "./MessageListArea";
import { defaultAvatarImgList } from "../utils/avatarImage";

test("Message list area", () => {
  const { getAllByTestId } = render(
    <MessageListArea
      messageList={[
        {
          text: "first message",
          timestamp: new Date().getTime(),
          avatar: defaultAvatarImgList[0],
          username: "batman"
        },
        {
          text: "second message",
          timestamp: new Date().getTime() + 1,
          avatar: defaultAvatarImgList[1],
          username: "spiderman"
        },
      ]}
      username="batman"
    />
  );
  expect(getAllByTestId("chat-message").length).toBe(2)
});
