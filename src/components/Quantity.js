import React from 'react';

const Quantity = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity">
      <span>Quantity</span>
      <input
        className="quantity-inpt"
        type="text"
        value={quantity}
        onChange={(e) =>
          e.target.value.match(/\d+/) | (e.target.value === '')
            ? setQuantity(Number(e.target.value))
            : quantity
        }
      />
      <div className="arrows">
        <span
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          &#9650;
        </span>
        <span
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          &#9660;
        </span>
      </div>
    </div>
  );
};

export default Quantity;
