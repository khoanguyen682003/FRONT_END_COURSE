import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faCloudShowersHeavy, faCloudRain, faWind } from '@fortawesome/free-solid-svg-icons';
export const informationData = [
    {
        icon: {faWater},
        infor: 'Humidity',
        stat: '50%'
    },
    {
        icon: {faCloudShowersHeavy},
        infor: 'Air Pressure',
        stat: '1009.483 PS'
    },
    {
        icon: {faCloudRain},
        infor: 'Chance of rain',
        stat: '0%'
    },
    {
        icon: {faWind},
        infor: 'Wind speed',
        stat: '1.4 km/h'
    },
]