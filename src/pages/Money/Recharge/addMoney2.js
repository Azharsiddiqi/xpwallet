import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class addMoney2 extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container">
                                <div className="note text-center">
                                <h2 className="noteTitle">Recharge Wallet</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="addMoney2">
                                <div className="form-group form-group-btn icon-group">
                                    <Link to="/recharge-bank" className="btn btn-raised group-btn"><img src="./assets/media/ic_mastercard.png" alt="" />TD bank <span className="redirectDetails">Checking **** 0830 <br />Free <br />Bank transfer may take 3-5 working days depending on your account</span></Link>
                                </div>                      
                                <div className="form-group form-group-btn icon-group">
                                    <Link to="/recharge-card" className="btn btn-raised group-btn"><img src="./assets/media/ic_mastercard.png" alt="" />Adnan Qureshi <span className="redirectDetails">**** **** **** 0830</span></Link>
                                </div>                      
                                <div className="form-group form-group-btn icon-group img-center">
                                    <Link to="/add-bank" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt="" />Add a bank</Link>
                                </div>                      
                                <div className="form-group form-group-btn icon-group img-center">
                                    <Link to="/add-card" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt=""/>Add credit card</Link>
                                </div>
                                <label className="label-free">All transfer are subject to review are could be delayed or stopped if we identify an issue</label>  
                                <button type="submit" className="btn btn-primary btn-raised w-100">Next</button>          
                                </form>
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
export default addMoney2;