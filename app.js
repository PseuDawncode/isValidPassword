function validPassword(password, username){
    if (
        password.length < 8 ||
        password.includes(" ") ||
        password.includes (username)
    ) 
    {
        return false;
    }

    else {
        return true;
    }
}

console.log(validPassword("19970109","dawnmary"));