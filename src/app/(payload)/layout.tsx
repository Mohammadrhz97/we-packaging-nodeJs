import { ReactNode } from "react";
import config from "@payload-config";
import "@payloadcms/next/css";
import type { ServerFunctionClient } from "payload";
import {
  handleServerFunctions,
  RootLayout as PayloadRootLayout,
} from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";
import "./custom.scss";

type Args = {
  children: ReactNode;
};

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const RootLayout = ({ children }: Args) => (
  <html lang="en">
    <body>
      <PayloadRootLayout
        config={config}
        importMap={importMap}
        serverFunction={serverFunction}
      >
        {children}
      </PayloadRootLayout>
    </body>
  </html>
);

export default RootLayout;
