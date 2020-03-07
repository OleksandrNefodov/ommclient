import React from "react";

import styles from "./Footer.module.scss";

export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer className={styles.footer}>
                <h5>FOOTER</h5>
            </footer>
        );
    }
}