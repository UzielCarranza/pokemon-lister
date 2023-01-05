import React from 'react';
import Loading from 'react-loading-components';
import "../styles/utils.css";
// https://www.npmjs.com/package/react-loading-components

export const LoadingScreen = () => {

    return (
        <div className="centered">
            <Loading type='three_dots' width={200} height={200} fill='#f44242'/>
        </div>
    )
};
