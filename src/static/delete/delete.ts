document.getElementById('signup-button')?.addEventListener("click", async () =>{
    const deleteUser = await fetch("http://localhost:3000/api/users/deleteUser", {
        method: 'DELETE',
        credentials: "include",
        headers: {
            "Content-Type": "application/json", 
        },
    })
    console.log(deleteUser)
    if(deleteUser.status != 201){
        alert("Failure of account delete")
    } else {
        const deleteUserJson = await deleteUser.json();
        console.log(deleteUserJson);
    }
    window.location.href = "/login"
});