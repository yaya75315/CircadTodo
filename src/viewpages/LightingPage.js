import React, { useState } from "react";
import ItemLabel from "../components/ItemLabel";
import "../public/css/common.css";
import "../public/css/lightingPage.css";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Online, Offline } from "react-detect-offline";
import { changeState } from "../public/js/lightingRequest";

const LightingPage = ({ language }) => {
  const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: "#00C8D3",
      },
    },
  });

  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const url =
    "http://192.168.0.100/api/GQamInJuTeulD9-MUzuBIp8uGEsjTfYiCbJx2n95/lights/1/state";

  return (
    <div className={"lightingContainer"}>
      <Online>
        <div className="lightingRequest">
          <p>請先連結至專用網路，才能有效進行以下操作</p>
        </div>
        <div className={"container"}>
          <div className={"itemContainer"}>
            <p>{language == "English" ? "Light Power" : "燈光開關"}</p>
            <div className={"switchButton"}>
              <FormGroup>
                <ThemeProvider theme={theme}>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={checked}
                        onChange={toggleChecked}
                        color="secondary"
                      />
                    }
                  />
                </ThemeProvider>
              </FormGroup>
            </div>
          </div>
        </div>

        <ItemLabel
          itemName={language == "English" ? "Light CCT" : "燈光色溫"}
          itemContent={"6500K"}
        />
        <ItemLabel
          itemName={language == "English" ? "Light Bright" : "燈光亮度"}
          itemContent={"100%"}
        />
        <ItemLabel
          itemName={language == "English" ? "Next Change" : "下一次變換"}
          itemContent={"After 10min"}
        />
      </Online>
      <Offline>
        <p className="offline">請將手機連上網路後使用</p>
      </Offline>
    </div>
  );
};

export default LightingPage;
