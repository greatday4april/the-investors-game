const insertStylesheet = ({ isRTL, isDark }, cb) => {
  const link = document.createElement('link');
  // link.href = `/assets/theme${isDark ? '-dark' : ''}.scss`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.className = 'theme-stylesheet';

  link.onload = cb;
  document.getElementsByTagName('head')[0].appendChild(link);
  document.getElementsByTagName('html')[0].setAttribute('dir', isRTL ? 'rtl' : 'ltr');
};

export default ({ isRTL, isDark }, cb) => {
  Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(link => link.remove());
  insertStylesheet({ isRTL, isDark }, cb);
};
