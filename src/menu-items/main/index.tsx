import { MenuItem } from "@/types";
import Link from "next/link";
import IconHome from "@/assets/menu_home.svg"
import IconCustomer from "@/assets/menu_customer.svg"
import IconOder from "@/assets/menu_order.svg"
import IconShip from "@/assets/menu_shipment.svg"
import IconShop from "@/assets/menu_shop.svg"
import IconBilling from "@/assets/menu_billing.svg"
import IconBlog from "@/assets/menu_blog.svg"

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const menuItems: MenuItem[] = [
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Home</p>
    </div>,
    "home",
    <Link href={"/home"}>
      <div className="pt-0">
        <IconHome />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Customers</p>
    </div>,
    "customers",
    <Link href={"/customers"}>
      <div className="pt-0">
      <IconCustomer />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Oders</p>
    </div>,
    "orders",
    <Link href={"/orders"}>
    <div className="pt-0">
      <IconOder />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Shipment</p>
    </div>,
    "shipment",
    <Link href={"/shipment"}>
    <div className="pt-0">
      <IconShip />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Shop for Me</p>
    </div>,
    "shopforme",
    <Link href={"/shopforme"}>
    <div className="pt-0">
      <IconShop />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Biling</p>
    </div>,
    "billing",
    <Link href={"/billing"}>
    <div className="pt-0">
      <IconBilling />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Blog</p>
    </div>,
    "blog",
    <Link href={"/blog"}>
    <div className="pt-0">
      <IconBlog />
      </div>
    </Link>
  ),
];

export default menuItems;
