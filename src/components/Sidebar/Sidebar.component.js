import React from "react";
import Styles from "../../styles";
import Save from "@material-ui/icons/Save";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

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
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
    <IconButton style={Styles.icon}>
      <Save style={Styles.textWhite} />
    </IconButton>
  </div>
);

export default Sidebar;
