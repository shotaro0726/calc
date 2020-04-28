import React from 'react';
import PropsTypes from 'prop-types';

const NumBtn = ({n, onClick}) => (
    <button onClick={onClick}>{n}</button>
);

NumBtn.propTypes = {
    onClick: PropsTypes.func.isRequired,
};

export default NumBtn;