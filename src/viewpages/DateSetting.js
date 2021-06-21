import React, { useState, useEffect } from "react";
import "../public/css/dateSetting.css";
import "../public/css/common.css";
import closeIcon from "../public/images/closeIcon.svg";
import DatePicker from "../components/DatePicker";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const DateSetting = ({
  setNewWorking,
  hours,
  newNumber,
  setNewNumber,
  newInfo,
  setNewInfo,
  oldWorkHour,
  setOldWorkHour,
  language,
}) => {
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
  const colorArray = ["yellow", "blue", "green", "red", "purple"];
  const classes = useStyles();

  const [chooseColor, setChooseColor] = useState("yellow");
  const [selectStyle, setSelectStyle] = useState(false);
  const [hourInput, setHourInput] = useState(false);
  const [deadlineValue, setDeadlineValue] = useState("");
  const [totalNumber, setTotalNumber] = useState(0);
  const [alertFlag, setAlertFlag] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [alertNameFlag, setAlertNameFlag] = useState(false);

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

  const [numberSize, setNumberSize] = useState(1);

  const numberChange = (e) => {
    setNumberSize(e.target.value);
  };

  const deadlineChange = (e) => {
    setDeadlineValue(e.target.value);
  };

  const nameChange = (e) => {
    setNameInput(e.target.value);
  };

  function addEvent() {
    newInfo.name = nameInput;
    newInfo.colorId = chooseColor;
    for (let item in newNumber) {
      let a = {};
      a.name = newInfo.name;
      a.hour = Number(newNumber[item]);
      a.colorId = newInfo.colorId;
      if (oldWorkHour[item] !== undefined) {
        setOldWorkHour((e) => ({
          ...e,
          [item]: [...e[item], a],
        }));
      } else {
        setOldWorkHour((e) => ({
          ...e,
          [item]: [a],
        }));
      }
    }
  }

  let sum = 0;
  for (let item in newNumber) {
    sum += Number(newNumber[item]);
  }

  const list = [];

  function colorList() {
    for (let i = 0; i < colorArray.length; i++) {
      list.push(
        <div
          className="colorItem"
          id={colorArray[i]}
          onClick={() => setChooseColor(colorArray[i])}
        ></div>
      );
    }
  }

  useEffect(() => {
    setTotalNumber(sum);
  }, [sum]);

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

            <div
              onClick={() => {
                if (totalNumber != numberSize) {
                  setAlertFlag(true);
                } else if (nameInput == "") {
                  setAlertNameFlag(true);
                } else {
                  addEvent();
                  setNewNumber({});
                  setNewWorking(false);
                  setTotalNumber(0);
                  setAlertNameFlag(false);
                  setAlertFlag(false);
                }
              }}
            >
              Save
            </div>
          </div>

          <div className="eventForm">
            <div className="nameInput">
              <input
                type="text"
                placeholder={language == "English" ? "New Event" : "新事件名稱"}
                onChange={nameChange}
              />
              {nameInput == 0 && alertNameFlag ? (
                <div className="nameAlert">*</div>
              ) : null}
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
                  {colorList()}
                  {list}
                </div>
              </div>
            </div>
            <p>{language == "English" ? "Deadline" : "最後期限"}</p>
            <div className="deadlinePicker">
              <TextField
                id="datetime-local"
                type="date"
                defaultValue={nowTime}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={deadlineChange}
                InputProps={{ inputProps: { min: nowTime } }}
              />
            </div>
            <p>
              {language == "English" ? "Estimated total hours" : "估計總時數"}
            </p>
            <div className="hourPicker">
              <TextField
                id="filled-number"
                placeholder="Type total hours"
                type="number"
                size="small"
                onInput={numberChange}
                value={numberSize >= 100 ? 100 : numberSize}
                InputLabelProps={{
                  shrink: true,
                }}
                inputmode="numeric"
                // onChange={totalChange}
              />
            </div>

            <p>
              {language == "English"
                ? "Set the working hours of each day"
                : "設定每天的工作時數"}
            </p>

            <div className="">
              <p
                className="
prompt"
              >
                {language == "English"
                  ? "Click the date you want to enter the number of days."
                  : "點擊日期以輸入時數"}
              </p>
              {totalNumber != numberSize && alertFlag ? (
                <div className="alertText">
                  {language == "English"
                    ? "Please enter the correct total hours."
                    : "請輸入正確的加總時數"}
                </div>
              ) : null}
              <DatePicker
                deadLineValue={deadLineValue}
                totalHoursValue={totalHoursValue}
                setHourInput={setHourInput}
                hourInput={hourInput}
                deadlineValue={deadlineValue}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                hours={hours}
                newInfo={newInfo}
                setNewInfo={setNewInfo}
                language={language}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DateSetting;
