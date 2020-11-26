<script>
    import { getContext } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap, getMarker } = getContext(key);
    const map = getMap();
    const marker = getMarker();

    export let options = {};

    let infowindow = new google.maps.InfoWindow({
        ...options,
    });

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });
</script>
