import React from 'react'
import Layout from './Layout'
import thank from '../assets/illustration-thank-you.svg'

const Summary = ({ rate }) => {
  return (
    <Layout>
      <div className='flex flex-col gap-4 lg:gap-6 text-grey'>
        <div className='flex flex-col gap-6 lg:gap-8 items-center'>
          <img src={thank} alt="thnak" />
          <div className='bg-[#242930] px-8 py-2 rounded-3xl text-[15px] text-orange'>
            <span> You selected {rate} out of 5</span>
          </div>
        </div>
        <div className='flex flex-col text-center gap-4 lg:gap-6'>
          <h1 className='text-2xl lg:text-3xl font-bold text-white'>Thank you!</h1>
          <p className='leading-7 lg:px-2 px-0'>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Summary
