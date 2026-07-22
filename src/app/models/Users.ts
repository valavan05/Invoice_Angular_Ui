export interface Users {
  id: number;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  alternatePhone?: string | null;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  dateOfBirth?: Date | null;
}