import React from 'react'

const Card = ({ avatar }) => {

    return (
        <>
            <div className='m-auto pt-2 w-96 h-96 mr-2 bg-gradient-to-r from-indigo-950 via-blue-800 to-cyan-500 '>
                <div className='p-2 text-center mb-4 text-white '>
                    <div className='overflow-hidden m-2  '>
                        <img className="rounded-full size-28 m-auto " src={avatar.imageURL} alt={avatar.name} /></div>
                    <div className='text-xl font-bold'>{avatar.name} </div>
                    <div className='mb-4'>{avatar.description}</div>
                </div>



            </div>
        </>
    )
}

export default Card
