import React from "react";
import { List, Button, Layout } from "antd";
import { iCategories, iCategory } from "../../models/Categories";
import { CategoryType } from "../../utils/CategoryType";
import { PlusOutlined } from "@ant-design/icons";
import CategoryItem from "./CategoryItem";
import AppStateContext from "../AppState/AppState";
const { Header, Content } = Layout;

export const CategoryContainer = (props: { type: CategoryType }) => {
  const {categories, setCategories} = React.useContext(AppStateContext);

  const handleChange = (name: string, id: string, color: string) => {
    setCategories({
      ...categories,
      [id]: { id: id, name: name, color: color, type: props.type },
    });
  };

  const setColor = (color: string, category: iCategory) => {
    const newCategory = { ...category, color: color };
    setCategories({
      ...categories,
      [category.id]: newCategory,
    });
  };

  const deleteCategoryItem = (category: iCategory) => {
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
  };
  console.log(categories)
  return (
    <Layout 
      style={{
        background: props.type === CategoryType.Expense ? "#fff7f7" : "#f8fff7",
        maxHeight:"100%"
      }}
    >
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
              [nextId]: { name: "New Category", id: nextId, color: "#91b6f2", type:props.type },
            });
          }}
        >
          <PlusOutlined />
          Add Categories
        </Button>
      </Header>
      <Content style={{
        overflowY:"auto",
        maxHeight: 500
      }}>
        <List
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          dataSource={Object.keys(categories)
            .filter((key) => !!categories[key]  && categories[key].type === props.type)
            .map((key) => categories[key])}
          renderItem={(category) => (
            <CategoryItem
              category={category}
              setColor={setColor}
              handleChange={handleChange}
              deleteCategoryItem={deleteCategoryItem}
            />
          )}
        />
      </Content>
    </Layout>
  );
};
