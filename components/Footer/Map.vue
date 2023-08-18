<template>
    <div class="map">
        <MapboxMap
            map-id="map-box"
            :options="{
                style: 'mapbox://styles/teddi90/cllggnoh6015k01pbh9l65lse/draft',
                center: [24.706, 48.9229],
                zoom: 16,
            }"
        >
            <FooterMapMarker />
        </MapboxMap>
    </div>
</template>

<script setup>
</script>
