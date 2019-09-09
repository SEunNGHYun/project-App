
const Userobj = {
    user : function User(){
        return fetch("https://koreanjson.com/users")
        .then(res => res.json())
        .then( data => data)
        .catch(err=>console.log(err));
},
    todo : function Todos(){
        return fetch("https://koreanjson.com/todos")
        .then(res =>res.json())
        .then( data => data)
        .catch(err=>console.log(err));
    }
}

export default Userobj;