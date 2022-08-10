export const Field = ({ option, labelFor, label, type, name, placeholder }) => {
  return (
    <div className="flex flex-col text-white mb-8">
      { option ? (
        <div className="flex justify-between items-center font-semibold mb-2.5">
          <label htmlFor={labelFor}>{label}</label>
          <p className="text-forget cursor-pointer">Forgot Password ?</p>
        </div>
      ) : (
        <label htmlFor={labelFor} className="font-semibold mb-2.5">{label}</label>
      ) }
      <input className="shrink-0 rounded-lg bg-field py-5 px-10 focus:border-none focus:outline-none" type={type} name={name} placeholder={placeholder}/>
    </div>  
  )
}

export const Remember = ({ text }) => {
  return (
    <div className="flex justify-start gap-x-2 items-center text-white font-semibold mb-8">
      <input type="checkbox" className="w-6 h-6 bg-field rounded appearance-none checked:bg-checked" />
      <p>{text}</p>
    </div>
  )
}