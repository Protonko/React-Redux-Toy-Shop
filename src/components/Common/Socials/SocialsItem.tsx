import React, {FC} from 'react';
import {ISocials} from 'typing/interfaces';

export const SocialsItem: FC<ISocials> = ({
  href,
  Icon,
}) => {
  return (
    <li className="socials__item">
      <a href={href} target="_black" className="socials__link">
        <Icon />
      </a>
    </li>
  )
};
