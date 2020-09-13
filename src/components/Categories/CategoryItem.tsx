import React from "react";
import { Input } from "antd";
import { List, Popover } from "antd";
import { DeleteOutlined, BgColorsOutlined } from "@ant-design/icons";
import ColorPicker from "./ColorPicker";
import { iCategory } from "../../models/Categories";

export const CategoryItem = ({
  category,
  setColor,
  handleChange,
  deleteCategoryItem,
}: {
  category: any;
  setColor: (color: string, category: any) => void;
  handleChange: (name: string, id: string, color: string) => void;
  deleteCategoryItem: (category: iCategory) => void;
}) => {
  return (
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
            deleteCategoryItem(category);
          }}
        />,
      ]}
    >
      <Input
        style={{
          border: "none",
          color: "white",
          background: "none",
        }}
        onChange={(event) => {
          handleChange(event.target.value, category.id, category.color);
        }}
        placeholder="default size"
        value={category.name}
      />
    </List.Item>
  );
};

export default CategoryItem;
