import { MenuItem } from "@/types";
import Link from "next/link";
import IconRefer from "@/assets/menu_refer_friend.svg"
import IconQuote from "@/assets/menu_queto.svg"
import IconStting from "@/assets/menu_setting.svg"

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
      <p className="text-[#E7E0EC] text-base pl-2">Refer A Friend</p>
    </div>,
    "refer",
    <Link href={"/refer"}>
      <div className="pt-0">
        <IconRefer />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Get a Quote</p>
    </div>,
    "quote",
    <Link href={"/quote"}>
      <div className="pt-0">
      <IconQuote />
      </div>
    </Link>
  ),
  getItem(
    <div>
      <p className="text-[#E7E0EC] text-base pl-2">Settings</p>
    </div>,
    "settings",
    <Link href={"/settings"}>
    <div className="pt-0">
      <IconStting />
      </div>
    </Link>
  ),


];

export default menuItems;
