document.getElementById('LoginForm').addEventListener('submit', SendSubmission);

function SendSubmission(e) {
    e.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if(email.length > 1 && password.length > 1) {
        fetch('/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */login*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ Email: email, Password, password })
        }).then((res) => {
            res.json();
        }).then((data) => {
            if(data) {
                window.open("/dashboard", '_self');
            } else {
                document.getElementById("errors").innerHTML = "Checks the fields again.";
            }
        })
    } else {
        document.getElementById("errors").innerHTML = "Either Email or Password are wrong. Please check again.";
    }
}