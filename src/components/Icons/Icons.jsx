import {
    BackArrow,
    DownArrow,
    Error404,
    Error500,
    Facebook,
    HomeImage,
    Image404,
    Image500,
    Instagram,
    Logo,
    Menu,
    Password,
    PasswordVisible,
    Twitter,
    Search,
    Edit,
    Setting,
    Document,
    Comment,
    Close
} from "../../assets";

import styles from "./Icons.module.scss";

const ImagesDict = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    error404: Error404,
    image404: Image404,
    error500: Error500,
    image500: Image500,
    home: HomeImage,
    backArrow: BackArrow,
    downArrow: DownArrow,
    menu: Menu,
    password: Password,
    passwordVisible: PasswordVisible,
    search: Search,
    edit: Edit,
    setting: Setting,
    document: Document,
    comment: Comment,
    close: Close,
};

const Icon = ({ icon, ...props }) => {
    const SelectedIcon = ImagesDict[icon] ?? Logo;

    return <SelectedIcon {...props} />;
};

export const Icons = (props) => {
    return (
        <Icon
            className={`${styles.icon} ${
                props.color ? styles[props.color] : ""
            } ${props.className}`}
            icon={props.icon}
            style={{
                width: `${props.size}px`,
                height: `${props.size}px`,
            }}
        />
    );
};
