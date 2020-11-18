<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { gmaps_loaded, gmaps_loading } from './stores.js';

    const dispatch = createEventDispatcher();

    export let api_key;

    // When gmaps_loaded changes to true, dispatch ready event
    $: $gmaps_loaded && dispatch('ready');

    onMount(() => {
        // Update store when google maps has been loaded
        // This function will be called because we define it as an callback
        window.gmapsReady = () => {
            gmaps_loaded.set(true);
            delete window['gmapsReady'];
        };

        // This will run if google maps already has been initialized
        if ($gmaps_loaded) {
            dispatch('ready');
        }

        // If we are not already trying to initialize google maps
        if (!$gmaps_loading) {
            gmaps_loading.set(true);
            const url = `//maps.googleapis.com/maps/api/js?libraries=places&callback=gmapsReady${
                api_key ? '&key=' + api_key : ''
            }`;

            // Create a script tag with the url
            const tag = document.createElement('script');
            tag.src = url;

            // Dispatch event when the script has been loaded
            tag.onload = () => {
                return $gmaps_loaded;
            };

            // Add the script tag to the DOM
            document.head.appendChild(tag);
        }
    });
</script>
