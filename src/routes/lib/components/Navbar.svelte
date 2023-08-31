<script>
import Time from "./Time.svelte";
import Weather from "./Weather.svelte";
</script>

<nav>
    <ul>
        <li><img src="/favicon.png" alt="Logo" width={65} class="logo"/></li>
        <li><Time /></li>
        <li><Weather /></li>
    </ul><ul>
        <li><a href="/blog" class="item center">Blog</a></li>
        <li><a href="/subjects" class="item center">Subjects</a></li>
        <li><a href="/about" class="item center">About Me</a></li>
    </ul><ul>
        <li><a href="/login" class="item right">Login</a></li>
        <li><a href="/" class="item right">Toggle Darkmode</a></li>
        <li><a href="/" class="item right">Language</a></li>
    </ul>
</nav>

<style>
nav {
    padding: 0 0;
    top: 0;
    min-width: 100%;
    min-height: 20px;
    position: relative;
    overflow: hidden;
    background-color: rgba(47, 79, 79, 0.7);
    display: inline-flex;
    justify-content: space-around;
    align-items: center;

}

ul {
    margin: 0;
    padding: 0;
    display: contents;
    list-style: none;
}

.logo {}

.item {
    display: inline-block;
    padding: 20px;
}

.item:hover {
    background-color: rgba(47, 79, 79, 0.8);
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
