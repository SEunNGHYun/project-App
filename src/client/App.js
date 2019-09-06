import React, { Component } from 'react'
import { Route, HashRouter as Router} from "react-router-dom";
import Userdata from "../server/API";
import Main from "./MainPage";
import UserList from "./Userlist";
import Userinfo from "./Userinfo";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:[],
      cluser : [],
      clickData : []
    }
    this._ChangeState=this._ChangeState.bind(this);
    this._listButt=this._listButt.bind(this);
  }
  async componentDidMount(){
    let userArr = await Userdata();
    this.setState({
        user : userArr
    })
}

  _ChangeState(event){
    let value = this.state.cluser.slice(0,0).concat(event.target.value);
    this.setState({
      cluser: value
    })
  }

  _listButt(){
    console.log("내가 보이니?");
    let result;
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
    return (
      <div>
      <div className="Home"> 
      <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/users" render={(props)=> 
      <UserList {...props} 
      data={this.state.user} 
      list={this._ChangeState}
      listbutt={this._listButt}/>}/>
      <Route exact path="/user/:info" render={(props)=>
        <Userinfo {...props}
        info={this.state.clickData}/>}/>
      </Router> 
      </div>
      </div>
    )
  }
}
