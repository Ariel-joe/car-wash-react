import React from 'react'

const DetailerForm = () => {
  return (
    <>
    <div>
        <form>
            <div className='flex gap-4'>

            <input type="text" className='border' placeholder='name' required />
            <input type="text" className='border' placeholder='phone number' required />

            </div>
        </form>
    </div>
      
    </>
  )
}

export  {DetailerForm}
