import Image from "next/image";
import Card from "@/app/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl leading-tight">first one pager in react</h1>
                <Card imageUrl="/icon-arrow.svg" title="Aankoop & installatie"
                      description="Wenst u graag een nieuwe computer, laptop, printer of een ander apparaat? Ik bekijk samen met u, stap voor stap, wat u exact nodig heeft."
                      link="https://google.com"
                      label="Ontdek meer"
                />
            </div>
        </main>
    );
}
