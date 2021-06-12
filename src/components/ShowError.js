import '../styles/Error.scss'

const ShowError = ({ fetchError }) => {
    return (
        <div className="error-container">
            <h1>Something goes wrong ....</h1>
            <p>{fetchError}</p>
        </div>
    )
}


export default ShowError;