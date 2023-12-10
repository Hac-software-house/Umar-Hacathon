import Image from 'next/image'
import ButtonDark from './ButtonDark'

const Hero = () => {
    return (
        <div className='flex justify-center items-center h-[80vh] pl-8'>
            <div className='w-[50%] mx-auto'>
                <h1 className=' text-4xl font-bold'>
                    We want to provide <br />
                    better and cleanful environment <br/>
                 to our patients
                    
                </h1>
                <p className='py-6 w-[550px]'
                >Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.</p>
                <ButtonDark title="Visit "/>
            </div>
            <div className='w-[50%] text-center'>
                <div>
                    <Image
                        src={"/hos.jpg"}
                        width={500}
                        height={500}
                        className=' w-full h-[80vh] relative'
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero