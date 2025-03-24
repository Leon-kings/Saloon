/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { People, Work, AttachMoney } from "@mui/icons-material";

export default function StatsCounter() {
  const stats = [
    { label: "Members Served", icon: <People className="text-white" />, start: 500, end: 1200 },
    { label: "Team Members", icon: <Work className="text-white"/>, start: 10, end: 50 },
    { label: "Total Earns ($)", icon: <AttachMoney className="text-white"/>, start: 10000, end: 75000 },
  ];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 bg-gray-800 rounded-2xl text-white ">
      {stats.map((stat, index) => (
        <CounterCard key={index} {...stat} />
      ))}
    </div>
  );
}

function CounterCard({ label, icon, start, end }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const increment = Math.ceil((end - start) / 50); // Adjust speed of counting
      const interval = setInterval(() => {
        setCount((prev) => (prev + increment > end ? end : prev + increment));
      }, 50); // Adjust interval for smoother/faster counting
      return () => clearInterval(interval);
    }
  }, [count, end, start]);

  return (
    <div className="items-center bg-gray-900 p-4 rounded-lg shadow-md">
      <IconButton className="text-white">{icon}</IconButton>
      <motion.div
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        {count.toLocaleString()}
      </motion.div>
      <p className="text-white mt-2">{label}</p>
    </div>
  );
}