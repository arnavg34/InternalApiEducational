export interface User {
    email: string;
    password: string;
}
const newUser = {email: "agupta3410@gmail.com", password: "HalfFull"};
export let users: User[] = [newUser]
