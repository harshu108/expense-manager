import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import SideBar from "./components/SideBar";
import { Layout } from "antd";
import { Typography } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import { Categories } from "./components/Categories/Categories";
import { AppStateProvider } from "./components/AppState/AppState";
const { Header } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <AppStateProvider>
        <Router>
          <Layout style={{ height: "100%" }}>
            <SideBar />
            <Layout>
              <Header style={{ textAlign: "center", color: "white" }}>
                <Title style={{ paddingTop: "12px", color: "white" }} level={3}>
                  Expense Tracker
                </Title>
              </Header>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/transactions">
                  <Transactions />
                </Route>
                <Route path="/categories">
                  <Categories />
                </Route>
              </Switch>
            </Layout>
          </Layout>
        </Router>
      </AppStateProvider>
    </div>
  );
}

export default App;
