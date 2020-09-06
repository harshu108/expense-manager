import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Category } from "./Category";
import { CategoryType } from "../utils/CategoryType";

const {Title} = Typography;

export const Categories = () => {

 
  return (
    <Row style={{height:"100%"}}>
        <Col span={12} style={{background: "#fff7f7"}}>
        <Title style={{textAlign:"center", padding:"10px", }} level={3}>Expense</Title>
        <Category type={CategoryType.Expense}/>
        </Col>
        <Col span={12} style={{background: "#f8fff7" }}>
        <Title style={{textAlign:"center", padding:"10px", }} level={3}>Income</Title>
        <Category type={CategoryType.Income}/>
        </Col>
    </Row>
  );
};
