import React from 'react';
import { ThemeConfig } from '../../utilities/theme';
import { I18n } from '../../utilities/i18n';
import { createAppBridge, AppBridgeOptions } from '../../utilities/app-bridge';
import { LinkLikeComponent } from '../../utilities/link';
import { FeaturesConfig } from '../../utilities/features';
interface State {
    intl: I18n;
    appBridge: ReturnType<typeof createAppBridge>;
    link: LinkLikeComponent | undefined;
}
export interface AppProviderProps extends AppBridgeOptions {
    /** A locale object or array of locale objects that overrides default translations. If specifying an array then your fallback language dictionaries should come first, followed by your primary language dictionary */
    i18n: ConstructorParameters<typeof I18n>[0];
    /** A custom component to use for all links used by Polaris components */
    linkComponent?: LinkLikeComponent;
    /** Custom logos and colors provided to select components */
    theme?: ThemeConfig;
    /** For toggling features */
    features?: FeaturesConfig;
    /** Inner content of the application */
    children?: React.ReactNode;
}
export declare class AppProvider extends React.Component<AppProviderProps, State> {
    private stickyManager;
    private scrollLockManager;
    private uniqueIdFactory;
    constructor(props: AppProviderProps);
    componentDidMount(): void;
    componentDidUpdate({ i18n: prevI18n, linkComponent: prevLinkComponent, apiKey: prevApiKey, shopOrigin: prevShopOrigin, forceRedirect: prevForceRedirect, }: AppProviderProps): void;
    render(): JSX.Element;
}
export {};