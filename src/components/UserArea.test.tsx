import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserArea } from "./UserArea";
import userEvent from "@testing-library/user-event";
import { getFallbackAvatar } from "../utils/avatarImage";

jest.mock("../api", () => ({
  _esModule: true,
  default: "mockedDefaultExport",
  chatAPI: jest.fn().mockImplementation(() => ({
    openConn: jest.fn(),
    closeConn: jest.fn(),
    sendMsg: jest.fn(),
    onMsg: jest.fn(),
  })),
}));

test("should show username form", () => {
  const spy = jest.spyOn(Storage.prototype, "setItem");
  const { getByText, queryByTestId, getByLabelText } = render(<UserArea />);
  expect(queryByTestId("messageCreationArea")).not.toBeInTheDocument();
  expect(queryByTestId("messageListArea")).not.toBeInTheDocument();
  expect(getByLabelText("username")).toBeInTheDocument();
  userEvent.type(getByLabelText("username"), "batman");
  userEvent.click(getByText("submit"));
  expect(queryByTestId("messageCreationArea")).toBeInTheDocument();
  expect(queryByTestId("messageListArea")).toBeInTheDocument();
  expect(spy).toHaveBeenCalled();
});

test("should username from localstorage", () => {
  const spy = jest
    .spyOn(Storage.prototype, "getItem")
    .mockReturnValue(JSON.stringify({username: "batman", avatar: getFallbackAvatar()}));
  const { queryByTestId } = render(<UserArea />);
  expect(spy).toHaveBeenCalled();
  expect(queryByTestId("messageCreationArea")).toBeInTheDocument();
  expect(queryByTestId("messageListArea")).toBeInTheDocument();
});
