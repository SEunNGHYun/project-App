import React from 'react'
import { Link, HashRouter as Router} from "react-router-dom";

export default function Userlist(props){
    const goBack = ()=> {
        return props.history.goBack();
    } 
    return(
        <div>
        <select onChange={value => props.list(value)}>
            <option value="" >--------</option>
        {props.data.map(data => <option key={data.id} value={data.name}>{data.name}</option>)}
        </select>
        <Router>
        <Link to="/user/info"> 
        <button className="listButt" onClick={props.listbutt}>선택하기</button>
        </Link>
        <Link to ="/">
        <button>집으로</button></Link>
        </Router>
        <button onClick={goBack}>뒤로가기</button>
    </div>
    )
}
