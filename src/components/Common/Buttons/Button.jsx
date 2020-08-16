import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = ({
  title,
  onClick,
  isRemoved,
  disabled,
  classNamesAdditional = []
}) => {
  const classNamesButton = classNames(
    'button',
    {'button--disabled': disabled},
    {'button--red': isRemoved},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  isRemoved: PropTypes.bool,
  disabled: PropTypes.bool,
  classNamesAdditional: PropTypes.array,
};
