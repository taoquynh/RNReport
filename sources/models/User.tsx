interface User {
  id: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  name: string;
  dateOfBirth: string;
  address: string;
  gender: boolean;
  phoneNumber: string;
  email: string;
  avatar: string;
  token: string;
}

interface Result {
  code: number;
  message: string;
  data: User;
}

export { User, Result };
