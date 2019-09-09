import React, { Component } from 'react'
import { Route, HashRouter } from "react-router-dom";
import Api from "../server/API";
import Main from "./MainPage";
import UserList from "./Userlist";
import Userinfo from "./Userinfo";
import UserTodos from "./TodoList";
import UserKategorie from "./Kategorie";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:[],
      cluser : [],
      clickData : [],
      userTodoList : [] 
    }
    this._ChangeState=this._ChangeState.bind(this);
    this._listButt=this._listButt.bind(this);
  }
  async componentDidMount(){
    let userInfo = await Api.user();
    let userTodo = await Api.todo();
    this.setState({
        user : userInfo,
        userTodoList : userTodo
    })
}

  _ChangeState(event){
    let value;
    if(event.target.value === ""){
      alert("이거 말고 딴 거!");
    }
    else{
      value = this.state.cluser.slice(0,0).concat(event.target.value);
    }
    this.setState({
      cluser: value
    })
  }

  _listButt(){
    let result;
    console.log(this.state.cluser[0]);
    this.state.user.forEach(data=>{
      if(data.name === this.state.cluser[0]){
        result = data;
      }
    })
    this.setState({
      clickData : result
    })
    return result;
  }

  render() {
    console.log("this.state",this.state);
    return (
      <div>
      <div className="Home"> 
      <HashRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/users" render={(props)=> 
      <UserList {...props} 
      data={this.state.user} 
      list={this._ChangeState}
      listbutt={this._listButt}/>}/>
      <Route path= "/user" component={UserKategorie}></Route>
      <Route exact path="/user/info" render={(props)=>
        <Userinfo {...props} info={this.state.clickData}/>}/>
      <Route exact path="/user/todo" render={(props)=>
        <UserTodos {...props} todos={this.state.userTodoList}/>}/>
      </HashRouter> 
      </div>
      </div>
    )
  }
}
