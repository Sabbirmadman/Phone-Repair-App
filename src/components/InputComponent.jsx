import React from "react";

export default function InputComponent({ label, type, onChange, classes }) {
  return (
    <div className={`flex flex-col ${classes}`}>
      <label>{label}</label>
      <input
        className=" border-b-2 outline-none italic p-1"
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
