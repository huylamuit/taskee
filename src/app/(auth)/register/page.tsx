import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

export default function Register() {
  return (
    <div className="h-screen col-span-2 flex items-center justify-center">
      <div className="flex flex-col items-center p-4  w-2/3 ">
        <h1 className="blocktext-center lg:text-[60px] md:text-[40px] sm:text-[40px] text-[#585858]">
          Register
        </h1>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "100%",
            maxWidth: "1000px",
          }}
          noValidate
          autoComplete="off"
        >
          {/* Email */}
          <label htmlFor="email" className="text-[#585858]">
            Email
          </label>
          <TextField
            sx={{
              height: "75px",
              width: "100%",
            }}
            id="email"
            variant="outlined"
            type="email"
          />
          {/* Password */}
          <label htmlFor="password" className="text-[#585858]">
            Password
          </label>
          <TextField
            sx={{
              height: "75px",
              width: "100%",
            }}
            id="password"
            variant="outlined"
            type="password"
          />
          <label htmlFor="password" className="text-[#585858]">
            Confirm Password
          </label>
          <TextField
            sx={{
              height: "75px",
              width: "100%",
            }}
            id="confirm-passowrd"
            variant="outlined"
            type="password"
          />

          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "75px",
              backgroundImage: "linear-gradient(90deg, #9EBCFB, #E6C9F5)",
              fontSize: "28px",
              color: "white",
              fontFamily: "RubikOne",
              marginTop: "16px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Register
          </Button>
          <Divider orientation="vertical" sx={{ marginTop: "16px" }} />
        </Box>
      </div>
    </div>
  );
}
