import { Space, Table, Tag } from 'antd';
import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
const SORT_TYPE = {
  EMPTY: 'empty',
  INC: 'inc',
  DES: 'des',
};
const columns: any = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class TableDemo extends PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      data: data,
      columns: [],
    };
  }
  componentDidMount() {
    this.setState({
      columns: columns.map((i) => ({
        ...i,
        status: SORT_TYPE.EMPTY,
        title: (
          <div>
            {i.title}
            <div
              onClick={() => {
                // 点击切换下面的状态
                console.log(1);
                const c = columns.map((i) => ({
                  ...i,
                  status: SORT_TYPE.DES,
                }));

                this.setState({ columns: c });
                console.log('c', c);
              }}
            >
              状态{i.status}
            </div>
          </div>
        ),
      })),
    });
  }

  render() {
    return <Table columns={this.state.columns as any} dataSource={data} />;
  }
}

export default TableDemo;
