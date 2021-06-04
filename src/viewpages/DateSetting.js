import React, { useState } from "react";
import "../public/css/dateSetting.css";
import "../public/css/common.css";
import closeIcon from "../public/images/closeIcon.svg";
import DatePicker from "../components/DatePicker";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const DateSetting = ({ setNewWorking }) => {
  //以下是material-ui
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const timeStamp = moment().valueOf(); //用在material-ui的時間
  const nowTime = moment(timeStamp).format("YYYY-MM-DD"); //用在material-ui的時間
  //以上是material-ui

  //----以下是顏色選擇器
  const colorArray = ["yellow", "blue", "green"];
  const classes = useStyles();

  const [chooseColor, setChooseColor] = useState("yellow");
  const [selectStyle, setSelectStyle] = useState(false);
  const [hourInput, setHourInput] = useState(false);

  const closeSelector = () => {
    if (selectStyle == true) {
      setSelectStyle(false);
    }
  };

  const openSelector = () => {
    setSelectStyle(true);
  };
  //----以上是顏色選擇器

  const deadLineValue = () => document.getElementById("datetime-local").value;

  const totalHoursValue = () => document.getElementById("filled-number").value;

  const [numberSize, setNumberSize] = useState(0);
  const numberChange = (e) => {
    setNumberSize(e.target.value);
  };

  return (
    <div className="dateSetting" onClick={closeSelector}>
      <div className="container settingContainer">
        <form action="" method="POST">
          <div className="dateSettingBar">
            <div
              onClick={() => {
                setNewWorking(false);
              }}
            >
              <img src={closeIcon} alt="" />
            </div>
            <input type="submit" value="Save" />
          </div>

          <div className="eventForm">
            <div className="nameInput">
              <input type="text" placeholder="New event" />
              <div className="colorSelector" onClick={openSelector}>
                <div className="colorChoose">
                  <div
                    className="colorDefaultItem"
                    id={chooseColor}
                    value={chooseColor}
                  />
                </div>
                <div
                  className={selectStyle == true ? "colorOption" : "noneOption"}
                >
                  <div
                    className="colorItem"
                    id={colorArray[0]}
                    onClick={() => setChooseColor(colorArray[0])}
                  ></div>
                  <div
                    className="colorItem"
                    id={colorArray[1]}
                    onClick={() => setChooseColor(colorArray[1])}
                  ></div>
                  <div
                    className="colorItem"
                    id={colorArray[2]}
                    onClick={() => setChooseColor(colorArray[2])}
                  ></div>
                </div>
              </div>
            </div>
            <p>Deadline</p>
            <div className="deadlinePicker">
              <TextField
                id="datetime-local"
                type="date"
                defaultValue={nowTime}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <p>Estimated total hours</p>
            <div className="hourPicker">
              <TextField
                id="filled-number"
                type="number"
                defaultValue="1"
                size="small"
                onInput={numberChange}
                value={numberSize >= 24 ? 24 : numberSize}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <p>Set the working hours of each day</p>
            <div className="">
              <DatePicker
                deadLineValue={deadLineValue}
                totalHoursValue={totalHoursValue}
                setHourInput={setHourInput}
                hourInput={hourInput}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DateSetting;
