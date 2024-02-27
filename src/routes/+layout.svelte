<script>
import {
    onMount
} from 'svelte';
import '../app.css'
import Page from './+page.svelte';
import Navbar from './lib/components/Navbar.svelte';

function preloadImages(urls, callback) {
    var loaded = 0;
    urls.forEach(function(url) {
        var img = new Image();
        img.onload = function() {
            loaded++;
            if (loaded === urls.length) {
                callback();
            }
        };
        img.src = url;
    });
}

function cycleBackgrounds() {

    var HD_urls = [
        "/bg1.jpg",
        "/bg2.jpg",
        "/bg3.jpg",
        "/bg4.jpg",
        "/bg5.jpg",
        "/bg6.jpg",
        "/bg7.jpg",
        "/bg8.jpg",
        "/bg9.jpg",
        "/bg10.jpg",
        "/bg11.jpg",
        "/bg12.jpg",
        "/bg13.jpg",
        "/bg14.jpg",
        "/bg15.jpg"
    ];

    var urls = [
        "/bg1_web_ls.jpg",
        "/bg2_web_ls.jpg",
        "/bg3_web_ls.jpg",
        "/bg4_web_ls.jpg",
        "/bg5_web_ls.jpg",
        "/bg6_web_ls.jpg",
        "/bg7_web_ls.jpg",
        "/bg8_web_ls.jpg",
        "/bg9_web_ls.jpg",
        "/bg10_web_ls.jpg",
        "/bg11_web_ls.jpg",
        "/bg12_web_ls.jpg",
        "/bg13_web_ls.jpg",
        "/bg14_web_ls.jpg",
        "/bg15_web_ls.jpg"
    ];
    
    urls = HD_urls; // UNCOMMENT FOR HIGH DEFINITON


    preloadImages(urls, function() {
        var index = 0;
        var timer = 10000;
        var duration = 800;

        var e = document.getElementById("bg");

        function changeBackground() {

            if (e != null && e instanceof HTMLElement) {

                e.style.backgroundImage = "url(" + urls[index] + ")";
                index = (index + 1) % urls.length;
                console.log("Background was changed!", index);
            }
        }

        changeBackground();

        setInterval(changeBackground, timer);
    });
}

onMount(() => {
    cycleBackgrounds();
});
</script>

<head>
    <title> bd-arts.de | Art, Technology and DIY</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
        rel="stylesheet"
        />
</head>

<Navbar />
<body>
    <div id="bg" class="bg-img"></div>
    <Page />
</body>

<style>
* {
    text-align: center;
    color: antiquewhite;
    text-decoration: none;
    background-color: black;
    font-family: "Space Grotesk", sans-serif;
}

.bg-img {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    min-width: 100%;
    height: 100vh;

    

    position: absolute;
    transition: all 2000ms ease-in;
}



@keyframes slideBackground {
    0% {

        transform: translate(100%);
    }

    100% {

        transform: translate(0%);
    }
}
</style>
