type User = {
    email: string,
    password: string;
};

const user: User = {email: "5", password: "Hi"}

document.getElementById('login-button')?.addEventListener("click", () =>{
    console.log("hey")
});