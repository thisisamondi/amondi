import Image from 'next/image'

const CaseComponent = ({ title, description }: any) => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-center text-7xl">{title}</h1>
      <p className="text-center">{description}</p>
      <div className="grid grid-cols-3"></div>
    </div>
  )
}

export default CaseComponent
