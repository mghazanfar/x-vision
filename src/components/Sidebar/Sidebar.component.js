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
      height: "100vh"
    }}
  >
    <div style={SidebarStyles.avatar}>
      <Avatar style={{ width: 60, height: 60, backgroundColor: "transparent" }}>
        we
      </Avatar>
    </div>
    <Avatar
      style={[SidebarStyles.avatar, SidebarStyles.bgTrans]}
      src="https://material-ui-next.com/static/images/remy.jpg"
    />
  </div>
);

export default Sidebar;
