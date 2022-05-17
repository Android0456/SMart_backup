import React from 'react';
import UserNavigation from '../container/Header/UserNavigation';


function logoutPresenter(props) {
    const [loggedIn, setloggedIn] = React.useState(props.model.user);

    React.useEffect(() => {
        const obs = () => {
            setloggedIn(props.model.user);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <div>
            <UserNavigation
                logoutUser={() => props.model.logoutUser()}
                user={loggedIn} />
        </div>
    );
}

export default logoutPresenter;