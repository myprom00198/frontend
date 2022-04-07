import Axios from "axios";
import '../temple_admin/Adminhome.css';
import { useState,useEffect } from "react";

function Adminhome() {
  const [temple_type_id, setTemple_type_id] = useState(0);
  const [temple_name, setTemple_name] = useState("");
  const [temple_description, setTemple_description] = useState("");
  const [temple_address, setTemple_address] = useState("");

  const [templeList, setTempleList] = useState([]);


  const addtemple = () => {
    Axios.post("http://localhost:3333/admintemple", {
      temple_type_id: temple_type_id,
      temple_name: temple_name,
      temple_description: temple_description,
      temple_address: temple_address,
    }).then(() => {
      setTempleList([
        ...templeList,
        {
          temple_type_id: temple_type_id,
          temple_name: temple_name,
          temple_description: temple_description,
          temple_address: temple_address,
        },
      ]);
    });
  };

  return (
    <div className="adminhome">
      <h1 className="text">รายละเอียดวัดของคุณ</h1>
      <div className="add-info">
        <div className="form-name">
          <label htmlFor="name">ชื่อวัด: </label>
          <input
            type="text"
            className="name"
            onChange={(event) => {
              setTemple_name(event.target.value);
            }}
          />
        </div>

        <div className="form-type">
          <label htmlFor="typename">ประเภทวัด: </label>
          <select
            type="temple_type_id"
            name="temple_type_id"
            onChange={(event) => {
              setTemple_type_id(event.target.value);
            }}
          >
            <option type="temple_type_id" value="วัดทั่วไป" id="1">
              วัดทั่วไป
            </option>
            <option type="temple_type_id" value="วัดป่า" id="2">
              วัดป่า
            </option>
          </select>
        </div>

        <div className="form-address">
          <label htmlFor="address">ที่อยู่: </label>
          <input
            onChange={(event) => {
              setTemple_address(event.target.value);
            }}
            type="text"
            className="address"
          />
        </div>

        <div className="form-description">
          <label htmlFor="description">รายละเอียดวัด: </label>
          <input
            onChange={(event) => {
              setTemple_description(event.target.value);
            }}
            type="text"
            className="description"
          />
        </div>
        <div className="btn-submit">
        <button type="submit" onClick={addtemple} className="submit">
          บันทึก
        </button>
        </div>
        {/* <div className="img">
          <button type="submit" className="btn-img" value="addimg">
            เพิ่มรูปภาพ
          </button>
        </div>
        <table>
          <tr>
            <th>ลำดับ</th>
            <th>รูปภาพ</th>
            <th>วันที่สร้าง</th>
            <th>จัดการ</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>
              <button type="submit" className="btn-del" value="delete">
                ลบรูปภาพ
              </button>
            </td>
          </tr>
        </table> */}
      </div>
    </div>
  );
}

export default Adminhome;
