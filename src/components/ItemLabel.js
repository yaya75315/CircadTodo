import React, { useState } from "react";
import "../public/css/itemLabel.css";

const ItemLabel = ({ itemName, itemContent }) => {
  return (
    <div className={"itemLabelContent"}>
      <div className={"container"}>
        <div className={"itemContainer"}>
          <p>{itemName}</p>
          <p>{itemContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemLabel;
