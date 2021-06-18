interface User {
  id: number;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string | null;
  name: string;
  dateOfBirth: string;
  address: string;
  gender: boolean;
  phoneNumber: string;
  email: string;
  avatar: string | null;
  token: string;
}

interface AccountPublic {
  id: number;
  name: string;
  avatar: string;
}
export { User, AccountPublic };
