<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    export let options = {};

    // Append the polygon on the map
    const polygon = new google.maps.Polygon({
        ...options,
        map
    });

    // Remove the polygon from the map on destroy
    onDestroy(() => {
        polygon.setMap(null);
    });
</script>
