import axios from 'axios'

export const fetchWeather = (query) => async (dispatch) =>{
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: query,
            appid: "1bb1e8cf24b562fc0096e92f1092a3ab"
        },
    })
    dispatch({
        type: 'FETCH_WEATHER',
        payload: response.data
    })
}