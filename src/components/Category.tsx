import React, { useState } from "react";
import { List, Popover, Button, Layout } from "antd";
import { Input } from "antd";
import {CategoryType} from "../utils/CategoryType"
import {
  PlusOutlined,
  DeleteOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import ColorPicker from "./ColorPicker";
const { Header, Content } = Layout;
interface iCategories {
  [key: string]: {
    name: string;
    id: string;
    color: string;
    type: CategoryType;
  };
}
export const Category = (props:any) => {
  const [categories, setCategories] = useState<iCategories>({
    "0": { name: "Harsh", id: "0", color: "#123456", type: props.type},
    "1": { name: "Manish", id: "1", color: "#a343ff", type: props.type},
  });

  const handleChange = (name: string, id: string, color: string) => {
    setCategories({
      ...categories,
      [id]: { id: id, name: name, color: color, type:props.type },
    });
  };

  const setColor = (color: string, category: any) => {
    const newCategory = { ...category, color: color };
    setCategories({
      ...categories,
      [category.id]: newCategory,
    });
  };

  return (
    <Layout style={{background: props.type === CategoryType.Expense ? "#fff7f7":"#f8fff7"}}>
      <Header style={{ background: "none", border: "none" }}>
        <Button
          type="primary"
          onClick={() => {
            let nextId = 0;
            const ids = Object.keys(categories);
            if (ids.length > 0) {
              nextId = parseInt(ids[ids.length - 1], 10) + 1;
            }
            console.log(nextId);
            setCategories({
              ...categories,
              [nextId]: { name: "New Category", id: nextId, color: "#91b6f2" },
            });
          }}
        >
          <PlusOutlined />
          Add Categories
        </Button>
      </Header>
      <Content>
        <List
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          dataSource={Object.keys(categories)
            .filter((key) => !!categories[key])
            .map((key) => categories[key])}
          renderItem={(category) => (
            <List.Item
              style={{
                backgroundColor: category.color,
                
              }}
              actions={[
                <Popover
                  content={<ColorPicker item={category} setColor={setColor} />}
                  title="Title"
                  trigger="click"
                >
                  <BgColorsOutlined style={{ color: "white" }} />
                </Popover>,
                <DeleteOutlined
                  style={{ color: "white" }}
                  onClick={() => {
                    const newCategories = Object.keys(categories).reduce(
                      (newCategories: iCategories, key: string) => {
                        if (category.id !== categories[key].id) {
                          newCategories[key] = categories[key];
                        }
                        return newCategories;
                      },
                      {}
                    );
                    console.log(newCategories);
                    setCategories(newCategories);
                  }}
                />,
              ]}
            >
              <Input
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: category.color,
                }}
                onChange={(event) => {
                  handleChange(event.target.value, category.id, category.color);
                }}
                placeholder="default size"
                value={category.name}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};
