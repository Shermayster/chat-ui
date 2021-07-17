import * as React from "react";
import { UserModel } from "../models/user";

// some clients can block access to localstorage
const saveUserInLocalStorage = (user: UserModel) => {
  try {
    const value = JSON.stringify(user);
    localStorage.setItem("user", value);
  } catch (error) {
    console.error("failed to save a user in localStorage", error);
  }
};

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error) {
    console.error("failed to retrieve a user from localStorage", error);
    return {};
  }
};


// save user and sync it with localstorage.
export const useUser = (): [user: UserModel, setUser: (user: UserModel) => void] => {
  const [user, updateUser] = React.useState<UserModel>(
    getUserFromLocalStorage()
  );

  const setUser = (user: UserModel) => {
    saveUserInLocalStorage(user);
    updateUser(user);
  };
  return [user, setUser];
};
