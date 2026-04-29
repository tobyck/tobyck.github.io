<script setup>
import SlideFadeAnimation from "@/components/SlideFadeAnimation.vue"
import DynamicTilt from "@/components/DynamicTilt.vue"
import WelcomeTitle from "@/components/WelcomeTitle.vue"
import MihiSection from "@/components/MihiSection.vue"
import BioSection from "@/components/BioSection.vue"
import ExternalLinks from "@/components/ExternalLinks.vue"
</script>

<template>
	<header>
		<SlideFadeAnimation :delay=".1">
			<DynamicTilt :activation-delay="100">
				<WelcomeTitle/>
			</DynamicTilt>
		</SlideFadeAnimation>
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
	--bio-width: 660px;
	--scale: 1;
	--title-scale: 1;
	--height: 90vh;
	--gap: 30pt;
}

/* ipads/tablets */
@media screen and (max-width: 1300px) {
	:root {
		--scale: 0.83;
	}
}

/* phones (except if it's landscape it just completely breaks and i don't care) */
@media screen and (max-width: 800px) {
	:root {
		--bio-width: 85vw;
		--scale: 0.8;
		--title-scale: 0.7;
		--height: 85vh;
		--gap: 15pt;
	}
}

body {
	margin: 0;
	background-color: var(--bg);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: var(--height);
}

main {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	gap: calc(var(--scale) * var(--gap));
}

a {
	color: var(--main-text);
	transition: 0.2s ease;
}

a:hover {
	color: var(--color2);
}
</style>
