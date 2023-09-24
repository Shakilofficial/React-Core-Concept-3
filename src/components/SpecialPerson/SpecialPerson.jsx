import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const SpecialPerson = ({ asset }) => {
    const gift =useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Has : {asset}</p>
            <p>Also has: {gift} </p>
        </div>
    );
};

export default SpecialPerson;