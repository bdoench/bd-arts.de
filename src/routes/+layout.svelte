<script>
import '../app.css'
import Navbar from './lib/components/Navbar.svelte';
</script>

<head>
    <title> bd-arts.de | Art, Technology and DIY</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
</head>

<div class="">
    <Navbar />
    <slot />
</div>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-align: center;
    color: antiquewhite;
    text-decoration: none;
    background: black;
    font-family: 'Space Grotesk', sans-serif;
}

</style>
