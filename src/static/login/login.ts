type User = {
    email: string,
    password: string;
};

const user: User = {email: "5", password: "Hi"}

document.getElementById('login-button')?.addEventListener("click", () =>{
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let emailOutput = emailInput?.value;
    console.log()
    console.log(emailOutput);
    let passwordInput = document.getElementById('email') as HTMLInputElement;
    let passwordOutput = passwordInput?.value; 
    console.log(passwordOutput);
    let emailSpan = document.getElementById("email-span") as HTMLInputElement;
    let passwordSpan = document.getElementById("password-span") as HTMLInputElement;
    if(passwordOutput === ""){
        passwordSpan.innerHTML = `Please Enter a Password`
    }
    else{
        passwordSpan.innerHTML = `The password is: ${passwordOutput}`
    }  
    if(emailOutput === ""){
        emailSpan.innerHTML = `Please Enter a Email`
    }    
    else{
        emailSpan.innerHTML = `The email is: ${emailOutput}`
    }  
});
document.getElementById('signup-button')?.addEventListener("click", () =>{
    console.log("hey")
});

