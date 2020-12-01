<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap, getMarker } = getContext(key);
    const map = getMap();
    const marker = getMarker();

    export let options = {};
    export let infowindow = new google.maps.InfoWindow({
        ...options,
    });
    export let visible = false;

    const showInfoWindow = (visible) => {
        visible ? infowindow.open(map, marker) : infowindow.close();
    }

    $: {
        infowindow.setOptions(options);
        showInfoWindow(visible);
    }

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });

    // Remove the infowindow from the map on destroy
    onDestroy(() => {
        infowindow.setMap(null);
    });
</script>
