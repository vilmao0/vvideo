import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div className='text-xl'>Meeting Room: #{params.id} <p className='text-teal-200 text-xl'>for more info see:</p> <a href='https://help1.vilmao.org/info/meeting/connecting-with-mtngid'>
        <p className='font-bold text-emerald-400 text-3xl'>
          help.vilmao.org
        </p>
      </a></div>
  )
}

export default Meeting