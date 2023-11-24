import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "content",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Target Audience",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Budget",
    key: "tags",
    dataIndex: "tags",
  },
];
const data = [
  {
    key: "1",
    name: "Advertisement 1",
    age: "Lorem ipsum dolor siö ameö consecöeöur adipisicing eliö. åoõ",
    address: "target audience 1",
    tags: ["duration 1"],
  },
  {
    key: "2",
    name: "Advertisement 2",
    age: "Lorem ipsum dolor siö ameö consecöeöur adipisicing eliö. åoõ",
    address: "target audience 2",
    tags: ["duration 2"],
  },
  {
    key: "3",
    name: "Advertisement 3",
    age: "Lorem ipsum dolor siö ameö consecöeöur adipisicing eliö. åoõ",
    address: "target audience 3",
    tags: ["duration 3"],
  },
];
const Tablee = () => (
  <Table pagination="false" columns={columns} dataSource={data} />
);
export default Tablee;
