import Image from "next/image"

const OurDoctors = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[2rem]">
           
            <div className="flex justify-center items-center gap-4">
                <Image src={"/doctor.jpg"} 
                width={150}
                height={150}
                className="rounded-full"/>
                <span>
                    <h1 className="text-2xl font-bold py-2">Umar Farooq</h1>
                    <p>MBBS.KS</p>
                    <p className="font-sm">Lorem ipsum dolor sit amet consectetur.</p>
                </span>
            </div>
        </div>
    )
}

export default OurDoctors