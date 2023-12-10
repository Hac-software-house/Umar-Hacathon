
import Image from 'next/image'
import ButtonDark from './ButtonDark'

const Section1 = () => {
    return (
        <div className='flex justify-center items-center mt-12 px-8'>
            <div className='w-[50%] text-center'>
                <div>
                    <Image
                        src={"/room.jpg"}
                        width={500}
                        height={500}
                        className='  '
                    />
                </div>

            </div>
            <div className='w-[30%]'>
                <span className='text-xl py-4'>Biography</span>
                <h1 className='text-3xl py-6 font-semibold'>Who We Are</h1>
                <p className='pb-2'>Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.
                    <br />
                    <p className='py-4'> It's 2019: time to sink or swim.</p>
                    <br />
                    We are your Social Media Marketing Agency.</p>
                <ButtonDark title="See More" />
            </div>

        </div>
    )
}

export default Section1