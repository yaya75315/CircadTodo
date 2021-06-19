import React, { useState } from "react";
import "../public/css/dateWork.css";
import noteIcon from "../public/images/noteIcon.svg";

const DateWork = ({
  backGroundColor,
  workContent,
  workHour,
  index,
  setOldWorkHour,
  oldWorkHour,
  item,
  hours,
  h,
  setHours,
}) => {
  const [deleteFlag, setDeleteFlag] = useState(false);
  const cloneEvent = { ...oldWorkHour };
  const cloneHour = { ...hours };

  const deleteEvent = () => {
    cloneEvent[item].splice(index, 1);
    setOldWorkHour(cloneEvent);
    console.log(oldWorkHour[item][index]);
    for (let i = 0; i <= oldWorkHour[item].length; i++) {
      if (i != oldWorkHour[item].length) {
        h += oldWorkHour[item][i].hour;
        cloneHour[item] = h;
        setHours(cloneHour);
      } else if (oldWorkHour[item][index] == undefined) {
        cloneHour[item] = undefined;
        setHours(cloneHour);
      } else {
        h = 0;
      }
    }
  };

  return (
    <div className="container">
      <div
        className="workContainer"
        id={backGroundColor}
        onClick={() => {
          if (deleteFlag == false) {
            setDeleteFlag(true);
          } else {
            setDeleteFlag(false);
          }
        }}
      >
        <div className="workArea">
          <div className="workImg">
            <img src={noteIcon} alt="" />
          </div>
          <div className="workContent">
            <p>{workContent}</p>
          </div>
        </div>
        <div className="rightArea">
          <div className="text">
            <p>{workHour}</p>
            <p>hr</p>
          </div>
          {deleteFlag ? (
            <div className="deleteArea" onClick={deleteEvent}>
              X
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DateWork;
