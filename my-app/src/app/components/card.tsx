import Link from "next/link";

export default function Card({imageUrl, title, description, link, label}: {
    imageUrl: string,
    title: string,
    description: string,
    link: string,
    label: string,
}) {
    return (
        <main
            className="border border-neutral-200 p-2 rounded w-[380px] max-w[380px] h-[330px] max-h-[330px] flex justify-center items-center flex-col">
            <div className="bg-neutral-500 rounded-full flex justify-center items-center w-[70px] h-[70px] -mt-28">
                <img className="w-4 h-10 object-contain items-center flex" src={ imageUrl } alt="card-img"/>
            </div>
            <div className="container p-6
            text-center">
                <h2 className="text-white medium h-[60px]">{ title }</h2>
                <div className="text-left mt-2">
                    <p className="text-sm text-neutral-200 mt-5 h-24 max-h-24">{ description }</p>
                    <Link className="text-accent-100 relative" href={ link } target="_blank" rel="noopener noreferrer">
                        { label }
                        <span className="absolute bottom-0 left-0 w-1/2 border-b border-solid border-accent-100"></span>
                    </Link>
                </div>
            </div>
        </main>
    );
}