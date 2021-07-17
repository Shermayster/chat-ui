import React from "react";
import { MessageModel } from "../models/message";
import { Message } from "./Message";

export const MessageListArea = ({
  messageList,
  username,
}: {
  messageList: MessageModel[];
  username: string;
}) => {
  return (
    <div data-testid="messageListArea" className="flex flex-col mx-20 gap-y-5">
      {messageList.map((m) => (
        <React.Fragment key={m.timestamp}>
          <MessageStyle isOwner={m.username === username}>
            <Message message={m} />
          </MessageStyle>
        </React.Fragment>
      ))}
    </div>
  );
};

const MessageStyle = ({
  isOwner,
  children,
}: {
  isOwner: boolean;
  children: JSX.Element;
}) => {
  return (
    <div
      data-testid="chat-message"
      className={`rounded ${isOwner ? "self-start  bg-pink-600 text-pink-100" : "self-end bg-green-600 text-green-100"}`}
    >
      {children}
    </div>
  );
};
