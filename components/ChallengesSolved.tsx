"use client"
import { Clock, MessageSquareText, Target, Users } from "lucide-react"
import React from "react"

export const ChallengesSolved = () => {
  return (
    <div className="md:my-[64px] my-[40px]">
      <div className="flex items-center md:justify-center gap-[10px]">
        <p className="md:text-[32px] text-[24px] font-semibold">
          Challenges We Solve
        </p>
        <img src="/challenges-icon.png" alt="" />
      </div>
      <div className="md:mt-[64px] mt-[40px] max-w-[1400px] mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="md:h-[532px] h-[390px] bg-[#F5F5F5] rounded-[28px] md:rounded-[32px] flex flex-col justify-between overflow-hidden">
          <div className="p-4 md:p-8 md:space-y-[40px] space-y-[24px]">
            <div className="inline-flex items-center p-4 rounded-full bg-white gap-[10px] font-semibold">
              <Clock />
              <p className="md:text-[20px] text-sm">Slow Feedback Cycles</p>
            </div>
            <p className="md:text-3xl">
              Waiting days or weeks for human test scheduling and analysis
              delays fixes.
            </p>
          </div>

          <div className="p-4 md:p-8 h-[50%]">
            <div className=" flex items-center justify-between relative z-[1]">
              <div className="md:w-[80px] md:h-[80px] w-[31px] h-[31px] bg-white rounded-md md:rounded-lg flex items-center justify-center relative z-[1]">
                <MessageSquareText className="text-blue-500" />
              </div>
              <div className="md:w-[80px] md:h-[80px] w-[31px] h-[31px] bg-white rounded-md md:rounded-lg flex items-center justify-center relative z-[1]">
                <MessageSquareText />
              </div>
              <div className="md:w-[80px] md:h-[80px] w-[31px] h-[31px] bg-white rounded-md md:rounded-lg flex items-center justify-center relative z-[1]">
                <MessageSquareText />
              </div>
              <div className="md:w-[80px] md:h-[80px] w-[31px] h-[31px] bg-white rounded-md md:rounded-lg flex items-center justify-center relative z-[1]">
                <MessageSquareText />
              </div>
              <div className="h-[2px] w-full bg-[#E4E4E7] absolute top-[50%] translate-y-[-50%] left-0 z-[0]" />
            </div>
          </div>
        </div>

        <div className="md:h-[532px] h-[390px] bg-[#F5F5F5] rounded-[28px] md:rounded-[32px] flex flex-col justify-between overflow-hidden">
          <div className="p-4 md:p-8 md:space-y-[40px] space-y-[24px]">
            <div className="inline-flex items-center p-4 rounded-full bg-white gap-[10px] font-semibold">
              <Users />
              <p className="md:text-[20px] text-sm">
                Biased Participants Pools
              </p>
            </div>
            <p className="md:text-3xl">
              Reliance on friends, family, or limited panels yields
              unrepresentative insights.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src={"/users.png"} />
          </div>
        </div>

        <div className="md:h-[532px] h-[390px] bg-[#F5F5F5] rounded-[28px] md:rounded-[32px] flex flex-col justify-between overflow-hidden">
          <div className="p-4 md:p-8 md:space-y-[40px] space-y-[24px]">
            <div className="inline-flex items-center p-4 rounded-full bg-white gap-[10px] font-semibold">
              <Target />
              <p className="md:text-[20px] text-sm">Analysis Overhead</p>
            </div>
            <p className="md:text-3xl">
              Reviewing recordings and tagging data eats up hours and pulls
              focus away from strategic work.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src={"/analysis.png"} />
          </div>
        </div>

        <div className="md:h-[532px] h-[390px] bg-[#F5F5F5] rounded-[28px] md:rounded-[32px] flex flex-col justify-between overflow-hidden">
          <div className="p-4 md:p-8 md:space-y-[40px] space-y-[24px]">
            <div className="inline-flex items-center p-4 rounded-full bg-white gap-[10px] font-semibold">
              <Users />
              <p className="md:text-[20px] text-sm">Limited Test Coverage</p>
            </div>
            <p className="md:text-3xl">
              Only a handful of scenarios get tested, edge cases slip through
              the cracks.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src={"/test_coverage.png"} />
          </div>
        </div>
      </div>
    </div>
  )
}
