function Order({ closeHour, openHour }) {
  <div className="order">
    <p>
      Were open from {openHour} until {closeHour}:00. Come visit us or order
      online
    </p>
    <button className="btn">Order</button>
  </div>;
}

export default Order;
