import React, { Component } from 'react'

class confirmDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container confirmationContainer">
                                <div className="note">
                                <h2 className="noteTitle">Add Money</h2>
                                </div>
                                <div className="alert alert-warning custom-alert-box" role="alert">
                                <span>Review</span> <p>You initiated a request for other bank transfer.Please review details before you confirm!</p>
                                </div>                    
                                <div className="alert alert-info custom-alert-box d-none" role="alert">
                                <span>Confirm</span> <p>You initiated a request for other bank transfer.Please review details before you confirm!</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm detailsForm" id="transferForm">
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput1" className="bmd-label-floating">Account Number</label>
                                    <input type="text" name="accountnumber" className="form-control" defaultValue="7895-4566-5344" id="formGroupInput1" readOnly />
                                </div>
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput2" className="bmd-label-floating">Bank Details</label>
                                    <input type="text" name="bank" className="form-control" defaultValue="TD Bank" id="formGroupInput2" readOnly />
                                </div>
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput3" className="bmd-label-floating">Account type</label>
                                    <input type="text" name="accounttype" className="form-control" defaultValue="savings" id="formGroupInput3" readOnly />
                                </div>
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput4" className="bmd-label-floating">Bank Transit Number</label>
                                    <input type="text" name="banktransitnumber" className="form-control" defaultValue={4568} id="formGroupInput4" readOnly />
                                </div>
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput5" className="bmd-label-floating">Billing Address</label>
                                    <input type="text" name="billingaddress" className="form-control" defaultValue="address" id="formGroupInput5" readOnly />
                                </div>             
                                <div className="form-group form-group-btn detail-group">
                                    <label htmlFor="formGroupInput6" className="bmd-label-floating">Amount</label>
                                    <input type="text" name="amount" className="form-control" defaultValue="$500" id="formGroupInput6" readOnly />
                                </div>
                                <div className="col-12 col-lg-6 d-none otp-group">
                                    <div className="form-group">
                                    <label htmlFor="formGroupInput7" className="bmd-label-floating">Enter 6 digit code</label>
                                    <input type="password" name="otp" className="form-control" id="formGroupInput7" />
                                    <span className="fieldTypeView">show</span>
                                    </div>    
                                </div>
                                <button className="btn btn-info confirmButton">Confirm Details</button>
                                <div className="col-12 col-lg-6 formSubmitBtn d-none">
                                    <button type="submit" className="btn btn-primary btn-raised w-100">Submit</button>
                                </div>
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
export default confirmDetails;