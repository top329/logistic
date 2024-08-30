"use client"

import React, { useState } from 'react';
import Image from "next/image"
import Link from 'next/link'
import { Button, Card,  Select, Input, Divider, ConfigProvider, Switch, Modal, Collapse, Tooltip, Radio, Space, Table } from 'antd';
import IconCreateOrderTick from "@/assets/order_create_tick.svg";
import IconCreateOrderArray from "@/assets/order_array.svg";
import IconCreateOrderSelector from "@/assets/order_arrow-down.svg";
import IconCreateOrderWarning from "@/assets/order_warning.svg";
import IconCreateOrderArrayCircleUp from "@/assets/order_array_circle_up.svg"
import IconCreateOrderExport from "@/assets/order_export.svg";
import IconCreateOrderDollarSquare from "@/assets/order_dollar-square.svg";
import IconCreateOrderSquareMinus from "@/assets/order_square_minus.svg";
import IconCreateOrderSquarePlus from "@/assets/order_square_plus.svg";
import IconCreateOrderPlus from "@/assets/order_plus.svg";
import IconCreateOrderDelete from "@/assets/order_delete.svg";
import IconCreateOrderBackBtnArray from "@/assets/order_backbtn_array.svg";
import IconCreateOrderNextBtnArray from "@/assets/order_nextbtn_array.svg";
import IconCreateOrderCalendar from "@/assets/order_calendar.svg";
import IconCreateOrderBluePlus from "@/assets/order_plus_blue.svg"
import IconCreateOrderArrowRight from "@/assets/order_arrow_right_white.svg";
import ProductImage from "@/assets/order_modal_computer.png";
import IconCreateOrderEye from "@/assets/order_eye.svg"
import IconCreateOrderArrayLeft from "@/assets/order_array_left.svg";
import IconCreateOrderCart from "@/assets/order_cart.svg";
import IconCreateOrderConvert from "@/assets/order_convert_cart_white.svg"
import IconCreateOrderComputer from "@/assets/order_table_computer.png"
import IconCreateOrderDiscount from "@/assets/order_discount.svg";
import IconCreateOrderWallet from "@/assets/order_wallet.svg"
import IconCreateOrderChat from "@/assets/order_chat.svg"
import IconConfrim from "@/assets/order_confirm.svg"
import IconCreateOrderCar from '@/assets/order_car.png'
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

import OrderCreate from './orderCreate';

import "./custom.css";

export default function ShopMe() {

  const [currentChildId, setCurrentChildId] = useState(2);

  const handleNext = () => {
    if(currentChildId < 6) {
      setCurrentChildId(currentChildId + 1);
    }
  }

  const handleBack = () => {
    if(currentChildId > 0) {
      setCurrentChildId(currentChildId - 1);
    }
  }
  

function GlobalOrderProgressChild() {
    return(
      <div id = "order_btn_group" className='flex items-center mb-[30px]'>
        <p 
          id='order_information_btn2'
          className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
        >
            1
        </p>
        <p 
          id='order_information_btn5'
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
        <div id = "btn_group_1" className='flex items-center mr-[39px] gap-x-2.5 item-center'>
          <p 
            id='order_information_btn1'
            className='item-center flex inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
          >
            5
          </p>
          <p
            id='order_information_text'
            className='font-roboto text-[28px] !non-italic !font-normal !text-[#000000]'
          >
            Order Details Confirmation
          </p>
        </div>
        <p 
          id='order_information_btn6'
          className='flex !w-[44px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold'
        >
          <span id='create_order_tick_icon' className='flex justify-center w-6 h-6 m-0.5 leading-8'>
            <IconCreateOrderTick />
          </span>
        </p>
      </div>
    )
    
}


function ConfirmShopOrderInfoChild() {
    return (
      <div className='px-[18px] py-2'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-2'>
            <p className='text-[#49454F]'>Assigned</p>
            <p className='text-[#49454F]'>Customer:</p>
            <div className='flex items-center gap-2 '>
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

function ConfirmShopPackageDetailChild() {
return (
    <div className='flex flex-col gap-y-4 px-[18px] py-2'>
    <p className='text-[#49454F]'>Origin:</p>
    <p className='text-[22px]'>United States (Houston - warehouse)</p>
    <div className='flex items-center gap-4'>
        <p className='text-[#21005D] text-[22px] w-[172px]'>Origin Address</p>
        <div className="border-b border-[#21005D] border-dashed w-full"></div>
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

function ConfirmShopItemChild() {
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
    <div className='grid grid-cols-5 mt-5'>
        <div>
        <p className='text-[#49454F] mb-5'>Color:</p>
        <p className='text-[22px] font-[400px]'>Blue</p>
        </div>
        <div>
        <p className='text-[#49454F] mb-5'>Stripes:</p>
        <p className='text-[22px] font-[400px]'>5 inches</p>
        </div>
    </div>
    <div className='flex items-center gap-4 my-5'>
        <p className='text-[#21005D] text-[22px] w-[172px]'>Origin Address</p>
        <div className="border-b border-[#21005D] border-dashed w-full"></div>
    </div>
    <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2'>
        <p className='text-[#21005D] mb-5'>Urgent<br /> purchase fee:</p>
        <p className='text-[22px] text-[#21005D] font-[400px]'>$0.00</p>
        </div>
        <div className='col-span-2'>
        <p className='text-[#21005D] mb-5'>Processing<br /> Fee: </p>
        <p className='text-[22px] text-[#21005D] font-[400px]'>SHedrack</p>
        </div>
        <div className='col-span-2'>
        <p className='text-[#21005D] mb-5'>Shop For Me<br />Cost:</p>
        <p className='text-[22px] text-[#21005D] font-[400px]'>$87,000.00</p>
        </div>
    </div>
    </div>
);
}

function ConfirmShopBillingDetailChild() {
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

function ConfirmShopPaymentInfoChildren() {
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
    <div className='col-span-2'>
        <div className='flex items-center gap-2'>
        <IconImportant />
        <p className='text-[#49454F]'>Total Shop For Me <br />Cost:</p>
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
  
function BillingShopCollapseShopChild(){
    return(
      <div
        id='order_pgdetail-item_1'
        className='flex flex-col gap-y-[10px] w-full !py-[10px] px-[20px] rounded-[20px]'
      >
        <div
          className='!flex flex-col !py-[20px] gap-y-[30px]'
        >
          <div className='grid grid-cols-3 gap-y-[20px] !justify-between'>
            <div>
              <p className='text-sm'>Total Item(s) Cost<br />from Store(s):</p>
              <p className='text-[22px] leading-[26px]'>$23.00</p>
            </div>
            <div>
              <p className='text-sm'>Total Processing<br />Fee:</p>
              <p className='text-[22px] leading-[26px]'>$23.00</p>
            </div>
            <div>
              <p className='text-sm'>Total Urgent<br />Purchase Fee:</p>
              <p className='text-[22px] leading-[26px]'>$23.00</p>
            </div>
            <div>
              <p className='text-sm'>Payment Method:<br />Surcharge; </p>
              <p className='text-[22px] leading-[26px]'>$23.00</p>
            </div>
            <div>
              <p className='text-sm'>VAT:<br />&nbsp; </p>
              <p className='text-[22px] leading-[26px]'>$23.00</p>
            </div>
          </div>
          
        </div>   
        <Divider className='!p-0 !m-0 !border-[#79747E] ' />
        <div className='flex justify-between'>
          <div
            className='flex flex-col w-1/3 border rounded-[20px] !py-[10px] !px-[14px] border-[#CAC4D0] justify-between gap-y-[20px]'
          >
            <div className='!flex !justify-between !items-center !pl-[20px] '>
              <p className='text-[22px]'>Discounts</p>
              <span className='p-3'><Switch /></span>
            </div>
          </div>
          <div>
            <p className='text-sm'>Total Shipment<br />Cost: </p>
            <p className='text-[22px] leading-[26px]'>$5,682,342.00</p>
          </div>
          <div>
            <p className='text-sm'>Payment Status<br />&nbsp; </p>
            <div className='flex items-center gap-[10px]'>
              <span><Switch /></span>
              <p className='text-[22px] leading-[26px]'>Rejected</p>
              <Button
                className='!flex !h-[40px] !py-2.5 !rounded-[100px] !bg-[#B3261E] border gap-2'>
                <span className='w-[18px] h-[18px]'><IconCreateOrderWallet /></span>
                <p className='!text-sm !font-medium	 text-[#FFFFFF]'>Pay Now</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  
      
  }
  
 function BillingShopCollapseShipmentChild(){
    return(
      <div
            id='order_pgdetail-item_1'
            className='flex flex-col gap-y-[10px] w-full !py-[10px] !px-[20px] rounded-[20px]'
          >          
            <Radio.Group className='!w-full !pt-[20px]' defaultValue={1}>
              <div className='!flex !justify-between !w-full'>
                <div
                  className='!flex flex-col items-start border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
                >
                  <Radio value={1} className='!flex w-full pr-[20x]'>
                    <p className='!flex !pl-[20px] !items-center'>
                      <span className='text-sm'>Basic Shipping Method</span>
                    </p>
                  </Radio>
                  <div>
                    <p className='text-sm'>Shipping<br />Cost:</p>
                    <p className='text-[22px] leading-[26px]'>6</p>
                  </div>
                  <div>
                    <p className='text-sm'>Clearing, Port<br />Handling:</p>
                    <p className='text-[22px] leading-[26px]'>$0.00</p>
                  </div>
                </div>
  
                <div
                  className='!flex flex-col items-start border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
                >
                  <Radio value={1} className='!flex w-full pr-[20x]'>
                    <p className='!flex !pl-[20px] !items-center'>
                      <span className='text-sm'>Custom Shipping Method</span>
                    </p>
                  </Radio>
                  <div 
                    id='input_group'
                    className='flex justify-between h-[56px] gap-[30px]'
                  >
                    <Input
                      className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                      prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] '><IconCreateOrderDollarSquare /></div>}
                      value={'657.00'}
                    />
                    <Input
                      className='!flex !items-center !text-base !text-center !h-14 !w-[231px] !border !px-0 !py-4 !rounded-[20px] border-[#79747E]'
                      prefix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquareMinus /></button>}
                      suffix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquarePlus /></button>}
                      value={'01'}
                    />
                  </div>
                  <Input
                      className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                      prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarSquare /></div>}
                      value={'657.00'}
                  />
                </div>
              </div>
            </Radio.Group>  
  
            <div
              className='!flex flex-col border rounded-[20px] !py-[20px] !px-[20px] gap-y-[30px]'
            >
              <p className='!flex !items-center'>
                <span className='text-sm'>Additional Costs</span>
              </p>
              <div className='!flex !justify-between'>
                <div>
                  <p className='text-sm'>Storage<br />Charge:</p>
                  <p className='text-[22px] leading-[26px]'>$0.00</p>
                </div>
                <div>
                  <p className='text-sm'>Insurance<br />Cost:</p>
                  <p className='text-[22px] leading-[26px]'>$0.00</p>
                </div>
                <div>
                  <p className='text-sm'>Payment Method<br />Surcharge:</p>
                  <p className='text-[22px] leading-[26px]'>$0.00</p>
                </div>
                <div>
                  <p className='text-sm'>VAT:<br />&nbsp; </p>
                  <p className='text-[22px] leading-[26px]'>$0.00</p>
                </div>
              </div>
              <Input
                className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px]'><IconCreateOrderDollarSquare /></div>}
                value={'657.00'}
              />
            </div>   
            <Divider className='!p-0 !m-0 !border-[#79747E] ' />
            <div className='flex justify-between'>
              <div
                className='flex flex-col w-1/3 border rounded-[20px] !py-[10px] !px-[14px] border-[#CAC4D0] justify-between gap-y-[20px]'
              >
                <div className='!flex !justify-between !items-center !pl-[20px] '>
                  <p className='text-[22px]'>Discounts</p>
                  <span className='p-3'><Switch /></span>
                </div>
                <Radio.Group className='!flex !px-[24px]' defaultValue={1}>
                  <Radio value={1} className='!flex w-full pr-[20x]'>
                    %%
                  </Radio>
                  <Radio value={2} className='!flex w-full pr-[20x]'>
                    $$
                  </Radio>
                </Radio.Group>
                <Input
                  className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                  prefix={<div className='grid !place-items-center ml-1 !rounded-[100px]'><IconCreateOrderDiscount /></div>}
                  value={'20'}
                />
              </div>
              <div>
                <p className='text-sm'>Total Shipment<br />Cost: </p>
                <p className='text-[22px] leading-[26px]'>$5,682,342.00</p>
              </div>
              <div>
                <p className='text-sm'>Payment Status<br />&nbsp; </p>
                <div className='flex items-center gap-[10px]'>
                  <span><Switch /></span>
                  <p className='text-[22px] leading-[26px]'>Unpaid</p>
                  <Button
                    className='!flex !h-[40px] !py-2.5 !rounded-[100px] !bg-[#B3261E] border gap-2'>
                    <span className='w-[18px] h-[18px]'><IconCreateOrderWallet /></span>
                    <p className='!text-sm !font-medium	 text-[#FFFFFF]'>Pay Now</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
    );
  }
  
 const Package_Details_shop_me = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handlePreview = () => {
      setIsModalOpen(true);
    }
  
    const handleCancel = () => {
      setIsModalOpen(false);
    }
  
    const CollapseChild = () => {
  
      return(
        <div className='flex flex-col !px-[20px] !pb-[20px] !gap-y-[30px] !pt-[30px]'>
          <div className='flex gap-[30px] !h-14'>
            <div className='flex !h-14 w-2/3 gap-[5px]'>
              <Select
                defaultValue="Select a store"	
                suffixIcon = {<IconCreateOrderSelector />}
                bordered = {false}
                className='!flex !w-full !text-base border !h-14 !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
                options={[
                  { value: 'Select a store', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select a store</p>)},
                  { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                  { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                ]}
              />
              <span className='flex items-center'><IconCreateOrderWarning /></span>
            </div>
            <div className='flex !h-14 w-1/3 gap-[5px]'>
              <Select
                defaultValue="No"	
                suffixIcon = {<IconCreateOrderSelector />}
                bordered = {false}
                className='!flex !w-full !text-base border !h-14 !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
                options={[
                  { value: 'No', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>No</p>)},
                  { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                  { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                ]}
              />
              <span className='flex items-center'><IconCreateOrderWarning /></span>
            </div>
          </div>
          <Input
              // bordered = {false}
              className='flex !h-14 !text-base !border !rounded-[20px] border-[#79747E] !border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              value={'Paste the item link here'}
          />
          <Input
              // bordered = {false}
              className='flex !h-14 !text-base !border !rounded-[20px] border-[#79747E] !border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              value={'Product Name'}
          />
          <div 
            id='input_group'
            className='flex justify-between h-[56px] gap-[30px]'
          >
            <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
              value={'657.00'}
            />
            <Input
              className='!flex !items-center !text-base !text-center !h-14 !w-[231px] !border !px-0 !py-4 !rounded-[20px] border-[#79747E]'
              prefix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquareMinus /></button>}
              suffix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquarePlus /></button>}
              value={'01'}
            />
          </div>
          <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
              value={'657.00'}
          />
          <div
              className='h-[64px]'
            >
              <p className='!text-xs !pl-[11px]'>Upload Product/Item Picture</p>
              <div className='flex !h-12 !py-1'>
                <Button className='!flex justify-center !w-full !h-[40px] !rounded-r-[0px] !rounded-l-[4px] !py-2.5 border !border-[#79747E] !bg-[#E8DEF8] gap-2 leading-5 '>
                  <span className='w-[18px] h-[18px]'><IconCreateOrderExport /></span>
                  <p className='!text-sm !font-medium'>Choose File</p>
                </Button>   
                <Button className='!flex justify-center !w-full !h-[40px] !rounded-l-[0px] !rounded-r-[100px] !py-2.5 !px-3 border !border-[#79747E] gap-2 leading-5 '>
                  <p className='!text-sm !font-medium'>No file chosen</p>
                </Button> 
              </div>
            </div>
          <div className='flex'>
            <Input 
              className='!flex !items-start !text-base !w-full h-[144px] !w-full !border !rounded-[20px] !border-[#79747E]'
              value={"Product Description"}
            />
          </div>
          <div
            id='order_detail_head'
            className='w-full h-[34px] gap-x-2.5 pb-[10px]'
          >
            <div
              id='order_detail_head'
              className='flex w-full h-[34px] gap-x-2.5 pb-[10px]'
            >
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Describe the Item You Wish To Purchase Further With The Following Properties
              </p>
            </div>
            <hr className='border ml-[34px] bg-[#79747E] mb-[30px]'/>
          </div>
          <div
              className='flex pl-[34px] gap-[30px]'
          >
            <Input
              className='flex !text-center !text-base !w-[230px] !border !rounded-[20px] !border-[#79747E]'
              value={'Enter the color of the item'}
            /> 
            <Button className='!flex !items-center justify-center !w-[176px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
              <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
              <p className='!text-base text-[#E6E1E5] !font-normal'>Add propertise</p>
            </Button>  
          </div>
        </div>
      );
    }
  
    return(
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              handleBg: "#79747E",
              handleSize: 16,
              trackMinWidth	: 52,
              trackHeight	: 32,
              trackPadding	: 8,
            }
          }
        }}
      >
        <Card 
        bodyStyle={{padding: "0"}}
        className="grid max-w-[1000px] !p-[30px] !rounded-[20px]"
        id = "order_information"
      >
        <p
          id = "order_info_header"
          className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
          style={{ 
            border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
          }}
        >
          Creating New Shop For Me Order
        </p>
        <div id = "order_btn_group" className='flex mb-[30px]'>
            <p 
              id='order_information_btn2'
              className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
            >
                1
            </p>
            <div id = "btn_group_1" className='flex mr-[39px] gap-x-2.5 item-center'>
              <p 
                id='order_information_btn1'
                className='item-center flex inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
              >
                2
              </p>
              <p
                id='order_information_text'
                className='font-roboto text-[28px] !non-italic !font-normal !text-[#000000]'
              >
                Package Details
              </p>
          </div>
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
          id='pkg_detail'
          className='w-full h-[120px] gap-y-[30px] !mb-[30px]'
        >
          <div
            id='order_detail_head'
            className='flex w-full h-[34px] gap-x-2.5 pb-[10px]'
          >
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
              Tell Us Where Your Package Will Be Shipped From
            </p>
          </div>
          <div className='border ml-[34px] bg-[#79747E] mb-[30px]'/>
          <div
            id = "select_group"
            className='flex gap-x-[10px] px-[30px]'
          >
            <Select
              defaultValue="Select origin"	
              suffixIcon = {<IconCreateOrderSelector />}
              bordered = {false}
              className='flex !h-14 !w-full border !rounded-[20px] border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              options={[
                { value: 'Select origin', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Select origin</p>)},
                { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
              ]}
            />
            <span className='flex m-auto p-auto item-center'><IconCreateOrderWarning /></span>
          </div>
        </div>
  
        <div
          id='pkg_detail'
          className='grid w-full !gap-y-[20px] flex mb-[30px]'
        >
          <div
            id='order_detail_head'
            className='flex w-full h-[34px] gap-x-2.5 pb-[10px] '
          >
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
              Fill In The Cars Details
            </p>
          </div>
          <div className='grid w-full !gap-y-[20px]'>
            <div
              className='flex w-full gap-[20px]'
            >
              <Collapse
                items={[
                  { 
                    key: '1', label: (
                      <div className='flex gap-[30px] pr-[6px]'>
                        <p className='!pl-[20px]'>
                          <span className='text-[22px]'>Item - </span>
                          <span className='text-[22px] text-[#6750A4]'>#1</span>
                        </p>
                        <Button onClick={handlePreview} className='!flex !items-center justify-center !w-[158px] !h-10 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#6750A4] '>
                          <span className='felx itmes-center !m-1'><IconCreateOrderEye /></span>
                          <p className='!text-base text-[#E6E1E5] !font-normal'>Preview Item</p>
                        </Button>
                        <Modal centered width={900} open={isModalOpen} footer={null} closeIcon={null} className='!rounded-3xl '>
                          <div className='flex flex-col p-[30px] gap-y-[30px] '>
                            <p
                              id = "order_info_header"
                              className="flex w-full h-[76px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] text-[#6750A4] leading-9"
                              style={{ 
                                border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
                              }}
                            >
                              Item Preview
                            </p>
                            <div className='flex gap-y-[16px] gap-[20px]' >
                              <div className='flex flex-col w-[373px] box-border gap-y-[30px]'>
                                <Image
                                  src={ProductImage}
                                  alt="Your Image"
                                  width={373}
                                  height={150}
                                />
                                <div className='flex flex-col gap-y-[5px]'>
                                  <p className='txt-sm'>Item Name:<br /> &nbsp;</p>
                                  <p className='text-[22px] leading-7'> SteelSeries Rival 5 Gaming Mouse with PrismSync RGB Lighting and 9..... </p>
                                </div>
                              </div>
                              <div className='flex flex-col gap-y-[30px] rounded-[10px] p-[10px]'>
                                <div className='flex flex-col gap-y-[30px] rounded-[10px] p-[10px] bg-[#6750A424] !bg-opacity-14'>
                                  <div className='flex justify-between '>
                                    <div className='flex flex-col'>
                                      <p className='txt-sm'>Item Color:<br /> &nbsp;</p>
                                      <p className='text-[22px] leading-7'> Amstel white </p>
                                    </div>
                                    <div className='flex flex-col'>
                                      <p className='txt-sm'>Item Weight:<br /> &nbsp;</p>
                                      <p className='text-[22px] leading-7'> 2 </p>
                                    </div>
                                  </div>
                                  <div className='flex flex-col'>
                                    <p className='txt-sm'>Country of<br />Purchase:</p>
                                    <p className='text-[22px] leading-7'>United States (Houston - warehouse) </p>
                                  </div>
                                  <div className='flex flex-col'>
                                    <p className='txt-sm'>Item Link: <br />&nbsp;</p>
                                    <a className='text-[22px] text-[#B3261E] leading-7'> https://a.co/d/gNEGYFM </a>
                                  </div>
                                </div>
                                <div className='flex flex-col gap-y-[10px] rounded-[10px] p-[10px] bg-[#625B71] '>
                                  <p className='text-[22px] leading-7 text-[#FFFBFE] px-[6px] py-[10px]'>Shop For Me Costs</p>
                                  <div className='flex flex-col pt-[10px] pr-[10px] pb-[0px] pl-[10px] gap-y-[5px]'>
                                    <p className='flex justify-between text-sm text-[#FFFBFE] '><span>Urgent Purchase Cost:</span><span>₦0.00</span></p>
                                    <hr className='py-[5px] border-[#CAC4D0]' />
                                    <p className='flex justify-between text-sm text-[#FFFBFE] '><span>Cost of Item from Store</span><span>₦189,000.00</span></p>
                                    <hr className='py-[5px] border-[#CAC4D0]' />
                                    <p className='flex justify-between text-sm text-[#FFFBFE] '><span>Processing Fee:</span><span>₦28,000.00</span></p>
                                    <hr className='py-[5px] border-[#CAC4D0]' />
                                  </div>
                                  <div className='flex justify-between px-[14px] gap-[20px]'>
                                    <div className='flex flex-col py-[14px]'>
                                      <p className='flex justify-between text-sm text-[#FFFBFE] '>Total:</p>
                                      <p className='text-[22px] leading-7 text-[#FFFBFE] py-[10px]'>₦217,000.00</p>
                                    </div>
                                    <div className='flex flex-col pb-[14px] gap-y-[10px]'>
                                      <p className='flex justify-between text-sm text-[#FFFBFE] '>Digital Currency : USD</p>
                                      <Button className='!flex items-center  !h-[35.5px] !gap-[7px] !rounded-full !py-auto !bg-[#FFFBFE] !bg-opacity-0'>
                                        <span><IconCreateOrderConvert /></span>
                                        <p className='text-sm  text-[#EADDFF]'>Change currency</p>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                            <div className='flex items-center justify-end py-[24px] pr-[24px] gap-[8px] '>
                              <Button className='!h-10 !rounded-3xl !bg-[#6750A4]'>
                                <div className='flex items-center'>
                                  <IconCreateOrderArrayLeft />
                                  <p className='text-white'>Back</p>
                                </div>
                              </Button>
                              <Button onClick={handleCancel} className='!h-10 !rounded-3xl !bg-[#6750A4] !bg-opacity-0'>
                                <div className='flex items-center'>
                                  <IconCreateOrderCart />
                                  <p className=' text-[#6750A4] '>Add to cart</p>
                                </div>
                              </Button>
                            </div>
                          </div>
                        </Modal>            
                      </div>
                    ), children: <CollapseChild /> }]}
                    expandIcon={
                      ({ isActive }) => isActive ? <IconCreateOrderArrayCircleUp /> : <IconCreateOrderArrayCircleUp />}
                    expandIconPosition='end'
                    className='w-full !bg-white !rounded-xl'
              />
              <div className='!flex items-center'>
                <span><IconCreateOrderDelete /></span>
              </div>
            </div>
            <div
              className='flex h-[68px] w-full gap-[20px]'
            >
              <div
                id='order_pgdetail-item_1'
                className='grid w-full border rounded-[20px] !py-[10px] !px-[14px] border-[#CAC4D0] gap-y-[30px]'
              >
                <div
                  id = 'event_title'
                  className='flex justify-between pr-[6px]'
                >
                  <p className='!flex !pl-[20px] !  items-center'>
                    <span className='text-[22px]'>Item - </span>
                    <span className='text-[22px] text-[#6750A4]'>#2</span>
                  </p>
                  <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
                </div>
              </div>
              <div className='!flex items-center'>
                <span><IconCreateOrderDelete /></span>
              </div>
            </div>
            <Button className='!flex !items-center justify-center !w-[158px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
              <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
              <p className='!text-base text-[#E6E1E5] !font-normal'>Add new car</p>
            </Button>  
          </div>
          <hr className='border bg-[#79747E]'/>
          <div className='!flex justify-between !gap-[30px] !h-14'>
            <Input
              className='flex !text-center !text-base !w-full !border !rounded-[20px] !border-[#79747E]'
              value={'56kg'}
            />
            <Input
              className='flex !text-center !text-base !w-full !border !rounded-[20px] !border-[#79747E]'
              value={'76'}
            />
            <Input
              className='flex !text-center !text-base !w-full !border !rounded-[20px] !border-[#79747E]'
              value={'76'}
            />
            <Input
              className='flex !text-center !text-base !w-full !border !rounded-[20px] !border-[#79747E]'
              value={'76'}
            />
          </div>
        </div>
        
        <div className='flex gap-[10px]'>
          <Button onClick={handleBack}
            className='!h-10 !px-6 !rounded-[100px] border'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderBackBtnArray />
                <p className='text-sm font-medium	 text-[#6750A4]'>Back</p>
              </div>
          </Button>
          <Button onClick={handleNext} className='!h-[40px] !px-16 !rounded-[100px] border !bg-[#6750A4] leading-5'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderNextBtnArray />
                <p className='text-sm font-medium	 !text-[#FFFFFF]'>Next</p>
              </div>
          </Button>   
        </div>
      </Card>
    </ConfigProvider>
    );
}

const Package_Details_import_procurement = () => {
    const text = "This is the shipping address, it is the location the package will be delivered to. the customer can then request for doorstep delivery upon arrival."
    return(
      <Card 
        bodyStyle={{padding: "0"}}
        className="grid max-w-[1000px] !p-[30px] gap-y-[30px] !rounded-[20px]"
        id = "order_information"
      >
        <p
          id = "order_info_header"
          className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
          style={{ 
            border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
          }}
        >
          Creating New Shop For Me Order
        </p>
        <div id = "order_btn_group" className='flex mb-[30px]'>
            <p 
              id='order_information_btn2'
              className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
            >
                1
            </p>
            <p 
              id='order_information_btn3'
              className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
            >
              2
            </p>
            <div id = "btn_group_1" className='flex mr-[39px] gap-x-2.5 item-center'>
              <p 
                id='order_information_btn1'
                className='item-center flex inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
              >
                3
              </p>
              <p
                id='order_information_text'
                className='font-roboto text-[28px] !non-italic !font-normal !text-[#000000]'
              >
                Shipping Details
              </p>
          </div>
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
          id='pkg_detail'
          className='w-full gap-y-[30px]'
        >
          <div className='w-full gap-y-[10px] !mb-[29px]'>
            <div
              id='order_detail_head'
              className='flex w-full gap-x-2.5 pb-[10px]'
            >
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
                Fill In The Shipment Details
              </p>
            </div>
            <div className='!ml-[34px]'>
              <Divider className='!p-0 !m-0 !border-[##79747E]' />
            </div>
          </div>
          <div className='flex flex-col w-full !p-[30px] !pt-[0px] gap-y-[30px] '>
            <div className='flex flex-col gap-y-[10px] !rounded-[20px] !px-[14px] !py-[10px] !bg-[#F2B8B5]'>
              <p className='!py-[10px] !pr-[6px] !pl-[14px] !text-sm !font-medium'>
                IMPORTANT NOTICE:
              </p>
              <div className='flex !px-[14px] !pb-[10px]'>
                <ul className='list-disc !px-[14px] list-inside'>
                  <li>The package to be imported is expected to be dropped at the<span className='!font-bold'> ”Origin” </span>  Address and it will be delivered to the <span className='!font-bold'> ”Destination/ Shipping Address” (which is our available office in Nigeria) </span> you will select.</li>
                  <li>And if the customer wants doorstep delivery, we will help them make provisions for that when it arrives the <span className='!font-bold'> ”Destination/ Shipping Address” (which is our available office in Nigeria) </span> you will select.</li>
                </ul> 
              </div>
            </div>
            
            <div className='flex !h-14 gap-[10px]'>
              <Input
                className='flex !w-full !h-14 !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                value={"Select Destination"}
              />
              <Tooltip 
                placement='left'
                arrow={false}
                overlayClassName='ant-tooltip-inner'
                title={text}
              >
                <span className='!flex items-center'><IconCreateOrderWarning /></span>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='flex gap-[10px]'>
          <Button onClick={handleBack}
            className='!h-10 !px-6 !rounded-[100px] border'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderBackBtnArray />
                <p className='text-sm font-medium	 text-[#6750A4]'>Back</p>
              </div>
          </Button>
          <Button onClick={handleNext} className='!h-[40px] !px-16 !rounded-[100px] border !bg-[#6750A4] leading-5'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderNextBtnArray />
                <p className='text-sm font-medium	 !text-[#FFFFFF]'>Next</p>
              </div>
          </Button>   
        </div>
      </Card>
    );
}

const Billing_Details_shop_me = () =>{
     const rowClassName = () => 'px-4'; 
    
    const columns = [
    {
      title: <p className='text-sm !font-medium'>Items</p>,
      dataIndex: 'items',
      key: 'items',
      width: '30%',
      fixed: true,
      render: (text: string) => (
        <div className='flex gap-[5px]'>
          <Image
            src={IconCreateOrderComputer}
            alt="Your Image"
            width={62}
            height={55}
          />
          <p className='truncate overflow-ellipsis whitespace-pre-line'>{text}</p>
        </div>
      ),
    },
    {
      title: <p className='text-sm !font-medium'>Item URL</p>,
      dataIndex: 'itemUrl',
      key: 'itemUrl',
      width: '20%',
      fixed: true,
      render: (text: string) => (
        <div className='flex gap-[5px]'>
          <a className='truncate overflow-ellipsis whitespace-pre-line'>{text}</a>
        </div>
      ),
    },
    {
      title: <p className='text-sm !font-medium'>Value <br/>Per Items</p>,
      dataIndex: 'value',
      key: 'value',
      width: '10%',
      render: (text: string) => (
        <>
          <p className='text-sm font-medium'>{text}</p>
        </>
      )
    },
    {
      title: <p className='text-sm !font-medium'>Urgent<br/>Purchase</p>,
      dataIndex: 'isUrgent',
      key: 'isUrgent',
      width: '10%',
      fixed: true,
      render: (text: string) => (
        <div className='flex gap-[5px]'>
          <p className='truncate overflow-ellipsis whitespace-pre-line'>{text}</p>
        </div>
      ),
    },
    {
      title: <p className='text-sm !font-medium'>Quantity <br/>Of Items</p>,
      dataIndex: 'quality',
      key: 'quality',
      width: '10%',
      render: (text: string) => (
        <>
          <p className='text-sm font-medium'>{text}</p>
        </>
      )
    },
    {
      title: <p className='text-sm !font-medium'>Total Value <br/>Of Items</p>,
      dataIndex: 'total_value',
      key: 'total_value',
      width: '10%',
      render: (text: string) => (
        <>
          <p className='text-sm font-medium'>{text}</p>
        </>
      )
    }];
  
    const data = [
      {
        items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
        itemUrl: "htttp/jjnkkukja.jhgyja...",
        value: "$88.99",
        isUrgent: "No",
        quality: "3",
        total_value: "$112.49"
      },
      {
        items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
        itemUrl: "htttp/jjnkkukja.jhgyja...",
        value: "$88.99",
        isUrgent: "No",
        quality: "3",
        total_value: "$112.49"
      },
    ]
      
  
    return(
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              handleBg: "#79747E",
              handleSize: 16,
              trackMinWidth	: 52,
              trackHeight	: 32,
              trackPadding	: 8,
            },
            Table: {
              headerBorderRadius: 20
            }
          }
        }}
      >
        <Card 
        bodyStyle={{padding: "0"}}
        className="grid max-w-[1000px] !p-[30px] !rounded-[20px]"
        id = "order_information"
      >
        <p
          id = "order_info_header"
          className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
          style={{ 
            border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
          }}
        >
          Creating New Shop For Me Order
        </p>
        <div id = "order_btn_group" className='flex mb-[30px]'>
          <p 
            id='order_information_btn2'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
          >
            1
          </p>
          <p 
            id='order_information_btn3'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
          >
            2
          </p>
          <p 
            id='order_information_btn4'
            className='flex !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#CAC4D0] !text-[#FFFFFF] !font-roboto !text-[22px] mr-[30px] !non-italic !font-bold leading-7'
          >
            3
          </p>
          <div id = "btn_group_1" className='flex mr-[39px] gap-x-2.5 item-center'>
            <p 
              id='order_information_btn1'
              className='item-center flex inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
            >
              4
            </p>
            <p
              id='order_information_text'
              className='font-roboto text-[28px] !non-italic !font-normal !text-[#000000]'
            >
              Billing Details
            </p>
          </div>
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
          id='pkg_detail'
          className='w-full gap-y-[30px] !mb-[30px]'
        >
          <div
            id='order_detail_head'
            className='flex w-full h-[34px] gap-x-2.5 pb-[10px]'
          >
            <span className='w-6 h-6'>
              <IconCreateOrderArray />
            </span>
            <p className='h-[20px] font-roboto text-[14px] font-medium leading-5'>
              Provide The Customer Billing Address
            </p>
          </div>
          <div className='border ml-[34px] bg-[#79747E] mb-[30px]'/>
  
          <Radio.Group className='!w-full' defaultValue={1}  >
            <Space className='!w-full' direction='vertical'>
            <div
              className='!flex justify-between items-center shadow-sm rounded-[20px] !py-[10px] !px-[20px] gap-y-[30px]'
            >
              <Radio value={1} className='!flex w-full'>
                <div
                  id = 'event_title'
                  className='!flex w-full pr-[6px]'
                >
                  <p className='!flex !pl-[20px] !items-center'>
                    <span className='text-[22px]'>Your Default Address </span>
                  </p>
                  
                </div>
              </Radio>
              <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
            </div>
            <div>
              <div
                className='!flex justify-between items-center shadow-sm rounded-[20px] !py-[10px] !px-[20px] !border-[#CAC4D0] gap-y-[30px]'
              >
                <Radio value={2}  className='!flex w-full'>
                  <div
                    id = 'event_title'
                    className='!flex justify-between w-full pr-[6px]'
                  >
                    <p className='!flex !pl-[20px] !items-center'>
                      <span className='text-[22px]'>Custom Billing Address </span>
                    </p>
                    
                  </div>
                </Radio>
                <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
              </div>
            </div>
            </Space>
          </Radio.Group>  
        </div>
        
        <div
          id='pkg_detail'
          className='flex flex-col w-full !gap-y-[20px] flex mb-[30px]'
        >
          <div className='w-full gap-y-[10px]'>
            <div
              id='order_detail_head'
              className='flex w-full gap-x-2.5 pb-[10px] '
            >
              <span className='w-6 h-6'>
                <IconCreateOrderArray />
              </span>
              <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                Confirm the Payments for this Order 
              </p>
            </div>
            <div className='!ml-[34px] text-[#79747E]'>
              <Divider className='!p-0 !m-0 !border-[#79747E]' />
            </div>
          </div>
          <div className='flex items-center pl-[34px] gap-[20px]'>
            <p className='text-sm'>Default Currency: <span className='text-sm font-medium'>USD</span></p>
            <Button className='!flex items-center !h-[35.5px] !gap-[7px] !rounded-full !py-auto'>
              <span><IconCreateOrderConvert /></span>
              <p className='text-sm text-[#6750A4]'>Chage currency</p>
            </Button>
          </div>
          <div className='!flex flex-col border rounded-[20px]'>
            <Table 
              rowClassName={rowClassName} 
              columns={columns} 
              dataSource={data}
              pagination={false}
            />
            <div className='flex justify-between px-[30px] py-[10px]'>
              <div>
                <p className='text-sm'>Total number<br />of items:</p>
                <p className='text-[22px] leading-[26px]'>6</p>
              </div>
              <div>
                <p className='text-sm'>Total Gross<br />of items:</p>
                <p className='text-[22px] leading-[26px]'>30Ibs</p>
              </div>
              <div>
                <p className='text-sm'>Total declared<br />Value:</p>
                <p className='text-[22px] leading-[26px]'>$345.00</p>
              </div>
            </div>
          </div>
  
          <Collapse
            items={[
            { 
              key: '1', label: (
                <div className='flex justify-between pr-[6px] px-[20px]'>
                 <span className='text-[22px]'> Shop For Me Cost </span>               
                </div>
              ), children: <BillingShopCollapseShopChild /> }]}
            expandIcon={
              ({ isActive }) => isActive ? <IconCreateOrderArrayCircleUp /> : <IconCreateOrderArrayCircleUp />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
          
          <Collapse
            items={[
            { 
              key: '1', label: (
                <div className='flex justify-between pr-[6px] px-[20px]'>
                 <span className='text-[22px]'> Shipment Cost </span>               
                </div>
              ), children: <BillingShopCollapseShipmentChild /> }]}
            expandIcon={
              ({ isActive }) => isActive ? <IconCreateOrderArrayCircleUp /> : <IconCreateOrderArrayCircleUp />}
            expandIconPosition='end'
            className='w-full !bg-white !rounded-xl'
          />
        </div>       
        <div className='flex gap-[10px]'>
          <Button onClick={handleBack}
            className='!h-10 !px-6 !rounded-[100px] border'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderBackBtnArray />
                <p className='text-sm font-medium	 text-[#6750A4]'>Back</p>
              </div>
          </Button>
          <Button onClick={handleNext} className='!h-[40px] !px-16 !rounded-[100px] border !bg-[#6750A4] leading-5'>
              <div className='flex items-center gap-2'>
                <IconCreateOrderNextBtnArray />
                <p className='text-sm font-medium	 !text-[#FFFFFF]'>Next</p>
              </div>
          </Button>   
        </div>
      </Card>
    </ConfigProvider>
    );
}

const Detail_Confirm_shop_me = () => {
    const [isOrder, setIsOrder] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const orderId = "OD346QWW"
  
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
        <div className='p-6'>
          <Card
            bodyStyle={{ padding: "0" }}
            className="w-[65vw] !p-[30px] !rounded-[20px] min-w-[755px]"
            id="order_information"
          >
            <p className="flex w-full h-[76px] mb-4 py-[20px] px-[30px] border border-dashed !border-[#6750A4] rounded-[20px] font-roboto text-[28px] font-normal text-[#6750A4] leading-9">
              Creating New Shop For Me Order
            </p>
            <GlobalOrderProgressChild />
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
                  items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Order Information</p>), children: <ConfirmShopOrderInfoChild /> }]}
                  expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                  expandIconPosition='end'
                  className='w-full !bg-white !rounded-xl'
                />
                <Button type="link">
                  <IconEdit />
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
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Package Origin/ Shipment location</p>), children: <ConfirmShopPackageDetailChild /> }]}
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
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Item #1</p>), children: <ConfirmShopItemChild /> }]}
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
                items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Destination/ Shipping Address</p>), children: <ConfirmShopPackageDetailChild /> }]}
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
                items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Billing Information</p>), children: <ConfirmShopBillingDetailChild /> }]}
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
                items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Payment Information</p>), children: <ConfirmShopPaymentInfoChildren /> }]}
                expandIcon={({ isActive }) => isActive ? <IconExpand /> : <IconExpand />}
                expandIconPosition='end'
                className='w-full !bg-white !rounded-xl'
              />
              <Button type="link">
                <IconEdit />
              </Button>
            </div>
            <div className='flex gap-4 mt-8'>
              <Button onClick={handleBack} className='!rounded-3xl !px-5 !text-center border-[#79747E] !h-10'>
                <div className='flex items-center gap-2'>
                  <IconBack />
                  <p className='text-[#21005D] font-semibold'>Back</p>
                </div>
              </Button>
              <Link href="/orders">
                <Button className='!rounded-3xl !px-5 !text-center !bg-[#6750A4] border-[#79747E] !h-10'>
                  <div className='flex items-center gap-2'>
                    <IconCreateOrderChat />
                    <p className='text-white font-semibold'>Save as Draft</p>
                  </div>
                </Button>
              </Link>
              <Link href="/orders">
                <Button className='!rounded-3xl !px-5 !text-center !bg-[#B3261E] border-[#79747E] !h-10'>
                  <div className='flex items-center gap-2'>
                    <IconConfrim />
                    <p className='text-white font-semibold'>Confirm & Submit Order</p>
                  </div>
                </Button>
              </Link>
            </div>
            <p className='font-normal mt-4'>Upon clicking &quot;Confirm & Submit Order&quot;, I confirm I<br />have read and agreed to <a className='text-[#6750A4]'>all terms and policies</a></p>
          </Card>
        </div>
      </>
    );
}


const renderChildComponent = () => {
  switch (currentChildId) {
    case 1:
      return <OrderCreate />
    case 2:
      return <Package_Details_shop_me />;
    case 3:
      return <Package_Details_import_procurement />;
    case 4:
      return <Billing_Details_shop_me />;
    case 5:
      return <Detail_Confirm_shop_me />;
    default:
      return null;
  }
};

return (
  <div>
    {renderChildComponent()}
  </div>
); 
}