import React, { Component } from 'react'
import { Link, HashRouter as Router} from "react-router-dom";

export default class MainPage extends Component {
    render() {
        return (
            <div className="Main">
            <div>
                어플리케이션을 고르세요!
            </div>
            <Router>
            <Link to="/users">
            <button className="buttTodo">to do</button>
            </Link>
            <button className="bittBoard">Board</button>
            </Router>
            </div>
        )
    }
}
