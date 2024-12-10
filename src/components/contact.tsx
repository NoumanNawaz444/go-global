import { MapPin, Phone, Mail } from 'lucide-react';

export default () => {

    const Contact = [
        {
            icon: <MapPin className="w-6 h-6 text-blue-600" />,
            contact: "Mountain View, California, United State.",
            title: "Our office"
        },
        {
            icon: <Phone className="w-6 h-6 text-blue-600" />,
            contact: "+1 (555) 000-000",
            title: "Phone"
        },
        {
            icon: <Mail className="w-6 h-6 text-blue-600" />,
            contact: "Support@example.com",
            title: "Email"
        },
    ];

    return (
        <main className="sm:my-14 py-10 bg-blue-600 md:w-4/5 mx-auto text-white rounded-lg ">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-white font-semibold">
                        Contact
                    </h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Let us know how we can help
                    </p>
                    <p className='opacity-70'>
                        We’re here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>
                <div className=''>
                    <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-6 ">
                        {
                            Contact.map((item, idx) => (
                                <li key={idx} className='bg-white p-5 rounded-md text-black/50 lg:w-[calc(100%/3-24px)] sm:w-[calc(100%/2-24px)] w-full'>
                                    <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <div className="flex-none text-blue-600">
                                            {item.icon}
                                        </div>
                                        <p>{item.contact}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    )
}
