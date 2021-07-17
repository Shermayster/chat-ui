import * as React from "react";
import { chatAPI } from "../api";
import { MessageModel } from "../models/message";

const {openConn, closeConn, sendMsg, onMsg} = chatAPI();
// react hook for getting and updating chat messages
export const useChatMessage = (): [msgList: MessageModel[], sendMsg: (msg: MessageModel) => void ] => {
  const [msgList, setMsgList] = React.useState([] as MessageModel[]);
  React.useEffect(() => {
    openConn();
    onMsg((msg) => {
      setMsgList((prev) => [...prev, msg]);
    });
    return () => {
        closeConn();
    };
  }, []);
  return [msgList, sendMsg];
};
