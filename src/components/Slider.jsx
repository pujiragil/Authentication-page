import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'

const Card = ({ icon, subtitle, text }) => {
  return (
    <div className="flex flex-col bg-card min-w-half text-button w-screen h-52 rounded-lg shadow-card p-6">
      { icon }
      <h3 className="font-semibold mb-2">{subtitle}</h3>
      <p className="text-xs font-medium leading-relaxed">{text}</p>
      <p></p>
    </div>
  )
}

const Slider = () => {
  return (
    <div className="flex w-full gap-x-10 justify-center overflow-x-hidden py-10">
      <Card subtitle="Tiktok" text="Tiktok, reply to tiktok, manage DMs, and more in a single dashboard." icon={<FaTiktok className="text-4xl text-yellow-400 mb-4"/>}/>
      <Card subtitle="Twitter" text="Tweet, reply to tweet, manage DMs, and more in a single dashboard." icon={<FaTwitter className="text-4xl text-sky-400 mb-4"/>} />
      <Card subtitle="Instagram" text="Post a story, manage DMs, and more in a single dashboard." icon={<FaInstagram className="text-4xl text-pink-400 mb-4"/>} />
    </div>
  )
}

export default Slider