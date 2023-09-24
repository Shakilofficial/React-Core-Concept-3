import Friend from "../Friend/Friend";
import SpecialPerson from "../SpecialPerson/SpecialPerson";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name} </p>
      <section>
        {asset && <SpecialPerson asset={asset}></SpecialPerson>}
        {name === "Sumaiya" && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;
