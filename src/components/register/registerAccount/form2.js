import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class form2 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="login-Container">
                    <div className="row no-gutters h-100">
                        <div className="col-md-4 h-100 hide-responsive">
                        <img className="side-banner" src="../media/ic_banner_img.png" alt="ic_banner_img.png" />
                        </div>
                        <div className="col-12 col-md-8 h-100">
                        <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container scrollContainer">
                            <div className="note text-center">
                                <h2 className="noteTitle">Connect your bank, credit and debit cards</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                            </div>
                            <form className="main-form customFieldDesign" id="connectAccount">
                                <div className="form-group form-group-btn">
                                <button onClick={() => this.props.formHandler(3)} className="btn btn-raised group-btn">Bank Account</button>
                                </div>
                                <div className="form-group form-group-btn">
                                <button onClick={() => this.props.formHandler(4)} className="btn btn-raised group-btn">Credit Card</button>
                                </div>              
                            </form>
                            <div className="infoBottom text-center">
                                <Link to="../index.html" className="redirectLink">I already have an account</Link>
                            </div>
                            </div>   
                        </div> 
                        </div>
                    </div>
                    </div>

            </React.Fragment>
        )
    }
}
export default form2;