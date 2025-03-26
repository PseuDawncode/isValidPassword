function isValidPassword(password, username){
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

console.log(isValidPassword("199 70 109","dawnmary"));