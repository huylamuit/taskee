import { Button } from "@mui/material";

export default function CustomButton({
  label,
  onClick,
  background,
  width,
  height,
}: Readonly<{
  label: string;
  onClick?: any;
  background?: string;
  width?: any;
  height?: any;
}>) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    return;
  };
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      sx={{
        backgroundColor: background ? background : "var(--main-color)",
        color: "white",
        fontFamily: "SofiaSans",
        fontWeight: "bold",
        width: width ? width : "48px",
        height: height ? height : "32px",
        marginLeft: "8px",
        padding: "8px",
      }}
    >
      {label}
    </Button>
  );
}
