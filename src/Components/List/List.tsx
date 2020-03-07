import React, { Fragment } from 'react';

import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem';

export interface IListItem {
    businessId: string,
    name: string,
}

export default class List extends React.PureComponent {
    items: IListItem[] = [
        { businessId: '123', name: 'Organization 1' },
        { businessId: '643', name: 'Organization 2' },
        { businessId: '143242-4', name: 'Organization 3' },
        { businessId: '361111-3', name: 'Organization 4' },
        { businessId: '346433-3', name: 'Organization 5' },
        { businessId: '342436-3', name: 'Organization 6' },
        { businessId: '123', name: 'Organization 1' },
        { businessId: '643', name: 'Organization 2' },
        { businessId: '143242-4', name: 'Organization 3' },
        { businessId: '361111-3', name: 'Organization 4' },
        { businessId: '346433-3', name: 'Organization 5' },
        { businessId: '342436-3', name: 'Organization 6' },
        { businessId: '123', name: 'Organization 1' },
        { businessId: '643', name: 'Organization 2' },
        { businessId: '143242-4', name: 'Organization 3' },
        { businessId: '361111-3', name: 'Organization 4' },
        { businessId: '346433-3', name: 'Organization 5' },
        { businessId: '342436-3', name: 'Organization 6' },
        { businessId: '123', name: 'Organization 1' },
        { businessId: '643', name: 'Organization 2' },
        { businessId: '143242-4', name: 'Organization 3' },
        { businessId: '361111-3', name: 'Organization 4' },
        { businessId: '346433-3', name: 'Organization 5' },
        { businessId: '342436-3', name: 'Organization 6' },
    ];
    render() {
        return (

            <div className={styles.listContainer}>

                <input className={styles.search} type="text" placeholder="Search.." id="myInput" />

                <div className={styles.list}>
                    {
                        <ul className={styles.scrollable}>
                            {
                                this.items.map((item, i) =>

                                    <ListItem key={i} businessId={item.businessId} name={item.name} />

                                )
                            }

                        </ul>

                    }
                </div >

            </div>
        );
    }
}
