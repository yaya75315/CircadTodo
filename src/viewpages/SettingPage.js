import React from "react";
import ItemLabel from "../components/ItemLabel";
import "../public/css/settingPage.css";
import "../public/css/common.css";

const SettingPage = ({ language, setLanguage }) => {
  const connectState = "Linked";

  return (
    <div className="settingPage">
      <p className="connectState">{connectState}</p>

      <ItemLabel
        itemName={language == "English" ? "IP Position" : "IP位置"}
        itemContent="168.137.1.137"
      />
      <ItemLabel
        itemName={language == "English" ? "Security" : "安全協定"}
        itemContent="HTTPS"
      />
      <ItemLabel
        itemName={language == "English" ? "Identification" : "身份認證"}
        itemContent="001357SDGXCFE73"
      />
      {/* <ItemLabel itemName="SW" itemContent="1937113020" /> */}
      <ItemLabel
        itemName={language == "English" ? "Language" : "語言"}
        setLanguage={setLanguage}
        itemContent={language}
      />
    </div>
  );
};

export default SettingPage;
