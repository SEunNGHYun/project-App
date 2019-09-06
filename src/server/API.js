function User(){
    return fetch("https://koreanjson.com/users")
    .then(res =>res.json())
    .then( data =>  data)
    .catch(err=>console.log(err));
}
export default User