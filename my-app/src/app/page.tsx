import Card from "@/app/components/card";
import cardData from "@/app/utils/cardData";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ContactCard from "@/app/components/contactCard";

export default function Home() {
    const cardsData = cardData();
    const heroBackgroundImage = "/Hero.png";

    return (
        <main className="flex flex-col grid-flow-col min-h-screen">
            <div className="relative h-[720px] p-40">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${heroBackgroundImage})`}}
                ></div>
                <div className="absolute inset-x-0 top-0 z-10 flex py-8 p-40">
                    <Header/>
                </div>
            </div>

            <div className="flex justify-center flex-col items-center bg-neutral-600">
                <div className="mb-10 mt-28 text-center">
                    <p className="font-sans text-accent-100 text-lg italic">ontdek ons</p>
                    <h2 className="text-base-100 text-2xl font-bold">ruim aanbod</h2>
                </div>
                <div className="mb-64 mt-12">
                    <div className="grid grid-cols-3 gap-4 mb-1">
                        {cardsData.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                    <p className="text-neutral-200 text-center mt-10">En nog zoveel meer zoals het ontwikkelen van
                        flyers, affiches en logo’s.
                    </p>
                </div>
            </div>
            <div className="-mt-36 flex items-center justify-center">
                <ContactCard buttonLabel="contacteer Tom"/>
            </div>
            <Footer/>
        </main>
    );
}


