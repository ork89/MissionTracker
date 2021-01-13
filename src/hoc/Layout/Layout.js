import React from 'react';

import Menu from '../../components/Navigation/Menu/Menu';

const Layout = props => {
    return(
        <React.Fragment>
            <Menu />
            <main>{props.children}</main>
        </React.Fragment>
    );
}

export default Layout;