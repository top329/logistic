"use client"

import React, { useState } from 'react';
import { Button, Card, Select, Space } from 'antd';
import ImportFunc from './import';

import IconCreateOrderTick from "@/assets/order_create_tick.svg";
import IconCreateOrderArray from "@/assets/order_array.svg";
import IconCreateOrderSelector from "@/assets/order_arrow-down.svg";
import IconCreateOrderBackBtnArray from "@/assets/order_backbtn_array.svg";
import IconCreateOrderNextBtnArray from "@/assets/order_nextbtn_array.svg";
import IconNotification from "@/assets/order_header_nofitication.svg"
import IconMan from "@/assets/order_header_man.svg"
import IconSuffix from "@/assets/order_first_suffix.svg"
import IconHome from "@/assets/order_first_home.svg"
import IconArrowLeft from "@/assets/order_header_arrowleft.svg"
import IconHelp from "@/assets/order_help.svg"

import "./custom.css";

export default function OrderCreate() {
  const [firstPage, setFirstPage] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between h-[121px] bg-white rounded-b-2xl border-b-2 px-10 py-6 items-center">
        <div>
          <p className="text-3xl mb-2.5">Create Order</p>
          <div className="flex items-center gap-4">
            <Button type="link" href="/home" className="!px-0">
              <IconHome />
            </Button>
            <IconArrowLeft />
            <a className="text-[#625B71] text-base font-semibold">orders</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <IconNotification />
          <Select
            suffixIcon={<IconSuffix />}
            defaultValue={"1"}
            style={{ width: 70 }}
            bordered={false}
            options={[
              { value: '1', label: <IconMan /> },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
            ]}
          />
        </div>
      </div>
      {!firstPage && (
        <div className='p-6 h-[calc(100vh-7.6rem)] overflow-y-scroll'>
          <Card
            bodyStyle={{ padding: "0" }}
            className="max-w-[1000px] !p-[30px] !rounded-[20px]"
            id="order_information"
          >
            <p
              id="order_info_header"
              className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] text-[#6750A4] leading-9"
              style={{
                border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
              }}
            >
              Create New Order
            </p>
            <div id="order_btn_group" className='flex mb-[30px]'>
              <div id="btn_group_1" className='flex mr-[39px] gap-x-2.5 item-center'>
                <p
                  id='order_information_btn1'
                  className='item-center inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
                >
                  1
                </p>
                <p
                  id='order_information_text'
                  className='font-roboto text-[28px] !non-italic !font-normal !text-[#000000]'
                >
                  Order Information
                </p>
              </div>
              <p
                id='order_information_btn2'
                className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
              >
                2
              </p>
              <p
                id='order_information_btn3'
                className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
              >
                3
              </p>
              <p
                id='order_information_btn4'
                className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
              >
                4
              </p>
              <p
                id='order_information_btn5'
                className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
              >
                5
              </p>
              <p
                id='order_information_btn6'
                className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold'
              >
                <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8'>
                  <IconCreateOrderTick />
                </span>
              </p>
            </div>
            <div
              id='order_id'
              className='flex h-[36px] gap-[5px] mb-[30px]'
            >
              <p
                id='order_id_title'
                className='font-roboto font-normal non-italic text-[28px]'
              >
                Order ID:
              </p>
              <p
                id='order_id_content'
                className='font-roboto font-bold non-italic text-[28px]'
              >
                OD78667
              </p>
            </div>
            <div
              id='order_detail'
              className='w-full'
            >
              <div
                id='order_detail_head'
                className='flex w-full h-[34px] gap-x-2.5 pb-[10px]'
              >
                <span className='w-6 h-6'>
                  <IconCreateOrderArray />
                </span>
                <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                  Fill in the Order & Customer Details
                </p>
              </div>
              <div className='border ml-[34px] bg-[#79747E] mb-[30px]' />
              <div
                id="select_group"
                className='gap-y-[30px] px-[30px]'
              >
                <Select
                  defaultValue="Reno Offorex"
                  suffixIcon={<IconCreateOrderSelector />}
                  bordered={false}
                  className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4] !mb-[30px]'
                  // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
                  options={[
                    { value: 'Reno Offorex', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Reno Offorex</p>) },
                    { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>) },
                    { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>) }
                  ]}
                />
                <div className='flex gap-[30px] mb-[30px]'>
                  <Select
                    defaultValue="Shipment"
                    suffixIcon={<IconCreateOrderSelector />}
                    bordered={false}
                    className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4]'
                    // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}
                    options={[
                      { value: 'Shipment', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Shipment</p>) },
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>) },
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>) }
                    ]}
                  />
                  <Select
                    defaultValue="Under Process"
                    suffixIcon={<IconCreateOrderSelector />}
                    bordered={false}
                    className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4]'
                    // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}
                    options={[
                      { value: 'jack', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Jack</p>) },
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>) },
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>) }
                    ]}
                  />
                </div>
                <div className='flex gap-[30px] mb-[30px]'>
                  <Select
                    defaultValue="Select Service"
                    suffixIcon={<IconCreateOrderSelector />}
                    bordered={false}
                    className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4]'
                    options={[
                      { value: 'Select Service', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select Service</p>) },
                      { value: 'export', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Export</p>) },
                      { value: 'import', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Import</p>) },
                      { value: 'auto', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Import Auto</p>) },
                      { value: 'shop', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Shop for me</p>) },
                    ]}
                  />
                  <Select
                    defaultValue="Air"
                    suffixIcon={<IconCreateOrderSelector />}
                    bordered={false}
                    className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4]'
                    // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}
                    options={[
                      { value: 'Air', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Air</p>) },
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>) },
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>) }
                    ]}
                  />
                  <Select
                    defaultValue="DHL"
                    suffixIcon={<IconCreateOrderSelector />}
                    bordered={false}
                    className='flex !h-14 !w-full border !rounded-[20px] border-[#6750A4]'
                    // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}
                    options={[
                      { value: 'DHL', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>DHL</p>) },
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>) },
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>) }
                    ]}
                  />
                </div>
              </div>
              <div className='flex gap-[10px]'>
                <Button
                  className='!h-10 !px-6 !rounded-[100px] border'>
                  <div className='flex items-center gap-2'>
                    <IconCreateOrderBackBtnArray />
                    <p className='text-sm font-medium	 text-[#6750A4]'>Back</p>
                  </div>
                </Button>
                <Button onClick={() => { setFirstPage(true) }} className='!h-[40px] !px-16 !rounded-[100px] border !bg-[#6750A4] leading-5'>
                  <div className='flex items-center gap-2'>
                    <IconCreateOrderNextBtnArray />
                    <p className='text-sm font-medium	 !text-[#FFFFFF]'>Next</p>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
      {firstPage && <div className='p-6 h-[calc(100vh-7.6rem)] overflow-y-scroll'>
        <ImportFunc />
      </div>
      }
      <div className="fixed bottom-10 right-10">
        <Button className="!bg-[#6750A4] !h-10 !rounded-full">
          <div className="flex items-center gap-2">
            <IconHelp />
            <p className="text-white">Need help?</p>
          </div>
        </Button>
      </div>
    </div>
  );
}