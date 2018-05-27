import React from "react";
import { SidebarStyles } from "./Sidebar.style";
import Avatar from "@material-ui/core/Avatar";

const Sidebar = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      maxWidth: 70,
      backgroundColor: "#ffb236",
      height: "100vh",
      alignItems: "center"
    }}
  >
    <div style={{ borderBottom: "1px solid white" }}>
      <Avatar style={{ backgroundColor: "transparent" }}>we</Avatar>
    </div>
    <div
      style={{
        borderBottom: "1px solid white",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <Avatar
        style={{
          backgroundColor: "transparent"
        }}
        src="https://material-ui-next.com/static/images/remy.jpg"
      />
    </div>
  </div>
);

export default Sidebar;
