<script>
    import { darkMode } from '../../../store.js';
</script>

<div class="toggle">
    <input type="checkbox" id="theme-toggle" bind:checked={$darkMode} />
    <label for="theme-toggle" />
</div>

<style lang="postcss">
    #theme-toggle {
        @apply invisible;        
    }

    .toggle:hover {
        translate: 1px 1px;
        #background: radial-gradient(circle, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%);
    }

    #theme-toggle + label {
        @apply inline-flex cursor-pointer h-11 w-11 relative top-1 right-2 rounded-full duration-300;
    }

    #theme-toggle:not(:checked) + label {
        @apply bg-amber-400;
    }

    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -13px -11px 0px 0px antiquewhite;
    }
</style>