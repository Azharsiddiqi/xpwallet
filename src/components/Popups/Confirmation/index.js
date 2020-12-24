import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal-content text-center" style={{borderRadius: '10px'}}>
                    {/*Header*/}
                    <div className="modal-header">
                        <div className="note text-center">
                        <h2 className="heading">Confirm</h2>
                        <p className="noteDetails">Are you sure you want to continue transaction</p>
                        </div>
                    </div>
                    {/*Body*/}
                    {/*Footer*/}
                    <div className="modal-footer d-block">
                        <a href className="btn btn-theme w-100 waves-effect">Confirm</a>
                        <a href className="btn btn-theme w-100 waves-effect" style={{marginTop: '5px', backgroundColor: '#fafafa', color: '#1c1c1c'}}>No</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default index;