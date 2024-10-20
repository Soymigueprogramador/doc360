import React from "react";

const defaultUserContext = {
    user: {},
    setUser: () => {},
};

export const UserContext = React.createContext(defaultUserContext);

export const UserProvider = (props) => {
    const [user, setUser] = React.useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};