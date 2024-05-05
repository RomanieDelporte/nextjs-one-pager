import Image from "next/image";

export default function ContactCard({buttonLabel}: { buttonLabel: string }) {
    return (
        <main
            className="w-[900px] max-w-[900px] bg-neutral-700 p-12 rounded"
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
                <div className="ml-4">
                    <p className="text-accent-100 text-lg italic">Wenst u graag hulp aan huis?</p>
                    <h1 className="text-base-100 text-[40px]">Neem contact op met Tom.</h1>
                    <button className="bg-accent-100 text-white p-2 rounded-2xl mt-2">{buttonLabel}</button>
                </div>
            </div>
        </main>
    );
}