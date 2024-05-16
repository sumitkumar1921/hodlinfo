import "../Home/Home.css";
import React, { useEffect, useState } from "react";
import Data from "../Data/Data";
import axios from 'axios'

function Home() {
  const [data, setData] = useState([])

  useEffect(()=> {

    async function fetchData(){
      const response = await axios.get('http://localhost:8080/getTickers');
      if(response.status === 200){
        setData(response.data)
      }
    }
    fetchData()
  },[])
  console.log(data)
  return (
    <>
      <h1>Best Price to Trade</h1>
      <div className="price-time">
        <div className="price 5min">
          0.74 %<p>5 Mins</p>
        </div>
        <div className="price 1hour">
          1.06 %<p>1 Hour</p>
        </div>
        <div className="price current">
          ₹ 55,82,609
          <p>Average BTC/INR net price including commission</p>
        </div>
        <div className="price 1day">
          2.28 %<p>1 Day</p>
        </div>
        <div className="price 7day">
          10.61 %<p>7 Days</p>
        </div>
      </div>

      {/* <div className="heading">
      </div>
      <div className="show-data">
      <Data/>
      <Data/>
      <Data/>
      
    </div> */}

      <div className="table">
        <div className="show-data">
          <p>Store Name</p>
          <p>Last</p>
          <p>Buy</p>
          <p>Sell</p>
          <p>Volume</p>
          <p>Base Unit</p>
        </div>
        {/* <div className="show-data display-data"> */}
        {
          data?.map((value)=>{
            return (
              <Data 
              name={value.name}
              last={value.last}
              buy = {value.buy}
              sell= {value.sell}
              volume = {value.volume}
              base_unit = {value.base_unit}
              />
            )
          })
        }
        {/* </div> */}
      </div>
        <div className="add-to-home-screen">
          <button>Add hodlinfo to homescreen</button>
        </div>
    </>
  );
}

export default Home;
