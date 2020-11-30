import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';

import Routes from './routes';



class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SideBar />
                <Routes />
            </React.Fragment>
        )
    }
}
export default index;