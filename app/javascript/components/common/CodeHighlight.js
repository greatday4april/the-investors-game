import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useContext } from 'react';

import AppContext from '../../context/Context';
import PropTypes from 'prop-types';
import darkTheme from 'prism-react-renderer/themes/dracula';
import lightTheme from 'prism-react-renderer/themes/duotoneLight';

const getFormattedCode = (code, language) => {};

const CodeHighlight = ({ code, language }) => {
  const { isDark } = useContext(AppContext);
  return (
    <Highlight
      {...defaultProps}
      code={language === 'html' ? getFormattedCode(code, language) : code}
      language={language}
      theme={isDark ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className}`}
          style={{
            ...style,
            padding: '10px',
            borderRadius: '4px',
            border: 0
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
CodeHighlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

CodeHighlight.defaultProps = { language: 'html' };

export default CodeHighlight;
