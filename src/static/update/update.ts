
document.getElementById('signup-button')?.addEventListener("click", async () =>{
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    let passwordOutput = passwordInput?.value; 
    if(passwordOutput === ""){
        alert("Please Enter an Password")
    } else if(!passwordOutput.includes('@') && !passwordOutput.includes('#') && !passwordOutput.includes('!') ) {
        alert("Please make sure password includes a special character")
    }
    else if(passwordOutput.length < 8) {
        alert("Please make sure password is 8 characters or longer.")
    }
    else{
        const getCurrentUser = await fetch("http://localhost:3000/api/users/getCurrentUser", {
            method: 'GET',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(getCurrentUser)
        const getCurrentUserJson = await getCurrentUser.json();
        console.log(getCurrentUserJson.email)

        const updateUser = await fetch("http://localhost:3000/api/users/updateUser", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                "email": `${getCurrentUserJson.email}`,
                "password": `${passwordOutput}`,
            }),
        })
        console.log(updateUser)
        if(updateUser.status != 201){
            alert("Failure of account update")
        } else {
            const updateUserJson = await updateUser.json();
            console.log(updateUserJson);
        }
        const getUser = await fetch("http://localhost:3000/api/users/getUserByEmail", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": `${getCurrentUserJson.email}`,
                "password": `${passwordOutput}`,
            }),
        })
        console.log(getUser)
        if(getUser.status != 200){
            alert("Failure of User in DataBase")
        } else {
            const getUserJson = await getUser.json();
            console.log(getUserJson);
            window.location.href = '/home';
        }
    }
});