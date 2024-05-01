import Card from "@/app/components/card";
import cardData from "@/app/utils/cardData";
import Header from "@/app/components/header";

export default function Home() {
    const cardsData = cardData();
    const heroBackgroundImage = "/Hero.png";

    return (
        <main className="flex flex-col min-h-screen">
            <div className="relative h-[720px]">
                <div className="absolute inset-0 z-0 bg-cover bg-center"
                     style={{backgroundImage: `url(${heroBackgroundImage})`}}></div>
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center py-8">
                    <Header/>
                </div>
            </div>

            <div className="flex flex-col">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>

            <div>test</div>
        </main>
    );
}


