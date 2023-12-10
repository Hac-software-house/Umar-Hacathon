import Card from "./(components)/card/card";

export default function Schedule() {
  return (
    <div className="flex justify-center items-center">
      <div className="shadow-2xl grid lg:grid-cols-3 md:grid-cols-2  items-center rounded-md">
        <div>
          <Card abc="umair" time="1PM to 4Pm" fee="2000"/>
        </div>
        <div>
          <Card abc="Ahmad"  time="3PM to 6Pm" fee="1500"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
        <div>
          <Card abc="Ali"  time="6PM to 9Pm" fee="3000"/>
        </div>
      </div>
    </div>
  );
}
