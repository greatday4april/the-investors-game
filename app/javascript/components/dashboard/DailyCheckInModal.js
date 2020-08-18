import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Modal, ModalBody, ModalHeader } from 'reactstrap';
import card from '../../../assets/images/dailyCheckIn/Card.png';
import money from '../../../assets/images/dailyCheckIn/Money.png';
import stock from '../../../assets/images/dailyCheckIn/Stock.png';
import news from '../../../assets/images/dailyCheckIn/News.png';

const DailyCheckInModal = () => {
  const CARD_NUM = 3;
  const [cardIsRevealed, setCardIsRevealed] = useState(false);
  const [dailyCheckInIsOpen, setDailyCheckInIsOpen] = useState(false);
  const toggleDailyCheckInModal = () => {
    setCardIsRevealed(false);
    setDailyCheckInIsOpen(!dailyCheckInIsOpen);
  };
  const _getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const _makeReward = (reward) => (
    <Fragment>
      <img src={reward} alt="Reward" width="400" height="400" />
    </Fragment>
  );
  const chooseCard = () => {
    setCardIsRevealed(true);
  };
  const showCard = () => {
    const choices = [stock, money, news];
    const reward = choices[_getRandomInt(choices.length)];
    return _makeReward(reward);
  };
  return (
    <Card className="h-100">
      <div className="fs--1">
        <Link className="text-sans-serif ml-2 ml-sm-3" to="#!" onClick={toggleDailyCheckInModal}>
          Feeling Lucky!
        </Link>
      </div>
      <Modal isOpen={dailyCheckInIsOpen} toggle={toggleDailyCheckInModal} centered size="lg">
        <ModalHeader>{cardIsRevealed ? 'Congratulations!' : 'Choose your lucky card!'}</ModalHeader>
        <ModalBody>
          {cardIsRevealed
            ? showCard()
            : _.range(CARD_NUM).map((_ele, index) => {
                return (
                  <input
                    key={index}
                    type="image"
                    src={card}
                    name="saveForm"
                    class="btTxt submit"
                    id="saveForm"
                    width="250"
                    height="250"
                    onClick={chooseCard}
                  />
                );
              })}
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default DailyCheckInModal;
