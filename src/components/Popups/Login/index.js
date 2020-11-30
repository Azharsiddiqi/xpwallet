import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <React.Fragment>
                    <form className="text-left customFieldDesign" id="loginForm">
                        <div className="form-group">
                        <label htmlFor="formGroupInput" className="bmd-label-floating">Email</label>
                        <input type="email" name="email" className="form-control" id="formGroupInput" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupInput2" className="bmd-label-floating">Password</label>
                        <input type="password" name="password" className="form-control" id="formGroupInput2" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-raised w-100 mt-2">Login</button>
                    </form> 
            </React.Fragment>
        )
    }
}
export default index;