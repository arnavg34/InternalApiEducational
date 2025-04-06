document.getElementById('login-button')?.addEventListener("click", async () =>{
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let emailOutput = emailInput?.value;
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    let passwordOutput = passwordInput?.value; 
    console.log(emailOutput)
    console.log(passwordOutput)
    if(passwordOutput === "" || emailOutput === ""){
        alert("Please Enter an Email and Password")
    }
    else{
        const getUser = await fetch("http://localhost:3000/api/users/getUserByEmail", {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${emailOutput}`,
                "password": `${passwordOutput}`,
            }),
        })
        console.log(getUser)
        if(getUser.status != 200){
            alert("Please Enter an Correct Email and Password")
        } else {
            const getUserJson = await getUser.json();
            console.log(getUserJson);
            window.location.href = '/home';
        }
    }
});
document.getElementById('signup-button')?.addEventListener("click", () =>{
    window.location.href = '/signup';
});

