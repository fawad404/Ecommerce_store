import { useEffect, useState } from 'react'
import './widgetSm.css'
import {Visibility} from "@mui/icons-material"
import { userRequest } from '../../RequestMethods';
export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);
    
    useEffect(()=>{
        const getUsers = async () => {
            try{
                const res = await userRequest.get("users/?new=true");
                setNewUsers(res.data);
            }catch(err){
                console.log("axios request not working");
            }
        };
        getUsers();
    }, []);
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user)=>(

                    <li className="widgetSmListItem" key={user._id}>
                    <img src={user.img || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} 
                    alt="" 
                    className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                    ))}
            </ul>
        </div>
    )
}


