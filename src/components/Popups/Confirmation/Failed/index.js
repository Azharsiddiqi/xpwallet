import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal-content text-center" style={{borderRadius: '10px'}}>
                    {/*Header*/}
                    <div className="modal-header">
                        <div className="note text-center">
                        <h2 className="heading colorDanger">Failed</h2>
                        <p className="noteDetails">Transaction Failed</p>
                        </div>
                    </div>
                    {/*Body*/}
                    {/*Footer*/}
                    <div className="modal-footer justify-content-center">
                        <a href className="btn btn-theme w-100 waves-effect">Ok</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default index;
