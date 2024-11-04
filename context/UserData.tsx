"use client"

import { makeAutoObservable } from "mobx";
import { FunctionComponent, ReactNode } from "react";
import { Provider } from 'mobx-react';

interface UserDataType {
  ImageURL: string;
  FirstName: string;
  LastName: string;
  dob: string;
  Email: string;
  PhoneNumber: string;
  Country: string;
  HourRate: number;
  ProTitle: string;
}

class UserDataStore {
  UserData: UserDataType = {
    ImageURL: "Image",
    FirstName: "Abdullah",
    LastName: "Hassouna",
    Email: "abood211957@outlook.com",
    PhoneNumber: "0567739413",
    Country: "Palestine",
    dob: "09/11/2000",
    HourRate: 15,
    ProTitle: "Engineer"
  };

  constructor() {
    makeAutoObservable(this);
    this.callFromLocalStr(); // Load data from localStorage on initialization
  }

  private storeToLocalStr() {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return ("");


    window.localStorage.setItem('User Data', JSON.stringify(this.UserData));
  }

  private callFromLocalStr() {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return ("");

    const storedData = window.localStorage.getItem('User Data');
    if (storedData) {
      this.UserData = JSON.parse(storedData);
    }
  }

  resetUserData() {
    this.UserData = {
      ImageURL: "",
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      Country: "",
      dob: "",
      HourRate: 0,
      ProTitle: "",
    };
    this.storeToLocalStr();
    return this.UserData;
  }

  setUserData({ data }: { data: UserDataType }) {
    this.UserData = data;
    this.storeToLocalStr();
    return this.UserData;
  }

  changeItemUserData({ values }: { values: object[] }) {
    values.forEach(value => {
      this.UserData = { ...this.UserData, ...value };
    });
    this.storeToLocalStr();
    return this.UserData;
  }

  getUserData() {
    return this.UserData; // Data is already loaded from localStorage in constructor
  }
}

const userDataStore = new UserDataStore();

const UserDataProvider: FunctionComponent<{ children: ReactNode; }> = ({ children }) => {
  return (
    <Provider userDataStore={userDataStore}>
      {children}
    </Provider>
  );
}

export { userDataStore }
export default UserDataProvider;