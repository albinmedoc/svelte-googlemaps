<script>
    import GoogleSDK from '../GoogleSDK.svelte';
    import { createEventDispatcher, setContext } from 'svelte';
    import { key } from '../contexts.js';

    const dispatch = createEventDispatcher();

    // Add function to retrieve the map into context
    setContext(key, {
        getMap: () => map,
    });


    export let api_key;
    export let options;

    let map_element;
    let map;

    // Initialize the map
    function initialize() {
        const google = window['google'];
        map = new google.maps.Map(map_element, options);
        dispatch('ready');
    }
</script>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>

<GoogleSDK {api_key} on:ready={initialize} />

<div bind:this={map_element}>
    {#if map}
        <slot />
    {/if}
</div>
