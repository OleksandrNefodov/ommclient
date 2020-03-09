import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BaseComponent from "../../Models/BaseComponent";
import { Menu, MenuItem } from "../Menu/Menu";
import List from "../List/List";
import Content from "../Content/Content";
import { IconSize } from "../Icon/Icon";

import styles from "./Layout.module.scss";

interface ILayoutState {
    style: string,
}

export default class Layout extends BaseComponent<{}, ILayoutState> {

    constructor(props: any) {
        super(props);

        this.state = {
            style: this.getWindowSize()
        }
    }

    resize = () => {
        this.setState({
            style: this.getWindowSize()
        });
    }

    getWindowSize = () => {
        return this.isMobile() ? styles.mobile : styles.desktop
    }

    public async componentDidMount() {
        window.addEventListener('resize', this.resize, false);
    }

    public async componentWillUnmount(): Promise<void> {
        await window.removeEventListener("resize", this.resize, false);
    }


    items: MenuItem[] = [
        { icon: "info", size: IconSize.X3, route: '/info' },
        { icon: "plus-circle", size: IconSize.X3, route: '/add' },
        { icon: "bar-chart", size: IconSize.X3, route: '/statistics' },
        { icon: "paper-plane", size: IconSize.X3, route: '/send' },
        { icon: "unlock", size: IconSize.X3, route: '/1' },
        { icon: "cogs", size: IconSize.X3, route: '/2' },
    ];


    render() {
        let mobile = this.isMobile();
        return (
            <div className={styles.layout}>
                <Header />

                <div className={this.state.style}>
                    <Menu items={this.items} />

                    {!mobile && <List />}

                    <Content />

                </div>

                <Footer />

            </div >
        );
    }
}