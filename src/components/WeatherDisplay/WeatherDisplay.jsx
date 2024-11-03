
function WeatherDisplay({ weather }) {
    return (
        <div>
            <h2>Weather in {weather.city}</h2>
            <p>Temperature : {weather.temp}°C</p>
            <p>Conditions: {weather.conditions}</p>
        </div>
    );
}

export default WeatherDisplay;