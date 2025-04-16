import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomButton from "../CustomButton/CustomButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  minHeight: 300,
  maxWidth: 700,
  maxHeight: 800,
  overflowY: "scroll",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: String;
  children?: React.ReactNode;
}

export default function CustomModal({
  open,
  onClose,
  title,
  children,
}: CustomModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Modal Title */}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        {/* Modal Content */}
        {children ? (
          children
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "gray",
              height: "80%",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No Content.
            </Typography>
          </Box>
        )}

        {children && (
          <div className="w-full flex flex-row justify-end">
            <CustomButton
              label={"Cancel"}
              background={"var(--button-cancel)"}
            ></CustomButton>
            <CustomButton label={"Ok"}></CustomButton>
          </div>
        )}
      </Box>
    </Modal>
  );
}
