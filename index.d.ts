import type { SvelteComponent } from "svelte";

export interface AutoCompleteProps {
    api_key: string;
    options?: google.maps.places.AutocompleteOptions;
    placeholder?: string;
    autocomplete?: google.maps.places.Autocomplete;
}

declare class AutoComplete extends SvelteComponent {
    $$prop_def: AutoCompleteProps;
}

export interface CircleProps {
    options: google.maps.CircleOptions;
}

declare class Circle extends SvelteComponent {
    $$prop_def: CircleProps;
}

export interface InfoWindowProps {
    options: google.maps.InfoWindowOptions;
    infowindow?: google.maps.InfoWindow;
}

declare class InfoWindow extends SvelteComponent {
    $$prop_def: InfoWindowProps;
}

export interface MapProps {
    api_key: string;
    options: google.maps.MapOptions;
    map?: google.maps.Map;
}

declare class Map extends SvelteComponent {
    $$prop_def: MapProps;
}

export interface MarkerProps {
    options: google.maps.MarkerOptions;
    marker?: google.maps.Marker;
}

declare class Marker extends SvelteComponent {
    $$prop_def: MarkerProps;
}

export interface PolygonProps {
    options: google.maps.PolygonOptions;
}

declare class Polygon extends SvelteComponent {
    $$prop_def: PolygonProps;
}

export interface PolylineProps {
    options: google.maps.PolylineOptions;
}

declare class Polyline extends SvelteComponent {
    $$prop_def: PolylineProps;
}

export { AutoComplete, Circle, InfoWindow, Map, Marker, Polygon, Polyline }
