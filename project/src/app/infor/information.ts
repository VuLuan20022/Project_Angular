export interface Information {
  studentId: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthday: Date;
  gender: boolean;
}

export const env = {
  path: 'http://localhost:3000/api'
}
