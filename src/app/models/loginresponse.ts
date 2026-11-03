import { User } from './Users';

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    expiration: string;
    user: User;
  };
}
