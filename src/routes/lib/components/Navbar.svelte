<script lang="ts">
import Time from "./Time.svelte";
import Weather from "./Weather.svelte";
import ThemeSwitch from "./ThemeSwitch.svelte";

import {onMount} from 'svelte';

let e = false;



onMount(() => {
    const toggle = document.querySelector(".expand");
    const popup = document.querySelector(".popup-box");

    toggle.addEventListener("mouseenter", expand);
    toggle.addEventListener("mouseleave", close);

    popup.addEventListener("mouseenter", expand);
    popup.addEventListener("mouseleave", close);

    function expand() {
        e = true;
    }

    function close() {
        e = false
    }
});

</script>

<div class="container">
    <div class="navbar">
        <div class="left">
            <ul>
                <div class="logo">
                    <img src="/favicon.png" alt="Logo" width={65} class="logo"/>
                </div>
                <li><Time /></li>
                <li><Weather /></li>
            </ul>
        </div>

        <div class="center">
            <nav>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <div class="expand">
                        <li><div>Subjects</div></li>
                    </div>
                    <div class="visible">
                        <li><a href="/photography">Photography</a></li>
                        <li><a href="/3dart">3D Art</a></li>
                        <li><a href="/diy">DIY</a></li>
                        <li><a href="/tech">Tech</a></li>
                    </div>
                    <li><a href="/about">About</a></li>
                 </ul>
            </nav>
        </div>
        
        <div class="right">
            <ul>
                <li><a href="/login">Login</a></li>
                <div><ThemeSwitch /></div>
                <li><button>Lang</button></li>
                <div class="menu">
                    <li><button>Menu</button></li>
                </div>
            </ul>
        </div>
        

        <div class="popup-box" style="display: {e ? 'flex' : 'none'}">
            <ul>
                <li><a href="/photography">Photography</a></li>
                <li><a href="/3dart">3D Art</a></li>
                <li><a href="/diy">DIY | Electronics</a></li>
                <li><a href="/tech">Tech</a></li>
            </ul>
        </div>
    </div>
</div>

<style>
* {
    text-shadow: 1px 1px 10px black;
    white-space: nowrap;
}

.navbar {
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;

    justify-content: space-around;

    height: 2cm;
    align-items: center;
    position: fixed;
    z-index: 9999;

    padding: 2vh 10vw;

    backdrop-filter: blur(50px);
    background: radial-gradient(circle at bottom, rgba(0, 0, 0, 0) 20%, rgba(47, 79, 79, 0.5) 90%, rgba(47, 79, 79, 0.8) 100%);
    transition: all 200ms ease-in;
}

.popup-box {
    position: absolute;
    translate: 0% 75%;
    z-index: 9999;
    background-color: rgba(47, 79, 79, 0.8);
    backdrop-filter: blur(50px);
    border: 2px double antiquewhite;
    border-radius: 50px;
    max-width: 30vw;
    padding: 3vh 0;
    display: flexbox;

}

.popup-box ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.logo {
    height: 65px;
}

.left {
    display: flex;
    width: 20vw;
    justify-content: left;
}

.center {
    display: flex;
    width: 40vw;
    justify-content: center;
}

.right {
    display: flex;
    width: 20vw;
    justify-content: right;
}

nav {
    display: flex;

    border: 2px double antiquewhite;
    border-radius: 50vh;

    
    background: rgba(47, 79, 79, 0.8);

}

ul {
    display: flex;
    list-style: none;
    align-items: center;

}

li {
    padding: 0.5cm 0.5cm;
    border-radius: 50vh;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .2) 100%);
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 0% 0%;
    transition: all 100ms;
}

li:hover, button:hover{
    text-shadow: none;
    background-size: 100% 100%;
    translate: 1px 1px;
    text-decoration: underline;
}

.visible{
    display: inline-flex;
}

.expand {
    display: none;
    visibility: hidden;
}

@media only screen and (max-width: 1400px) {

    .expand {
        display: inline-flex;
        visibility: visible;
    }

    .visible{
        display: none;
        visibility: hidden;
    }
}

@media only screen and (max-width: 1100px) {
    .left > ul > :not(.logo) {
        display: none;
        visibility: hidden;
    }

    .right > ul > :not(.menu) {
        display: none;
        visibility: hidden;
    }
}

@media only screen and (max-width: 550px) {
    .center {
        display: none;
        visibility: hidden;
    }
    .navbar {
        justify-content: space-between;
        padding: 1vh;
    }
}

</style>
