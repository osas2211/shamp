import { Logo } from "@/components/Logo"
import Link from "next/link"

export default function Home() {
  return (
    <main className="md:p-4 p-3 font-inter">
      <div className="hero-section md:h-[97vh] h-[600px] rounded-2xl md:rounded-4xl p-4 !relative overflow-hidden flex flex-col justify-between">
        <header className="flex items-center justify-between text-[#FAFAFA] md:px-3 py-4">
          <Logo />
          <Link href={""}>Log In</Link>
        </header>
        <div className="max-w-[1368px] mx-auto flex flex-col items-center justify-center">
          <div className="max-w-[1000px] w-full mx-auto md:flex items-end justify-between">
            <div className="max-w-[714px] text-[#FAFAFA]">
              <h2 className="md:text-[62px] md:leading-[52px] text-[34px] leading-[38px]">
                Build products your customers can actually use
              </h2>
              <p className="md:text-[24px] md:leading-[100%] md:mt-[32px] font-[300]">
                Front-load your web app usability testing with AI-driven
                personas, catch flaws fast and focus real humans on deep
                validation.
              </p>
            </div>

            <div className="md:mt-0 mt-[64px]">
              <button className="h-[45px] bg-[#FAFF7F] w-[181px] rounded-lg">
                Create your free test
              </button>
            </div>
          </div>
        </div>

        <div className="-mb-5 w-full flex items-center justify-center">
          <img src="/hero-bottom.png" />
        </div>
      </div>
      <div className="max-w-[849px] mx-auto mt-[120px] md:mt-[208px] mb-[32px] md:mb-[64px]">
        <p className="md:text-center md:text-[48px] text-[24px] leading-[100%] md:mb-[64px] mb-[40px]">
          AI accelerates development, but web-app usability testing still lags,
          teams are held back by slow feedback loops and fragmented workflows.
        </p>
        <div className="flex items-center justify-center gap-[10px]">
          <p className="md:text-[32px] text-[24px] font-semibold">
            Challenges We Solve
          </p>
          <img src="/challenges-icon.png" alt="" />
        </div>
      </div>
    </main>
  )
}
