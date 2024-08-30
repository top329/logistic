import { Table } from "antd";

export default function ({
  columns,
  data,
  rowSelection,
  loading = false,
}: {
  columns: any;
  data: any;
  rowSelection: any;
  loading: boolean;
}) {
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      size="small"
      rowSelection={rowSelection}
      scroll={{ x: 1500 }}
      pagination={false}
      className="border border-gray-300 rounded-md border-b-0 rounded-b-none"
    />
  );
}
