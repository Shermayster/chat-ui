import * as React from "react";
import { MessageCreationArea } from "./MessageCreationArea";
import { MessageListArea } from "./MessageListArea";
import { useChatMessage } from "../hooks/useChatMessage";
import { UserModel } from "../models/user";
import { getFallbackAvatar } from "../utils/avatarImage";
import { useUser } from "../hooks/useUser";

export const UserArea = () => {
  const [user, setUser] = useUser();
  const [msgList, sendMsg] = useChatMessage();
  const { username } = user;
  return (
    <>
      {Boolean(username) ? (
        <div className="min-h-screen h-full flex flex-col bg-blue-200">
          <div className="flex-grow ">
            <MessageListArea messageList={msgList} username={username} />
          </div>
          <div className="bg-gray-50 shadow-inner flex justify-center">
            <div className="w-full xl:w-128">
              <MessageCreationArea user={user} onSubmit={sendMsg} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-md">
            <UsernameForm onSubmit={setUser} />
          </div>
        </div>
      )}
    </>
  );
};

const UsernameForm = ({
  onSubmit,
}: {
  onSubmit: (user: UserModel) => void;
}) => {
  const [username, setUsername] = React.useState("");
  return (
    <div>
      <form
        data-testid="usernameForm"
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ username, avatar: getFallbackAvatar() });
        }}
      >
        <div className="flex flex-col items-start p-4">
          <label htmlFor="username" className="text-gray-500 text-sm">
            username
          </label>
          <input
            id="username"
            className="input py-2"
            value={username}
            onChange={({ target: { value } }) => {
              setUsername(value);
            }}
          />
        </div>
        <button
          className="btn-blue rounded-none rounded-r-md"
          type="submit"
          disabled={!username.trim()}
        >
          submit
        </button>
      </form>
    </div>
  );
};
