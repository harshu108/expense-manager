import React, { useState } from "react";
import { Layout } from "antd";
import { DatePicker, Select, Space } from "antd";

const { Header } = Layout;
const { Option } = Select;

export const TransactionsHead = (props: any) => {
  const [type, setType] = useState("date");
  
  return (
    <Header style={{ backgroundColor: "#f0f2f5" }}>
      <Space>
        <Select value={type} onChange={setType}>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
        <DatePicker picker={type} onChange={(value)=>{
            console.log(value);
        }} />
      </Space>
    </Header>
  );
};

export default TransactionsHead;
