document.getElementById('regForm').addEventListener('submit', SendSubmission);

function SendSubmission(e) {
    e.preventDefault();
    var fName = document.querySelector("#fname").value;
    var lName = document.querySelector("#lname").value;
    var pwd = document.querySelector("#password").value;
    var pwdConfirm = document.querySelector("#passwordConfirm").value;
    var email = document.querySelector("#email").value;

    /*if(pwd === pwdConfirm) {
        fetch('/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, /register*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ FirstName: fName, LastName: lName, Password: pwd, PasswordConfirm: pwdConfirm, Email: email })
        }).then((res) => {
            res.json();
        }).then((data) => {
            console.log(data);
        });
    } else {
        document.getElementById("errors").innerHTML = "Your password do not match.";
    }*/

    if(fName === "" || lName === "") {
        document.getElementById("errors").innerHTML = "You cannot leave the First Name or Last Name fields empty";
    } else if(pwd !== pwdConfirm) {
        document.getElementById("errors").innerHTML = "Your passwords do not match.";
    } else if(email === "") {
        document.getElementById("errors").innerHTML = "You cannot leave the Email field empty.";
    } else {
        fetch('/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */register*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ FirstName: fName, LastName: lName, Password: pwd, PasswordConfirm: pwdConfirm, Email: email })
        }).then((res) => {
            res.json();
        }).then((data) => {
            console.log(data);
        });
    }
}