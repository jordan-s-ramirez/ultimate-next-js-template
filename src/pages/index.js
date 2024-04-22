import { Sidebar } from "@/components/sidebar/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen bg-red-100 sm:block hidden">
        <Sidebar />
      </div>
      <div className="p-4">
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
      </div>
    </div>
  );
}
