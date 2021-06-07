import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { BsArrowLeft } from 'react-icons/bs'

import '../styles/CountryDetails.scss'

const CountryDetails = ({ countries }) => {

    const params = useParams();
    const country = countries.find(c => c.name === params.country);
    console.log(country)


    return (
        <>
            <div>
                <Link className="country-details__btn" to="/">< BsArrowLeft /><span>Back</span></Link>
            </div>
            {!country && <Loader />}
            {country && (
                <div className="country-details">
                    <img className="country-details--flag" src={country.flag} alt={country.name} />
                    <div className="country-details--content">
                        <h2>{country.name}</h2>
                        <div className="country-details__info">
                            <div className="country-details__one">
                                <p><b>Native name:</b> {country.nativeName} </p>
                                <p><b>Population:</b> {country.population}</p>
                                <p><b>Region: </b>{country.region}</p>
                                <p><b>Sub Region: </b>{country.subregion}</p>
                                <p><b>Capital: </b>{country.capital}</p>
                            </div>
                            <div className="country-details__two">
                                <p><b>Top Level Domain:</b> {country.topLevelDomain[0]}</p>
                                <p><b>Currencies:</b> {country.currencies.map(currency => `${currency.name}, `)}</p>
                                <p><b>Languages: </b>{country.languages.map(language => `${language.name}, `)}</p>
                            </div>
                        </div>
                        <div className="country-details__borders">
                            {country.borders.length === 0 ? null : <h3>Border Countries:</h3>}
                            {country.borders.length !== 0 ? (
                                country.borders.map(border => <button className="country-borders__btn" key={border}>{border}</button>)
                            ) : null}

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CountryDetails;