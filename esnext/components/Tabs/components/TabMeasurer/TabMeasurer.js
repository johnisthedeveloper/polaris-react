import React, { memo, useEffect, useRef, useCallback } from 'react';
import { EventListener } from '../../../EventListener';
import { classNames } from '../../../../utilities/css';
import { useComponentDidMount } from '../../../../utilities/use-component-did-mount';
import { Tab } from '../Tab';
import styles from '../../Tabs.scss';
export const TabMeasurer = memo(function TabMeasurer({ selected, tabs, activator, tabToFocus, siblingTabHasFocus, handleMeasurement: handleMeasurementProp, }) {
    const containerNode = useRef(null);
    const animationFrame = useRef(null);
    const handleMeasurement = useCallback(() => {
        if (animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
        }
        animationFrame.current = requestAnimationFrame(() => {
            if (!containerNode.current) {
                return;
            }
            const containerWidth = containerNode.current.offsetWidth;
            const hiddenTabNodes = containerNode.current.children;
            const hiddenTabNodesArray = Array.from(hiddenTabNodes);
            const hiddenTabWidths = hiddenTabNodesArray.map((node) => {
                return node.getBoundingClientRect().width;
            });
            const disclosureWidth = hiddenTabWidths.pop() || 0;
            handleMeasurementProp({
                containerWidth,
                disclosureWidth,
                hiddenTabWidths,
            });
        });
    }, [handleMeasurementProp]);
    useEffect(() => {
        handleMeasurement();
    }, [handleMeasurement, tabs]);
    useComponentDidMount(() => {
        if (process.env.NODE_ENV === 'development') {
            setTimeout(handleMeasurement, 0);
        }
    });
    const tabsMarkup = tabs.map((tab, index) => {
        return (<Tab measuring key={`${index}${tab.id}Hidden`} id={`${tab.id}Measurer`} siblingTabHasFocus={siblingTabHasFocus} focused={index === tabToFocus} selected={index === selected} onClick={noop} url={tab.url}>
        {tab.content}
      </Tab>);
    });
    const classname = classNames(styles.Tabs, styles.TabMeasurer);
    return (<div className={classname} ref={containerNode}>
      <EventListener event="resize" handler={handleMeasurement}/>
      {tabsMarkup}
      {activator}
    </div>);
});
function noop() { }