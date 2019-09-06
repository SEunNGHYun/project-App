import React from 'react'
import { Link, HashRouter as Router} from "react-router-dom";

export default function Userlist({data , list, listbutt}){
    return(
        <div>
        <select onChange={value => list(value)}>
            <option value="">--------</option>
        {data.map(data => <option key={data.id} value={data.name}>{data.name}</option>)}
        </select>
        <Router>
        <Link to="/user/:info">
        <button className="listButt" onClick={listbutt}>선택하기</button>
        </Link>
        </Router>
    </div>
    )
}