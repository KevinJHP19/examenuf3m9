import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Pricing(){
    return(
        <section id="pricing" className="flex flex-col items-center   bg-black-900 w-[1280px] pt-40">
            <div className="solution w-[960px] h-[316px]">
                <h1 className="text-[48px] font-bold text-center">Quick solution, less stress</h1>
                <div className="soluciones  flex justify-around  mt-8 gap-[48px]">
                    <div className="solucion w-[288px] h-[220px]" >
                        <Image src="/Frame1.svg" alt="frame1"
                        className="w-[24px] pb-10"width={26} height={26} />
                        <h2 className="font-semibold text-[24px] pb-7">Fix emergencies fast</h2>
                        <p className="text-light text-[14px] text-[#D9D9D9]">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
                        
                        
                    </div>
                    <div className="solucion w-[288px] h-[220px]">
                        <Image src="/Frame2.svg" alt="frame3" width={24} height={24}
                        className="w-[24px] pb-10" />
                        <h2 className="font-semibold text-[24px] pb-7">Universally compatible</h2>
                        <p className="text-light text-[14px] text-[#D9D9D9]">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
                        
                    </div>
                    <div className="solucion w-[288px] h-[220px]">
                        

                        <Image src="/Frame3.svg" alt="frame3" className="w-[24px] pb-10" width={24} height={24} />
                        
                        <h2 className="font-semibold text-[24px] pb-7">Secure for your org</h2>
                        <p className="text-light text-[14px] text-[#D9D9D9]">We keep your data safe by taking top security measures.</p>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className="setup w-[672px] pt-20">
                <h1 className="text-[48px] font-bold text-center">Instant setup, no custom code</h1>
                <p className="text-[18px] pt-4 pb-4 text-center font-normal text-[#D9D9D9]">Invite the bot, pick a channel, and you re set—no custom code needed, and no vendor lock-in.</p>
                <Image src="/portada.png" alt="portada_setup" className="w-[672px] h-[595.1px]" width={672} height={595.1} />

            </div>
            <div className="touch w-[672px] pt-40">
                <h1 className="text-[48px] font-bold text-center">Get in touch</h1>
                <p className="text-[18px] pt-4 pb-4 text-center font-normal text-[#D9D9D9]"> Rquest a demo, or hop on a call.</p>

                <div className="mt-8 flex justify-center">
                <Button className="bg-white text-black px-6 py-3 rounded-md font-semibold text-[14px]">
                    Get Started {">"}
                </Button>
                </div>
            </div>
        </section>
    )
}