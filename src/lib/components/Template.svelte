<script>
	export let title = '';
	export let description = '';
</script>

<main class="blog-post">
	<header>
		<h1>{title}</h1>
		<h1>{description}</h1>
	</header>
	<slot />
</main>
