import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MessageForm } from "./MessageForm";
import userEvent from '@testing-library/user-event';

test("a user should be able to send a message", () => {
  const submitMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <MessageForm onSubmit={(message) =>{
      submitMock(message)
    }} />
  );
  expect(getByText("send")).toBeDisabled();
  const messageInput = getByPlaceholderText("type your message");
  userEvent.type(messageInput, "hello world");
  expect(getByText("send")).toBeEnabled();
  userEvent.click(getByText("send"));
  expect(submitMock).toHaveBeenCalledWith("hello world");
  expect(messageInput).toHaveValue("");
  expect(getByText("send")).toBeDisabled();
  // should trim a message
  userEvent.type(messageInput, " ");
  expect(getByText("send")).toBeDisabled();
  userEvent.type(messageInput, "test ");
  userEvent.click(getByText("send"));
  expect(submitMock).toHaveBeenCalledWith("test");
});



