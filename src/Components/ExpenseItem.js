import React from 'react';
import PropTypes from 'prop-types';

const ExpenseItem = ({ spending }) => {

    const {name, expense} = spending;

    return (
        <li className="gastos">
            <p>
                {name}

                <span className="gasto">$ {expense} </span>
            </p>
        </li>
    );
}

ExpenseItem.propTypes = {
    spending: PropTypes.object.isRequired
}

export default ExpenseItem;