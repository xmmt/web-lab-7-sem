import { API_KEY } from '../config';

export const getLocationName = async ({latitude, longitude}) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    if (response.ok) {
        const json = await response.json();
        return json.name;
    }
    return '(._. )';    
};

export default getLocationName;