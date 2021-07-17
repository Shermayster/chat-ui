import { io } from "socket.io-client";
import { MessageModel } from "./models/message";


export const chatAPI = () => {
    const chatSocket = io("https://ow-chat-server.herokuapp.com");
    const openConn = () => chatSocket.connect();
    const sendMsg = (message:MessageModel) => chatSocket.emit("ow/chat", message);
    const onMsg = (cb: (msg: MessageModel) => void) => chatSocket.on("ow/chat", cb);
    const closeConn = () => chatSocket.close();

    return  {sendMsg, onMsg, closeConn, openConn};
}
