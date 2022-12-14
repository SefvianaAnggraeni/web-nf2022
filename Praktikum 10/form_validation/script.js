let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let jam = document.getElementById('jam');
let tujuan = document.getElementById('tujuan');
let tiket = document.getElementById('tiket');

let beli = (forms) => {
    let pelangganValue = username.value.trim();
    let emailValue = email.value.trim();
    let jamValue = jam.value.trim();
    let tujuanValue = tujuan.value.trim();
    let tiketValue = tiket.value.trim();
    console.log(tiketValue);

    document.getElementById('hasil-username').value = pelangganValue;
    document.getElementById('hasil-email').value = emailValue;
    document.getElementById('hasil-jam').value = jamValue;
    document.getElementById('hasil-tujuan').value = tujuanValue;
    document.getElementById('hasil-tiket').value = tiketValue;

    alert('Form keberangkatan anda tervalidasi, klik untuk melihat buktinya')

    document.getElementById("hasil").style.display = "block";
    return false;
};