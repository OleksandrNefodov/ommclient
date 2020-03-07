import * as React from 'react';
import Icon, { IconSize } from '../Icon/Icon';

import styles from "./Menu.module.scss";

export enum Action {
    Info,
    Add,
    Settings,
    BankConnection,
    Statistics,
    SendFiles
}
export interface IMenuProps {
    items: MenuItem[],
}

export interface MenuItem {
    icon: string,
    size: IconSize,
    action: Action
}

export class Menu extends React.PureComponent<IMenuProps> {
    render() {
        return (
            <div className={styles.menu}>
                <ul>
                    {
                        this.props.items.map((item, i) =>
                            <li key={i}><Icon id={i} name={item.icon} size={item.size} /></li>
                        )
                    }
                </ul>
            </div>
        );
    }
}