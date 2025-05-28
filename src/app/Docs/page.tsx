import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Docs() {
    return (
        <section className="flex flex-col items-center justify-center bg-black-900 p-6">
            <div className="info w-full max-w-[642px]">
                <h1 className="text-3xl font-bold text-white sm:text-4xl text-center text-[48px]">
                    Information you need during on-call emergencies
                </h1>
                <p className="mt-6 text-lg text-gray-300 text-center text-light text-[18px]">
                    Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.
                </p>
            </div>

            <div className="mt-8 flex justify-center">
                <Button className="bg-white text-black px-6 py-3 rounded-md font-semibold text-[14px]">
                    Get Started {">"}
                </Button>
            </div>

            <div className="image w-full flex justify-center">
                <Image
                    src="portada.png"
                    alt="portada"
                    className="mt-8 w-full   rounded-lg shadow-lg w-[1024px] h-[632.53px] rounded-[4px]
]"
                />
            </div>
        </section>
    );
}
