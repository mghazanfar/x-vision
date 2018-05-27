import React from "react";
import Styles from "../../styles";
import Avatar from "@material-ui/core/Avatar";

const Sidebar = props => (
  <div style={Styles.sidebarWrapper}>
    <div style={Styles.borderBottomWhite}>
      <Avatar style={Styles.logo}>we</Avatar>
    </div>
    <div style={Styles.avatar}>
      <Avatar
        style={Styles.bgTransparent}
        src="https://material-ui-next.com/static/images/remy.jpg"
      />
    </div>
  </div>
);

export default Sidebar;
