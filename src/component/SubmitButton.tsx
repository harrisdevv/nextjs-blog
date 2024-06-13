"use client";
import React from "react";

interface SubmitButtonProps {
  label: string;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => (
  <input
    type="submit"
    value={label}
    className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer dark:hover:bg-accentDark/90 dark:text-white dark:hover:text-black transition-all ease duration-300 dark:hover:text-bold hover:bg-accent hover:text-white" />
);
