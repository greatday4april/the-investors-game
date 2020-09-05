import React, { useState, useEffect } from 'react';
import { level1, level2, level3, level4, level5, level6, level7, level8, level9 } from '../../utils/svgs';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
const LevelUpModal = ({ level, needUpgradeLevel, upgradeLevel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hash = { 1: level1, 2: level2, 3: level3, 4: level4, 5: level5, 6: level6, 7: level7, 8: level8, 9: level9 };
  const checkUpgradeCondition = () => {
    setInterval(() => {
      if (needUpgradeLevel()) {
        setIsOpen(true);
      }
    }, 1000);
  };
  //didMount
  useEffect(() => {
    checkUpgradeCondition();
  });
  return (
    <Modal className="shadowed-card" isOpen={isOpen} style={{ left: '330px', top: '466px' }}>
      <ModalHeader>You are now a LEVEL-{level + 1} Trader!</ModalHeader>
      <ModalBody>
        <div className="new-line">
          {hash[level + 1]}
          <button
            type="button"
            color={'light'}
            size="sm"
            className="px-2 sqr-blk-btn"
            style={{ display: 'flex', width: '128', height: '56' }}
            onClick={() => {
              setIsOpen(false);
              upgradeLevel();
            }}
          >
            OK
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LevelUpModal;
