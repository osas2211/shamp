"use client"
import React from "react"

export const HowItWorks = () => {
  return (
    <div className="mt-[120px] md:mt-[208px]">
      <div className="flex items-center md:justify-center gap-[10px] md:mb-16 mb-10">
        <p className="md:text-[32px] text-[24px] font-semibold">How It Works</p>
        <img src="/works.png" alt="" />
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-[1400px] mx-auto">
        <img src={"/how-it-works-1.svg"} />
        <img src={"/how-it-works-2.svg"} />
        <img src={"/how-it-works-3.svg"} />
      </div>
    </div>
  )
}
