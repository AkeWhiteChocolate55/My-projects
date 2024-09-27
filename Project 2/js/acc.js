function logOut() {
    let cm = confirm("Do you exactly want to log out?")
    if(cm){
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        window.location.href = "login.html";
    }
    else{
        alert("You didn't log out your account.")
    }
}

function ren() {
    let pr = prompt("Enter new name");
    localStorage.setItem("name", pr);
    location.reload();

}

function res() {
    let pr = prompt("Enter new password");
    localStorage.setItem("pass", pr);
    location.reload();
}