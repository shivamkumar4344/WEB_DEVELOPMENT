function verify()
{
    const password = document.getElementById("password").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    if( password==='' || password<8)
    {
        alert("Enter the password with more than 8 characters.");
        return false;
    }
    if(fname==='')
    {
        alert("Enter your name");
    }
    if(lname==='')
    {
        alert("Enter your last name");
    }
    
}