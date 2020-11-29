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

    export let options = {};
    export let marker = undefined;

    const removeMarker = () => {
        marker.setMap(null);
    };

    $: () => {
        if (marker) {
            removeMarker();
        }
        // Append the marker on the map
        marker = new google.maps.Marker({
            ...options,
            map,
        });
    };

    // Remove the marker from the map on destroy
    onDestroy(() => {
        removeMarker();
    });
</script>

{#if map}
    <slot />
{/if}
