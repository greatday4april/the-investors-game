import React, { Fragment } from 'react';
export const AccountPage = ({historyBalances}) => (
        historyBalances.map(balance => {
            return (<Fragment>
                    <p>{`balance: ${balance.amount}`}</p>
                    <p>{`date: ${balance.date}`}</p>
                </Fragment>
                )
        })
);