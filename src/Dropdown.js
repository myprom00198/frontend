import React from "react";
import "../src/Dropdown.css";

function Dropdown() {
  return (
    <div className="form-dropdown">
      <label>เลือกประเภทวัด</label>
      <select type="submit" name="select-type">
        <option name="userrole" type="userrole" id="userrole" value="1">วัดทั่วไป</option>
        <option name="userrole" type="userrole" id="userrole" value="2">วัดป่า</option>
      </select>
    </div>
  );
}

export default Dropdown;
