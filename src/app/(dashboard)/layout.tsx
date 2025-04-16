import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideBar from "./component/sidebar/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-6 gap-4">
      <SideBar></SideBar>
      <div className="col-span-5 rounded-l-[24px]">{children}</div>
    </div>
  );
}
