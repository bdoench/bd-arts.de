<script>
import Time from "./Time.svelte";
import Weather from "./Weather.svelte";
import {
    onMount
} from 'svelte';

let showInvisible = false;

onMount(() => {
    const visibleLink = document.querySelector('.visible');
    visibleLink.addEventListener('mouseover', () => {
        showInvisible = true;
    });
    visibleLink.addEventListener('mouseout', () => {
        showInvisible = false;
    });
});
</script>

<div class="container">
    <div class="navbar">
        <div class="left">
            <ul>
                <img src="/favicon.png" alt="Logo" width={65} class="logo"/>
                <li><Time /></li>
                <li><Weather /></li>
            </ul>
        </div>
        <div class="center">
            <nav>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/subjects" class="visible" style="display: {showInvisible ? 'none' : 'flex'}">Subjects</a></li>
                    <div style="display: {showInvisible ? 'flex' : 'none'}">
                        <ul>
                            <li><a href="/photography">Photography</a></li>
                            <li><a href="/3dart">3D Art</a></li>
                            <li><a href="/diy">DIY | Electronics</a></li>
                            <li><a href="/tech">Tech</a></li>
                        </ul>
                    </div>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
        <div class="right">
            <ul>
                <li><a href="/login">Login</a></li>
                <li><button>Darkmode</button></li>
                <li><button>Language</button></li>
                <li><button>Menu</button></li>
            </ul>
        </div>
    </div>

    <div class="popup-box" style="display: {showInvisible ? 'block' : 'none'}">
        <ul>
            <li><a href="/photography">Photography</a></li>
            <li><a href="/3dart">3D Art</a></li>
            <li><a href="/diy">DIY | Electronics</a></li>
            <li><a href="/tech">Tech</a></li>
        </ul>
    </div>
</div>

<style>
* {
    text-shadow: 1px 1px 10px black;
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

    padding-top: 2vh;
    padding-bottom: 2vh;

    backdrop-filter: blur(2px);
    background: radial-gradient(circle, rgba(47, 79, 79, 0) 0%, rgba(88, 150, 150, 0.5)60%, rgba(47, 79, 79, 1) 100%);
}

.popup-box {
    position: absolute;

    z-index: 9999;
    background-color: rgba(47, 79, 79, 1);
    border-radius: 50px;
    max-width: 40vw;
    padding: 7vh;

}

.popup-box ul {
    flex-direction: column;
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

    backdrop-filter: blur(30px);
    background: rgba(47, 79, 79, 0.4);

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

li:hover {

    text-shadow: none;
    background-size: 100% 100%;
    translate: 1px 1px;

}

.invisible {
    display: none;
}

.li:hover+.invisible {
    display: inline-block;
}

@media only screen and (max-width: 500px) {
    .invisible {
        display: none;
    }
}
</style>
