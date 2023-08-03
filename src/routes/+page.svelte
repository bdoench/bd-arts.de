<script>
	let name = "World"

	let mobile = false

	const navItems = [
    { label: "Logo", href: "https://bd-arts.de" },
    { label: "Time", href: "#" },
    { label: "Weather", href: "/weather" },
    { label: "Blog", href: "/blog" },
    { label: "Subjects", href: "/subjects" },
    { label: "About", href: "/about" },
    { label: "Login", href: "/login" },
    { label: "Toogle Darkmode", href: "#" },
    { label: "Language", href: "#" }
  ];

</script>

<nav>
	<ul>
<!--		
        {#each navItems as item}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
-->
        <li><a href="/" class="item left">Logo</a></li>
        <li><a href="/time" class="item left">Time</a></li>
        <li><a href="/weather" class="item left">Weather</a></li>
        <li><a href="/blog" class="item center">Blog</a></li>
        <li><a href="/subjects" class="item center">Subjects</a></li>
        <li><a href="/about" class="item center">About Me</a></li>
        <li><a href="/login" class="item center">Login</a></li>
        <li><a href="#" class="item right">Toggle Darkmode</a></li>
        <li><a href="#" class="item right">Language</a></li>

    </ul>
</nav>	
  
<hr>

<h1>Hello World, welcome to <a href="https://bd-arts.de">bd-arts.de</a>!</h1>
<p>Visit the GitHub <a href="https://github.com/bdoench/bd-arts.de">repository</a> to follow the development.</p>

<style>
    nav {
        display: flex;
        background-color: darkslategray;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        justify-content: center;
    }

    .item {
        text-decoration: none;
        color: antiquewhite;
        padding: 10px;
    }

    .left {
        margin-left: 0px;
        text-align: left;
    }

    .center {
        text-align: center;
    }

    .right  {
        margin-right: 0px;
        text-align: right;
    }
</style>