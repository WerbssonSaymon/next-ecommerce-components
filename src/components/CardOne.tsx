import Image from 'next/image'

export default function CarOne(){
    return (
        <div className='bg-white shadow-md shadow-black rounded-lg'>
            <div className='my-2'>
                <Image
                    src="/cripto.jpg"
                    width={200}
                    height={200}
                    alt="criptomoeda"
                />
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-xl'>
                    Bitcoin
                </h2>
            </div>
            <div className='flex justify-center items-center my-2'>
                <button className='p-3 w-[90%] text-white bg-blue-400 hover:bg-blue-500 rounded-full'>COMPRAR</button>
            </div>
        </div>
    )
}