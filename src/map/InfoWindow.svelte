<script>
    import { getContext } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap, getMarker } = getContext(key);
    const map = getMap();
    const marker = getMarker();

    export let options = {};
    export let infowindow = undefined;

    const removeWindow = () => {
        infowindow.setMap(null);
    }

    $: () => {
        if (infowindow) {
            removeWindow();
        }
        // Append the infowindow on the marker
        infowindow = new google.maps.InfoWindow({
            ...options,
        });
    };

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });

    // Remove the infowindow from the marker on destroy
    onDestroy(() => {
        removeWindow();
    });
</script>
