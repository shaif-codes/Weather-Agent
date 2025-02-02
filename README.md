## 📢 Notice Board  

> 🚀 This project is a work in progress!  
> I will **continuously upgrade** it with new features and improvements.  
> You are welcome to **contribute** and help make it even better!  
>
> ✅ Fork the repository  
> ✅ Make your improvements  
> ✅ Submit a pull request  
>
> **Your support is highly appreciated! 🎉**


🌦️ Weather Agent

Weather Agent is an AI-powered assistant that provides real-time weather information for various cities. It leverages OpenAI’s GPT models to understand user queries and fetch relevant weather data.

📂 Project Structure

.env
.gitignore
.vscode/
    settings.json
index.js
openAIServices.js
package.json

	•	.env – Stores environment variables (e.g., OpenAI API key).
	•	.gitignore – Specifies files and directories to be ignored by Git.
	•	.vscode/ – Contains Visual Studio Code settings.
	•	index.js – Main entry point of the application.
	•	openAIServices.js – Handles interactions with OpenAI’s API.
	•	package.json – Project metadata and dependencies.

🚀 Installation

1️⃣ Clone the Repository

```
git clone <repository-url>
cd weather-agent
```

2️⃣ Install Dependencies

```
npm install
```

3️⃣ Configure Environment Variables

Create a .env file and add your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key

🛠️ Usage

Start the application:

```
npm start
```

Then, enter a query like:

What is the weather in Delhi?

The assistant will respond with real-time weather information for the specified city.

🤖 AI Agents & Functional Calling with LLMs

🧠 What are AI Agents?

AI agents are intelligent software entities that perform tasks autonomously. They can understand user input, make decisions, and execute actions to achieve specific goals.

In this project, the AI agent interacts with users to fetch weather information dynamically.

⚡ How Functional Calling Works

Large Language Models (LLMs) like GPT-4 enable AI agents to:
	1.	Understand User Prompts – The model processes the query and determines the action.
	2.	Plan Actions – It decides which function to call based on the input.
	3.	Execute Actions – Calls the relevant function (e.g., getWeather(city)).
	4.	Observe Results – Responds to the user with the requested weather information.

🔄 Example Workflow

1️⃣ User Prompt
“What is the weather in Delhi?”

2️⃣ Plan
Calls getWeather("Delhi") to fetch weather data.

3️⃣ Action
Executes the function to retrieve real-time weather details.

4️⃣ Response
“The weather in Delhi is 35°C and sunny.”

👥 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any enhancements or bug fixes.

📜 License

This project is licensed under the ISC License.

Feel free to tweak this further based on your needs. Let me know if you need any modifications! 🚀
