import { MessageModel } from "../models/message";
import { UserModel } from "../models/user";
import { MessageForm } from "./MessageForm";

export const MessageCreationArea = ({
  user: {username, avatar},
  onSubmit,
}: {
  user: UserModel;
  onSubmit: (message: MessageModel) => void;
}) => {
  return (
    <section data-testid="messageCreationArea" className="flex">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8" src={avatar} alt="user avatar" />
        <span>
          <span className="text-gray-600 text-sm">username:</span>
          <span className="text-lg"> {username}</span>
        </span>
      </div>
      <div className="flex-grow">
        <MessageForm
          onSubmit={(text) => {
            onSubmit({
              username,
              text,
              avatar: avatar,
              timestamp: new Date().getTime(),
            });
          }}
        />
      </div>
    </section>
  );
};
