import React, { Component } from 'react'
import { Link, HashRouter as Router} from "react-router-dom";
let ree =[];
export default class Userinfo extends Component {
    constructor(props){
        super(props);
        ree[0] = Object.assign({},props.info);
        console.log(ree);
        this.state={
            userinfo : ree
        }
    }

    render() {
        return (
            console.log(this.state.userinfo),
            <div className="human">
                 <img src={"https://randomuser.me/api/portraits/men/"+this.state.userinfo[0].id+ ".jpg"}></img>
                 <div className="userName">{this.state.userinfo[0].name}</div>
                 <div className="userEmail">{this.state.userinfo[0].email}</div>
                 <div className="userPhone">{this.state.userinfo[0].phone}</div>
                 <Router>
                     <Link to="/">
                         <button>집으로</button>
                     </Link>
                </Router>
            </div>
        )
    }
}