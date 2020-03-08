import React from "react";

import styles from "./Footer.module.scss";

export default class Footer extends React.PureComponent {
    render() {
        return (
            <div className={styles.footer}>
                <h5>FOOTER</h5>
            </div>
        );
    }
}