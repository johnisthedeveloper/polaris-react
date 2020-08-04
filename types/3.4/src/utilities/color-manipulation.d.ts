import { HSLColor, HSBColor } from './color-types';
export declare function lightenColor(color: HSLColor | string, lighten?: number): string | {
    lightness: number;
    hue: number;
    saturation: number;
};
export declare function darkenColor(color: HSLColor | string, lighten?: number): string | {
    lightness: number;
    hue: number;
    saturation: number;
};
export declare function saturateColor(color: HSLColor | HSBColor | string, saturate?: number): string | {
    saturation: number;
    brightness: number;
    hue: number;
} | {
    saturation: number;
    lightness: number;
    hue: number;
};
export declare function createDarkColor(color: HSLColor | string, darkness: number, saturation: number): string | {
    saturation: number;
    brightness: number;
    hue: number;
} | {
    saturation: number;
    lightness: number;
    hue: number;
};
export declare function createLightColor(color: HSLColor | string, lightness: number, saturation: number): string | {
    saturation: number;
    brightness: number;
    hue: number;
} | {
    saturation: number;
    lightness: number;
    hue: number;
};