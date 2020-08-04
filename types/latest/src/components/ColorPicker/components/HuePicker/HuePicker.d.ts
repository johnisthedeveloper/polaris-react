import React from 'react';
interface State {
    sliderHeight: number;
    draggerHeight: number;
}
export interface HuePickerProps {
    hue: number;
    onChange(hue: number): void;
}
export declare class HuePicker extends React.PureComponent<HuePickerProps, State> {
    state: State;
    render(): JSX.Element;
    private setSliderHeight;
    private setDraggerHeight;
    private handleChange;
}
export {};