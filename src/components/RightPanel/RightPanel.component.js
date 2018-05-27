import React from "react";
import Table from "../Table";
import BGBlue from "./BGBlue.component";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const RightPanel = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flex: 1, position: "relative" }}>
        <BGBlue />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            position: "absolute",
            height: " 100vh",
            width: "100%",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              margin: 10,
              marginRight: 16
            }}
          >
            <Typography
              variant="title"
              style={{ color: "white", marginTop: "1rem", marginLeft: "1rem" }}
            >
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
