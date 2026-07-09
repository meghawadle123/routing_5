export interface IUser {
  userId: string;
  userName: string;
  userRole: string;
  profileDescription: string;
  profileImage: string;
  skills: string[];
  experience: string;
  isActive: boolean;
  address: IAddress;
  isAddSame: boolean;
}

export interface IAddress {
  currentAddress: ICurrentAddress;
  permanentAddress: IPermanentAddress;
}

export interface ICurrentAddress {
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IPermanentAddress {
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IresUser{
  msg:string;
 data:IUser
}