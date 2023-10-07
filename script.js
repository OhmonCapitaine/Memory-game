const images = [
    "Assets/sonic_1.png",
    "Assets/sonic_1.png",
    "Assets/e_123_omega.png",
    "Assets/e_123_omega.png",
    "Assets/metal-sonic.png",
    "Assets/metal-sonic.png",
    "Assets/mighty.png",
    "Assets/mighty.png",
    "Assets/Knuckles.png",
    "Assets/Knuckles.png",
    "Assets/ray.png",
    "Assets/ray.png",
    "Assets/shadow.png",
    "Assets/shadow.png",
    "Assets/sonic-tails.png",
    "Assets/sonic-tails.png"
];

var shuf_images = images.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (var i = 0; i < shuf_images.length; i++) {
    let box = document.createElement("div");
    box.className = 'item item-img'; 

    let img = document.createElement("img");
    img.src = shuf_images[i];
    img.alt = "Image " + (i + 1);

    box.appendChild(img);

    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].getElementsByTagName("img")[0].src === document.querySelectorAll('.boxOpen')[1].getElementsByTagName("img")[0].src) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === images.length) {
                        alert('GREAT! You WIN!!!');
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    document.querySelector('.game').appendChild(box);
}
