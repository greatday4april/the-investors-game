import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context/Context';
import toggleStylesheet from './helpers/toggleStylesheet';
import { getItemFromStore, setItemToStore, themeColors } from './helpers/utils';

const Main = props => {
  const [isFluid, setIsFluid] = useState(getItemFromStore('isFluid', false));
  const [isRTL, setIsRTL] = useState(getItemFromStore('isRTL', false));
  const [isDark, setIsDark] = useState(getItemFromStore('isDark', false));
  const [isTopNav, setIsTopNav] = useState(getItemFromStore('isTopNav', false));
  const [isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed] = useState(
    getItemFromStore('isNavbarVerticalCollapsed', false)
  );
  const [currency, setCurrency] = useState('$');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpenSidePanel, setIsOpenSidePanel] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState(getItemFromStore('navbarStyle', 'vibrant'));

  const toggleModal = () => setIsOpenSidePanel(prevIsOpenSidePanel => !prevIsOpenSidePanel);

  const value = {
    isRTL,
    isDark,
    isFluid,
    setIsRTL,
    isTopNav,
    currency,
    setIsDark,
    setIsFluid,
    toggleModal,
    setIsTopNav,
    navbarStyle,
    setCurrency,
    showBurgerMenu,
    setNavbarStyle,
    isOpenSidePanel,
    setShowBurgerMenu,
    setIsOpenSidePanel,
    isNavbarVerticalCollapsed,
    setIsNavbarVerticalCollapsed
  };

  const setStylesheetMode = mode => {
    setIsLoaded(false);
    setItemToStore(mode, value[mode]);
    toggleStylesheet({ isRTL, isDark }, () => setIsLoaded(true));
  };

  useEffect(() => {
    setStylesheetMode('isFluid');
    // eslint-disable-next-line
  }, [isFluid]);

  useEffect(() => {
    setStylesheetMode('isRTL');
    // eslint-disable-next-line
  }, [isRTL]);

  useEffect(() => {
    setStylesheetMode('isDark');
    // eslint-disable-next-line
  }, [isDark]);

  useEffect(() => {
    setItemToStore('isNavbarVerticalCollapsed', isNavbarVerticalCollapsed);
    // eslint-disable-next-line
  }, [isNavbarVerticalCollapsed]);

  useEffect(() => {
    setItemToStore('isTopNav', isTopNav);
    // eslint-disable-next-line
  }, [isTopNav]);

  useEffect(() => {
    setItemToStore('navbarStyle', navbarStyle);
    // eslint-disable-next-line
  }, [navbarStyle]);

  if (!isLoaded) {
    toggleStylesheet({ isRTL, isDark }, () => setIsLoaded(true));

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: isDark ? themeColors.dark : themeColors.light
        }}
      />
    );
  }

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
