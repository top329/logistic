"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Select, Modal, Collapse } from 'antd';

import IconNotification from "@/assets/order_header_nofitication.svg"
import IconMan from "@/assets/order_header_man.svg"
import IconSuffix from "@/assets/order_first_suffix.svg"
import IconHome from "@/assets/order_first_home.svg"
import IconArrowLeft from "@/assets/order_header_arrowleft.svg"
import IconCusomter from "@/assets/order_customer.svg"
// import IconEdit from "@/assets/order_edit.svg"
import IconExpand from "@/assets/order_expanded.svg"
import IconBack from "@/assets/order_back_button.svg"
import IconEye from "@/assets/order_wyw.svg"
import IconHelp from "@/assets/order_help.svg"
import IconDecline from "@/assets/order_request_decline.svg"
import IconCreateOrderArray from "@/assets/order_array.svg";
import IconArrowRight from "@/assets/order_first_arrow_right.svg"


export function OrderInfo() {
  return (
    <div className='px-[18px] py-2'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Assigned</p>
          <p className='text-[#49454F]'>Customer:</p>
          <div className=''>
            <IconCusomter />
            <p className='text-[#21005D] text-[22px] font-[400px]'>Rex Offorex</p>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Type:</p>
          <p className='text-[22px] font-[400px]'>Shipment</p>
        </div>
        <div className='col-span-2 flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Status:</p>
          <p className='text-[22px] font-normal'>Underrtr Process</p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-5'>
        <div className='col-span-2 flex flex-col justify-between'>
          <p className='text-[#49454F]'>Service:</p>
          <p className='text-[22px] font-[400px]'>Export</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Request<br />Date:</p>
          <p className='text-[22px] font-[400px]'>12/02/2023</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Request<br />Time:</p>
          <p className='text-[22px] font-[400px]'>9: 48am</p>
        </div>
      </div>
    </div>
  );
}
export function PackageDetail() {
  return (
    <div className='flex flex-col gap-y-4 px-[18px] py-2'>
      <p className='text-[#49454F]'>Origin:</p>
      <p className='text-[22px] mb-5'>United States (Houston - warehouse)</p>
      <div className="border-b border-[#21005D] border-dashed py-2.5"></div>
      <div className='grid grid-cols-5 gap-4 mt-2.5'>
        <div className='col-span-2'>
          <p className='text-[#21005D] mb-5'>First Name:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>Malibu</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[#21005D] mb-5'>Last Name:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>SHedrack</p>
        </div>
      </div>
      <p className='text-[#21005D]'>Street Address:</p>
      <p className='text-[22px] text-[#21005D] font-[400px]'>No, 1osolo way ikeja road, behind</p>
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex flex-col justify-between'>
          <p className='text-[#21005D]'>Country:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>Turkey</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#21005D]'>State:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>istanbul</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#21005D]'>City:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>Cyprusic</p>
        </div>
        <div>
          <p className='text-[#21005D]'>Zip/postal <br />Code:</p>
          <p className='text-[22px] text-[#21005D] font-[400px]'>98765</p>
        </div>
      </div>
    </div>
  );
}
export function ShippingDetail() {
  return (
    <div className='flex flex-col gap-y-4 px-[18px] py-2'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Receiver's First<br /> Name:</p>
          <p className='text-[22px] font-[400px]'>Malibu</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Receiver's Last<br />Name:</p>
          <p className='text-[22px] font-[400px]'>SHedrack</p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Receiver's<br /> Phone Number:</p>
          <p className='text-[22px] font-[400px]'>+234 3854 9562</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Receiver's<br />Email:</p>
          <p className='text-[22px] font-[400px]'>rafaelrosa3393@gmail.com</p>
        </div>
      </div>
      <div>
        <p className='text-[#49454F]'>Receiver's<br />Address:</p>
        <p className='text-[22px] font-[400px]'>No, 1osolo way ikeja road, behind scint merry</p>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div>
          <p className='text-[#49454F]'>Destination<br />Country:</p>
          <p className='text-[22px] font-[400px]'>Turkey</p>
        </div>
        <div>
          <p className='text-[#49454F]'>Destination<br />state:</p>
          <p className='text-[22px] font-[400px]'>istanbul</p>
        </div>
        <div>
          <p className='text-[#49454F]'>Destination<br />City:</p>
          <p className='text-[22px] font-[400px]'>Cyprusic</p>
        </div>
        <div>
          <p className='text-[#49454F]'>Zip/postal <br />Code:</p>
          <p className='text-[22px] font-[400px]'>98765</p>
        </div>
      </div>
    </div>
  );
}
export function BillingDetail() {
  return (
    <div className='flex flex-col gap-y-4 px-[18px] py-2'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F] mb-5'>First Name:</p>
          <p className='text-[22px] font-[400px]'>Malibu</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[#49454F] mb-5'>Last Name:</p>
          <p className='text-[22px] font-[400px]'>SHedrack</p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F] mb-5'>Phone Number:</p>
          <p className='text-[22px] font-[400px]'>+234 3854 9562</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[#49454F] mb-5'>Email:</p>
          <p className='text-[22px] font-[400px]'>rafaelrosa3393@gmail.com</p>
        </div>
      </div>
      <p className='text-[#49454F]'>Address:</p>
      <p className='text-[22px] font-[400px]'>No, 1osolo way ikeja road, behind</p>
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Country:</p>
          <p className='text-[22px] font-[400px]'>Turkey</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>state:</p>
          <p className='text-[22px] font-[400px]'>istanbul</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>City:</p>
          <p className='text-[22px] font-[400px]'>Cyprusic</p>
        </div>
        <div>
          <p className='text-[#49454F]'>Zip/postal <br />Code:</p>
          <p className='text-[22px] font-[400px]'>98765</p>
        </div>
      </div>
    </div>
  );
}
export function ShipOrder() {
  return (
    <div className='px-[38px] py-7 rounded-xl'>
      <div className='flex'>
        <div className='w-full'>
          <p className='text-[#49454F]'>Assigned<br />Order:</p>
          <div className='flex items-center gap-2'>
            <p className='text-[#21005D] text-[22px] font-[400px]'>OD7866- <span className='font-semibold'>{'{SH78667}'}</span> -Rex Offorex</p>
            <IconEye />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-5'>
        <div className='flex flex-col justify-between col-span-2'>
          <p className='text-[#49454F]'>Packaging:</p>
          <p className='text-[22px] font-[400px]'>Packaging In Progress</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Shipment Date:</p>
          <p className='text-[22px] font-[400px]'>12/02/2023</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Shipment<br />Time:</p>
          <p className='text-[22px] font-[400px]'>9: 48am</p>
        </div>
      </div>
    </div>
  );
}
export function CompanyDetail() {
  return (
    <div className='px-[38px] py-7 rounded-xl'>
      <div className='grid grid-cols-5 gap-4 mt-5'>
        <div>
          <p className='text-[#49454F]'>Delivery<br />Company:</p>
          <p className='text-[22px] font-[400px]'>12/02/2023</p>
        </div>
        <div>
          <p className='text-[#49454F]'>Tacking<br />ID:</p>
          <p className='text-[22px] font-[400px]'>12/02/2023</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Tracking<br />Link:</p>
          <a className='text-[22px] text-red-700 font-semibold'>http://logistic.com</a>
        </div>
      </div>
    </div>
  );
}
export function ShipStarting() {
  const cardData = [
    {
      eventName: "Event Update - #4",
      title: "Shipment was submitted",
      locatioin: "LAGOS-NIGERIA",
      date: "12/02/2023",
      time: "9: 48am",
      note: "The notes will be here."
    },
    {
      eventName: "Event Update - #3",
      title: "Shipment was submitted",
      locatioin: "LAGOS-NIGERIA",
      date: "12/02/2023",
      time: "9: 48am",
      note: "The notes will be here."
    },
    {
      eventName: "Event Update - #2",
      title: "Shipment was submitted",
      locatioin: "LAGOS-NIGERIA",
      date: "12/02/2023",
      time: "9: 48am",
      note: "The notes will be here."
    },
    {
      eventName: "Event Update - #1",
      title: "Shipment was submitted",
      locatioin: "LAGOS-NIGERIA",
      date: "12/02/2023",
      time: "9: 48am",
      note: "The notes will be here."
    },
  ];
  return (
    <div className='px-[38px] py-7 rounded-xl'>
      <div className='grid grid-cols-2 gap-2'>
        {cardData.map((card, key) => (
          <div key={key}>
            <style jsx global>
              {`
            .ant-collapse-content-box {
              padding: 0px !important;
            }
          `}
            </style>
            <Collapse
              defaultActiveKey={['1']}
              items={[{
                key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>{card.eventName}</p>), children: <div className='flex flex-col bg-[#F4EFF4] px-[30px] py-7 rounded-xl gap-y-8'>
                  <div>
                    <p className='text-[#49454F]'>Event<br /> Title:</p>
                    <p className='text-[22px] font-[400px]'>{card.title}</p>
                  </div>
                  <div>
                    <p className='text-[#49454F] mb-4'>Location</p>
                    <p className='text-[22px] font-[400px]'>{card.locatioin}</p>
                  </div>
                  <div className='flex'>
                    <div className='flex flex-col justify-between w-1/2'>
                      <p className='text-[#49454F]'>Event<br />Date:</p>
                      <p className='text-[22px] font-[400px]'>{card.date}</p>
                    </div>
                    <div className='flex flex-col justify-between w-1/2'>
                      <p className='text-[#49454F]'>Event<br />Time:</p>
                      <p className='text-[22px] font-[400px]'>{card.time}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-[#49454F] mb-4'>Note:</p>
                    <p className='text-[22px] font-[400px]'>{card.note}</p>
                  </div>
                </div>
              }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-full !bg-[#F4EFF4] !rounded-xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OrderRequestDetail({ orderId }: { orderId: any }) {
  return (
    <>
      <div className="flex justify-between h-[121px] bg-white rounded-b-2xl border-b-2 px-10 py-6 items-center">
        <div>
          <p className="text-3xl mb-2.5">Create Order</p>
          <div className="flex items-center gap-4">
            <Button type="link" href='/home' className="!px-0">
              <IconHome />
            </Button>
            <IconArrowLeft />
            <a href='/orders' className="text-[#49454F] text-base font-semibold">orders</a>
            <IconArrowLeft />
            <a href="/orders/confirmedorder" className="text-[#625B71] text-base font-semibold">confirmed orders</a>
            <IconArrowLeft />
            <p className="text-[#625B71] text-base font-semibold">OrderId:{orderId}</p>
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
      <div className='p-6 h-[calc(100vh-7.6rem)] overflow-y-scroll'>
        <Card
          bodyStyle={{ padding: "0" }}
          className="w-[65vw] !p-[30px] !rounded-[20px] min-w-[755px]"
          id="order_information"
        >
          <p className="flex w-full h-[76px] mb-4 py-[20px] px-[30px] border border-dashed !border-[#6750A4] rounded-[20px] font-roboto text-[28px] font-normal text-[#6750A4] leading-9">
            Order Request
          </p>
          <p className='text-[28px] mb-4'>Order ID: <span className='font-semibold'>{orderId}</span></p>
          <div className='w-full'>
            <div className='flex w-full gap-x-2.5 pb-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
                Order Information
              </p>
            </div>
            <div className='mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Order Information</p>), children: <OrderInfo /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
            </div>
          </div>
          <div className='flex w-full gap-x-2.5 py-[10px]'>
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
              Package Details
            </p>
          </div>
          <div className='mb-2.5'>
            <Collapse
              defaultActiveKey={['1']}
              items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Package Origin/ Shipment location</p>), children: <PackageDetail /> }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-full !bg-white !rounded-xl'
            />
          </div>
          <div className='flex w-full gap-x-2.5 py-[10px]'>
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
              Shipping Details
            </p>
          </div>
          <div className='mb-2.5'>
            <Collapse
              defaultActiveKey={['1']}
              items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Destination/Shipping Address</p>), children: <ShippingDetail /> }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-full !bg-white !rounded-xl'
            />
          </div>
          <div className='flex w-full gap-x-2.5 py-[10px]'>
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
              Billing Details
            </p>
          </div>
          <div className='mb-2.5'>
            <Collapse
              defaultActiveKey={['1']}
              items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Billing Information</p>), children: <BillingDetail /> }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-full !bg-white !rounded-xl'
            />
          </div>
          <div className='flex gap-2.5'>
            <Link href="/orders">
              <Button className='!rounded-3xl !px-6 !text-center border-[#79747E] !h-10'>
                <div className='flex items-center gap-2'>
                  <IconBack />
                  <p className='text-[#21005D] font-semibold'>Back</p>
                </div>
              </Button>
            </Link>
            <Link href="/orders">
              <Button className='!rounded-3xl !px-6 !text-center !bg-[#B3261E] border-[#79747E] !h-10'>
                <div className='flex items-center gap-2'>
                  <IconDecline />
                  <p className='text-white font-semibold'>Decline request</p>
                </div>
              </Button>
            </Link>
            <Link href="/orders">
              <Button className='!rounded-3xl !px-6 !text-center !bg-[#6750A4] border-[#79747E] !h-10'>
                <div className='flex items-center gap-2'>
                  <IconArrowRight />
                  <p className='text-white font-semibold'>Proceed Confirmation</p>
                </div>
              </Button>
            </Link>
          </div>
        </Card>
        <div className="fixed bottom-10 right-10">
          <Button className="!bg-[#6750A4] !h-10 !rounded-full">
            <div className="flex items-center gap-2">
              <IconHelp />
              <p className="text-white">Need help?</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}