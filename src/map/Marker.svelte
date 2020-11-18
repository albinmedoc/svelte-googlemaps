<script>
    import { getContext, setContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    // Add functions to retrieve the marker and the map into context
    setContext(key, {
        getMarker: () => marker,
        getMap: () => map,
    });

    export let lat;
    export let lng;
    export let label = undefined;

    // Append the marker on the map
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        label: label,
    });

    // Remove the marker from the map on destroy
    onDestroy(() => {
        marker.setMap(null);
    });
</script>

{#if map}
    <slot />
{/if}
