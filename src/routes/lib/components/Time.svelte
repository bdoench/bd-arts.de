<script>
import { onMount } from 'svelte';

let time = new Date();

let hours = time.getHours()
let minutes = time.getMinutes()
$: str_hours = hours < 10 ? "0" + hours : hours;
$: str_minutes = minutes < 10 ? "0" + minutes : minutes;

onMount(() => {
    const interval = setInterval(() => {
        time = new Date();
    }, 1000);});
</script>

<div>
    <a href="/" class="item left">{str_hours}:{str_minutes}</a>
</div>

<style>
div {
    font-size: inherit;
    color: antiquewhite;
    text-shadow: 0px 0px 10px black;
}
</style>
