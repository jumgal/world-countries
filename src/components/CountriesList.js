import React from 'react';
import Loader from './Loader';
import InputFields from './InputFields';
import CountryCard from './CountryCard';

import '../styles/CountriesList.scss'

const CountriesList = ({ countries }) => {

    return (
        <>
            <InputFields countries={countries} />
            <div className="main-content">
                {countries.map(country => <CountryCard country={country} key={country.name} />)}
            </div>
        </>
    )

}

export default CountriesList;