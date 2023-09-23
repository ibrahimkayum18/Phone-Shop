import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Phones = () => {
  const phones = useLoaderData();
  // console.log(phones);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
      {
        phones.map(phone => <Phone key={phone.id} phone={phone}></Phone> )
      }
    </div>
  );
};

export default Phones;
