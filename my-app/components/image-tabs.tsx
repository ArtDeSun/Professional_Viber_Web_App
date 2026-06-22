"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ImageTabs() {
  // const [activeTab, setActiveTab] = useState("organize");
  // //organize, hired, boards, MV_UI_Cards_Inspiration, Stay_In_Touch_Template

  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    setActiveTab(savedTab ?? "organize");
  }, []);

  useEffect(() => {
    if (activeTab !== null) {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  /* if (activeTab === null) {
    return null; // or a loading spinner/skeleton
  } */

  return (
    <section className="bg-black px-4 py-16 min-h-[850px]">
      <div className="container mx-auto max-w-6xl">
        {/* Tabs */}
        {/* CONSIDER THIS: className="md:grid-cols-4" */}
        <div className="flex gap-2 justify-center mb-8">
          <Button
            onClick={() => setActiveTab("organize")}
            /* className="bg-amber-500" */
            className={`rounded-lg px-6 py-3 text-base font-medium
                    transition-colors hover:cursor-pointer ${
                      activeTab === "organize"
                        ? "bg-amber-500 text-gray-100 hover:bg-amber-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
          >
            Organize Applications
          </Button>
          <Button
            onClick={() => setActiveTab("hired")}
            className={`rounded-lg px-6 py-3 text-base font-medium 
                    transition-colors hover:cursor-pointer ${
                      activeTab === "hired"
                        ? "bg-amber-500 text-gray-100 hover:bg-amber-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
          >
            Get Hired
          </Button>
          <Button
            onClick={() => setActiveTab("boards")}
            className={`rounded-lg px-6 py-3 text-base font-medium 
                    transition-colors hover:cursor-pointer ${
                      activeTab === "boards"
                        ? "bg-amber-500 text-gray-100 hover:bg-amber-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
          >
            Manage Boards
          </Button>
          <Button
            onClick={() => setActiveTab("MV_UI_Cards_Inspiration")}
            className={`rounded-lg px-6 py-3 text-base font-medium 
                    transition-colors hover:cursor-pointer ${
                      activeTab === "MV_UI_Cards_Inspiration"
                        ? "bg-amber-500 text-gray-100 hover:bg-amber-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
          >
            Inspiration for MV Cards
          </Button>
          <Button
            onClick={() => setActiveTab("Stay_In_Touch_Template")}
            className={`rounded-lg px-6 py-3 text-base font-medium 
                    transition-colors hover:cursor-pointer ${
                      activeTab === "Stay_In_Touch_Template"
                        ? "bg-amber-500 text-gray-100 hover:bg-amber-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                    }`}
          >
            Mock Sign Up
          </Button>
        </div>
        <div
          className="
                      relative mx-auto h-[700px] max-w-5xl
                      flex items-center justify-center
                      overflow-hidden rounded-4xl
                      
                      bg-neutral-950
                      border border-white/5

                      ring-1 ring-white/10

                      hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]
                      transition-all duration-300
                    "
        >
          <div className="relative flex items-center justify-center p-12">
            <div
              className="
                          absolute inset-0
                          bg-[radial-gradient(ellipse_at_center,#000_0%,#333_45%,#999_75%,transparent_100%)]
                          blur-3xl
                        "
            />

            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                className="relative z-10 max-h-[620px] w-auto object-contain"
              />
            )}

            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}
                className="relative z-10 max-h-[620px] w-auto object-contain"
              />
            )}

            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
                className="relative z-10 max-h-[620px] w-auto object-contain"
              />
            )}

            {activeTab === "MV_UI_Cards_Inspiration" && (
              <Image
                src="/hero-images/MV_UI_Cards_Inspiration.png"
                alt="Inspiration for MV Cards"
                width={1200}
                height={800}
                className="relative z-10 max-h-[620px] w-auto object-contain"
              />
            )}

            {activeTab === "Stay_In_Touch_Template" && (
              <Image
                src="/hero-images/Stay_In_Touch_Template.png"
                alt="Mock Template for Signing Up"
                width={1200}
                height={800}
                className="relative z-10 max-h-[620px] w-auto object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
