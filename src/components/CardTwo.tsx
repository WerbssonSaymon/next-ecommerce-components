import Image from 'next/image'

export default function CarTwo(){
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
            <div className='flex justify-center items-center flex-col px-2'>
                <h2 className='text-xl'>
                    Bitcoin
                </h2>
                <p>
                    <span className='text-xl font-bold'>R$ 350,00</span> a unidade
                </p>
            </div>
            <div className='flex justify-center items-center my-2'>
                <h3 className='p-3 w-[90%] text-2xl font-extrabold text-center text-green-500 hover:text-green-600 rounded-full cursor-pointer'>COMPRAR</h3>
            </div>
        </div>
    )
}