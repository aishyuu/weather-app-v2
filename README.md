# Weather App

### Requirements for project
User Story: As a User, I want to get weather information on load

1. Get data from a weather API
    
    a. On website load, call data
    
    b. Use weatherapi because of their generous free tier
    
    
User Story: As a user, I want to see the current weather

2. Display weather API data

    a. Render the results through Divs and display on the web page
    
User Story: As a user, I want to change between Celsius and Fahrenheint temperatures

3. Change between Celsius and Fahrenheit through a button
    
    a. On button click, re-render page information from celsius to fahrenheit, and vice versa
    
    b. Should not have to recall the API to be able to change information

User Story: As a user, I want to search for weather information for any allowed location.

4. Implement a search bar that calls the API with inputted data
    
    a. Create a search bar that, when on submitting, calls the API using a specific query
    
    b. The page should not go into a loading state when the call is submitted.
    
    c. If the call returns in an error, display on screen (without reloading page)
    
    d. If the call returns in data, re-render the page with new data.
    

User Story: As a user, I want to have my temperature preferences saved.

5. Implement local storage

    a. On first ever load, create a local storage instance that saves the temperature preference to fahrenheit
    
    b. If the temperature button is clicked, the preference in local storage is changed
    
    c. On each subsequent load (including new calls for weather information), the preference should always be rendered