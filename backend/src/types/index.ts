//src/types/index.ts

export interface ISchool{
    _id?: string;
    name: string;
    address: string;
    city: string;
    phoneNumber1: string;
    phoneNumber2: string;
    email: string;
    password: string;
    school: string|ISchool;
    role: string;
    status: {type:String; default: "inactive"} // Default status is inactive
    paymentId: String; // New field for payment ID
    username: String; // New field for username associated with the payment
}