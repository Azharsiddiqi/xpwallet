import React, { Component } from 'react'

class userProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab full-width-content">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100">
                            <div className="table-container w-100">
                                <div className="note table-note">
                                <h2 className="noteTitle float-left">Login and Security</h2>
                                </div> 
                            </div> 
                            </div>
                            <div className="details-content col-12">                                              
                            <div className="row no-gutters h-100">
                                <div className="col-12 my-2">
                                <div className="table-scorll">
                                    <table className="table layout-fixed m-0 profileTable">
                                    <tbody>
                                        <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            <input type="email" defaultValue="demo@test.com" readOnly="readonly" /> 
                                        </td>                          
                                        <td className="text-right">
                                            <a href="#" id="updateEmail" className="color-Theme pointer"> Update </a><a>
                                            </a><a href="#" id="saveEmail" className="color-Theme pointer d-none"> Save </a><a>
                                            </a></td>                                                 
                                        </tr>                         
                                        <tr>
                                        <td>
                                            Phone
                                        </td>
                                        <td>
                                            <input type="tel" className="mb-2" defaultValue="0092 300 8134076" readOnly="readonly" /> (Customer Service)
                                            <br />
                                            <input type="tel" defaultValue="0092 300 8134076" readOnly="readonly" /> (Mobile)
                                        </td>                          
                                        <td className="text-right">
                                            <a href="#" id="updatePhone" className="color-Theme pointer"> Update </a><a>
                                            </a><a href="#" id="savePhone" className="color-Theme pointer d-none"> Save </a><a>
                                            </a></td>                                                 
                                        </tr>                         
                                        <tr>
                                        <td>
                                            Password
                                        </td>
                                        <td>
                                            <input type="password" defaultValue="* * * * * *" readOnly="readonly" />
                                        </td>                          
                                        <td className="text-right">
                                            <a href="#" id="updatePassword" className="color-Theme pointer"> Change </a><a>
                                            </a><a href="#" id="savePassword" className="color-Theme pointer d-none"> Save </a><a>
                                            </a></td>                                                 
                                        </tr>                         
                                        <tr>
                                        <td>
                                            Security questions
                                        </td>
                                        <td>
                                            <p className="pb-10">What's the name of your first pet?</p>
                                            <input type="hidden" defaultValue />
                                            <br />
                                            <p>What's the nickname of your oldest child?</p>
                                            <input type="hidden" defaultValue />
                                        </td>                          
                                        <td className="text-right">
                                            <a href="#" id="updateSecurity" className="color-Theme pointer"> Update </a><a>
                                            </a><a href="#" id="saveSecurity" className="color-Theme pointer d-none"> Save </a><a>
                                            </a></td>                                                 
                                        </tr>                         
                                        <tr>
                                        <td>
                                            Account Type
                                        </td>
                                        <td>
                                            Bussiness
                                        </td>                          
                                        <td className="text-right">
                                            <a href="#" id="closeAccount" className="color-Theme pointer"> Close account </a><a>
                                            </a></td>                                                 
                                        </tr>                                                                                           
                                    </tbody>
                                    </table>
                                </div>
                                </div>
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
export default userProfile;