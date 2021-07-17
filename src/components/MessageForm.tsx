import * as React from "react";

export function MessageForm({
  onSubmit,
}: {
  onSubmit: (message: string) => void;
}) {
  const [message, setMessage] = React.useState("");
  const updateMessage = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(value);
  };

  return (
    <form
      className="flex items-center py-4 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(message.trim())
        setMessage("");
      }}
    >
      <input
        className="rounded-lg border border-gray-500 flex-grow p-2 m-2"
        placeholder="type your message"
        value={message}
        onChange={updateMessage}
      />
      <button className="btn-blue" type="submit" disabled={!(message.trim())}>
        send
      </button>
    </form>
  );
}
