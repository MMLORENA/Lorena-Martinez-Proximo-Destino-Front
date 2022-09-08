export interface UserProto {
  name: string;
  firstName: string;
  secondName?: string;
  userName: string;
  password: string;
  repeatedPassword: string;
}

export interface User {
  id: string;
  token: string;
  userName: string;
}

export interface ProtoUserLogin {
  userName: string;
  password: string;
}
export interface UserState extends User {
  isLoged: boolean;
}
