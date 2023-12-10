import Image from "next/image";


export default function Header() {
    return (
      <>
      <div className="pb-30">
      
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-3xl font-bold mb-4">
          We help people to
           get Apponiment <br></br> in online
        </h1>
      
        <p className="leading-relaxed mb-4">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
        </p>

      </div>
      <div className="ml-[140px] sm:w-50">
  <Image src={"/appo.webp"} width={350} height={400}/>
</div>

    </div>
  </div>

</div>

      </>
    )
  }
  