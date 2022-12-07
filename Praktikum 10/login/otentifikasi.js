function login() {
    event.preventDefault();
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    
    if (user == "Sefviana" && pass == "sefviana") {
        location.replace("success.html");
        alert("Login Berhasil");
        
    }else {
        alert("Login Gagal");

    }
    
}