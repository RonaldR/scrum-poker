import React, { useState, useEffect, ReactElement } from 'react';

type Props = {
  close: Function;
  cardValue: string | number;
};

const Card = ({ close, cardValue }: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  function cardClicked(): void {
    if (flipped) {
      close();
      setFlipped(false);
    } else {
      setFlipped(true);
    }
  }

  // fade in effect when mounted
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const getPossibleGiphy = (value: string): JSX.Element | null => {
    let giphyID = '';
    switch (value) {
      case '♾️':
        giphyID = 'jquDWJfPUMCiI';
        break;
      case '❓':
        giphyID = '3owyphXV8TcO2muXGU';
        break;
      case '☕':
        giphyID = 'oGP0Sv692lb68';
        break;
    }

    return giphyID
      ? (
        <div>
          <img src={`https://media.giphy.com/media/${giphyID}/200w_d.gif`} alt="Giphy" width="300" />
          <p><a href="https://giphy.com/" style={{ fontSize: '10px', lineHeight: 1 }}>via GIPHY</a></p>
        </div>
      ) : null;
  };

  return (
    <div
      className={`card-popup ${isOpen ? 'card-popup--isopen' : ''} ${flipped ? 'card-popup--flipped' : ''}`}
      onClick={cardClicked}
      tabIndex={0}
      role="button"
      onKeyPress={event =>
        event.key === 'Enter' && cardClicked()}
    >
      <div className="card-popup-face card-popup-face__front">Tap/click it</div>
      <div className="card-popup-face card-popup-face__back">
        {cardValue}
        {getPossibleGiphy(cardValue.toString())}
      </div>

      <style global jsx>
        {`
        .card-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            align-items: center;
            justify-items: center;
            font-size: 40px;
            cursor: pointer;
            transform-style: preserve-3d;
            transform-origin: center;
            transition: transform .5s;
            opacity: 0;
            transform: scale(0.25);
            perspective: 800px;
            z-index:1;
        }

        .card-popup--isopen {
            opacity: 1;
            transform: scale(1);
        }

        .card-popup--flipped {
            transform: rotateY(-180deg);
        }

        .card-popup-face {
            position: absolute;
            display: grid;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            text-align: center;
            align-items: center;
            background: lightblue;
        }
        
        .card-popup-face__back {
            transform: rotateY(180deg);
            background: #32CD32;
            color: white;
            font-size: 100px;
        }
      `}
      </style>
    </div>
  );
};


export default Card;
