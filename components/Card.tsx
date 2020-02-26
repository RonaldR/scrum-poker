import React, { useState, ReactElement } from 'react';
import CardPopup from './CardPopup';


type Props = {
  cardValue: string | number;
}

const Card = ({ cardValue }: Props): ReactElement => {
  const [isActive, setIsActive] = useState(false);

  function cardClicked(): void {
    setIsActive(true);
  }

  function close(): boolean {
    setIsActive(false);
    return false;
  }

  return (
    <>
      <button className="card" onClick={cardClicked} type="button">
        <div>
          <span className="card__icon" role="img" aria-label="card icon emoji">🃏</span>
          {cardValue}
        </div>
        <style global jsx>
          {`
            .card {
              list-style: none;
              margin: 0;
              background: #f1f1f1;
              min-height: 100px;
              height: 15vh;
              display: grid;
              justify-content: center;
              align-items: center;
              font-size: 24px;
              cursor: pointer;
              transition: .2s;
              position: relative;
              border-radius: 3px;
              border: 0;
            }

            .card:hover {
              background: #f9f9f9;
            }

            .card__icon {
              position: absolute;
              top: 4px;
              left: 4px;
            }
        `}
        </style>
      </button>
      {isActive && (<CardPopup close={close} cardValue={cardValue} />)}
    </>
  );
};


export default Card;
