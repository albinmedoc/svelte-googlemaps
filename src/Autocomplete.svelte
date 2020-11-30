<script>
    import GoogleSDK from './GoogleSDK.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let api_key;
    export let options = {};
    export let placeholder = 'Enter a location';
    export let value = '';

    let autocomplete;
    let input_element;
    let disabled = true;
    let current_place;

    // Initialize the autocomplete input
    function initialize() {
        const google = window['google'];
        autocomplete = new google.maps.places.Autocomplete(
            input_element,
            options
        );
        disabled = false;

        autocomplete.addListener('place_changed', () => {
            current_place = autocomplete.getPlace();
            if (!current_place.geometry) {
                return current_place = null;
            }
            dispatch('placeChanged', current_place);
        });
        dispatch('ready', autocomplete);
    }

    $: {
        autocomplete.setOptions(options);
    }
</script>

<GoogleSDK {api_key} on:ready={initialize} />
<input bind:value bind:this={input_element} {disabled} placeholder={placeholder} />
