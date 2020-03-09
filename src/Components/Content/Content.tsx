import React from 'react';

import { Switch, Route } from 'react-router';
import Info from './Info/Info';
import Add from './Add/Add';
import Send from './Send/Send';
import Statistics from './Statistics/Statistics';

import styles from './Content.module.scss';

export default class Content extends React.PureComponent {
    render() {
        return (
            <div className={styles.content}>

                <Switch>
                    <Route path="/info" exact component={Info} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/send" exact component={Send} />
                    <Route path="/statistics" exact component={Statistics} />
                </Switch>

            </div>
        );
    }
}