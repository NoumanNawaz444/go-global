import React from 'react'

const GlobalHeading = (
    {
        topText,
        mainHeading,
        bottomParagraph
    }: {
        topText?: string,
        mainHeading?: string,
        bottomParagraph?: string
    }
) => {
    return (
        <div className='text-black sm:w-4/5 mx-auto w-full p-3 text-center'>
            <h2 className=' text-2xl md:text-4xl text-blue-700 '>{topText}</h2>
            <h1 className=' text-3xl md:text-6xl  my-6 text-black'>{mainHeading}</h1>
            <p className=' text-md sm:text-xl opacity-70'>{bottomParagraph}</p>
        </div>
    )
}

export default GlobalHeading