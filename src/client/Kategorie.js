import React, { Component } from 'react'
import { Link, HashRouter as Router} from "react-router-dom";
 
export default class Kategorie extends Component {
    render() {
        return (
            <Router>
            <div className="kategorie">
                <div><Link to ="/user/:info">유저 정보</Link></div>
                <div><Link to ="/user/todo">유저 할 일</Link></div>
            </div>
            </Router>
        )
    }
}
