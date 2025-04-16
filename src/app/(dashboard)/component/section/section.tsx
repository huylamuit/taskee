export default function Section({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <div
      className={`w-full h-full bg-white rounded-[14px] shadow-md p-4 ${className}`}
    >
      {children}
    </div>
  );
}
