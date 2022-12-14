function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "wolfchan.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Wolfchan SKZOO";
        alert("Ini adalah gambar Wolfchan SKZOO");
    } else if (picker == "water") {
        images.src = "leebit.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Leebit SKZOO";
        alert("Ini adalah gambar Leebit SKZOO");
    } else if (picker == "electric") {
        images.src = "dwaekki.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Dwaekki SKZOO";
        alert("Ini adalah gambar Dwaekki SKZOO");
    } else if (picker == "dark") {
        images.src = "jiniret.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Jiniret SKZOO";
        alert("Ini adalah gambar Jiniret SKZOO");
    } else if (picker == "psyhic") {
        images.src = "han_quokka.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Han Quokka SKZOO";
        alert("Ini adalah gambar Han Quokka SKZOO");
    } else if (picker == "fairy") {
        images.src = "bbokari.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Bbokkari SKZOO";
        alert("Ini adalah gambar Bbokkari SKZOO");
    } else if (picker == "grass") {
        images.src = "puppyM.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar PuppyM SKZOO";
        alert("Ini adalah gambar PuppyM SKZOO");
    } else if (picker == "ice") {
        images.src = "fox.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar FoxI.ny SKZOO";
        alert("Ini adalah gambar FoxI.ny SKZOO");
    } else {
        alert("Gagal");
    }
}