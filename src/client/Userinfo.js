import React from 'react'

export default function Userinfo({info}) {
    console.log(info);
    console.log("이거는 랜덤이여야 하는데","https://randomuser.me/api/portraits/men/" + info.id +".jpg");
    return (
        <div className="human">
            <img src={"https://randomuser.me/api/portraits/men/"+info.id+".jpg"}></img>
            <div className="userName">{info.name}</div>
            <div className="userEmail">{info.email}</div>
            <div className="userPhone">{info.phone}</div>
        </div>
    )
}


