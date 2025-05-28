import Image from "next/image"
export default function Footer(){

    return (
        <footer className="flex justify-between ps-[32px] pe-[32px] text-white">
            
                <div className="flex pt-5 pb-5">
                    <Image src="/Logo.svg" alt="logofooter" width={24} height={24} />
                <h1 className="text-xl font-bold mb-2 md:mb-0">Pandem</h1>
        
                </div>
                <div className="flex gap-3 pt-5 pb-5">
                    <a href="">contact us</a>
                    <a href="">terms of service</a>
                </div>
                
                
            
            

            
        </footer>
    )
}