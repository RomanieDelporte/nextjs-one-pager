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
            imageUrl: "/icon-arrow.svg",
            title: "Aankoop & installatie",
            description: "Wenst u graag een nieuwe computer, laptop, printer of een ander apparaat? Ik bekijk samen met u, stap voor stap, wat u exact nodig heeft.",
            link: "https://google.com",
            label: "Ontdek meer"
        },
        {
            imageUrl: "/icon-arrow.svg",
            title: "Another Title",
            description: "Another description goes here.",
            link: "https://example.com",
            label: "Learn More"
        },
        // Add more objects as needed for additional cards
    ];
}

export default generateCardsData;