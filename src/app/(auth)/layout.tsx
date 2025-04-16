import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen grid grid-cols-5">
      <div className="col-span-3 flex flex-column items-center justify-center h-full bg-[url(../../public/login_background.jpg)] bg-cover text-2xl">
        <div className="w-2/3 text-white ">
          <h1 className="lg:text-[160px] md:text-[80px] sm:text-[60px]">
            TASKEE
          </h1>
          <p className="lg:text-[24px] md:text-[18px] sm:text-[12px]">
            Taskee simplifies task management, helping you stay organized and
            productive. Collaborate effortlessly, track progress, and achieve
            your goals with ease.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
