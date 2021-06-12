import React, { useState } from 'react';
import Loader from './Loader';
import InputFields from './InputFields';
import CountryCard from './CountryCard';
import ShowError from './ShowError';

import '../styles/CountriesList.scss'

const CountriesList = ({ countries, setCountries }) => {

    const [fetchError, setFetchError] = useState(null)

    return (
        <>
            <InputFields countries={countries} setCountries={setCountries} setFetchError={setFetchError} />
            <div className="main-content">
                {countries.length === 0 && <Loader />}
                {fetchError !== null ? (<ShowError fetchError={fetchError} />) : (countries.map(country => <CountryCard country={country} key={country.name} />))}
            </div>
        </>
    )

}

export default CountriesList;