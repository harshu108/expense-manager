import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { CategoryContainer } from "./CategoryConatainer";
import { CategoryType } from "../../utils/CategoryType";

const { Title } = Typography;

export const Categories = () => {
  return (
    <Row style={{ height: "100%" }}>
      <Col flex="auto" lg={{ span: 12 }} style={{ background: "#fff7f7" }}>
        <Title style={{ textAlign: "center", padding: "10px" }} level={3}>
          Expense
        </Title>
        <CategoryContainer type={CategoryType.Expense} />
      </Col>
      <Col flex="auto" lg={{ span: 12 }} style={{ background: "#f8fff7" }}>
        <Title style={{ textAlign: "center", padding: "10px" }} level={3}>
          Income
        </Title>
        <CategoryContainer type={CategoryType.Income} />
      </Col>
    </Row>
  );
};
