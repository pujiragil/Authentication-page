import { FcGoogle } from 'react-icons/fc'

export const Google = () => {
  return (
    <div className="flex bg-white rounded-lg py-5 gap-x-4 justify-center items-center cursor-pointer mb-2.5">
      <FcGoogle className="text-3xl"/>
      <p className="font-semibold text-button">Login with Google</p>
    </div>
  )
}

export const Button = ({}) => {
  return (
    <button className="flex justify-center items-center w-full py-6 bg-checked text-button rounded-lg font-semibold mb-11">Login</button>
  )
}