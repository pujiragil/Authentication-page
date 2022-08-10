import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="flex lg:hidden bg-logo w-fit w-12 h-12 justify-center items-center rounded-full mb-5 cursor-pointer">
      <h1 className="text-white text-logo font-semibold">A</h1>
    </div>
  )
}

export const Title = ({ title, subtitle, mb }) => {
  return (
    <div className={`flex flex-col text-white w-full ${mb}`}>
      <h1 className="text-title mb-2.5">{title}</h1>
      <p className="text-base opacity-60">{subtitle}</p>
    </div>
  )
}

export const Option = () => {
  return (
    <div className="flex justify-center items-center gap-x-2 mb-9">
      <span className="block w-full h-0.5 rounded-full bg-field"></span>
      <p className="text-white">or</p>
      <span className="block w-full h-0.5 rounded-full bg-field"></span>
    </div>
  )
}

export const Alert = ({ text, link, to }) => {
  return (
    <div className="flex justify-center items-center font-semibold">
      <p><span className="text-white opacity-60">{text}</span><Link to={to} className="text-forget cursor-pointer">{link}</Link></p>
    </div>
  )
}