import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal-content text-center" style={{borderRadius: '10px'}}>
                    {/*Header*/}
                    <div className="modal-header">
                        <div className="note text-center">
                        <h2 className="heading">Verification</h2>
                        <p className="noteDetails">Enter the four digit code we sent you via your phone number</p>
                        </div>
                    </div>
                    {/*Body*/}
                    <div className="modal-body">
                        <p id="formError" className="colorDanger errorText py-2 text-center d-none">otp not matched</p>
                        <form id="optVerificationForm" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
                        <input type="text" id="digit_1" name="digit_1" data-next="digit_2" />
                        <input type="text" id="digit_2" name="digit_2" data-next="digit_3" data-previous="digit_1" />
                        <input type="text" id="digit_3" name="digit_3" data-next="digit_4" data-previous="digit_2" />
                        <input type="text" id="digit_4" name="digit_4" data-previous="digit_3" />
                        <p className="expireNote pt-2 pb-4">Code expire in: <span className="counter">00.60</span><span className="resendOtp d-none">Resend</span></p> 
                        <button type="submit" className="btn btn-primary btn-raised w-100">Verify !</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default index;