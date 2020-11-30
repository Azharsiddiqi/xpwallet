import React, { Component } from 'react'

class header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="content-left">
                        <div className="siteLogo">
                        <img src="./assets/media/ic_logo.png" alt="ic_logo.png" />
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <span />
                            <span />
                            <span />
                            </button>
                        </div>
                        </nav>
                    </div>
                    <div className="content-right">
                        <div className="notificationLogo">
                        <a href="#" className="notifications">
                            <img src="./assets/media/ic_notification.png" alt="ic_notification.png" />
                            <span className="count">0</span>
                        </a>
                        </div>
                        <div className="accountInfo">
                        <img src="./assets/media/ic_profile_placeholder.png" alt="ic_profile_placeholder.png" />
                        <span className="accountTitle">Adnan Q</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default header;