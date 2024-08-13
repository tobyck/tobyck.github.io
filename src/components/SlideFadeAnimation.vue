<script setup>
defineProps({
	delay: {
		type: Number,
		default: 0
	}
})
</script>

<template>
	<Transition name="slide-fade" appear class="transition">
		<slot></slot>
	</Transition>
</template>

<style scoped>
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-18px);
  opacity: 0;
}

.transition {
	transition-delay: v-bind(delay + "s");
}
</style>
