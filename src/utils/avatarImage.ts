import { getRandomInt } from "./getRandomInt";

export const defaultAvatarImgList = [
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/001-snorlax.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/002-psyduck.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/003-pikachu.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/004-jigglypuff.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/005-bullbasaur.png",
];

export const getFallbackAvatar = () => {
    const imgIndex = getRandomInt(defaultAvatarImgList.length);
    return defaultAvatarImgList[imgIndex];
}