import Image from "next/image";

export default function Card(props) {
    return (
      <>
        <section className="text-gray-600 shadow-2xl body-font rounded-full">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4">
                <a className="block relative h-48 rounded overflow-hidden">
                 <Image className="rounded-2xl cursor-pointer" src={"/doctor1.jpg"} width={300} height={50}/>
                </a>
                <div className="mt-4">
                  <h3 className="text-2xl cursor-pointer">
                    Doctor Name: 
                {props.abc}
                  </h3>
                  <h2 className="text-2xl cursor-pointer" >
                    Time:{props.time}
                  </h2>
                  <p className="mt-1 cursor-pointer ml-2 text-lg">Fee:{props.fee}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  