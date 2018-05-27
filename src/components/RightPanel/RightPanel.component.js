import React from "react";
import Table from "../Table";

const RightPanel = () => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ backgroundColor: "#34495e", height: 300 }}>Search</div>
      <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
        <div style={{ width: 1200 }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
