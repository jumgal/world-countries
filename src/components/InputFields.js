import '../styles/InputFields.scss';
import { AiOutlineSearch } from 'react-icons/ai'

const InputFields = () => {
    return (
        <div className="input-field">
            <input
                className="input-field__search"
                type="text" placeholder={"Search for a country"} />
            <select name="regions">
                <option value="default">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}


export default InputFields;