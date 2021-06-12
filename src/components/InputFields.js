import React, { useEffect, useState } from 'react';
import '../styles/InputFields.scss';

const InputFields = ({ setCountries, setFetchError }) => {

    const [term, searchTerm] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {

        if (term !== "") {
            fetch(`https://restcountries.eu/rest/v2/name/${term}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('cannot find the country')
                    }
                    return res.json()
                })
                .then(data => setCountries(data))
                .catch(err => setFetchError(err.message))
        }
    }, [term, setCountries, setFetchError])


    useEffect(() => {
        try {
            if (region.toLowerCase() === "default" && region !== "") {
                const fetchAllCountries = async () => {
                    const resAll = await fetch('https://restcountries.eu/rest/v2/all')
                    const allCountries = await resAll.json()
                    setCountries(allCountries)
                }
                fetchAllCountries()
            } else if (region.toLowerCase() !== "default" && region !== "") {
                const fetchRegions = async () => {
                    const res = await fetch(`https://restcountries.eu/rest/v2/region/${region.toLowerCase()}`)

                    const regionCountries = await res.json()
                    setCountries(regionCountries)
                }
                fetchRegions()
            }

        } catch (error) {
            console.log(error.message)
        }
    }, [region, setCountries])

    return (
        <>
            <div className="input-field">
                <input
                    value={term}
                    onChange={(e) => searchTerm(e.target.value)}
                    className="input-field__search"
                    type="text" placeholder={`Search for a country`} />

                <select className="select-field__options" onChange={(e) => setRegion(e.target.value)} name="regions">
                    <option value="default">Filter By Region</option>
                    <option key="Africa" value="Africa">Africa</option>
                    <option key="Americas" value="Americas">Americas</option>
                    <option key="Asia" value="Asia">Asia</option>
                    <option key="Europe" value="Europe">Europe</option>
                    <option key="Oceania" value="Oceania">Oceania</option>
                </select>
            </div>


        </>
    )
}


export default InputFields;