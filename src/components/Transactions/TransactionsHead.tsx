import React, { useContext, useState } from "react";
import { PageHeader, PageHeader as section, Typography } from "antd";
import { DatePicker, Select, Space } from "antd";
import AppStateContext from "../AppState/AppState";
import moment from 'moment';
import { format } from "path";
const { Option } = Select;
const { Text } = Typography;
const { RangePicker } = DatePicker;


export const TransactionsHead = (props: any) => {
  const { categories } = useContext(AppStateContext);
  const [dateRange, setDateRange] = useState<any>([moment(new Date()), moment(new Date())])
  const [optionsSelected, setOptionsSelected] = useState<Array<string>>([]);
  const [title, setTitle] = useState<string>("Need to Replace by Use Effect");

  /*
  * Title - Date Range and net expense ( Read from the API call)
  * Date - 
  *   - modify date picker to range picker
  *   - default range has to be the current week
  *   - on range change - fetch transactions and update the expense in title
  * Categories - Use global categories scope
  *   - on select - filter transactions in memory
  *   - (perf optimization - if range is changed after selecting a category, make an API call)
  *   - Add new categories ? (maybe in future)
  * Tags - To be added in future
  */

  const handleChange = (value: string[], options: any) => {
    console.log(value);
    setOptionsSelected(value);
  }

  //const handleRangeChange = (values: RangeValue<moment.Moment>, formatString: [string, string])=>{
  const handleRangeChange = (values: any, formatString: [string, string])=>{
    setDateRange(values);      
  }
  const options = Object.keys(categories)
    .filter((key) => !!categories[key])
    .map((key) => {
      return (
        <Option
          key={categories[key].id}
          disabled={
            optionsSelected.length > 2
              ? optionsSelected.includes(categories[key].id)
                ? false
                : true
              : false
          }
          value={categories[key].id}
        >
          {categories[key].name}
        </Option>
      );
    });
  return (
    <PageHeader title={title} style={{ margin: "16px", backgroundColor: "#f0f2f5" }}>
        <Space>
        <Text strong>Date:</Text>
        <RangePicker
          defaultValue={dateRange}
          onChange={handleRangeChange}
        />
      </Space>

        <Space>
        <Text style={{ marginLeft: "16px"}} strong>Filter By Categories:</Text>
        <Select
          mode="multiple"
          allowClear
          menuItemSelectedIcon={null}
          style={{minWidth: "250px" }}
          placeholder="Select Categories to Filter"
          onChange={handleChange}
        >
          {options}
        </Select>
        </Space>

        <Space>
        <Text style={{ marginLeft: "16px"}}strong>Filter By Tags:</Text>
        <Select
          mode="tags"
          allowClear
          menuItemSelectedIcon={null}
          style={{minWidth: "250px" }}
          placeholder="Select Tags to Filter"
          onChange={handleChange}
        >
          {options}
        </Select>
        </Space>
    </PageHeader>
  );
};

export default TransactionsHead;
