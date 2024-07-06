import Image from 'next/image'

export default function CarThree(){
    return (
        <div className='bg-white shadow-md shadow-black rounded-lg'>
            <div className='flex justify-center items-center my-2'>
                <h2 className='text-xl'>
                    Bitcoin
                </h2>
            </div>
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
                    R$ 4.000
                </h2>
            </div>
            <div className='flex justify-center items-center my-2'>
                <button className='p-3 w-[90%] border border-sm border-zinc-400 bg-white hover:bg-green-400 hover:text-white hover:font-bold rounded-full flex justify-center items-center'>
                    <Image 
                    src="/shopping-cart.png"
                    width={30}
                    height={30}
                    alt="carrinho de compra"
                    />
                     COMPRAR
                </button>
            </div>
        </div>
    )
}