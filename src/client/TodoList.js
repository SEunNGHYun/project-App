import React from 'react'
import { Link, HashRouter as Router} from "react-router-dom";

export default function todo(props) {
    console.log(props.todos);
    return (
        <div>
            <select>
                <option>complete</option>
            {props.todos.map(todo => {
                if(todo.completed === true){
                    return <option key={todo.id} value={todo.title}>{todo.title}</option>
                }
            })}
              </select>
              <select>
                  <option>-Ing</option>
            {props.todos.map(todo =>{
                if(todo.completed === false){
                    return  <option key={todo.id} value={todo.title}>{todo.title}</option>
                }
            })}
              </select>
            <Router>
            <Link to="/">
            <button>집으로</button>
            </Link>
            </Router>
          
        </div>
    )
}
