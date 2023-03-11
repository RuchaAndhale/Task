const loginForm = document.getElementById("login-form");
const btn = document.getElementById("btn");

// Sign in butten click
btn.addEventListener("click", (e) => {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value
    
    //filter for check email
    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwdFilter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    // Validation 
    if(uname == "")
    {
        alert("Please enter Email ID.");
    }
    else if(!emailFilter.test(uname))
    {
        alert("Enter valid email id.");
    }
    else if(pwd=='')
	{
        alert("Please enter the password");
        
	}
    else if(!pwdFilter.test(pwd))
	{
		alert("Please enter valid password. Must contain at least one number, one uppercase and lowercase letter, one special symbol and shoud be at least 8 or more characters");
	}
    else
	{
        window.location.replace("home.html"); 
    }
})

function clearFunc()
{
    document.getElementById("email").value="";
	document.getElementById("pwd").value="";
}