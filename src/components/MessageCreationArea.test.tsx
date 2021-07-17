import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MessageCreationArea } from "./MessageCreationArea";
import { defaultAvatarImgList } from "../utils/avatarImage";
import userEvent from "@testing-library/user-event";

test("should render Message Creation Area", () => {
  const onSubmit = jest.fn();
  const { getByText, getByPlaceholderText, getByAltText } = render(
    <MessageCreationArea user={{username: "batman",  avatar: defaultAvatarImgList[0]}}  onSubmit={onSubmit} />
  );
  expect(getByText("batman")).toBeInTheDocument();
  expect(getByPlaceholderText("type your message")).toBeInTheDocument();
  expect(getByAltText("user avatar")).toBeInTheDocument();
  expect(
    defaultAvatarImgList.some(
      (imgUrl) => imgUrl === getByAltText("user avatar").getAttribute("src")
    )
  ).toBeTruthy();
  userEvent.type(getByPlaceholderText("type your message"), "my awesome message ");
  userEvent.click(getByText(/send/i));
  expect(onSubmit).toHaveBeenCalled();
});
