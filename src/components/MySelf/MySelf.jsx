import SpecialPerson from "../SpecialPerson/SpecialPerson";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">
                <SpecialPerson asset={asset} ></SpecialPerson>
            </section>
        </div>
    );
};

export default MySelf;