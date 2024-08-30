"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Select, Modal, Collapse } from 'antd';
import ProductImage from "@/assets/product.png";
import IconNotification from "@/assets/order_header_nofitication.svg"
import IconMan from "@/assets/order_header_man.svg"
import IconSuffix from "@/assets/order_first_suffix.svg"
import IconHome from "@/assets/order_first_home.svg"
import IconArrowLeft from "@/assets/order_header_arrowleft.svg"
import IconCusomter from "@/assets/order_customer.svg"
import IconEdit from "@/assets/order_edit.svg"
import IconShip from "@/assets/order_ship.svg"
import IconChange from "@/assets/order_change.svg"
import IconView from "@/assets/order_view.svg"
import IconExpand from "@/assets/order_expanded.svg"
import IconImportant from "@/assets/order_important.svg"
import IconBack from "@/assets/order_back_button.svg"
import IconStart from "@/assets/order_first_arrow_right.svg"
import IconTracking from "@/assets/order_tracking_right.svg"
import IconEye from "@/assets/order_wyw.svg"
import IconShipment from "@/assets/order_shipment.svg"
import IconHelp from "@/assets/order_help.svg"

import IconCreateOrderArray from "@/assets/order_array.svg";


export function OrderInfo() {
  return (
    <div className='px-[18px] py-2'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
          <p className='text-[#49454F]'>Assigned</p>
          <p className='text-[#49454F]'>Customer:</p>
          <div className='flex items-center gap-2 '>
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
          <p className='text-[22px] font-[400px]'>Under Process</p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-5'>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Service:</p>
          <p className='text-[22px] font-[400px]'>Export</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Shipment <br />Method:</p>
          <p className='text-[22px] font-[400px]'>Air</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Delivery <br />Company:</p>
          <p className='text-[22px] font-[400px]'>DHL</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Date:</p>
          <p className='text-[22px] font-[400px]'>12/02/2023</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='text-[#49454F]'>Order Time:</p>
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
      <p className='text-[22px]'>United States (Houston - warehouse)</p>
      <div className='flex items-center gap-4'>
        <p className='text-[#21005D] text-[22px]'>Origin Address</p>
        <div className="border-b border-[#21005D] border-dashed w-[172px]"></div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
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
export function Item() {
  return (
    <div className='px-[18px] py-2'>
      <div className=' grid grid-cols-5 gap-4'>
        <div className='flex flex-col justify-between col-span-2'>
          <p className='text-[#49454F]'>Product Name:</p>
          <p className='text-[22px] font-[400px]'>Designer Bages</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Product<br />Priginal Cost:</p>
          <p className='text-[22px] font-[400px]'>$45.00</p>
        </div>
        <div className='flex flex-col justify-between '>
          <p className='text-[#49454F]'>Quantify:</p>
          <p className='text-[22px] font-[400px]'>4</p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-5'>
        <div>
          <p className='text-[#49454F] mb-5'>Weight:</p>
          <p className='text-[22px] font-[400px]'>67kg</p>
        </div>
        <div>
          <p className='text-[#49454F] mb-5'>Height:</p>
          <p className='text-[22px] font-[400px]'>5 inches</p>
        </div>
        <div>
          <p className='text-[#49454F] mb-5'>Length:</p>
          <p className='text-[22px] font-[400px]'>5 inches</p>
        </div>
        <div>
          <p className='text-[#49454F] mb-5'>Width:</p>
          <p className='text-[22px] font-[400px]'>5 inches</p>
        </div>
      </div>
      <p className='text-[#49454F] my-5'>Product/Item<br />Picture:</p>
      <Image
        src={ProductImage}
        alt="Your Image"
        width={220}
        height={150}
      />
      <p className='text-[#49454F] my-5'>Product<br />Desctiption:</p>
      <p className='text-[22px] font-[400px]'>This is a great computer</p>
      <div className='grid gird-cols-5 gap-4 mt-5'>
        <div>
          <p className='text-[#49454F] mb-5'>Color:</p>
          <p className='text-[22px] font-[400px]'>Blue</p>
        </div>
        <div>
          <p className='text-[#49454F] mb-5'>Stripes:</p>
          <p className='text-[22px] font-[400px]'>5 inches</p>
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
        <p className='text-[22px] font-[400px]'>No, 1osolo way ikeja road, behind</p>
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
export function PaymentInfo() {
  return (
    <div className='grid grid-cols-5 gap-4 px-[18px] py-2'>
      <div className='col-span-2'>
        <div className='flex items-center gap-2'>
          <IconImportant />
          <p className='text-[#49454F]'>Total Shipment <br />Cost:</p>
        </div>
        <p className='text-[22px] font-[400px]'>$234,000.00</p>
      </div>
      <div className='col-span-2'>
        <p className='text-[#49454F]'>Payment<br />Status:</p>
        <div className='flex gap-4'>
          <p className='text-[22px] font-[400px]'>Processing</p>
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

export default function OrderDetail({ orderId }: { orderId: any }) {
  const [isOrder, setIsOrder] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }
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
            <p className="text-[#625B71] text-base font-semibold">{orderId}</p>
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
        {isOrder && (
          <Card
            bodyStyle={{ padding: "0" }}
            className="w-[65vw] !p-[30px] !rounded-[20px] min-w-[755px]"
            id="order_information"
          >
            <p className="flex w-full h-[76px] mb-4 py-[20px] px-[30px] border border-dashed !border-[#6750A4] rounded-[20px] font-roboto text-[28px] font-normal text-[#6750A4] leading-9">
              Order Details
            </p>
            <p className='text-[28px] mb-4'>Order ID: <span className='font-semibold'>{orderId}</span></p>
            <div className='w-full'>
              <div className='flex w-full gap-x-2.5 pb-[10px]'>
                <span className='w-6 h-6'>
                  <IconCreateOrderArray />
                </span>
                <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                  Order Information
                </p>
              </div>
              <div className='flex items-center gap-2 mb-2.5'>
                <Collapse
                  defaultActiveKey={['1']}
                  items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Order Information</p>), children: <OrderInfo /> }]}
                  expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                  expandIconPosition='end'
                  className='w-full !bg-white !rounded-xl'
                />
                <Button type="link">
                  <IconEdit />
                </Button>
              </div>
              <div className='flex items-center gap-2'>
                <Collapse
                  defaultActiveKey={['1']}
                  items={[{
                    key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Shipment Details</p>), children:
                      <div className='px-[18px] py-2'>
                        <div className='grid grid-cols-5 gap-4'>
                          <div>
                            <p className='text-[#49454F]'>Shipping/ <br />Tracking ID:</p>
                            <p className='text-[22px] font-[400px]'>SH78667</p>
                          </div>
                          <div className='flex flex-col justify-between col-span-2'>
                            <p className='text-[#49454F]'>Status:</p>
                            <div className='flex gap-4'>
                              <p className='text-[22px] font-[400px]'>Not Started</p>
                              <Button onClick={showModal} className='!h-10 !w-[130px] !rounded-3xl !border-[#79747E]'>
                                <div className='flex items-center text-center gap-2'>
                                  <IconShip />
                                  <p className='text-[#6750A4] font-semibold'>Start Now</p>
                                </div>
                              </Button>
                              <Modal centered open={isModalOpen} footer={null} closeIcon={null} className='!rounded-3xl'>
                                <div className='px-[30px] py-6'>
                                  <p className='text-[24px] mb-4'>OOPS!</p>
                                  <p className='text-base'>This Shipment has not been started, would you like to start<br />this Shipment now?</p>
                                  <div className='flex items-center justify-end pr-6 mt-8'>
                                    <Button type='link' onClick={handleCancel}>
                                      <p className='text-[#6750A4] font-semibold'>Cancel</p>
                                    </Button>
                                    <Button onClick={() => { setIsOrder(false); handleOk(); }} className='!h-10 !rounded-3xl !bg-[#6750A4]'>
                                      <div className='flex items-center'>
                                        <IconStart />
                                        <p className='text-white'>Yes, Start Shipment</p>
                                      </div>
                                    </Button>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-5 gap-4 mt-5'>
                          <div className='flex flex-col justify-between'>
                            <p className='text-[#49454F]'>Packaging:</p>
                            <div className='grid grid-cols-5 gap-4'>
                              <p className='text-[22px] font-[400px]'>Not Started</p>
                              <Button className='!h-10 !w-[115px] !rounded-3xl !border-[#79747E]'>
                                <div className='flex items-center text-center gap-2'>
                                  <IconChange />
                                  <p className='text-[#6750A4] font-semibold'>Change</p>
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                  }]}
                  expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                  expandIconPosition='end'
                  className='w-full !bg-white !rounded-xl'
                />
                <Button type="link">
                  <IconView />
                </Button>
              </div>
            </div>
            <div className='flex w-full gap-x-2.5 py-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Package Details
              </p>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Package Origin/ Shipment location</p>), children: <PackageDetail /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Item #1</p>), children: <Item /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex w-full gap-x-2.5 py-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Shipping Details
              </p>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Destination/Shipping Address</p>), children: <ShippingDetail /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex w-full gap-x-2.5 py-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Billing Details
              </p>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Billing Information</p>), children: <BillingDetail /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Payment Information</p>), children: <PaymentInfo /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <Link href="/orders">
              <Button className='!rounded-3xl !px-44 !text-center border-[#79747E] !h-10'>
                <div className='flex items-center gap-2'>
                  <IconBack />
                  <p className='text-[#21005D] font-semibold'>Back Orders</p>
                </div>
              </Button>
            </Link>
          </Card>
        )}
        {!isOrder && (<div>
          <Card
            bodyStyle={{ padding: "0" }}
            className="w-[65vw] !p-[30px] !rounded-[20px]"
            id="order_information"
          >
            <p className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed !border-[#6750A4] rounded-[20px] font-roboto text-[28px] font-normal text-[#6750A4] leading-9">
              Shipment Details
            </p>
            <div className='grid grid-cols-5 gap-4'>
              <p className='text-[28px] mb-[30px]'>Order ID: <span className='font-semibold'>OD78667</span></p>
              <div className='mt-2'>
                <IconTracking />
              </div>
              <p className='text-[28px] mb-[30px]'>Tracking ID: <span className='font-semibold'>SH78667</span></p>
            </div>
            <div className='flex w-full gap-x-2.5 pb-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Order Information
              </p>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Order Information</p>), children: <ShipOrder /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex w-full gap-x-2.5 pb-[10px]'>
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Tracking Details
              </p>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Delivery Company Details</p>), children: <CompanyDetail /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{ key: '1', label: (<div className='flex gap-4 items-center'><p className='text-[22px] px-4 text-[#49454F]'>Shipment Starting</p><IconShipment /></div>), children: <ShipStarting /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <Collapse
              defaultActiveKey={['1']}
              items={[{
                key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>In Transit</p>), children: <div className='px-[38px] py-7'>
                  <Button className='!bg-[#F4EFF4] !h-12 !rounded-3xl w-full '>
                    <p className='text-[#1C1B1F] text-[22px]'>No Event Yet</p>
                  </Button>
                </div>
              }]}
              expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
              expandIconPosition='end'
              className='w-[calc(100%-4rem)] !bg-white !rounded-xl !mb-2.5'
            />
            <div className='flex items-center gap-2 mb-2.5'>
              <Collapse
                defaultActiveKey={['1']}
                items={[{
                  key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Estimated Delivery Details</p>), children: <div className='grid grid-cols-5 gap-4 px-[38px] py-7'>
                    <div>
                      <div className='flex items-center gap-2'>
                        <p className='text-[#49454F]'>Estimated <br />Delivery Details:</p>
                      </div>
                      <p className='text-[22px] font-[400px]'>12/02/2023</p>
                    </div>
                    <div>
                      <p className='text-[#49454F]'>Delivery Time<br />of the Day:</p>
                      <div className='flex gap-4'>
                        <p className='text-[22px] font-[400px]'>Processing</p>
                      </div>
                    </div>
                  </div>
                }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <Button onClick={() => setIsOrder(true)} className='!rounded-2xl !px-44 !text-center border-[#79747E] !h-10'>
              <div className='flex items-center gap-2'>
                <IconBack />
                <p className='text-[#21005D] font-semibold'>Back to Order Details</p>
              </div>
            </Button>
          </Card>
        </div>)}
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