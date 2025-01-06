import PropTypes from "prop-types";

const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  pizzaObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Pizza;
