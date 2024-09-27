
document.getElementById('reg-form').addEventListener("submit", reg);

function reg(event) {
    var el = document.getElementById('reg-form');

    var name = el.nam.value;
    var email = el.em.value
    var pass = el.pa.value;
    var repass = el.repass.value;

    if(name == "" || email == "" || pass == "" ) {
        alert("Fill in all the fields!");
        event.preventDefault();
    }
    else if(name.length <= 1 || name.length > 20) {
        alert("Enter correctly name!");
        event.preventDefault();
    }
    else if(pass != repass) {
        alert("Passwords must match!");
        event.preventDefault();
    }
    else if(pass.split("&").length > 2 || pass.split("!").length > 2 || pass.split("?").length > 2 || pass.split("_").length > 2 || pass.split("$").length > 2) {
        alert("Don't correctly password. Don't use more than one sign");
        event.preventDefault();
    }
    else { 
        let user_recs = new Array();
        user_recs = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if(user_recs.some((v) => {
            return v.email == email
        })){
            alert("Duplicate Data!");
        }
        else{
            user_recs.push({
                "name":name,
                "email":email,
                "pass":pass
            })
            alert("You was registered!")
            localStorage.setItem("users", JSON.stringify(user_recs));
        }
    }
}



function log() {
    let email = document.getElementById('em').value;
    pass = document.getElementById('pa').value;

    if(email == "" || pass == ""){
        alert("Fill in all the fields!");
    }
    else { 
        let user_recs = new Array();
        user_recs = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if(user_recs.some((v) => {
            return v.email == email && v.pass == pass
        })){
            alert("Login Successfull!");
            let current_user = user_recs.filter((v)=>{
                return v.email == email && v.pass ==pass
            })[0]

            localStorage.setItem("name",current_user.name);
            localStorage.setItem("email",current_user.email);
            localStorage.setItem("pass",current_user.pass);
            window.location.href = "account.html";
        }
        else{
            alert("Login Fail")

        }
    }
}
