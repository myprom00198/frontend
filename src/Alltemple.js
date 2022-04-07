import React from "react";
import Header from "./Header";
import { useState,useEffect } from "react";
import Axios from "axios";
import "../src/Alltemple.css";

function Alltemple() {
  const [templeAll, setTempleAll] = useState([]);

  

  const getTemple = () => {
    Axios.get("http://localhost:3333/alltemple").then((response) => {
      setTempleAll(response.data);
    });
  };
  useEffect (() => {
    getTemple();
  },[]);

  return (
    <div>
      <Header />
      <div>
        <div className="text-alltemple">
          <h1>วัดทั้งหมด</h1>
        </div>
        <br />
        <br />
        {templeAll.map((val, key) => {
          return (
            <div className="search-card">
              <div className="card-body">
                <p className="card-text">ชื่อวัด: {val.temple_name}</p>
                <p className="card-text">ที่อยู่: {val.temple_address}</p>
                <p className="card-text">
                  รายละเอียด: {val.temple_description}
                </p>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alltemple;
