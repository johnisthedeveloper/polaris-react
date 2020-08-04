import React from 'react';
import debounce from 'lodash/debounce';
import { classNames } from '../../../../utilities/css';
import { FeaturesContext } from '../../../../utilities/features';
import { Popover } from '../../../Popover';
import { Button } from '../../../Button';
import { EventListener } from '../../../EventListener';
import { Item } from './components';
import styles from './ConnectedFilterControl.scss';
const FILTER_FIELD_MIN_WIDTH = 150;
export class ConnectedFilterControl extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            availableWidth: 0,
            proxyButtonsWidth: {},
        };
        this.container = React.createRef();
        this.proxyButtonContainer = React.createRef();
        this.moreFiltersButtonContainer = React.createRef();
        this.handleResize = debounce(() => {
            this.measureProxyButtons();
            this.measureAvailableWidth();
        }, 40, { leading: true, trailing: true, maxWait: 40 });
    }
    componentDidMount() {
        this.handleResize();
    }
    render() {
        const { newDesignLanguage } = this.context || {};
        const { children, rightPopoverableActions, rightAction, auxiliary, forceShowMorefiltersButton = true, } = this.props;
        const actionsToRender = rightPopoverableActions != null
            ? this.getActionsToRender(rightPopoverableActions)
            : [];
        const className = classNames(styles.ConnectedFilterControl, rightPopoverableActions && styles.right, newDesignLanguage && styles.newDesignLanguage);
        const shouldRenderMoreFiltersButton = forceShowMorefiltersButton ||
            (rightPopoverableActions &&
                rightPopoverableActions.length !== actionsToRender.length);
        const RightContainerClassName = classNames(styles.RightContainer, !shouldRenderMoreFiltersButton && styles.RightContainerWithoutMoreFilters);
        const rightMarkup = actionsToRender.length > 0 ? (<div className={RightContainerClassName} testID="FilterShortcutContainer">
          {this.popoverFrom(actionsToRender)}
        </div>) : null;
        const moreFiltersButtonContainerClassname = classNames(styles.MoreFiltersButtonContainer, actionsToRender.length === 0 &&
            newDesignLanguage &&
            styles.onlyButtonVisible);
        const rightActionMarkup = rightAction ? (<div ref={this.moreFiltersButtonContainer} className={moreFiltersButtonContainerClassname}>
        {shouldRenderMoreFiltersButton && <Item>{rightAction}</Item>}
      </div>) : null;
        const proxyButtonMarkup = rightPopoverableActions ? (<div className={styles.ProxyButtonContainer} ref={this.proxyButtonContainer} aria-hidden>
        {rightPopoverableActions.map((action) => (<div key={action.key} data-key={action.key}>
            {this.activatorButtonFrom(action)}
          </div>))}
      </div>) : null;
        const auxMarkup = auxiliary ? (<div className={styles.AuxiliaryContainer}>{auxiliary}</div>) : null;
        return (<React.Fragment>
        {proxyButtonMarkup}
        <div className={styles.Wrapper}>
          <div className={className} ref={this.container}>
            <div className={styles.CenterContainer}>
              <Item>{children}</Item>
            </div>
            {rightMarkup}
            {rightActionMarkup}
            <EventListener event="resize" handler={this.handleResize}/>
          </div>
          {auxMarkup}
        </div>
      </React.Fragment>);
    }
    measureProxyButtons() {
        if (this.proxyButtonContainer.current) {
            const proxyButtonsWidth = {};
            // this number is magical, but tweaking it solved the problem of items overlapping
            const tolerance = 78;
            if (this.proxyButtonContainer.current) {
                Array.from(this.proxyButtonContainer.current.children).forEach((element) => {
                    const buttonWidth = element.getBoundingClientRect().width + tolerance;
                    const buttonKey = element instanceof HTMLElement && element.dataset.key;
                    if (buttonKey) {
                        proxyButtonsWidth[buttonKey] = buttonWidth;
                    }
                });
            }
            this.setState({ proxyButtonsWidth });
        }
    }
    measureAvailableWidth() {
        if (this.container.current && this.moreFiltersButtonContainer.current) {
            const containerWidth = this.container.current.getBoundingClientRect()
                .width;
            const moreFiltersButtonWidth = this.moreFiltersButtonContainer.current.getBoundingClientRect()
                .width;
            const filtersActionWidth = 0;
            const availableWidth = containerWidth -
                FILTER_FIELD_MIN_WIDTH -
                moreFiltersButtonWidth -
                filtersActionWidth;
            this.setState({ availableWidth });
        }
    }
    getActionsToRender(actions) {
        let remainingWidth = this.state.availableWidth;
        const actionsToReturn = [];
        for (let i = 0; remainingWidth > 0 && i < actions.length; i++) {
            const action = actions[i];
            const actionWidth = this.state.proxyButtonsWidth[action.key];
            if (actionWidth <= remainingWidth) {
                actionsToReturn.push(action);
                remainingWidth -= actionWidth;
            }
            else {
                // When we can't fit an action, we break the loop.
                // The ones that didn't fit will be accessible through the "More filters" button
                break;
            }
        }
        return actionsToReturn;
    }
    activatorButtonFrom(action) {
        return (<Button onClick={action.onAction} disclosure disabled={this.props.disabled || action.disabled} id={`Activator-${action.key}`}>
        {action.content}
      </Button>);
    }
    popoverFrom(actions) {
        return actions.map((action) => {
            return (<Item key={action.key}>
          <Popover active={action.popoverOpen} activator={this.activatorButtonFrom(action)} onClose={action.onAction} preferredAlignment="left" sectioned>
            {action.popoverContent}
          </Popover>
        </Item>);
        });
    }
}
ConnectedFilterControl.contextType = FeaturesContext;