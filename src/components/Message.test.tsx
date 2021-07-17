import { render } from "@testing-library/react";
import { defaultAvatarImgList } from "../utils/avatarImage";
import { Message } from "./Message";

test("should render owner message", () => {
  const {getByText, getByAltText} = render(
    <Message
      message={{
        avatar: defaultAvatarImgList[0],
        text: "message from test",
        timestamp: new Date().getTime(),
        username: "batman 🦇",
      }}
    />
  );

  expect(getByText("message from test")).toBeInTheDocument();
  expect(getByText("batman 🦇")).toBeInTheDocument();
  expect(getByAltText("avatar")).toBeInTheDocument();
});
