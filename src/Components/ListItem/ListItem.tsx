import React from 'react';

import styles from './ListItem.module.scss';
import Icon, { IconSize } from '../Icon/Icon';

interface IListItemProps {
    businessId: string,
    name: string,
}

export default class ListItem extends React.PureComponent<IListItemProps> {
    render() {
        return (
            <li className={styles.item}>

                <Icon id="" name="cogs" size={IconSize.X2} />

                <Icon id="" name="unlock" size={IconSize.X2} />

                <span>
                    {this.props.name} <br />
                </span>
                <span>
                    {this.props.businessId}
                </span>

            </li>
        );
    }
}