import React, { Component } from 'react'

class addXpWallet extends Component {
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
                                <h2 className="noteTitle">Add Xp Wallet</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="bankWalletTransfer">
                                <div className="form-group">
                                    <label htmlFor="formGroupInput1" className="bmd-label-floating">Username</label>
                                    <input type="text" name="username" className="form-control" id="formGroupInput1" />
                                </div>  	              
                                <div className="form-group">
                                    <label htmlFor="formGroupInput5" className="bmd-label-floating">Email</label>
                                    <input type="email" name="email" className="form-control" id="formGroupInput5" />
                                </div>              
                                <div className="form-group select-box">
                                    <label htmlFor="bankSelect" className="bmd-label-floating">Currency</label>
                                    <select className="form-control customSelect" id="bankSelect" name="currency">
                                    <option>CAD</option>
                                    <option>USD</option>
                                    <option>PKR</option>
                                    </select>
                                </div>           		                          
                                <div className="form-group">
                                    <label htmlFor="formGroupInput6" className="bmd-label-floating ">Amount</label>
                                    <input type="text" name="amount" className="form-control" id="formGroupInput6" />
                                </div>    
                                <button type="submit" className="btn btn-primary btn-raised w-100">Submit</button>             
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
export default addXpWallet;