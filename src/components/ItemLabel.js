import React, { useState, useEffect } from "react";
import "../public/css/itemLabel.css";

const ItemLabel = ({ itemName, itemContent, setLanguage }) => {
  const [optionState, setOptionState] = useState(itemContent);
  const [optionStyle, setOptionStyle] = useState("normal");

  const [addrtype, setAddrtype] = useState(["繁體中文", "English"]);
  const Add = addrtype.map((Add) => Add);

  const languageSelector = () => {
    return (
      <div className="selector">
        <select
          id="languageOption"
          onChange={selectChange}
          value={optionState}
          selected={optionState}
        >
          {Add.map((address, key) => (
            <option id={key} value={address}>
              {address}
            </option>
          ))}
        </select>
      </div>
    );
  };
  const selectChange = (e) => {
    setLanguage(e.target.value);
    setOptionState(itemContent);
    console.log(optionState);
  };

  useEffect(() => {
    if (itemName == "Language" || itemName == "語言") {
      setOptionStyle("normalSelect");
    }
  }, [itemContent]);
  return (
    <div className={"itemLabelContent"}>
      <div className={"container"}>
        <div className={"itemContainer"}>
          <p>{itemName}</p>
          <p className={optionStyle}>
            {itemName != "Language" || itemName != "語言" ? itemContent : null}
          </p>
          {itemName == "Language" || itemName == "語言"
            ? languageSelector()
            : null}
        </div>
      </div>
    </div>
  );
};

export default ItemLabel;
