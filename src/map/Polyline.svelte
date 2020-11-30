<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    export let options = {};
    export let polyline = new google.maps.Polyline({
        ...options,
        map,
    });

    $: {
        polyline.setOptions(options);
    }

    // Remove the polyline from the map on destroy
    onDestroy(() => {
        polyline.setMap(null);
    });
</script>
