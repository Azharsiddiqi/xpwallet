import React, { Component } from 'react'

class form5 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="login-Container">
                    <div className="row no-gutters h-100">
                        <div className="col-md-4 h-100 hide-responsive">
                        <img className="side-banner" src="./assets/media/ic_banner_img.png" alt="ic_banner_img.png" />
                        </div>
                        <div className="col-12 col-md-8 h-100">
                        <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container">
                            <div className="note text-center">
                                <img className="form-logo" src="./assets/media/xp_wallet_form.png" alt="xp_wallet_form.png" />
                                <h2 className="noteTitle">Verification</h2>
                                <p className="noteDetails">Enter the four digit code we sent you via your phone number</p>
                            </div>
                            <p id="formError" className="colorDanger errorText pt-2 text-center d-none">otp not matched</p>
                            <form id="optVerificationForm" className="digit-group text-center py-4" data-group-name="digits" data-autosubmit="false" autoComplete="off">
                                <input type="text" id="digit_1" name="digit_1" data-next="digit_2" />
                                <input type="text" id="digit_2" name="digit_2" data-next="digit_3" data-previous="digit_1" />
                                <input type="text" id="digit_3" name="digit_3" data-next="digit_4" data-previous="digit_2" />
                                <input type="text" id="digit_4" name="digit_4" data-previous="digit_3" />
                                <p className="expireNote pt-2 pb-4">Code expire in: <span className="counter">00.60</span><span className="resendOtp d-none">Resend</span></p> 
                                <button type="submit" className="btn btn-primary btn-raised w-25">Verify !</button>
                            </form>
                            </div>   
                        </div> 
                        </div>
                    </div>
                    </div>

            </React.Fragment>
        )
    }
}
export default form5;