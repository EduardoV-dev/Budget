import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    message: string
}

const Error: React.FC<Props> = ({ message }) => (
    <p className="alert alert-danger error" data-testid='error-alert'>{message}</p>
);

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;