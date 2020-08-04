import { __rest } from "tslib";
import React from 'react';
import { Button as AppBridgeButton, TitleBar as AppBridgeTitleBar, } from '@shopify/app-bridge/actions';
import isEqual from 'lodash/isEqual';
import { classNames } from '../../utilities/css';
import { transformActions, generateRedirect, } from '../../utilities/app-bridge-transformers';
import { pick } from '../../utilities/pick';
import { withAppProvider, } from '../../utilities/with-app-provider';
import { Header, isPrimaryAction } from './components';
import styles from './Page.scss';
const APP_BRIDGE_PROPS = [
    'title',
    'breadcrumbs',
    'secondaryActions',
    'actionGroups',
    'primaryAction',
];
class PageInner extends React.PureComponent {
    componentDidMount() {
        if (this.delegateToAppbridge() === false || !this.props.polaris.appBridge) {
            return;
        }
        const transformedProps = this.transformProps();
        if (!transformedProps)
            return;
        // eslint-disable-next-line no-console
        console.warn('Deprecation: Using `Page` to render an embedded app title bar is deprecated and will be removed in v5.0. Use `TitleBar` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/titlebar');
        this.titlebar = AppBridgeTitleBar.create(this.props.polaris.appBridge, transformedProps);
    }
    componentDidUpdate(prevProps) {
        if (this.titlebar == null || this.delegateToAppbridge() === false) {
            return;
        }
        const prevAppBridgeProps = pick(prevProps, APP_BRIDGE_PROPS);
        const currentAppBridgeProps = pick(this.props, APP_BRIDGE_PROPS);
        if (!isEqual(prevAppBridgeProps, currentAppBridgeProps)) {
            const transformedProps = this.transformProps();
            if (!transformedProps)
                return;
            this.titlebar.unsubscribe();
            this.titlebar.set(transformedProps);
        }
    }
    componentWillUnmount() {
        if (this.titlebar == null || this.delegateToAppbridge() === false) {
            return;
        }
        this.titlebar.unsubscribe();
    }
    render() {
        const _a = this.props, { children, fullWidth, narrowWidth, singleColumn } = _a, rest = __rest(_a, ["children", "fullWidth", "narrowWidth", "singleColumn"]);
        if (singleColumn) {
            // eslint-disable-next-line no-console
            console.warn('Deprecation: The singleColumn prop has been renamed to narrowWidth to better represents its use and will be removed in v5.0.');
        }
        const className = classNames(styles.Page, fullWidth && styles.fullWidth, (narrowWidth || singleColumn) && styles.narrowWidth);
        const headerMarkup = this.delegateToAppbridge() || this.hasHeaderContent() === false ? null : (<Header {...rest}/>);
        return (<div className={className}>
        {headerMarkup}
        <div className={styles.Content}>{children}</div>
      </div>);
    }
    delegateToAppbridge() {
        const { polaris: { appBridge }, forceRender = false, } = this.props;
        return appBridge != null && forceRender === false;
    }
    hasHeaderContent() {
        const { title, primaryAction, secondaryActions, actionGroups, breadcrumbs, } = this.props;
        return ((title != null && title !== '') ||
            primaryAction != null ||
            (secondaryActions != null && secondaryActions.length > 0) ||
            (actionGroups != null && actionGroups.length > 0) ||
            (breadcrumbs != null && breadcrumbs.length > 0));
    }
    transformProps() {
        const { appBridge } = this.props.polaris;
        if (!appBridge)
            return;
        const { title, primaryAction, secondaryActions, actionGroups } = this.props;
        return {
            title,
            buttons: transformActions(appBridge, Object.assign(Object.assign({}, (isPrimaryAction(primaryAction) && { primaryAction })), { secondaryActions,
                actionGroups })),
            breadcrumbs: this.transformBreadcrumbs(),
        };
    }
    transformBreadcrumbs() {
        const { appBridge } = this.props.polaris;
        if (!appBridge)
            return;
        const { breadcrumbs } = this.props;
        if (breadcrumbs != null && breadcrumbs.length > 0) {
            const breadcrumb = breadcrumbs[breadcrumbs.length - 1];
            const button = AppBridgeButton.create(appBridge, {
                label: breadcrumb.content || '',
            });
            const callback = !('url' in breadcrumb)
                ? breadcrumb.onAction
                : generateRedirect(appBridge, breadcrumb.url, breadcrumb.target);
            if (callback != null) {
                button.subscribe(AppBridgeButton.Action.CLICK, callback);
            }
            return button;
        }
        else {
            return undefined;
        }
    }
}
export const Page = withAppProvider()(PageInner);