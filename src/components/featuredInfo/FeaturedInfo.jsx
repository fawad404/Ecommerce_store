import { useState } from 'react'
import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import { useEffect } from 'react';
import { userRequest } from '../../RequestMethods';
export default function FeaturedInfo() {
  const [ income, setIncome ] = useState([]);
  const [ perc, setPerc ] = useState(0);

  useEffect(()=>{
    const getIncome  = async () => {
      try{
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total -100);
      }catch(err){
        console.log("axios error request failed");
      }
    }
    getIncome();
  },[]);
  
  // Check if income[1] exists before accessing its properties
  const incomeTotal = income[1] ? income[1].total : 0;
  console.log(incomeTotal);
    return (
        <div className='featured'>
          <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">${incomeTotal}</span>
                <span className="featuredMoneyRate">
                  %{Math.floor(perc)}{" "} 
                  {perc < 0 ? (
                    <ArrowDownward className='featuredIcon negative'/>
                    ) : (
                    <ArrowUpward className='featuredIcon'/>
                    )}
                    </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
          </div>
        </div>
    )
}


