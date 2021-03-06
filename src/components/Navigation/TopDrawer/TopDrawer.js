import React from 'react';
import PropTypes from 'prop-types';

import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';

import './TopDrawer.scss';

const topDrawer = (props) => {
    let attachedClasses = ['top-drawer', 'close'];
    if (props.open) {
        attachedClasses = ['top-drawer', 'open'];
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <nav className={attachedClasses.join(' ')}>
                <NavigationItems 
                    clicked={props.setActiveClass}
                    signout={props.signout} />
            </nav>
        </Aux>
    )
}

topDrawer.propTypes = {
    show: PropTypes.func,
    clicked: PropTypes.func,
    signout: PropTypes.func
}

export default topDrawer;