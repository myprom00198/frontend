import React from "react";
import Header from "./Header";
import { useState,useEffect } from "react";
import Axios from "axios";
import "../src/Allreview.css"

function Allreview() {
    const [reviewAll, setReviewAll] = useState([]);
  
    const getReview = () => {
      Axios.get("http://localhost:3333/allreview").then((response) => {
        setReviewAll(response.data);
      });
    };
    useEffect (() => {
      getReview();
    },[]);
    return (
      <div>
        <Header/>
        <div>
          <br/><br/>
          {reviewAll.map((val, key) => {
            return (
              <div className="search-card">
                <div className="card-body">
                  <p className="card-text">หัวข้อรีวิว: {val.temple_review_topic}</p>
                  <p className="card-text">รายละเอียดรีวิว: {val.temple_review_description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Allreview;
  