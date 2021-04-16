import React from "react";
import ItemLabel from "../components/ItemLabel";
import "../public/css/settingPage.css";
import "../public/css/common.css";

const SettingPage = () => {
  const connectState = "Linked";
  return (
    <div className="settingPage">
      <p className="connectState">{connectState}</p>

      <ItemLabel itemName="IP Position" itemContent="168.137.1.137" />
      <ItemLabel itemName="Security" itemContent="HTTPS" />
      <ItemLabel itemName="Identification" itemContent="001357SDGXCFE73" />
      <ItemLabel itemName="SW" itemContent="1937113020" />
    </div>
  );
};

export default SettingPage;
