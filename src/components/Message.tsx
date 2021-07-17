import { MessageModel } from "../models/message";

export const Message = ({
  message: { text, username, avatar },
}: {
  message: MessageModel;
}) => (
  <div className="flex flex-col p-2">
    <div className="flex">
      <img className="w-4" alt="avatar" src={avatar} />
      <span className="text-sm">{username}</span>
    </div>
    <div className="text-xl">{text}</div>
  </div>
);
