import React from "react";
import { MovieForm } from "../components";

const DialogTypeMap: Record<string, React.ComponentType<any>> = {
  MovieForm,
};

export default function getDialogType(name: string) {
  return DialogTypeMap[name] || null;
}
