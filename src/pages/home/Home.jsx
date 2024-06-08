import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './home.css'
import {userData} from "../../dummydata"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useEffect, useMemo, useState } from "react";
import {userRequest} from '../../RequestMethods'
export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
      () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
      ],
      []
  );

  useEffect(()=>{
      const getStats = async () => {
          try{
              const res = await userRequest.get("users/stats")
              res.data.map((item)=>
                  setUserStats(prev=>[
                      ...prev,
                      {name: MONTHS[item._id - 1], "Active User": item.total },
                  ])
              );
          }catch(err){
            console.log("Axios request not work");
          }
      }
      getStats();
  }, [MONTHS]);
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userStats} 
            title="User Analytics" 
            dataKey="New User" grid/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}


