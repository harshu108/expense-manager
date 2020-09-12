import React, { useState } from "react";
import "antd/dist/antd.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SideMenu from "./SideMenu";
import { Layout, Button } from "antd";
const { Sider } = Layout;

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      breakpoint="md"
      collapsed={collapsed}
      style={{ width: "auto" }}
      onBreakpoint = {(broken)=>{
        if((broken && !collapsed) || (!broken && collapsed)){
          toggleCollapsed();
        }
      }}
    >
      <Button
        type="primary"
        onClick={(event) => {
          toggleCollapsed();
        }}
        style={{
          margin: 14,
          background: "#000000d9",
          borderColor: "#000000d9",
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <SideMenu />
    </Sider>
  );
};

export default SideBar;
