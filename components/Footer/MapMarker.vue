<template>
    <div
        ref="markerRef"
        class="marker"
        :style="{
            backgroundImage: 'url(/marker.png)',
            width: '50px',
            height: '56px',
            backgroundSize: '100%',
        }"
    />
</template>

<script setup>
const markerRef = ref(null);

const marker = defineMapboxMarker("marker-custom", {}, markerRef, (m) => {
    m.setLngLat([24.70317, 48.9229]);
});
</script>

