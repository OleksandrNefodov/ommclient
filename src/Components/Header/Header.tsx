import React from "react";

import styles from './Header.module.scss';
import AuthDropDown from "../AuthDropDown/AuthDropDown";

export default class Header extends React.PureComponent {

    render() {
        return (
            <div className={styles.header}>
                <AuthDropDown />
            </div>
        );
    }
}