<script setup>
import { ref, onMounted, computed } from "vue"

const props = defineProps({
	maxRotation: {
		type: Number,
		default: 20 // in degrees
	}
})

const element = ref(null)
const rotationX = ref(0)
const rotationY = ref(0)

document.addEventListener("mousemove", event => {
	const boundingRect = element.value.getBoundingClientRect()
	const centerX = boundingRect.x + boundingRect.width / 2
	const centerY = boundingRect.y + boundingRect.height / 2
	const offsetX = event.clientX - centerX
	const offsetY = event.clientY - centerY
	const maxOffsetX = offsetX < 0 ? centerX : innerWidth - centerX
	const maxOffsetY = offsetY < 0 ? centerY : innerHeight - centerY
	rotationX.value = (offsetX / maxOffsetX) * props.maxRotation
	rotationY.value = -(offsetY / maxOffsetY) * props.maxRotation
})
</script>

<template>
	<div ref="element">
		<slot></slot>
	</div>
</template>

<style scoped>
div {
	transition: none;
	transform: perspective(600px) rotateY(v-bind(rotationX + "deg")) rotateX(v-bind(rotationY + "deg"));
}
</style>
