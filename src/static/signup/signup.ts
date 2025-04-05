document.getElementById('signup-button')?.addEventListener("click", async () =>{
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let emailOutput = emailInput?.value;
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    let passwordOutput = passwordInput?.value; 
    if(passwordOutput === "" || emailOutput === ""){
        alert("Please Enter an Email and Password")
    } else if(!emailOutput.includes('@')) {
        alert("Please Enter an Correct Email")
    }  else if(!passwordOutput.includes('@') && !passwordOutput.includes('#') && !passwordOutput.includes('!') ) {
        alert("Please make sure password includes a special character")
    }
    else if(passwordOutput.length < 8) {
        alert("Please make sure password is 8 characters or longer.")
    }
    else{
        const createNewUser = await fetch("http://localhost:3000/api/users/createUser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                "email": `${emailOutput}`,
                "password": `${passwordOutput}`,
            }),
        })
        console.log(createNewUser)
        if(createNewUser.status != 201){
            alert("Failure of account creation")
        } else {
            const createNewUserJson = await createNewUser.json();
            console.log(createNewUserJson);
        }
        const getUser = await fetch("http://localhost:3000/api/users/getUserByEmail", {
            method: 'POST',
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
            alert("Failure of User in DataBase")
        } else {
            const getUserJson = await getUser.json();
            console.log(getUserJson);
            // window.location.href = '/home';
        }
    }
});


