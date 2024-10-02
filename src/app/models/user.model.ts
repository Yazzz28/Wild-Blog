export type User = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
};
