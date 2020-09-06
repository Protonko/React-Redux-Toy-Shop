import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Scrollbars} from 'react-custom-scrollbars';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Product} from 'components/Product/Product';

export const CartPopup = ({setPopupVisible, removeFromCart, items}) => {
  const popup = useRef();
  const isItemsInCart = items.length;
  const classNamesButton = classNames('popup__button', 'button', {'button--disabled': !isItemsInCart});

  useOutsideClick(popup, () => setPopupVisible(false));

  const renderItem = (product, index) => (
    <Product key={index} product={product} removeFromCart={removeFromCart} />
  );

  return (
    <article className="popup drop-down" ref={popup}>
      <div className="popup__section popup__section--body">
        <Scrollbars>
          <div className="popup__scrollable-content">
            {isItemsInCart
              ? items.map(renderItem)
              : (
                <div className="popup__wrapper">
                  <p className="popup__text">
                    Your cart is empty.
                  </p>
                </div>
              )
            }
          </div>
        </Scrollbars>
      </div>

      <footer className="popup__section popup__section--footer">
        <Link to={'/order'} className={classNamesButton} onClick={() => setPopupVisible(false)}>
          Proceed to checkout
        </Link>
      </footer>
    </article>
  );
};

CartPopup.propTypes = {
  setPopupVisible: PropTypes.func,
  removeFromCart: PropTypes.func,
  items: PropTypes.array,
};
