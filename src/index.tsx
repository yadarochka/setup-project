import React from "react";
import { createRoot } from "react-dom/client";
import style from "./style.module.scss";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<h1 className={style.title}>Hello, world!</h1>);
