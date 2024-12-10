import Image from "next/image"
import Link from "next/link"
import studyAbroad from "@/images/study-abroad.png";
import bestCountry from "@/images/best-country.jpeg";

const BlogCard = ({ cover, title, sumary, tags }: {
    cover: string,
    title: string,
    sumary: string,
    tags: {id: number, text: string, color_class: string}[]
}) => {
    return (
        <Link href="#" className="bg-white h-full border border-gray-600 flex flex-col p-6 space-y-4">
            <Image alt="banner image" className="w-full aspect-video object-cover relative" src={cover} width={1263} height={1291} />
            <div className="flex flex-col space-y-4">
                <h1 className="text-gray-900 font-semibold text-2xl lg:text-3xl">{title}</h1>
                <p className="text-gray-700 line-clamp-2">
                    {sumary}
                </p>
                <div className="flex flex-wrap gap-3 w-full">
                    {
                        tags.map(tag => (
                            <span key={tag.id} className={`px-2 ${tag.color_class}`}>
                                {tag.text}
                            </span>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}

const posts = [
    {
        id: 1,
        cover: `${studyAbroad.src}`,
        title: "How to Plan for Studying Abroad Effectively",
        sumary: "Planning to study abroad? Here’s a comprehensive guide to help you make the most of your experience, from application processes to living abroad.",
        tags: [
            {
                id: 1,
                color_class: "bg-blue-600 text-white",
                text: "Study Abroad"
            },
            {
                id: 2,
                color_class: "bg-yellow-300 text-gray-800",
                text: "Education"
            },
        ]
    },
    {
        id: 2,
        cover: `${bestCountry.src}`,
        title: "Top Destinations for International Students in 2024",
        sumary: "Looking for the best destinations to study abroad in 2024? Discover the top cities offering quality education and exciting cultural experiences.",
        tags: [
            {
                id: 1,
                color_class: "bg-blue-600 text-white",
                text: "International Students"
            },
            {
                id: 2,
                color_class: "bg-green-600 text-white",
                text: "Travel"
            },
        ]
    },
]

const Blogs = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start text-center md:text-left md:justify-between">
                    <div className="text-center space-y-6 max-w-2xl mx-auto md:mx-0 md:text-left">
                        <div className="text-center md:text-left md:max-w-lg space-y-5">
                            <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-blue-600 text-blue-600">
                                Latest News
                            </span>
                            <h2 className="text-3xl font-semibold text-blue-950 md:text-4xl xl:text-5xl leading-tight">From Our Blog</h2>
                        </div>
                    </div>
                    <div>
                        <Link href="#" className="px-6 py-3 border border-gray-100 text-blue-600 flex items-center gap-x-3">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {
                        posts.map(post => (
                            <BlogCard key={post.id} {...post} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Blogs
