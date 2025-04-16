"use client";

import Section from "../component/section/section";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import CustomButton from "@/app/component/CustomButton/CustomButton";
import CustomModal from "@/app/component/CustomModal/CustomModal";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function TasksPage() {
  const AppCalendar = dynamic(
    () => import("../component/AppCalendar/AppCalendar"),
    {
      ssr: false,
    }
  );
  const formatDate = (date: number | string) => {
    return new Intl.DateTimeFormat("en-GB").format(new Date(date));
  };
  const tasks = [
    {
      title: "Create Dashboard layout",
      created_at: 1712200000000,
      deadline_at: 1714800000000,
      status: "completed",
      assignee: "Alice",
    },
    {
      title: "Implement user authentication",
      created_at: 1712300000000,
      deadline_at: 1714900000000,
      status: "in_progress",
      assignee: "Bob",
    },
    {
      title: "Fix bug in login page",
      created_at: 1712400000000,
      deadline_at: 1715000000000,
      status: "completed",
      assignee: "Charlie",
    },
    {
      title: "Design landing page",
      created_at: 1712500000000,
      deadline_at: 1715100000000,
      status: "over_time",
      assignee: "Diana",
    },
    {
      title: "Integrate payment gateway",
      created_at: 1712600000000,
      deadline_at: 1715200000000,
      status: "in_progress",
      assignee: "Ethan",
    },
    {
      title: "Write unit tests for API",
      created_at: 1712700000000,
      deadline_at: 1715300000000,
      status: "completed",
      assignee: "Fiona",
    },
    {
      title: "Optimize image loading",
      created_at: 1712800000000,
      deadline_at: 1715400000000,
      status: "over_time",
      assignee: "George",
    },
    {
      title: "Refactor Redux logic",
      created_at: 1712900000000,
      deadline_at: 1715500000000,
      status: "in_progress",
      assignee: "Hannah",
    },
    {
      title: "Deploy to staging server",
      created_at: 1713000000000,
      deadline_at: 1715600000000,
      status: "completed",
      assignee: "Ivan",
    },
    {
      title: "Gather user feedback",
      created_at: 1713100000000,
      deadline_at: 1715700000000,
      status: "over_time",
      assignee: "Jasmine",
    },
    {
      title: "Optimize image loading",
      created_at: 1712800000000,
      deadline_at: 1715400000000,
      status: "over_time",
      assignee: "George",
    },
    {
      title: "Refactor Redux logic",
      created_at: 1712900000000,
      deadline_at: 1715500000000,
      status: "in_progress",
      assignee: "Hannah",
    },
    {
      title: "Deploy to staging server",
      created_at: 1713000000000,
      deadline_at: 1715600000000,
      status: "completed",
      assignee: "Ivan",
    },
    {
      title: "Gather user feedback",
      created_at: 1713100000000,
      deadline_at: 1715700000000,
      status: "over_time",
      assignee: "Jasmine",
    },
    {
      title: "Deploy to staging server",
      created_at: 1713000000000,
      deadline_at: 1715600000000,
      status: "completed",
      assignee: "Ivan",
    },
    {
      title: "Gather user feedback",
      created_at: 1713100000000,
      deadline_at: 1715700000000,
      status: "over_time",
      assignee: "Jasmine",
    },
    {
      title: "Deploy to staging server",
      created_at: 1713000000000,
      deadline_at: 1715600000000,
      status: "completed",
      assignee: "Ivan",
    },
    {
      title: "Gather user feedback",
      created_at: 1713100000000,
      deadline_at: 1715700000000,
      status: "over_time",
      assignee: "Jasmine",
    },
  ];

  const groups = [
    {
      group_name: "IT001",
    },
  ];

  const friends = [
    {
      name: "HLamb",
      is_active: true,
      last_active: 3123123123,
      avt: "fadsfa",
    },
    {
      name: "Alice",
      is_active: false,
      last_active: 1712200000000,
      avt: "alice_avatar",
    },
    {
      name: "Bob",
      is_active: true,
      last_active: 1712300000000,
      avt: "bob_avatar",
    },
    {
      name: "Charlie",
      is_active: false,
      last_active: 1712400000000,
      avt: "charlie_avatar",
    },
    {
      name: "Diana",
      is_active: true,
      last_active: 1712500000000,
      avt: "diana_avatar",
    },
    {
      name: "Ethan",
      is_active: false,
      last_active: 1712600000000,
      avt: "ethan_avatar",
    },
    {
      name: "Fiona",
      is_active: true,
      last_active: 1712700000000,
      avt: "fiona_avatar",
    },
    {
      name: "George",
      is_active: true,
      last_active: 1712800000000,
      avt: "george_avatar",
    },
    {
      name: "Hannah",
      is_active: false,
      last_active: 1712900000000,
      avt: "hannah_avatar",
    },
    {
      name: "Ivan",
      is_active: true,
      last_active: 1713000000000,
      avt: "ivan_avatar",
    },
  ];

  const STATUS_COLOR: Record<string, string> = {
    in_progress: "#FFD753",
    completed: "#6BD990",
    over_time: "#FF7072",
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="h-screen grid grid-cols-5 grid-rows-11 gap-4">
      {/* SEARCh BAR */}
      <div className="col-span-4 bg-white rounded-[14px]">
        <Section>Search</Section>
      </div>
      {/* TASKS */}
      <div className="col-span-4 row-span-10 col-start-1 row-start-2">
        <Section className="flex flex-col items-center">
          <div className="text-center w-full m-2">
            <h1 className="text-[48px] text-[var(--main-color)]">TASKS</h1>
          </div>
          <div className="w-full flex flex-row justify-end pr-8">
            <CustomButton
              label={"New Tasks"}
              onClick={handleOpenModal}
            ></CustomButton>
          </div>
          <CustomModal
            open={openModal}
            onClose={handleCloseModal}
            title={"Create new task"}
          >
            <Box
              component="form"
              sx={{
                paddingTop: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "100%",
                height: "80%",
                margin: "25px 0 25px 0",
              }}
              autoComplete="off"
            >
              <div className="w-full mb-8">
                <label htmlFor="title" className="text-[#585858]">
                  Title
                </label>
                <TextField
                  slotProps={{
                    htmlInput: {
                      style: {
                        padding: 10,
                      },
                    },
                  }}
                  sx={{
                    height: "30px",
                    width: "100%",
                  }}
                  id="title"
                  variant="outlined"
                  type="text"
                />
              </div>

              <div className="w-full mb-8">
                <label htmlFor="description" className="text-[#585858]">
                  Description
                </label>
                <TextField
                  slotProps={{
                    htmlInput: {
                      style: {
                        padding: 10,
                      },
                    },
                  }}
                  sx={{
                    height: "30px",
                    width: "100%",
                  }}
                  id="description"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className="w-full mb-8">
                <label htmlFor="deadline" className="text-[#585858]">
                  Deadline
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      height: "30px",
                      width: "100%",
                    }}
                  />
                </LocalizationProvider>
              </div>
            </Box>
          </CustomModal>
          <div className="w-full h-full  flex flex-row flex-wrap justify-items-start align-items-start overflow-y-scroll m-4">
            {tasks.map((task, index) => (
              <Card
                key={index}
                className="col-span-1 "
                sx={{
                  width: "280px",
                  height: "280px",
                  aspectRatio: "1",
                  backgroundColor: STATUS_COLOR[task.status] || "#eee",
                  fontFamily: "SofiaSans",
                  borderRadius: "24px",
                  margin: "8px",
                }}
              >
                <CardContent>
                  <Box sx={{ height: 50 }}>
                    <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                      {task.title}
                    </Typography>
                  </Box>
                  <Box sx={{ height: 50, mt: 2 }}>
                    <Typography>
                      Created: {formatDate(task.created_at)}
                    </Typography>
                    <Typography>
                      Deadline: {formatDate(task.created_at)}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 14, mt: 2 }}>
                    Asignee: {task.assignee}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Details</Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div className="col-start-5 row-start-1">
        <Section>6</Section>
      </div>
      {/* CALENDAR */}
      <div className="row-span-4 col-start-5 row-start-2">
        <Section>
          <AppCalendar></AppCalendar>
        </Section>
      </div>
      {/* FRIENDS */}
      <div className="row-span-6 col-start-5 row-start-6 ">
        <Section>
          <div className=" w-full m-2">
            <h1 className="text-[24px] text-[var(--main-color)]">FRIENDS</h1>
          </div>
        </Section>
      </div>
    </div>
  );
}
