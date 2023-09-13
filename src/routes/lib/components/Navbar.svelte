<script lang="ts">
import Time from "./Time.svelte";
import Weather from "./Weather.svelte";
import ThemeSwitch from "./ThemeSwitch.svelte";
    import { text } from "@sveltejs/kit";
</script>

<nav class="">
    
    <a href="/"> 
        <img src="/favicon.png" alt="Logo" class="logo"/>
    </a>
    <Time />
    <div class="item left">22°C</div>
    <a href="/blog" class="item center">Blog</a>
    <a href="/subjects" class="item center">Subjects</a>
    <a href="/about" class="item center">About Me</a>
    <a href="/login" class="item right">Login</a>
    <a href="/" class="item right">Language</a>
    <ThemeSwitch />

</nav>

<style>
nav {
    padding: 0 0;
    top: 0;
    width: 100%;
    position: relative;
    background-color: rgba(47, 79, 79, 0.5);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    height: 65px;
}

.item {
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 50px;
    transition: 0.3s;
    
}

.item:hover {
    background-color: rgba(47, 79, 79, 0.5);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgb(255, 255, 255, 0.5);
}

@media only screen and (max-width: 935px) {
    .center {
        display: none;
    }
}

.right{
    float: right;
}
</style>
