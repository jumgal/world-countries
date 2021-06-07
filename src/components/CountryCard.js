import '../styles/CountryCard.scss';
import { useHistory } from 'react-router-dom'

const CountryCard = ({ country }) => {

    let history = useHistory()

    const onCardClick = c => {
        history.push(`/details/${c.name}`)
    }

    return (
        <div className="country-card" onClick={() => onCardClick(country)}>
            <img src={country.flag} alt={country.name} />
            <div className="country-card-content">
                <h2 className="country-card__name">{country.name}</h2>
                <p><b>Population:</b> {country.population}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Capital:</b> {country.capital}</p>
            </div>
        </div>
    )
}


export default CountryCard;
