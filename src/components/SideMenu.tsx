import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  DashboardOutlined,
  AccountBookOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { NavLink,useLocation } from "react-router-dom";

export const SideMenu = (props:any) => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <Menu defaultSelectedKeys={["/"]} selectedKeys={[location.pathname]} mode="inline" theme="dark">
          <Menu.Item key="/" icon={<DashboardOutlined />}>
          <NavLink to="/"/>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/transactions" icon={<AccountBookOutlined />}>
          <NavLink to="/transactions"/>
            Transactions
          </Menu.Item>
          <Menu.Item key="/categories" icon={<BarsOutlined />}>
          <NavLink to="/categories"/>
            Categories
          </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
