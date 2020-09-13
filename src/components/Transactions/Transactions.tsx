import React from "react";
import { Layout } from "antd";
import TransactionsHead from "./TransactionsHead";
const { Content } = Layout;

export const Transactions = () => {
  return (
    <Content>
      <Layout>
        <TransactionsHead/>
      </Layout>
    </Content>
  );
};

export default Transactions;
