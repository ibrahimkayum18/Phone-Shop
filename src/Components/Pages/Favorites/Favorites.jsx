import { useEffect, useState } from "react";
import FavoritePhones from "./FavoritePhone/FavoritePhones";


const Favorites = () => {
    const [newPhone, setNewPhone] = useState([]);
    const [noData, setNoData] = useState('');
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorite"));
        if (favorites) {
            setNewPhone(favorites);
        }else{
            setNoData('No Data Found');
        }
    },[])
    const handleDelete = () => {
        localStorage.clear();
        setNewPhone([])
        setNoData('No Data Found')
    }
    console.log(newPhone);
    return (
        <div className="">
            <div className="text-center">
                {
                    noData? <p className="text-1xl font-bold text-gray-500 mt-64 ">{noData}!!</p> : <div></div>
                }
            </div>
            <div className="text-center my-5">
            {
                newPhone.length > 0 && <button onClick={handleDelete} className="btn bg-green-300">Delete All Favorites</button>
            }
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-14">
            {
                newPhone.map(phone => <FavoritePhones 
                key={phone.id}
                phone={phone}
                ></FavoritePhones>)
            }
            </div>
        </div>
    );
};

export default Favorites;