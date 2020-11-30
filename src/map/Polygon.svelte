<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    export let options = {};
    export let polygon = new google.maps.Polygon({
        ...options,
        map,
    });

    $: {
        polygon.setOptions(options);
    }

    // Remove the polygon from the map on destroy
    onDestroy(() => {
        polygon.setMap(null);
    });
</script>
