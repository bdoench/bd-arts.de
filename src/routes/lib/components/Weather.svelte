<script>
    import { onMount } from 'svelte';
    import { darkMode } from '/src/store.js';

    let temperature = "...";
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Fetch from .env

    async function fetchWeather(lat, lon) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();
            temperature = `${Math.round(data.main.temp)}°C`;
        } catch (error) {
            temperature = "N/A";
            console.error("Error fetching weather:", error);
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                () => {
                    temperature = "Location denied";
                }
            );
        } else {
            temperature = "Geolocation not supported";
        }
    }

    onMount(() => {
        getLocation();
    });
</script>

<div class={$darkMode ? 'dark-mode' : 'light-mode'}>
    <a href="/" class="item left">{temperature}</a>
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