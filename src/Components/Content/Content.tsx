import React from 'react';

import styles from './Content.module.scss';

export default class Content extends React.PureComponent {
    render() {
        return (
            <div className={styles.content}>CONTENT</div>
        );
    }
}