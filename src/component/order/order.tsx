import Link from "next/link";
import { Button, Select } from "antd"

import IconNotification from "@/assets/order_header_nofitication.svg"
import IconMan from "@/assets/order_header_man.svg"
import IconSuffix from "@/assets/order_first_suffix.svg"
import IconHome from "@/assets/order_first_home.svg"
import IconArrowLeft from "@/assets/order_header_arrowleft.svg"
import IconHelp from "@/assets/order_help.svg"
import IconArrowRight from "@/assets/order_first_arrow_right.svg";

export default function Order() {
  return (
    <div className="bg-[#F4EFF4] h-full">
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
      <div className="py-10 pl-20 px-44">
        <div className="flex bg-white rounded-xl p-[30px] gap-4 items-center">
          <div className="w-1/2 text-xl text-[#49454F]"><p>Have a view of the <b>complete order history</b> of all your registered website customers in one place.</p></div>
          <div className="w-1/2"> 
            <Link href="/orders/confirmedorder">
              <Button className="!flex w-full !h-10 justify-center !items-center gap-2 !bg-[#6750A4] !rounded-full">
                <IconArrowRight />
                <p className="text-white text-base">View orders</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex mt-5 gap-[30px]">
          <div className="bg-white w-1/2 rounded-xl p-[30px] gap-4 items-center">
            <div className="w-full text-xl text-center text-[#49454F] mb-5"><p>Want to Create a new order?</p></div>
            <Link href="/orders/create-order">
              <Button className="!flex w-full !h-10 justify-center !items-center gap-2 !bg-[#6750A4] !rounded-full">
                <IconArrowRight />
                <p className="text-white text-base">Create new order</p>
              </Button>
            </Link>
          </div>
          <div className="bg-white w-1/2 rounded-xl p-[30px] gap-4 items-center">
            <div className="w-full text-xl text-center text-[#49454F] mb-5"><p>Want to Create a new invoice?</p></div>
            <Button className="!flex w-full !h-10 justify-center !items-center gap-2 !bg-[#6750A4] !rounded-full">
              <IconArrowRight />
              <p className="text-white text-base">Create new invoice</p>
            </Button>
          </div>
        </div>
      </div>
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