import React from "react";
import { useEffect } from "react";
import Logo from "../src/asset/temple.png";
import "../src/header.css";

function Header() {
  // const [user, setUser] = useState([]);

  //   const getUser = () => {
  //       Axios.get('http://localhost:3333/search').then((response) => {
  //           setTempleSearch(response.data);
  //       });
  //   }

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3333/authen", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
        } else {
          alert("authen failed");
          localStorage.removeItem("token");
          window.location = "/login";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <h3>Temple tourism system in Esan</h3>
      <ul>
        <li>
          <a onClick={handleLogout}>ออกจากระบบ</a>
        </li>
        <li>
          <a href="/allReview">รีวิวทั้งหมด</a>
        </li>
        <li>
          <a href="/allEvent">กิจกรรมทั้งหมด</a>
        </li>
        <li>
          <a href="/alltemple">วัดทั้งหมด</a>
        </li>
        <li>
          <a href="/home">หน้าแรก</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
