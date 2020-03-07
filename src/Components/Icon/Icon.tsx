import React from "react";

export enum IconSize {
    Normal,

    ExtraSmall,

    Small,

    Large,

    X2,

    X3,

    X4,

    X5,

    X7,

    X10
}

export enum IconStyle {
    Solid,

    Regular,

    Light,

    Brands
}

export interface IIconProps {
    id: string | number;
    name: string;
    tooltip?: string;
    style?: IconStyle;
    size?: IconSize;
    className?: string;
    dataTarget?: string;
    toggleModal?: boolean;
    dismissModal?: boolean;
    customStyle?: React.CSSProperties;
    onClick?(): Promise<void>;
}

export default class Icon extends React.PureComponent<IIconProps> {

    private static add(lowerClassName: string, className: string, style: string, asPrefix: boolean = false): string {
        const includes: boolean = (asPrefix)
            ? lowerClassName.startsWith(style + " ")
            : lowerClassName.includes(style);
        if (!includes) {
            className += " " + style;
        }
        return className;
    }

    private static addSize(lowerClassName: string, className: string, size?: IconSize): string {
        if (size != null) {
            switch (size) {
                case IconSize.ExtraSmall:
                    className = Icon.add(lowerClassName, className, "fa-xs");
                    break;
                case IconSize.Small:
                    className = Icon.add(lowerClassName, className, "fa-sm");
                    break;
                case IconSize.Large:
                    className = Icon.add(lowerClassName, className, "fa-lg");
                    break;
                case IconSize.X2:
                    className = Icon.add(lowerClassName, className, "fa-2x");
                    break;
                case IconSize.X3:
                    className = Icon.add(lowerClassName, className, "fa-3x");
                    break;
                case IconSize.X4:
                    className = Icon.add(lowerClassName, className, "fa-4x");
                    break;
                case IconSize.X5:
                    className = Icon.add(lowerClassName, className, "fa-5x");
                    break;
                case IconSize.X7:
                    className = Icon.add(lowerClassName, className, "fa-7x");
                    break;
                case IconSize.X10:
                    className = Icon.add(lowerClassName, className, "fa-10x");
                    break;
            }
        }

        return className;
    }

    private static addStyle(lowerClassName: string, className: string, style?: IconStyle): string {
        if (style != null) {
            switch (style) {
                case IconStyle.Solid:
                    return Icon.add(lowerClassName, className, "fas");
                case IconStyle.Regular:
                    return Icon.add(lowerClassName, className, "far");
                case IconStyle.Light:
                    return Icon.add(lowerClassName, className, "fal");
                case IconStyle.Brands:
                    return Icon.add(lowerClassName, className, "fab");
            }
        }

        return Icon.add(lowerClassName, className, "fa", true);
    }

    private static getClassStyle(lowerName: string): IconStyle | undefined {
        let classStyle: IconStyle | undefined = undefined;
        if (lowerName.startsWith("fas ")) {
            classStyle = IconStyle.Solid;
        } else if (lowerName.startsWith("far ")) {
            classStyle = IconStyle.Regular;
        } else if (lowerName.startsWith("fal ")) {
            classStyle = IconStyle.Light;
        } else if (lowerName.startsWith("fab ")) {
            classStyle = IconStyle.Brands;
        }
        return classStyle;
    }

    private getClassName(): string {

        let name = this.props.name;
        let className: string = this.props.className || "";
        const lowerClassName: string = className.toLowerCase();
        const lowerName: string = name.toLowerCase();
        const classStyle: IconStyle | undefined = Icon.getClassStyle(lowerName);

        if (classStyle != null) {
            name = name.substr(4);
        }

        if (!lowerName.startsWith("fa-")) {
            className += " fa-";
        } else {
            className += " ";
        }

        className += name;

        className = Icon.addSize(lowerClassName, className, this.props.size);

        className = Icon.addStyle(lowerClassName, className, this.props.style || classStyle);

        return className;
    }

    private get dataTarget(): string {
        return this.props.dataTarget || "";
    }

    private async onClickAsync(e: React.MouseEvent): Promise<void> {
        if (this.props.onClick) {
            await this.props.onClick();
        }
    }

    render(): React.ReactNode {
        return (
            <i key={this.props.id} style={this.props.customStyle || {}}
                className={this.getClassName()}
                title={this.props.tooltip}
                data-target={`#${this.dataTarget}`}
                onClick={async (e: React.MouseEvent) => await this.onClickAsync(e)} />
        );
    }
}