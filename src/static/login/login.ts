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
    // const createNewUser = await fetch("http://localhost:3000/api/users/createUser", {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json", 
    //     },
    //     body: JSON.stringify({
    //         "email": "arnavG",
    //         "password": "Bunny123"
    //     }),
    // })
    // console.log(createNewUser)
    // const createNewUserJson = await createNewUser.json();
    // console.log(createNewUserJson);
    // const allUsers = await fetch("http://localhost:3000/api/users/getUsers", {
    //     method: 'GET',
    //     headers: {
    //         "Accept": "application/json" ,
    //     },
    // })
    // console.log(allUsers)
    // const allUsersJson = await allUsers.json();
    // console.log(allUsersJson);



    // const getUser2 = await fetch("http://localhost:3000/api/users/getUserByEmail", {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "email": "arnavG",
    //     }),
    // })
    // console.log(getUser2)
    // const getUser2Json = await getUser2.json();
    // console.log(getUser2Json);


    // const updateUser2 = await fetch("http://localhost:3000/api/users/updateUser", {
    //     method: 'PUT',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "email": `${createNewUserJson.email}`,
    //         "password": `ryanJoseph`
    //     }),
    // })
    // console.log(updateUser2)
    // const updateUser2Json = await updateUser2.json();
    // console.log(updateUser2Json);

    // const deleteUser2 = await fetch("http://localhost:3000/api/users/deleteUser", {
    //     method: 'DELETE',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "email": `${createNewUserJson.email}`,
    //     }),
    // })
    // console.log(deleteUser2)
    // const deleteUser2Json = await deleteUser2.json();
    // console.log(deleteUser2Json);
});

