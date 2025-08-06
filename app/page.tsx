"use client";
import Assistant from "@/components/assistant";
import ToolsPanel from "@/components/tools-panel";
import PdfViewer from "@/components/pdf-viewer";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Main() {
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/4">
        <Assistant />
      </div>
      <div className="hidden md:block w-1/2">
        <PdfViewer />
      </div>
      <div className="hidden md:block w-1/4">
        <ToolsPanel />
      </div>
      {/* Hamburger menu for small screens */}
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={() => setIsToolsPanelOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      {/* Overlay panel for ToolsPanel on small screens */}
      {isToolsPanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
          <div className="w-full bg-white h-full p-4 overflow-y-auto">
            <button className="mb-4" onClick={() => setIsToolsPanelOpen(false)}>
              <X size={24} />
            </button>
            <PdfViewer />
            <ToolsPanel />
          </div>
        </div>
      )}
    </div>
  );
}
