<script>
    import { onMount, onDestroy } from 'svelte';
    import { darkMode } from '/src/store.js';

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();

    // Reactive updates
    $: str_hours = hours < 10 ? "0" + hours : hours;
    $: str_minutes = minutes < 10 ? "0" + minutes : minutes;

    let interval;

    onMount(() => {
        interval = setInterval(() => {
            time = new Date();
            hours = time.getHours();
            minutes = time.getMinutes();
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class={$darkMode ? 'dark-mode' : 'light-mode'}>
    <a href="/" class="item left">{str_hours}:{str_minutes}</a>
</div>

<style>
    div {
        font-size: inherit;
        text-shadow: 0px 0px 10px black;
    }

    .dark-mode {
        color: white;
    }

    .light-mode {
        color: black;
    }
</style>
