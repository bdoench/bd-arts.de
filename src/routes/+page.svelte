<script>
let name = "World"

let mobile = false

const navItems = [{
        label: "Logo",
        href: "https://bd-arts.de"
    },
    {
        label: "Time",
        href: "#"
    },
    {
        label: "Weather",
        href: "/weather"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Subjects",
        href: "/subjects"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Login",
        href: "/login"
    },
    {
        label: "Toogle Darkmode",
        href: "#"
    },
    {
        label: "Language",
        href: "#"
    }
];
</script>

<head>
    <title> BD-ARTS.DE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <div class="bg-img">
        <nav>
            <ul>
                <li><a href="/" class="item left logo">Logo</a></li>
                <li><a href="/time" class="item left">Time</a></li>
                <li><a href="/weather" class="item left">Weather</a></li>
            </ul><ul>
                <li><a href="/blog" class="item center">Blog</a></li>
                <li><a href="/subjects" class="item center">Subjects</a></li>
                <li><a href="/about" class="item center">About Me</a></li>
                <li><a href="/login" class="item center">Login</a></li>
            </ul><ul>
                <li><a href="/" class="item right">Toggle Darkmode</a></li>
                <li><a href="/" class="item right">Language</a></li>
            </ul>
        </nav>

        <h1>Hello World, welcome to <a href="https://bd-arts.de">bd-arts.de</a>!</h1>

        <p>This site is still under construction! For further updates or if you want to follow the development, you can visit my GitHub <a href="https://github.com/bdoench/bd-arts.de">repository</a>.</p>
    </div>
</body>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-align: center;
    color: antiquewhite;
    text-decoration: none;
}

body {
    background-color: darkslategray;
    font-family: 'Space Grotesk', sans-serif;
}

h1 {
    font-size: 40px;
    padding: 40px;
    text-shadow: 0px 0px 10px black;
}

p {
    position: absolute;
    bottom: 0;
    text-shadow: 0px 0px 10px black;
}

.bg-img {
    background-image: url('/bg2.jpg');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 800px;
    min-width: 500px;

    position: relative;
}

nav {
    padding: 0 0;
    min-width: 100%;
    min-height: 20px;
    background-color: rgba(47, 79, 79, 0.7);
    display: inline-flex;
    justify-content: space-around;
    align-items: center;

    overflow: hidden;

}

ul {
    margin: 0;
    padding: 0;
    display: contents;
    list-style: none;
}

.item {
    display: inline-block;
    padding: 20px;
}

.item:hover {
    background-color: rgba(47, 79, 79, 0.8)
}

.left {}

@media only screen and (max-width: 935px) {
    .center {
        display: none;
    }
}

.right {}
</style>
