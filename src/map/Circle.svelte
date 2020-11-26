<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    export let options = {};

    // Append the circle on the map
    const circle = new google.maps.Circle({
        ...options,
        map,
    });

    // Remove the circle from the map on destroy
    onDestroy(() => {
        circle.setMap(null);
    });
</script>
