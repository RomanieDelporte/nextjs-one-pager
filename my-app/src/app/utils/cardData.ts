interface CardData {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
    label: string;
}

const generateCardsData = (): CardData[] => {
    return [
        {
            imageUrl: "/logo-1.svg",
            title: "Computerhulp",
            description: "Werkt uw computer, laptop, smartphone... veel trager of niet meer zoals vroeger? Samen met u, bekijken we hoe we dit kunnen verhelpen.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-2.svg",
            title: "Aankoop & installatie",
            description: "Wenst u graag een nieuwe computer, laptop, printer of een ander apparaat? Ik bekijk samen met u, stap voor stap, wat u exact nodig heeft.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-3.svg",
            title: "Internet",
            description: "Ervaart u internetproblemen of een slechte verbindingskwaliteit? Ik bekijk uw (thuis)netwerk en optimaliseer dit.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-4.svg",
            title: "Uitleg & privéles",
            description: "Door de steeds veranderde technologie kan het soms moeilijk zijn om uw apparaat te gebruiken. Daarom voorzie ik computerles aan huis voor alle soorten niveaus.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-5.svg",
            title: "Beveiliging",
            description: "Zit u met een virus? Bent u onzeker hoe u in deze steeds wijzigende wereld zichzelf best kan beschermen tegen virussen, malware, hackers en phishing?",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-6.svg",
            title: "Back-ups, Cloud & plaatsing harde schijven",
            description: "Het is belangrijk dat uw bestanden correct worden opgeslagen om gegevensverlies te vermijden.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-7.svg",
            title: "Printer",
            description: "Als de printer het niet meer doet en je die zelf niet meer aan de praat krijgt, heb je daar een specialist bij nodig.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-8.svg",
            title: "Softwareprogramma's",
            description: "Heeft u een softwarematig probleem? Willen uw mails bijvoorbeeld niet meer laden? Heeft u nood aan een woordje uitleg bij het gebruik van Microsoft Word, Excel, e.a.?",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/logo-9.svg",
            title: "Apple",
            description: "Ook met Apple apparaten zoals iPhone, iMac, MacBook, iPad... kan ik u verder helpen.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        // Add more objects as needed for additional cards
    ];
}

export default generateCardsData;