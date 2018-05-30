import React from 'react';

const StatelessComponent = (props) => {
  const {
    content = 'StatelessComponent'
  } = props;

  return (
    <div>
      { content }
    </div>
  );
};

export default StatelessComponent;
