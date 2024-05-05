import Image from "next/image";

export default function ContactCard({buttonLabel}: { buttonLabel: string }) {
    return (
        <main
            className="w-[900px] max-w-[900px] bg-neutral-700 p-12 rounded-xl"
        >
            <div className="flex items-center">
                <div className="rounded-full w-[200px] h-[200px]">
                    <Image
                        src="/contact-image.png"
                        alt="contact-image"
                        width="200"
                        height="200"
                    />
                </div>
                <div className="ml-12">
                    <p className="text-accent-100 text-lg italic">Wenst u graag hulp aan huis?</p>
                    <h1 className="text-base-100 text-[40px]">Neem contact op met Tom.</h1>
                    <button className="bg-accent-100 p-3 rounded-2xl mt-2 uppercase text-neutral-500 font-bold w-[225px] pt-[14px] px-[30px] pb-[10px] ">{buttonLabel}</button>
                </div>
            </div>
        </main>
    );
}