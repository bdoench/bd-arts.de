<!-- src/routes/+layout.svelte -->
<script>
    import { onMount } from 'svelte';
    import '../app.css';
    import Page from './+page.svelte';
    import Navbar from './lib/components/Navbar.svelte';
    import { darkMode } from '../store.js'; // Importiere den Store

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
            "/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg",
            "/bg5.jpg", "/bg6.jpg", "/bg7.jpg", "/bg8.jpg",
            "/bg9.jpg", "/bg10.jpg", "/bg11.jpg", "/bg12.jpg",
            "/bg13.jpg", "/bg14.jpg", "/bg15.jpg"
        ];

        var urls = [
            "/bg1_web_ls.jpg", "/bg2_web_ls.jpg", "/bg3_web_ls.jpg",
            "/bg4_web_ls.jpg", "/bg5_web_ls.jpg", "/bg6_web_ls.jpg",
            "/bg7_web_ls.jpg", "/bg8_web_ls.jpg", "/bg9_web_ls.jpg",
            "/bg10_web_ls.jpg", "/bg11_web_ls.jpg", "/bg12_web_ls.jpg",
            "/bg13_web_ls.jpg", "/bg14_web_ls.jpg", "/bg15_web_ls.jpg"
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
    <title>bd-arts.de | Art, Technology and DIY</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
</head>

<div class={$darkMode ? 'dark-mode' : 'light-mode'}>
    <Navbar />
    <body>
        <div id="bg" class="bg-img {$darkMode ? 'bg-dark' : 'bg-light'}"></div>
        <div>
            
            <div class="content">
                <h1>Hello World, <br> welcome to <a href="https://bd-arts.de">bd-arts.de</a>!</h1>
            </div>
        
            <p>This site is still under construction! For further updates or if you want to follow the development, visit my GitHub <a href="https://github.com/bdoench/bd-arts.de">repository</a>.</p>
        
            <slot />
            
        </div>
    </body>
</div>

<style>
    * {
        text-align: center;
        text-decoration: none;
        font-family: "Space Grotesk", sans-serif;
        transition: all 100ms ease-in;
    }

    .dark-mode {
        color: white;
        background-color: black;
        box-shadow: 0px 0px 50px 0px black;
        text-shadow: 0 0 10px black;
        border-color: black;
    }

    .light-mode {
        color: black;
        background-color: white;
        box-shadow: 0px 0px 50px 0px white;
        text-shadow: 0 0 10px darkgrey;
        border-color: white;
    }

    .bg-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        min-width: 100%;
        height: 100vh;
        opacity: 0.9;
        position: absolute;
        transition: all 1000ms ease-out;
    }

    .bg-img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-color);
        opacity: 0.1; /* Adjust this value as needed */
        z-index: -1; /* Ensure it stays behind the images */
    }

    .bg-dark::before {
        --background-color: black;
    }

    .bg-light::before {
        --background-color: white;
    }

    @keyframes slideBackground {
        0% {
            transform: translate(100%);
        }
        100% {
            transform: translate(0%);
        }
    }

.content {
    margin: max(55vh, 200px) 20vw;
    padding: 5vh 10vw;
    translate: 0% -50%;
    width: 60vw;
    line-height: 5rem;
    position: absolute;
    font-size: 40px;

    background-color: rgba(47, 79, 79, 0.5);
    border-style: solid;
    border-width: 2px;

    border-radius: 20px;
    backdrop-filter: blur(10px);

    
    
}

p {
    position: absolute;
    bottom: 0;
    text-shadow: 0px 0px 10px black;
}
</style>
