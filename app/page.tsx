import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center">
      <Image
        src="/geracao666.png"
        className="my-16"
        alt="Logo Geração 666"
        width={366}
        height={175}
        priority
      />
    </div>
  )
}
