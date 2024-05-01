import Card from "@/app/components/card";
import cardData from "@/app/utils/cardData";
import Header from "@/app/components/header";

export default function Home() {
    const cardsData = cardData();

    return (
        <main className="flex min-h-screen flex-col justify-between py-8 pb-40">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <Header/>
                </div>
                <div>
                    {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </main>
    );
}
