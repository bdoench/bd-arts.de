<script>
    import { darkMode } from '/src/store.js';
</script>

<div class={$darkMode ? 'dark-mode' : 'light-mode'}>22°C</div>

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
