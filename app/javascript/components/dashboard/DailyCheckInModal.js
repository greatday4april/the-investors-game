import React, { useState, Fragment, useEffect } from 'react';
import { Card, Modal, ModalBody, ModalHeader } from 'reactstrap';
import card from '../../../assets/images/dailyCheckIn/Card.png';
import money from '../../../assets/images/dailyCheckIn/Money.png';
import stock from '../../../assets/images/dailyCheckIn/Stock.png';
import news from '../../../assets/images/dailyCheckIn/News.png';

import { REWARD_STOCK, REWARD_MONEY_AMOUNT, HOURS_IN_DAY } from '../../utils/constants';

const DailyCheckInModal = ({ previousRewardTime, updatePreviousRewardTime, receiveShare, receiveMoney }) => {
  const CARD_COUNT = 3;
  const [cardIsRevealed, setCardIsRevealed] = useState(false);
  const [dailyCheckInIsOpen, setDailyCheckInIsOpen] = useState(false);
  const closeDailyCheckInModal = () => {
    setCardIsRevealed(false);
    setDailyCheckInIsOpen(false);
  };
  const _checkTimeDelta = () => {
    if (previousRewardTime === null) {
      setDailyCheckInIsOpen(true);
    } else {
      const now = moment();
      const pre = moment(previousRewardTime);
      const timeDelta = moment.duration(now.diff(pre));
      const hours = timeDelta.asHours();
      if (hours >= HOURS_IN_DAY) {
        setDailyCheckInIsOpen(true);
      }
    }
  };
  //didMount
  useEffect(() => {
    _checkTimeDelta();
  }, []);

  const _getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const _makeReward = (reward) => {
    let description = '';
    switch (reward) {
      case stock:
        description = `Stock++: ${REWARD_STOCK.symbol} ${REWARD_STOCK.share} shares`;
        receiveShare(REWARD_STOCK);
        break;
      case money:
        description = `Money++: $${REWARD_MONEY_AMOUNT}`;
        receiveMoney(REWARD_MONEY_AMOUNT);
        break;
      default:
        description = 'Insider News: blablablablabla...';
        break;
    }
    return (
      <Fragment>
        <h2>{description}</h2>
        <img src={reward} alt="Reward" width="400" height="400" />
      </Fragment>
    );
  };
  const revealCard = () => {
    setCardIsRevealed(true);
    updatePreviousRewardTime();
  };
  const showCard = () => {
    const choices = [stock, money, news];
    const reward = choices[_getRandomInt(choices.length)];
    return _makeReward(reward);
  };
  return (
    <Card className="h-100">
      <Modal isOpen={dailyCheckInIsOpen} toggle={closeDailyCheckInModal} centered size="lg">
        <ModalHeader>{cardIsRevealed ? 'Congratulations!' : 'Choose your lucky card!'}</ModalHeader>
        <ModalBody>
          {cardIsRevealed
            ? showCard()
            : _.range(CARD_COUNT).map((_ele, index) => {
                return (
                  <input
                    key={index}
                    type="image"
                    src={card}
                    name="saveForm"
                    className="btTxt submit"
                    id="saveForm"
                    width="250"
                    height="250"
                    onClick={revealCard}
                  />
                );
              })}
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default DailyCheckInModal;
