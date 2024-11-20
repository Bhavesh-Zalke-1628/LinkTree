import React from 'react'

const page = () => {
    return (
        <div className=' bg-[#e9c0e9] min-h-screen grid  grid-cols-2'>
            <div className=' flex justify-center items-center flex-col '>
                <h1 className=' capitalize font-bold text-4xl'>
                    create your bittree
                </h1>
                <div className=' flex flex-col gap-5 my-8'>
                    <h2
                        className=' font-semibold text-2xl'
                    >
                        Step 1 : Claim your Handle
                    </h2>
                    <div className=' mx-4'>

                        <input
                            className=' px-4 py-2 focus:outline-pink-500 rounded-3xl'
                            type="text"
                            placeholder='choose a handle '
                        />
                    </div>

                    <h2
                        className=' font-semibold text-2xl'
                    >
                        Step 2 : Add your link
                    </h2>
                    <div className=' mx-4 flex gap-2'>

                        <input
                            className=' px-4 py-2 focus:outline-pink-500 rounded-3xl'
                            type="text" placeholder='Enter a  link text'
                        />
                        <input
                            className=' px-4 py-2 focus:outline-pink-500 rounded-3xl'
                            type="text"
                            placeholder='Enter a  link '
                        />
                        <button
                            className=' rounded-2xl p-5 py-2 mx-2 bg-slate-900 text-white font-bold'
                        >
                            Add link
                        </button>
                    </div>
                    <h2
                        className=' font-semibold text-2xl'
                    >
                        Step 3 : Add picture and finanlized
                    </h2>
                    <div className=' mx-4 flex flex-col'>
                        <input
                            className=' px-4 py-2 w-fit  focus:outline-pink-500 rounded-3xl'
                            type="file"
                            placeholder='Enter to your picture'
                        />
                        <button
                            className=' w-fit my-2 rounded-2xl p-5 py-2 mx-2 bg-slate-900 text-white font-bold'
                        >
                            Create your BitLink
                        </button>
                    </div>
                </div>
            </div>



            <div className=' w-full h-screen '>
                <img
                    className=' h-full object-contain '
                    src='/generate.png' alt="generat your links"
                />
            </div>
        </div>
    )
}

export default page
