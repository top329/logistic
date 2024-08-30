"use client"

import React from 'react';
import { useState } from 'react';
import { Input, Button, Table, Pagination, Dropdown, Checkbox, Divider, DatePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { PaginationProps, MenuProps } from "antd";
import { DraftOrderDataType } from '@/types/order';

import IconFilter from "@/assets/order_filter.svg"
import IconBulk from "@/assets/order_bulk.svg"
import RedNew from "@/assets/order_red_new.svg"
import IconSerach from "@/assets/order_search.svg"
import IconCreate from "@/assets/order_new_big.svg"
import IconNextPage from "@/assets/order_table_nextpage.svg"
import IconPrePage from "@/assets/order_table_prepage.svg"
import IconCustomer from "@/assets/order_customer.svg"
import IconCheck from "@/assets/order_table_check.svg"
import IconAction from "@/assets/order_table_action.svg"
import IconConfirm from "@/assets/order_table_check.svg"
import IconNotConfirm from "@/assets/order_not_confirm.svg"
import IconRevered from "@/assets/order_reserved.svg"

export default function oderDraft() {
  const [isClicked, setIsClicked] = useState(false);
  const { RangePicker } = DatePicker;
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const orderId = "SH08180"
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href={`/orders/order-draft/${orderId}`} rel="noopener noreferrer" className='text-base'>
          View Order Details
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" className='text-base'>
          Check Payment <br /> Status
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" className='text-base'>
          Cancel Order
        </a>
      ),
    },
  ]
  const bulkItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href={`/orders/confirmedorder/${orderId}`} rel="noopener noreferrer" className='text-base'>
          Edit their Payment<br />Status
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" className='text-base'>
          Cancel Orders
        </a>
      ),
    },
  ]
  const filterItems: MenuProps['items'] = [
    {
      key: "1",
      type: "group",
      label: (
        <div className='w-[530px]'>
          <p className='text-base text-black font-medium'>Show Orders only under the following category</p>
          <Divider className='!py-0' />
          <div className='flex'>
            <div className='w-1/2'>
              <div className='mb-2'>
                <Checkbox checked><p className='ml-4 text-base'>Staff(s) in charge</p></Checkbox>
              </div>
              <div className='flex flex-col gap-2 pl-10'>
                <Checkbox ><p className='ml-4 text-sm'>Micheal Sam</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Rexomi Off</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Feradi Fictech</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Exlemu Nudo</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Ferincle Modfiyv</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Vickony Else</p></Checkbox>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='mb-2'>
                <Checkbox checked><p className='ml-4 text-base'>Packaging status</p></Checkbox>
              </div>
              <div className='flex flex-col gap-2 pl-10'>
                <Checkbox ><p className='ml-4 text-sm'>Not started</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Packaging in progress</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Packaging complete</p></Checkbox>
              </div>
              <div className='my-2'>
                <Checkbox checked><p className='ml-4 text-base'>Order status</p></Checkbox>
              </div>
              <div className='flex flex-col gap-2 pl-10'>
                <Checkbox ><p className='ml-4 text-sm'>Processed</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Processing</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Unprocessed</p></Checkbox>
              </div>
            </div>
          </div>
          <div className='flex mt-2'>
            <div className='w-1/2'>
              <div className='mb-4'>
                <Checkbox checked><p className='ml-4 text-base'>Order cost</p></Checkbox>
              </div>
              <div className='flex flex-col gap-2 pl-10'>
                <Checkbox ><p className='ml-4 text-sm'>$0 - $20</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>$20 - $50</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>$50 - $100</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>$100 - $500</p></Checkbox>
                <Checkbox ><p className='ml-4 text-sm'>Above $500</p></Checkbox>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='mb-4'>
                <Checkbox checked><p className='ml-4 text-base'>Payment status</p></Checkbox>
              </div>
              <div className='flex flex-col gap-2 pl-10'>
                <Checkbox ><div className='flex items-center'><p className='mx-4 text-sm'>Confirmed</p><IconConfirm /></div></Checkbox>
                <Checkbox ><div className='flex items-center'><p className='mx-4 text-sm'>Not yet confirmed</p><IconNotConfirm /></div></Checkbox>
                <Checkbox ><div className='flex items-center'><p className='mx-4 text-sm'>Reversed</p><IconRevered /></div></Checkbox>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <Checkbox checked><p className='ml-4 text-base'>Processed status</p></Checkbox>
          </div>
          <div className='mt-2 px-8'>
            <RangePicker renderExtraFooter={() => 'extra footer'} className='!w-full' />
          </div>
          <div className='flex items-center px-8 mt-4'>
            <p className='font-medium w-[222px] text-[#6750A4]'>Showing 1090 results</p>
            <Button className="!bg-[#6750A4] !px-28 !h-10 !rounded-full">
              <div className="flex items-center gap-2">
                <p className="text-white">Apply filter</p>
              </div>
            </Button>
          </div>
        </div>
      ),
    },
  ]
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <Button className="!w-6 !h-6 !px-2 !border !border-[#6750A4]">
          <IconPrePage />
        </Button>
      );
    }
    if (type === "next") {
      return (
        <Button className="!w-6 !h-6 !px-2 !border !border-[#6750A4] ">
          <IconNextPage />
        </Button>
      );
    }
    return originalElement;
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: ColumnsType<DraftOrderDataType> = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortDirections: ['ascend', 'descend'],
      render: (customer) => (
        <div className='flex items-center gap-2'>
          <IconCustomer />
          <p>{customer}</p>
        </div>
      ),
    },
    {
      title: 'Shipment Location',
      dataIndex: 'shipLocation',
    },

    {
      title: 'Payment Status',
      dataIndex: 'payStatus',
      align: "center",
      width: 150,
      render: (state) => (
        <div className='px-6'>
          {state && <IconCheck />}
        </div>
      )
    },
    {
      title: 'Staff In Charge',
      dataIndex: 'staffCharge',
      sorter: (a, b) => a.staffCharge.length - b.staffCharge.length,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: 120,
      sorter: (a, b) => a.total.length - b.total.length,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (state) => (
        <div>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button className='!border-0 !rounded-full !px-1 !bg-[#FFFBFE] hover:!bg-[#E8DEF8]'>
              <IconAction />
            </Button>
          </Dropdown>
        </div>
      )
    }
  ];

  const data: DraftOrderDataType[] = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      key: i,
      id: `Edward King ${i}`,
      type: "Shipment",
      customer: "Rexo",
      shipLocation: `NG-LOS${i}`,
      payStatus: "check",
      staffCharge: "Micheal Sam Obalodu",
      total: `2315${i}`,
    });
  }
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center gap-6'>
          <style jsx global>
            {`
              .ant-input {
                background-color: #F4EFF4 !important;
              }
            `}
          </style>
          <Dropdown menu={{ items: filterItems }} placement="bottomLeft">
            <Button className="!bg-[#060C2C] !h-14 !rounded-2xl">
              <div className='absolute -right-1 top-0'>
                <RedNew />
              </div>
              <div className="flex items-center gap-2">
                <IconFilter />
                <p className="text-white">Filter view</p>
              </div>
            </Button>
          </Dropdown>
          <Input
            size="large"
            placeholder="Search for users with any related keyword"
            prefix={<IconSerach />}
            className="h-14 !w-[458px] !rounded-2xl !bg-[#F4EFF4]"
          />
          <Dropdown menu={{ items: bulkItems }} placement="bottomLeft">
            <Button className="!bg-[#060C2C] !h-14 !rounded-2xl">
              <div className="flex items-center gap-2">
                <IconBulk />
                <p className="text-white ml-1">Bulk Actions</p>
              </div>
            </Button>
          </Dropdown>
        </div>
        <div>
          <Button className="!bg-[#060C2C] !h-14 !rounded-2xl">
            <div className="flex items-center gap-2">
              <IconCreate />
              <p className="text-white">Create new order</p>
            </div>
          </Button>
        </div>
      </div>
      <div className='p-4 bg-white rounded-xl'>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={getCurrentData()}
          pagination={false}
          scroll={{ y: 490 }}
        />
        <div className="justify-between py-4 rounded-b-md">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={data.length}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            }}
            onShowSizeChange={(current, size) => setPageSize(size)}
            showSizeChanger={true}
            itemRender={itemRender}
          />
        </div>
      </div>
    </div>
  );
}