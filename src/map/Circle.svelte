<script>
    import { getContext, onDestroy } from 'svelte';
    import { key } from '../contexts.js';

    // Get the map from context
    const { getMap } = getContext(key);
    const map = getMap();

    export let options = {};
    export let circle = new google.maps.Circle({
        ...options,
        map,
    });

    $: {
        circle.setOptions(options);
    }

    // Remove the circle from the map on destroy
    onDestroy(() => {
        circle.setMap(null);
    });
</script>
