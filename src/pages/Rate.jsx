import React from 'react'
import Layout from './Layout'
import RateButton from '../components/RateButton'
import star from '../assets/icon-star.svg'
import { useNavigate} from 'react-router-dom'

const Rate = ({rate, setRate}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if(rate > 0){
      navigate("/summary")
    }
  }
  return (
    <Layout>
      <div className="flex flex-col lg:gap-8 gap-6">
        <div className='lg:h-12 h-9 rounded-full flex justify-center items-center w-9 lg:w-12 bg-round'>
          <img src={star} alt="star" />
        </div>
        <div className='flex flex-col lg:gap-6 gap-4'>
          <h1 className="text-white font-bold text-2xl lg:text-3xl">How did we do?</h1>
          <p className='text-grey leading-7'>
            Please let us know how we did with your support
            request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <div className='flex justify-between'>
            {[1,2,3,4,5].map((item)=> (
              <RateButton isActive={item === rate} key={item} text={item} setter={setRate} />
            ))}
          </div>
          <button onClick={handleClick} className='bg-orange mt-2 font-overpass duration-200 font-semibold rounded-full text-white hover:bg-white hover:text-orange lg:py-4 py-3 uppercase'>Submit</button>
        </div>
      </div>
    </Layout>
  )
}

export default Rate
