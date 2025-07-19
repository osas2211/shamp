"use client"
import { CirclePlay, Sparkles, TrendingUp } from "lucide-react"
import React from "react"

export const KeyBenefits = () => {
  return (
    <div>
      <div className="max-w-[849px] mx-auto mt-[120px] md:mt-[208px] mb-[40px] md:mb-[64px]">
        <p className="md:text-center md:text-[48px] text-[24px] leading-[100%]">
          We understand the need for speed, and that's why Shamp is here to take
          you beyond QA to Usability testing, so as to launch products &
          features your customers can actually use.
        </p>
      </div>
      <div className="flex items-center md:justify-center gap-[10px] md:mb-16 mb-10">
        <p className="md:text-[32px] text-[24px] font-semibold">Key Benefits</p>
        <img src="/star.png" alt="" />
      </div>

      <div className="grid grid-cols-1 gap-[128px] max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between md:flex-row flex-col gap-[44px]">
          <div>
            <div className="md:space-y-[40px] space-y-[24px] max-w-[612px]">
              <div className="inline-flex items-center p-4 rounded-full bg-[#F5F5F5] gap-[10px] font-semibold">
                <CirclePlay />
                <p className="md:text-[20px] text-sm">Pre-Test Every Build</p>
              </div>
              <p className="md:text-3xl">
                Trigger AI-driven persona runs in minutes, catch obvious UX
                issues instantly without waiting on human sessions.
              </p>
            </div>
          </div>

          <div>
            <img src={"/benefit-1.png"} />
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-[44px]">
          <div>
            <div className="md:space-y-[40px] space-y-[24px] max-w-[612px]">
              <div className="inline-flex items-center p-4 rounded-full bg-[#F5F5F5] gap-[10px] font-semibold">
                <CirclePlay />
                <p className="md:text-[20px] text-sm">Pre-Test Every Build</p>
              </div>
              <p className="md:text-3xl">
                Trigger AI-driven persona runs in minutes, catch obvious UX
                issues instantly without waiting on human sessions.
              </p>
            </div>
          </div>

          <div>
            <img src={"/benefit-2.png"} />
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-[44px]">
          <div>
            <div className="md:space-y-[40px] space-y-[24px] max-w-[612px]">
              <div className="inline-flex items-center p-4 rounded-full bg-[#F5F5F5] gap-[10px] font-semibold">
                <Sparkles />
                <p className="md:text-[20px] text-sm">AI-Powered Insights</p>
              </div>
              <p className="md:text-3xl">
                Automatically flag and prioritize UX issues using built-in
                heuristics.
              </p>
            </div>
          </div>
          <div>
            <img src={"/benefit-3.png"} />
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-[44px]">
          <div>
            <div className="md:space-y-[40px] space-y-[24px] max-w-[612px]">
              <div className="inline-flex items-center p-4 rounded-full bg-[#F5F5F5] gap-[10px] font-semibold">
                <TrendingUp />
                <p className="md:text-[20px] text-sm">Scale with Confidenced</p>
              </div>
              <p className="md:text-3xl">
                Batch-run dozens of personas in parallel to uncover cross-user
                defects.
              </p>
            </div>
          </div>
          <div>
            <img src={"/benefit-4.png"} />
          </div>
        </div>
      </div>
    </div>
  )
}
