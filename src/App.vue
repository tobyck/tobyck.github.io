<script setup>
import SlideFadeAnimation from "@/components/SlideFadeAnimation.vue"
import WelcomeTitle from "@/components/WelcomeTitle.vue"
import MihiSection from "@/components/MihiSection.vue"
import BioSection from "@/components/BioSection.vue"
import ExternalLinks from "@/components/ExternalLinks.vue"
</script>

<template>
	<header>
		<SlideFadeAnimation :delay=".1"><WelcomeTitle/></SlideFadeAnimation>
	</header>
	<main>
		<SlideFadeAnimation :delay=".2"><MihiSection/></SlideFadeAnimation>
		<SlideFadeAnimation :delay=".3"><BioSection/></SlideFadeAnimation>
		<SlideFadeAnimation :delay=".5"><ExternalLinks/></SlideFadeAnimation>
	</main>
</template>

<style>
:root {
	--bg: #191919;
	--main-text: #eee;
	--sub-text: #aaa;
	--icon-color: #666;
	--color1: #ffaa5a;
	--color2: #ff785a;
	--title-font: "Bebas Neue";
	--mihi-font: "IBM Plex Mono";
	--main-font: "IBM Plex Sans";
}

body {
	margin: 0;
	background-color: var(--bg);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: 90vh;
}

main {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	gap: 30pt;
}

a {
	color: var(--main-text);
	transition: 0.2s ease;
}

a:hover {
	color: var(--color2);
}
</style>
