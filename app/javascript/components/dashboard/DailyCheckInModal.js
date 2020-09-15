import React, { useState, Fragment, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import card from '../../../assets/images/dailyCheckIn/Card.png';
import money from '../../../assets/images/dailyCheckIn/Money.png';
import stock from '../../../assets/images/dailyCheckIn/Stock.png';
import news from '../../../assets/images/dailyCheckIn/News.png';
import { burger } from '../../utils/svgs';
import { REWARD_STOCK, REWARD_MONEY_AMOUNT, HOURS_IN_DAY } from '../../utils/constants';
import moment from 'moment-timezone';
import _ from 'lodash';
const DailyCheckInModal = ({ previousRewardTime, updatePreviousRewardTime, receiveShare, receiveMoney }) => {
  const createModal = () => {
    let title, detail;
    if (isFirstTimePlay) {
      //firstPlayerModal
      title = 'Hey Investor, Game On!';
      detail = (
        <div className="new-line">
          <div>Hello,{burger}</div>
          <div>Here’s $1M dollars for you. Lets see how much money you can turn them into!</div>
          <button
            type="button"
            color={'light'}
            size="sm"
            className="px-2 sqr-blk-btn"
            style={{ display: 'flex', width: '128', height: '56' }}
            onClick={() => {
              setIsFirstTimePlay(false);
              updatePreviousRewardTime();
            }}
          >
            OK
          </button>
        </div>
      );
    } else if (cardIsRevealed) {
      //revealCardModal
      title = 'Congratulation!';
      detail = showCard();
    } else if (dailyCheckInIsOpen) {
      //dailyCheckInModal
      title = 'Choose your lucky card!';
      detail = _.range(CARD_COUNT).map((_ele, index) => {
        return (
          <input
            key={index}
            type="image"
            alt="RevealCard"
            src={card}
            name="saveForm"
            className="btTxt submit"
            id="saveForm"
            width="150"
            height="150"
            onClick={revealCard}
          />
        );
      });
    }
    return (
      <Modal
        className="shadowed-card"
        isOpen={dailyCheckInIsOpen || isFirstTimePlay}
        toggle={closeDailyCheckInModal}
        style={{ /*left: '330px', */top: '466px' }}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody
          style={cardIsRevealed ? {} : { display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
        >
          {detail}
        </ModalBody>
      </Modal>
    );
  };
  const CARD_COUNT = 3;
  const [isFirstTimePlay, setIsFirstTimePlay] = useState(false);
  const [cardIsRevealed, setCardIsRevealed] = useState(false);
  const [dailyCheckInIsOpen, setDailyCheckInIsOpen] = useState(false);
  const closeDailyCheckInModal = () => {
    setCardIsRevealed(false);
    setDailyCheckInIsOpen(false);
  };
  const _checkTimeDelta = () => {
    //first time play
    if (previousRewardTime === null) {
      setIsFirstTimePlay(true);
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
  });

  const _getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const _makeReward = (reward) => {
    let description = '';
    switch (reward) {
      case stock:
        description = `Stock++: ${REWARD_STOCK.symbol} ${REWARD_STOCK.share} shares`;
        break;
      case money:
        description = `Money++: $${REWARD_MONEY_AMOUNT}`;
        break;
      default:
        description = 'Insider News: blablablablabla...';
        break;
    }
    return (
      <Fragment>
        <h2>{description}</h2>
        <img src={reward} alt="Reward" width="144" height="170" />
        <br />
        <button
          type="button"
          color={'light'}
          size="sm"
          className="px-2 sqr-blk-btn"
          style={{ display: 'flex', width: '128', height: '56' }}
          onClick={() => {
            closeDailyCheckInModal();
            switch (reward) {
              case stock:
                receiveShare(REWARD_STOCK);
                break;
              case money:
                receiveMoney(REWARD_MONEY_AMOUNT);
                break;
              default:
            }
          }}
        >
          OK
        </button>
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
  return createModal();
};

export default DailyCheckInModal;
