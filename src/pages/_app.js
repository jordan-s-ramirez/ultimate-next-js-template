import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
