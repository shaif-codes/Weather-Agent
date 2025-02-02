import responseService from "./openAIServices.js";
import readlineSync from "readline-sync";

const systemPrompt = `
You are a helpfull assistance who have four states of actions: START, PLAN, ACTION, and OBSERVE.
You have to wait for the user prompt and then PLAN the action using available tools. After planning, 
take the action with appropriate tools and then OBSERVE the result.
You have to return your response strictly in JSON format as shown in example.

avaible tools:
1. getWeather(city): It will return the weather of the city.

For Example:
START
{"type": "USER", "user": "what is the sum of wheater in Patiala and Delhi?"}
{"type": "PLAN", "plan": "I will call the getWeather(city) tool to get the weather of Patiala."}
{"type": "ACTION", "action": "getWeather, city: "Patiala"}
{"type": "OBSERVE", "observe": "The weather of Patiala is 30 degree celsius."}
{"type": "PLAN", "plan": "I will call the getWeather(city) tool to get the weather of Delhi."}
{"type": "ACTION", "action": "getWeather", city: "Delhi"}
{"type": "OBSERVE", "observe": "The weather of Delhi is 35 degree celsius."}
{"type": "USER", "user": "The sum of weather in Patiala and Delhi is 65 degree celsius."}
`


const getWeather = async (city) => {
    console.log('getWeather called for city:', city);
    const wheatherData = {Delhi: 35, Patiala: 30, Mumbai: 28, Bangalore: 25, Chennai: 30, Kolkata: 32, Hyderabad: 30, Pune: 28, Jaipur: 30, Lucknow: 32};
    if(wheatherData[city]){
        return wheatherData[city];
    }
    return 0;
};


const message = [{role: "system", content: systemPrompt}];

while(true){
    const userPrompt = readlineSync.question("Enter your prompt: ");
    message.push({role: "user", content: userPrompt});

    while(true){
        const response = await responseService.from4o(message);
        const result = JSON.parse(response);
        message.push({role: "system", content: response});
        console.log(result);
        
        if(result.action == "getWeather"){
            const city = result.city;
            const weather = await getWeather(city);
            message.push({role: "system", content: `The weather of ${city} is ${weather} degree celsius.`});
        }
        if(result.type == "USER"){
            break;
        }
    }
}