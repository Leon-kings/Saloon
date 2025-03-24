/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function WorkingHrs() {
  const [time, setTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[time.getDay()];
  const date = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();
  return (
    <>
      <section className="w-full py-10 rounded-2xl bg-gray-800" id="working-hours">
        <div className="container mx-auto">
          {/* Title Section */}
          <div className="row mb-12">
            <div className="col-lg-">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="h2-title text-4xl font-bold mb-4">Working</h2>
              </motion.div>
            </div>
          </div>

          {/* Working Schedule */}
          <div className="w-full p-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
              {/* Left Column: Working Hours */}
              <motion.div
                className="col-lg- order-2 lg:order-1"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="time-schedule flex justify-between items-center mb-4">
                  <span className="day text-sm font-semibold">
                    Working Days
                  </span>
                  <span className="line flex-grow border-b border-gray-300 mx-4"></span>
                  <span className="time text-lg font-semibold">9am-9pm</span>
                </div>
                <div className="time-schedule flex justify-between items-center mb-4">
                  <span className="day text-lg font-semibold">Saturday</span>
                  <span className="line flex-grow border-b border-gray-300 mx-4"></span>
                  <span className="time text-lg font-semibold">10am-8pm</span>
                </div>
                <div className="time-schedule flex justify-between items-center mb-4">
                  <span className="day text-lg font-semibold">Sunday</span>
                  <span className="line flex-grow border-b border-gray-300 mx-4"></span>
                  <span className="time text-lg font-semibold">Closed</span>
                </div>
              </motion.div>

              {/* Right Column: Live Clock */}
              <motion.div
                className="col-lg- order-1 lg:order-2"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div id="timedate" className="text-center lg:text-left">
                  <div className="flex">
                    <Button id="mon" className="text-2xl font-bold block">
                      {month}
                    </Button>
                    <Button id="d" className="text-4xl font-bold block">
                      {date}
                    </Button>
                    ,
                    <Button id="y" className="text-2xl font-bold block">
                      {year}
                    </Button>
                  </div>
                  <br />
                  <div className="flex">
                    <Button id="h" className="text-xl font-bold">
                      {hours}
                    </Button>{" "}
                    :
                    <Button id="m" className="text-xl font-bold">
                      {minutes}
                    </Button>{" "}
                    :
                    <Button id="s" className="text-xl font-bold">
                      {seconds}
                    </Button>{" "}
                    :
                    <Button id="mi" className="text-xl font-bold">
                      {milliseconds}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="small-text mt-8">
            <span className="text-red-500">*</span>
            <p className="text-gray-300">
              The ILO, a specialized United Nations agency, sets forth
              guidelines aimed at ensuring decent work conditions worldwide.
              <br />
              Standard hours provide a basis for managing work schedules,
              calculating wages, and ensuring compliance with labor laws and
              regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
