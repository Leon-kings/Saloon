/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export default function WorkingHrs() {
    const [time, setTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
       <section className="w-full py-16 bg-gray-800" id="working-hours">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="row mb-12">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2-title text-4xl font-bold mb-4">Working</h2>
              <h3 className="h3-title text-2xl text-gray-700">Working Hours</h3>
            </motion.div>
          </div>
        </div>

        {/* Working Schedule */}
        <div className="working-schedule">
          <div className="row flex flex-col lg:flex-row gap-8">
            {/* Left Column: Working Hours */}
            <motion.div
              className="col-lg-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="time-schedule flex justify-between items-center mb-4">
                <span className="day text-lg font-semibold">Working Days</span>
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
              <div className="small-text mt-8">
                <span className="text-red-500">*</span>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Live Clock */}
            <motion.div
              className="col-lg-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div id="timedate" className="text-center lg:text-left">
                <a id="mon" className="text-2xl font-bold block">{month}</a>
                <a id="d" className="text-4xl font-bold block">{date}</a>,
                <a id="y" className="text-2xl font-bold block">{year}</a>
                <br />
                <a id="h" className="text-6xl font-bold">{hours}</a> :
                <a id="m" className="text-6xl font-bold">{minutes}</a> :
                <a id="s" className="text-6xl font-bold">{seconds}</a> :
                <a id="mi" className="text-4xl font-bold">{milliseconds}</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
