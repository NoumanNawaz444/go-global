import React from 'react'
import { Mail } from 'lucide-react'
import GlobalHeading from './GlobalHeading'

function CtA() {
    return (
        <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="sm:w-4/5 mx-auto text-center w-full">
                    <GlobalHeading 
                        mainHeading="Real humans are here to help you build your brand" 
                        bottomParagraph="Our team is dedicated to supporting you every step of the way, helping you grow and succeed in your brand journey."
                        />
                    
                    <a href="#" title="" className="hover:scale-95 inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                        <Mail className="w-5 h-5 mr-2 -ml-1" />
                        Contact our support
                    </a>
                </div>
            </div>

            <div className="container mx-auto 2xl:px-12">
                <img className="w-full mt-6" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" alt="" />
            </div>
        </section>
    )
}

export default CtA
