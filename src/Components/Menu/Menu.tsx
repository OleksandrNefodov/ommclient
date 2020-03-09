import React from 'react';
import Icon, { IconSize } from '../Icon/Icon';
import { Link } from 'react-router-dom';

import styles from "./Menu.module.scss";

export interface IMenuProps {
    items: MenuItem[],
}

export interface MenuItem {
    icon: string,
    size: IconSize,
    route: string,
}

export class Menu extends React.PureComponent<IMenuProps> {
    render() {
        return (
            <div className={styles.menu}>
                <ul>
                    {
                        this.props.items.map((item, i) =>
                            <li key={i}>
                                <Link to={item.route}>

                                    <Icon id={i} name={item.icon} size={item.size} />

                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div >
        );
    }
}