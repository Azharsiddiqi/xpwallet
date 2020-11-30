import React, { Component } from 'react'

class addBank extends Component {
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
                                <h2 className="noteTitle">Add Bank</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="bankTransfer">
                                <div className="form-group select-box">
                                    <label htmlFor="bankSelect" className="bmd-label-floating">Select Bank</label>
                                    <select className="form-control customSelect" id="bankSelect" name="bank">
                                    <option>TD Bank</option>
                                    <option>TS Bank</option>
                                    <option>TA Bank</option>
                                    </select>
                                </div>           
                                <div className="form-group">
                                    <label htmlFor="formGroupInput1" className="bmd-label-floating">Account Number</label>
                                    <input type="text" name="accountnumber" className="form-control" id="formGroupInput1" />
                                </div>  
                                <div className="form-group radio-group">
                                    <label className="bmd-label-floating ">Account Type</label>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="chequing" name="accountType" />
                                    <label className="custom-control-label" htmlFor="chequing">Chequing</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline float-right">
                                    <input type="radio" className="custom-control-input" id="savings" name="accountType" />
                                    <label className="custom-control-label" htmlFor="savings">Savings</label>
                                    </div>
                                </div>		              
                                <div className="form-group">
                                    <label htmlFor="formGroupInput2" className="bmd-label-floating ">Bank Transit Number</label>
                                    <input type="text" name="banktransitnumber" className="form-control" id="formGroupInput2" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupInput3" className="bmd-label-floating ">Swift Code</label>
                                    <input type="text" name="swiftcode" className="form-control" id="formGroupInput3" />
                                </div>   		              
                                <div className="form-group">
                                    <label htmlFor="formGroupInput4" className="bmd-label-floating ">Billing Address</label>
                                    <input type="text" name="billingaddress" className="form-control" id="formGroupInput4" />
                                </div>                
                                <div className="form-group">
                                    <label htmlFor="formGroupInput5" className="bmd-label-floating">Email</label>
                                    <input type="email" name="email" className="form-control" id="formGroupInput5" />
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
export default addBank;