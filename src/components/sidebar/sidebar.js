import React from "react";
import { SidebarItem } from "./sidebarItem";
import { SidebarSpacer } from "./sidebarSpacer";

export function Sidebar() {
  return (
    <div className="flex flex-col h-screen justify-evenly p-5">
      <SidebarItem />
      <SidebarSpacer />
      <SidebarItem />
      <SidebarSpacer />
      <SidebarItem />
      <SidebarSpacer />
      <SidebarItem />
      {/* <SidebarSpacer />
      <SidebarItem />
      <SidebarSpacer />
      <SidebarItem /> */}
    </div>
  );
}
