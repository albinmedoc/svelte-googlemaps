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
    export let marker = new google.maps.Marker({
        ...options,
        map,
    });

    $: {
        marker.setOptions(options);
    }

    // Remove the marker from the map on destroy
    onDestroy(() => {
        marker.setMap(null);
    });
</script>

{#if map}
    <slot />
{/if}
