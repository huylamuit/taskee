"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Section from "../section/section";
import "./SideBar.css";
import Image from "next/image";

export default function SideBar() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
    { name: "Friends", path: "/friends" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="h-screen col-span-1">
      <Section className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#a5bbfa]">
          TASKEE
        </h1>
        <div className="flex flex-col items-center w-[180px] h-[180px] mt-[30px] mb-[30px]">
          <div className="w-[140px] h-[140px] rounded-full border-4 bg-[#a5bbfa] overflow-hidden">
            <Image
              src="/default_avt/zebra.png"
              alt="Zebra Avatar"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
          <div className="mt-2 text-lg font-semibold">HLamb</div>
        </div>
        <ul className="space-y-4 w-full text-center">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${
                pathname === item.path ? "selected" : ""
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
