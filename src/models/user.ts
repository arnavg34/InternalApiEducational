export interface User {
    email: string;
    password: string;
}
const newUser = {email: "aidanK", password: "HalfFull"};
export let users: User[] = [newUser]