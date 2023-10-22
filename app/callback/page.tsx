"use client";
import { passportInstance } from "@/lib/immutable";
import React from "react";

const Callback = () => {
  window.addEventListener("load", function () {
    passportInstance.loginCallback();
  });
  return <div>Callback</div>;
};

export default Callback;
