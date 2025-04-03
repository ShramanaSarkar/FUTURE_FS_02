# WEATHER DASHBOARD

## TASK 2

🔹 Key Features:  
✔ Users can search for weather by city or region.  
✔ Displays current temperature, humidity, and forecast data.  
✔ Option to save favorite cities for quick access.  

## Steps to Get Your API Key:

1. Go to OpenWeatherMap  
* Visit the OpenWeatherMap website.  
* If you don’t have an account, sign up (it's free).  
* If you already have an account, log in.  

2. Get Your API Key  
* After logging in, go to the API Keys page.  
* Click "Create Key", give it a name (e.g., "WeatherDashboardApp"), and it will generate a key for you.

3. Activate the API Key  
* OpenWeatherMap may take a few hours to activate your key.  
* If your key doesn’t work immediately, wait 10–15 minutes and try again.

4. Use the API Key in Your Project  
* Copy the API key and replace "YOUR_OPENWEATHERMAP_API_KEY" in your code:
```
const API_KEY = "your_actual_api_key_here";
```
* In the Spring Boot backend:
```
private static final String API_KEY = "your_actual_api_key_here";
```