import React from "react";
import Header from "./Header";
import { useState,useEffect } from "react";
import Axios from "axios";
import "../src/Allevent.css";

function Allevent() {
  const [eventAll, setEventAll] = useState([]);

  const getEvent = () => {
    Axios.get("http://localhost:3333/allevent").then((response) => {
      setEventAll(response.data);
    });
  };
  useEffect (() => {
    getEvent();
  },[]);

  return (
    <div>
      <Header />
      <div>
        <div className="text-allevent">
          <h1>กิจกรรมทั้งหมด</h1>
        </div>
        <br />
        <br />
        {eventAll.map((val, key) => {
          return (
            <div className="search-card">
              <div className="card-body">
                <p className="card-text">
                  ชื่อกิจกรรม: {val.temple_event_name}
                </p>
                <p className="card-text">
                  รายละเอียดกิจกรรม: {val.temple_event_description}
                </p>
                <p className="card-text">
                  เวลาที่เริ่ม: {val.temple_event_start_time}
                </p>
                <p className="card-text">
                  เวลาที่สิ้นสุด: {val.temple_event_end_time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allevent;
