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
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.goBack();
    }
    render() {
        return (
            console.log(this.state.userinfo),
            <div className="human">
                 <img src={"https://randomuser.me/api/portraits/men/"+this.state.userinfo[0].id+ ".jpg"}></img>
                 <div className="userName">이름 : {this.state.userinfo[0].name}</div>
                 <div className="userEmail">email : {this.state.userinfo[0].email}</div>
                 <div className="userPhone">phone : {this.state.userinfo[0].phone}</div>
                 <Router>
                     <Link to="/">
                         <button>집으로</button>
                     </Link>
                         <button onClick={this.goBack}>뒤로 가기</button>
                </Router>
            </div>
        )
    }
}