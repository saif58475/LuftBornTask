export class LoginClass {
    email:string;
    password:string
}
export class Department {
    id:string;
    name:string;
    code:number;
    image:string;
}
export class Employee {
    id:string;
    name:string;
    phoneNo:string;
    image:string;
    departmentId:string;
}
export class User {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    departmentId:string;
}
export class Response<T>{
    message:string;
    statusCode: number;
    data: T[];
    success:string;
}

