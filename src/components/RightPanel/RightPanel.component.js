import React from "react";
import Table from "../Table";
import BGBlue from "./BGBlue.component";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Styles from "../../styles";

const RightPanel = () => {
  return (
    <React.Fragment>
      <div style={Styles.rightPanelWrapper}>
        <BGBlue />
        <div style={Styles.rightAbsolute}>
          <div style={Styles.rightBetween}>
            <Typography variant="title" style={Styles.textMember}>
              Members
            </Typography>

            <TextField
              id="search"
              label="Search field"
              type="search"
              margin="none"
            />
          </div>
          <div style={{ width: 1200 }}>
            <Table />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightPanel;
