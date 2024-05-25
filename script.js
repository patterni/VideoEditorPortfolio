var checkElement = document.getElementById("check");

function changeText() {
checkElement.textContent = "Watch this";
}


setTimeout(changeText, 3000);

var videoEditorElement = document.getElementById("videoEditor");
videoEditorElement.style.opacity = 0;
videoEditorElement.style.transition = "opacity 2s";
setTimeout(function() {
    videoEditorElement.style.opacity = 1;
}, 1000);

function changeImage() {
    var image = document.getElementById("profileImage");
    if (image.src.endsWith("me.jpg")) {
        image.src = "me2.jpg";
    } else {
        image.src = "me.jpg";
    }
}

const introSection = document.querySelector('.intro-section');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    console.log(scrollPosition);
    introSection.style.transform = `translateY(${scrollPosition * 0.9}px)`;

    let opacity = 1 - (scrollPosition * 0.002); 
    introSection.style.opacity = opacity;
});

 document.getElementById('mobile-menu').addEventListener('click', function () {
            const navLinks = document.getElementById('nav-links');
            const brand = document.querySelector('.navbar a[href="index.html"]');
            navLinks.classList.toggle('show');
            brand.classList.toggle('hidden');
        });



document.addEventListener("DOMContentLoaded", function() {
    var div, n,
        v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = labnolThumb(v[n].dataset.id);
        div.onclick = labnolIframe;
        v[n].appendChild(div);
    }
});

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play-button"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    this.parentNode.replaceChild(iframe, this);
}
