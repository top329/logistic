"use client"

import React, { useEffect, useState } from 'react';
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
import ProductImage from "@/assets/order_modal_computer.png";
import IconCreateOrderConvert from "@/assets/order_convert_cart_white.svg"
import IconCreateOrderComputer from "@/assets/order_table_computer.png"
import IconCreateOrderDiscount from "@/assets/order_discount.svg";
import IconCreateOrderWallet from "@/assets/order_wallet.svg"
import IconCreateOrderChat from "@/assets/order_chat.svg"
import IconConfrim from "@/assets/order_confirm.svg"
import IconEdit from "@/assets/order_edit.svg"
import IconExpand from "@/assets/order_expanded.svg"
import IconImportant from "@/assets/order_important.svg"
import IconBack from "@/assets/order_back_button.svg"

import OrderCreate from "./orderCreate";

import "./custom.css";
export default function Export() {

  const [currentChildId, setCurrentChildId] = useState(2);

  const handleNext = () => {
    if(currentChildId < 6) {
      setCurrentChildId(currentChildId + 1);
    }
  }

  const handleBack = () => {
    if(currentChildId > 0) {
      console.log(currentChildId)
      setCurrentChildId(currentChildId - 1);
    }
  }

  function PgDetailCollapseChild () {   return(
      <div
        id='order_pgdetail_main_form'
        className='grid !w-full !h-[590px] !gap-y-[30px] !pt-[30px] !px-[20px]'
      >
        <div>
          <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Input Name *</div>
          <Input
            className='flex !h-14 !w-full !border !rounded-[20px] !border-[#79747E]'
            value={'Product Name'}
          />
        </div>
        <div 
          id='input_group'
          className='flex justify-between h-[56px] gap-[30px]'
        >
          <div className='!w-full'>
            <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Input Original Cost *</div>
            <Input
              className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
              prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
              value={'657.00'}
            />
          </div>
          <div>
            <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Quantity</div>
            <Input
              className='!flex !items-center !justify-center !text-base !h-14 !w-[231px] !border !px-0 !py-4 !rounded-[20px] !border-[#79747E]'
                prefix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquareMinus /></button>}
                suffix={<button className='grid !place-items-center !border-0 !p-0 !w-12 !h-12 ml-1'><IconCreateOrderSquarePlus /></button>}
              value={'01'}
            />
          </div>
        </div>
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
        <div>
          <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Product/Item Description</div>
          <Input 
            className='!relative !items-start !text-base h-[144px] !w-full !border !rounded-[20px] border-[#79747E]'
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
              Describe the item you wish to purchase further with the following properties
            </p>
          </div>
          <hr className='border ml-[34px] bg-[#79747E] mb-[30px]'/>
        </div>
        <div
            className='flex pl-[34px] gap-[30px]'
        >
          <div>
            <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Item Color</div>
            <Input
              className='flex !text-center !h-14 !text-base !w-[230px] !border !rounded-[20px] border-[#79747E]'
              value={'Enter the color of the item'}
            />
          </div>
          <Button className='!flex !items-center justify-center !w-[176px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
            <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
            <p className='!text-base text-[#E6E1E5] !font-normal'>Add propertise</p>
          </Button>  
        </div>
      </div>);
  }

  const BillingDetailCollapseChild = () => {
      return(
        <div className='flex flex-col px-[50px] pt-[30px] gap-y-[30px]'>
          <div className='flex gap-[30px]'>
            <Input
              // bordered = {false}
              className='flex !h-14 !text-base !border !rounded-[20px] !border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              value={'Paste the item link here'}
            />
            <Input
              // bordered = {false}
              className='flex !h-14 !text-base !border !rounded-[20px] !border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              value={'Paste the item link here'}
            />
          </div>
          <div className='flex justify-between gap-[30px] '>
            <Input
              // bordered = {false}
              className='flex !h-14 !w-1/3 !text-base !border !rounded-[20px] !border-[#79747E]'
              // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
              value={'Paste the item link here'}
            />
            <div className='flex !w-2/3'>
              <Select
                defaultValue="Nigeria +234"	
                suffixIcon = {<IconCreateOrderSelector />}
                bordered = {false}
                className='!flex !h-14 !w-1/3 border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-l-[20px] !border-[#79747E]'
                options={[
                  { value: 'Nigeria +234', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Nigeria +234</p>)},
                  { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                  { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                ]}
              />
              <Input
                className='flex !w-full !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-r-[20px] !rounded-l-[0px] !border-[#79747E]'
                value={"Receiver's first name"}
              />
            </div>
          </div>
          <Input
            // bordered = {false}
            className='flex !h-14 !text-base !border !rounded-[20px] !border-[#79747E]'
            // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
            value={'Paste the item link here'}
          />
          <div className='flex gap-[30px] !h-14'>
            <Select
              defaultValue="Nigeria"	
              suffixIcon = {<IconCreateOrderSelector />}
              bordered = {false}
              className='!flex !h-14 !w-1/3 border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
              options={[
                { value: 'Nigeria', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Nigeria</p>)},
                { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
              ]}
            />
            <Select
              defaultValue="Lagos"	
              suffixIcon = {<IconCreateOrderSelector />}
              bordered = {false}
              className='!flex !h-14 !w-1/3 border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
              options={[
                { value: 'Lagos', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Lagos</p>)},
                { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
              ]}
            />
            <Select
              defaultValue="Ikeja"	
              suffixIcon = {<IconCreateOrderSelector />}
              bordered = {false}
              className='!flex !h-14 !w-1/3 border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
              options={[
                { value: 'Ikeja', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Ikeja</p>)},
                { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
              ]}
            />
          </div>
          <Input
            // bordered = {false}
            className='flex !h-14 !text-base !border !rounded-[20px] !border-[#79747E]'
            // style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' custom-select}}
            value={'167644'}
          />
        </div>
      );
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
              className='item-center inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
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

  function ConfirmDetailOrderInfoChild() {
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

  function ConfirmDetailPackageDetailChild() {
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

  function ConfirmDetailItemChild() {
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
      </div>
  );
  }

  function ConfirmShippingDetailChild() {
      return (
        <div className='flex flex-col gap-y-4 px-[18px] py-2'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-2'>
              <p className='text-[#49454F]'>Receiver&apos;s First<br /> Name:</p>
              <p className='text-[22px] font-[400px]'>Malibu</p>
            </div>
            <div className='col-span-2'>
              <p className='text-[#49454F]'>Receiver&apos;s Last<br />Name:</p>
              <p className='text-[22px] font-[400px]'>SHedrack</p>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-2'>
              <p className='text-[#49454F]'>Receiver&apos;s<br /> Phone Number:</p>
              <p className='text-[22px] font-[400px]'>+234 3854 9562</p>
            </div>
            <div className='col-span-2'>
              <p className='text-[#49454F]'>Receiver&apos;s<br />Email:</p>
              <p className='text-[22px] font-[400px]'>rafaelrosa3393@gmail.com</p>
            </div>
          </div>
          <div>
            <p className='text-[#49454F]'>Receiver&apos;s<br />Address:</p>
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

  function ConfirmDetailBillingDetailChild() {
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

  function ConfirmDetailPaymentInfoChild() {
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

  const Package_Details = () => {
      return(
          <Card 
          bodyStyle={{padding: "0"}}
          className="!m-6 grid max-w-[1000px] !p-[30px] !rounded-[20px]"
          id = "order_information"
          >
          <p
              id = "order_info_header"
              className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
              style={{ 
              border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
              }}
          >
              Create New Order
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
                  className='item-center inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
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
                  Tell Us Where This Package Will Be Shipped From
              </p>
              </div>
              <div className='border ml-[34px] bg-[#79747E] mb-[30px]'/>
              <div
                id = "select_group"
                className='flex gap-x-[10px] px-[30px]'
              >
                <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Origin/Shipment Location</div>
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
              className='flex flex-col w-full !gap-y-[20px] flex mb-[30px]'
          >
              <div
              id='order_detail_head'
              className='flex  w-full h-[34px] gap-x-2.5 pb-[10px] '
              >
                <span className='w-6 h-6'>
                    <IconCreateOrderArray />
                </span>
                <p className='h-[20px] font-roboto text-[14px] font-medium	leading-5'>
                    Add details about your package
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
                          <div className='flex justify-between pr-[6px]'>
                          <p className='!pl-[20px]'>
                              <span className='text-[22px]'>Item - </span>
                              <span className='text-[22px] text-[#6750A4]'>#1</span>
                          </p>                  
                          </div>
                      ), children: <PgDetailCollapseChild /> }]}
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
              <Button className='!flex !items-center justify-center !w-[233px] !h-14 !py-1 !pr-[16px] !pl-0 !rounded-[20px] !bg-[#49454F] '>
                  <span className='w-[40px] h-[40px] !m-1'><IconCreateOrderPlus /></span>
                  <p className='!text-base text-[#E6E1E5] !font-normal'>Add new product/item</p>
              </Button>  
              </div>
              <hr className='border bg-[#79747E]'/>
              <div className='!flex justify-between !gap-[30px] !h-14'>
                <div >
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Total Weight (in kg) *</div>
                  <Input
                    className='flex !h-14 !text-base !w-full !border !rounded-[20px] border-[#79747E]'
                    value={'56kg'}
                  >
                    </Input>
                </div>
                <div>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Total Length (in Inches) *</div>
                  <Input
                    className='flex !h-14 !text-base !w-full !border !rounded-[20px] border-[#79747E]'
                    value={'76'}
                  />
                </div>
                <div>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Total Width (in Inches) *</div>
                  <Input
                    className='flex !h-14 !text-base !w-full !border !rounded-[20px] border-[#79747E]'
                    value={'76'}
                  />
                </div>
                <div>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Total Height (in Inches) *</div>
                  <Input
                    className='flex !h-14 !text-base !w-full !border !rounded-[20px] border-[#79747E]'
                    value={'76'}
                  />
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

  const Package_Details_export = () => {
      return(
        <Card 
          bodyStyle={{padding: "0"}}
          className="!m-6 grid max-w-[1000px] !p-[30px] gap-y-[30px] !rounded-[20px]"
          id = "order_information"
        >
          <p
            id = "order_info_header"
            className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
            style={{ 
              border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
            }}
          >
            Create New Order
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
                  className='item-center inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
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
                  Fill in the shipment details
                </p>
              </div>
              <div className='!ml-[34px]'>
                <Divider className='!p-0 !m-0 !border-[#79747E]' />
              </div>
            </div>
            <div className='flex flex-col w-full !p-[30px] !pt-[0px] gap-y-[30px] '>
              <div className='flex gap-[30px] !h-14'>
                <div className='w-full'>
                <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Receiver&apos;s First Name *</div>
                  <Input
                    className='flex !h-14 !w-full !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                    value={"Receiver's first name"}
                  />
                </div>
                <div className='w-full'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Receiver&apos;s Last Name *</div>
                  <Input
                    className='flex !h-14 !w-full !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                    value={"Receiver's first name"}
                  />
                </div>                
              </div>
              <div className='flex gap-[30px] !h-14'>
                <div className='!w-5/12'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Phone Number *</div>
                  <Input
                    className='flex !h-14 !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                    value={"Receiver's email address"}
                  />
                </div>
                
                <div className='flex !w-7/12 !h-14'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Receiver&apos;s Email</div>
                  <Select
                    defaultValue="Nigeria +234"	
                    suffixIcon = {<IconCreateOrderSelector />}
                    bordered = {false}
                    className='!flex !h-14 !w-1/3 border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-l-[20px] !border-[#79747E]'
                    options={[
                      { value: 'Nigeria +234', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Nigeria +234</p>)},
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                    ]}
                  />
                  <Input
                    className='flex !w-full !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-r-[20px] !rounded-l-[0px] !border-[#79747E]'
                    value={"Receiver's first name"}
                  />
                </div>           
              </div>
              <div className='flex gap-[30px] !h-14'>
                <div className='w-1/3'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Destination City *</div>
                  <Select
                    defaultValue="Nigeria"	
                    suffixIcon = {<IconCreateOrderSelector />}
                    bordered = {false}
                    className='!flex !h-14 w-full border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
                    options={[
                      { value: 'Nigeria', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Nigeria</p>)},
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                    ]}
                  />
                </div>
                <div className='w-1/3'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Destination State *</div>
                  <Select
                    defaultValue="Lagos"	
                    suffixIcon = {<IconCreateOrderSelector />}
                    bordered = {false}
                    className='!flex !h-14 w-full border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
                    options={[
                      { value: 'Lagos', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Lagos</p>)},
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                    ]}
                  />
                </div>
                <div className='w-1/3'>
                  <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Destination Country *</div>
                  <Select
                    defaultValue="Ikeja"	
                    suffixIcon = {<IconCreateOrderSelector />}
                    bordered = {false}
                    className='!flex !h-14 w-full border !pt-1 !pr-2 !pb-1 !pl-1 !rounded-[20px] !border-[#79747E]'
                    options={[
                      { value: 'Ikeja', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Ikeja</p>)},
                      { value: 'tom', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Tom</p>)},
                      { value: 'kai', label: (<p style={{ fontSize: '16px', fontWeight: 400, padding: '4px 0px 4px 16px', alignItems: 'center' }}>Kai</p>)}
                    ]}
                  />
                </div>
              </div>
              <div>
                <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Receiver&apos;s Address *</div>
                <Input
                  className='flex !w-full !h-14 !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                  value={"Receiver's address"}
                />
              </div>
              <div>
                <div className='mt-[-9px] mx-3 px-2 selectText !text-[#49454F] !bg-white z-10'>Zip/Postal code</div>
                <Input
                  className='flex !w-full !h-14 !text-base !pt-2 !pr-0 !pb-2 !pl-4 !border !rounded-[20px] !border-[#79747E]'
                  value={"167644"}
                />
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

  const Billing_Details = () => {
      const rowClassName = () => 'px-4'; 
      
      const columns = [
      {
        title: <p className='text-sm !font-medium'>Items</p>,
        dataIndex: 'items',
        key: 'items',
        width: '25%',
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
        title: <p className='text-sm !font-medium'>Value <br/>Per Items</p>,
        dataIndex: 'value',
        key: 'value',
        width: '25%',
        render: (text: string) => (
          <>
            <p className='text-sm font-medium'>{text}</p>
          </>
        )
      },
      {
        title: <p className='text-sm !font-medium'>Quantity <br/>Of Items</p>,
        dataIndex: 'quality',
        key: 'quality',
        width: '25%',
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
        width: '25%',
        render: (text: string) => (
          <>
            <p className='text-sm font-medium'>{text}</p>
          </>
        )
      }];
    
      const data = [
        {
          items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
          value: "$88.99",
          quality: "3",
          total_value: "$112.49"
        },
        {
          items: "SteelSeries Rival 5 Gaming Laptop with PrismSync RRRGGGEEEGRGB...",
          value: "$88.99",
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
          className="!m-6 grid max-w-[1000px] !p-[30px] !rounded-[20px]"
          id = "order_information"
        >
          <p
            id = "order_info_header"
            className="flex w-full h-[76px] mb-[30px] !py-[20px] !px-[30px] border border-dashed border-[#6750A4] rounded-[20px] font-roboto text-[28px] non-italic font-normal text-[#6750A4] leading-9"
            style={{ 
              border: "1px dashed var(--M3-sys-light-primary, #6750A4)",
            }}
          >
            Creating New Import Order
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
                className='item-center inline-block align-center !w-[33px] !h-[48px] !rounded-[20px] !p-[10px] !bg-[#21005D] !text-[#FFFFFF] !font-roboto !text-[22px] !non-italic !font-bold leading-7'
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
                      <span className='text-[22px]'>Customer’s Default Address </span>
                    </p>
                  </div>
                </Radio>
                <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
              </div>
              <div>
              <Collapse
                bordered={false}
                items={[
                { 
                  key: '1', label: (
                    <div
                      className='!flex !w-full justify-between items-center shadow-sm rounded-[20px] !py-[10px] gap-y-[30px]'
                    >
                    <Radio value={2} className='!flex w-full'>
                      <div
                        id = 'event_title'
                        className='!flex w-full'
                      >
                        <p className='!flex !pl-[20px] !items-center'>
                          <span className='text-[22px]'>Customer’s Default Address </span>
                        </p>
                      </div>
                    </Radio>
                    <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
                  </div>
                  ), children: <BillingDetailCollapseChild /> }]}
                  expandIcon = {() => <></>}
                  expandIconPosition='end'
                  className='w-full !bg-white !rounded-xl !border-0'
                />
              </div>
              </Space>
            </Radio.Group>  
          </div>
          <div
            id='pkg_detail'
            className='flex flex-col w-full !gap-y-[20px] mb-[30px]'
          >
            <div className='w-full gap-y-[10px] !mb-[29px]'>
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
                <p className='text-sm text-[#6750A4]'>Change currency</p>
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
    
            <div
              id='order_pgdetail-item_1'
              className='flex flex-col gap-y-[10px] w-full !py-[10px] !px-[34px] border border-[#CAC4D0] rounded-[20px]'
            >
              <div
                id = 'event_title'
                className='flex justify-between'
              >
                <div className='flex gap-[30px] items-center'>
                  <span className='text-[22px]'> Shipment Cost </span>
                </div>
                <span className='p-3'><IconCreateOrderArrayCircleUp /></span>
              </div>
              
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
                        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
                        value={'657.00'}
                      />
                      <Input
                        className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
                        value={'657.00'}
                      />
                    </div>
                    <Input
                        className='flex !h-14 !w-full !text-base !pt-1 !pr-4 !pb-1 !pl-0 !border !rounded-[20px] !border-[#79747E]'
                        prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
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
                  prefix={<div className='grid !place-items-center !w-12 !h-12 ml-1 !rounded-[100px] bg-[#E8DEF8]'><IconCreateOrderDollarSquare /></div>}
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

  const Detail_Confirm = () =>  {
      const [isOrder, setIsOrder] = useState(true)
      const [isModalOpen, setIsModalOpen] = useState(false);
      const orderId = "Detail_Confirm";

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
              className="!m-6 w-[65vw] !p-[30px] !rounded-[20px] min-w-[755px]"
              id="order_information"
            >
              <p className="flex w-full h-[76px] mb-4 py-[20px] px-[30px] border border-dashed !border-[#6750A4] rounded-[20px] font-roboto text-[28px] font-normal text-[#6750A4] leading-9">
                Creating New Export Order
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
                    items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Order Information</p>), children: <ConfirmDetailOrderInfoChild /> }]}
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
                  items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Package Origin/ Shipment location</p>), children: <ConfirmDetailPackageDetailChild /> }]}
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
                  items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Item #1</p>), children: <ConfirmDetailItemChild /> }]}
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
                  items={[{ key: '1', label: (<p className='text-[22px] px-4 text-[#49454F]'>Destination/Shipping Address</p>), children: <ConfirmShippingDetailChild /> }]}
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
                  items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Billing Information</p>), children: <ConfirmDetailBillingDetailChild /> }]}
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
                  items={[{ key: '1', label: (<p className='text-[22px] text-[#49454F]'>Payment Information</p>), children: <ConfirmDetailPaymentInfoChild /> }]}
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
        return <OrderCreate />;
      case 2:
        return <Package_Details />;
      case 3:
        return <Package_Details_export />;
      case 4:
        return <Billing_Details />;
      case 5:
        return <Detail_Confirm />;
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