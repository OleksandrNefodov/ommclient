import React from 'react';

import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem';
import Icon, { IconSize } from '../Icon/Icon';

export interface IListItem {
    businessId: string,
    name: string,
}

export interface IItemState {
    items: IListItem[]
}

export default class List extends React.PureComponent<{}, IItemState> {

    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            items: this.listItems
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event: { target: { value: string; }; }) {
        const userInput = event.target.value.toLowerCase();

        let filteredItems = this.listItems.filter((item) => {
            return item.businessId.startsWith(userInput) || item.name.toLowerCase().startsWith(userInput) ? true : false;
        });

        this.setState({ items: filteredItems });

    }

    listItems: IListItem[] = [
        { businessId: '123', name: 'ganization 1' },
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
        { businessId: '143242-4', name: 'aleks 3' },
        { businessId: '361111-3', name: 'Organization 4' },
        { businessId: '346433-3', name: 'Organization 5' },
        { businessId: '342436-3', name: 'Organization 6' },
    ];
    render() {
        return (

            <div className={styles.listContainer}>
                <div className={styles.search}>
                    <Icon id="" name="search" size={IconSize.X2} />
                    <input type="text" className={styles.search} placeholder="Search..." onChange={this.onChange} />
                </div>
                {/* <input className={styles.search} type="text" placeholder="Search.." id="myInput" /> */}

                <div className={styles.list}>
                    {
                        <ul className={styles.scrollable}>
                            {
                                this.state.items.map((item, i) =>

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
