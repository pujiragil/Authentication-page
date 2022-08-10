import Slider from "./Slider"
import { GoPrimitiveDot } from 'react-icons/go'

const Hero = () => {
  return (
    <div className="hidden lg:block p-10 pr-0">
      <div className="flex flex-col justify-between w-full h-full custom-gradient rounded-lg">
        <div className="flex flex-col p-16 w-11/12 2xl:w-10/12">
          <h1 className="h-12 w-12 bg-logo flex justify-center items-center rounded-full text-white text-logo font-semibold mb-5">A</h1>
          <p className="font-semibold text-sm text-button mb-2">ACCAUNT.IO</p>
          <h1 className="text-button text-hero font-medium leading-normal">Manage multiple accounts in one place!</h1>
        </div>
        <div className="flex w-full">
          <Slider />
        </div>
        <div className="flex items-center justify-start gap-x-1 text-sm text-button font-medium p-16">
          <p>PRIVACY POLICY</p>
          <GoPrimitiveDot/>
          <p>TERMS OF SERVICE</p>
        </div>
      </div>
    </div>
  )
}

export default Hero