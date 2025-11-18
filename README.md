<div align="center">

# 🌤️ Weather App

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=22&pause=1000&color=007BFF&center=true&vCenter=true&width=600&lines=Real-Time+Weather+Data;OpenWeather+API+Integration;Modern+React+Application" alt="Typing SVG" />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

**A clean, responsive weather application built with React that provides real-time weather information for any city worldwide using the OpenWeather API.**

</div>

---

## 🎯 Overview

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="250">
</div>

This Weather App is a modern, user-friendly application that fetches and displays current weather information for cities around the world. Built with React and styled with custom CSS, it features a beautiful gradient design and responsive layout that works seamlessly across all devices.

## ✨ Features

<table>
<tr>
<td width="50%">

### 🌍 **Core Functionality**
- 🔍 **City Search**: Enter any city name to get weather data
- 🌡️ **Temperature Display**: Current temperature in Celsius
- 💨 **Wind Information**: Real-time wind speed data
- ☁️ **Weather Conditions**: Detailed weather descriptions
- 🗺️ **Location Details**: City name and country display

</td>
<td width="50%">

### 🎨 **Design & UX**
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Beautiful gradient background and clean layout
- ⚡ **Fast Performance**: Quick API responses and smooth interactions
- 🔄 **Real-time Updates**: Fresh weather data with each search
- 💡 **User-friendly**: Simple, intuitive interface

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

### Frontend Technologies
<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
</p>

### API & HTTP
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
<img src="https://img.shields.io/badge/OpenWeather-EA6100?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeather API"/>
</p>

### Development Tools
<p>
<img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white" alt="Create React App"/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM"/>
</p>

</div>

## 🚀 Quick Start

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="250">
</div>

### 📋 Prerequisites
- Node.js (≥14.0)
- npm or yarn
- OpenWeather API key

### 🔧 Installation

**1. Clone the repository**
```bash
git clone https://github.com/Abdul-SubhanCheema/Weather-App.git
cd Weather-App
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure API Key**
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Get your free API key
- Update the API key in `src/App.js`:
```javascript
const API_KEY = 'your_api_key_here';
```

**4. Start the application**
```bash
npm start
```

**5. Open your browser**
Visit `http://localhost:3000` to see the app in action!

## 📁 Project Structure

```
Weather-App/
├── 🎨 public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # App favicon
│   └── manifest.json       # PWA configuration
├── ⚛️ src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── weatherform.js      # Search form component
│   ├── weatherdisplay.js   # Weather data display component
│   └── index.js            # Application entry point
├── 📦 package.json         # Dependencies and scripts
└── 📖 README.md           # Project documentation
```

## 🧩 Component Architecture

### 🏗️ App.js (Main Container)
- Manages application state
- Handles API calls to OpenWeather
- Coordinates data flow between components

### 📝 WeatherForm.js (Search Component)
- User input for city names
- Form submission handling
- Clean, accessible form design

### 📊 WeatherDisplay.js (Data Display)
- Weather information presentation
- Conditional rendering based on data availability
- Formatted temperature, wind, and location data

## 🎨 Design Features

### Visual Design
- **Gradient Background**: Beautiful blue gradient (`#4facfe` to `#00f2fe`)
- **Card-based Layout**: Clean white container with rounded corners
- **Shadow Effects**: Modern box-shadow for depth
- **Color Scheme**: Professional blue (`#007bff`) accent color

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Flexible Layout**: Adapts to different screen sizes
- **Touch-friendly**: Large buttons and input fields
- **Media Queries**: Custom styling for small screens

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |

## 📡 API Integration

### OpenWeather API
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: City name, units (metric), API key
- **Response**: JSON with weather data including:
  - Temperature and "feels like" temperature
  - Weather description and conditions
  - Wind speed and direction
  - Location details

### Error Handling
- Network error management
- Invalid city name handling
- Loading states and user feedback

## 🌟 Future Enhancements

- 🔄 **5-day Forecast**: Extended weather predictions
- 📍 **Geolocation**: Auto-detect user location
- 🌡️ **Unit Toggle**: Celsius/Fahrenheit switching
- 💾 **Local Storage**: Save favorite cities
- 🌈 **Weather Icons**: Visual weather representations
- 📱 **PWA Features**: Offline capability and app installation

## 🤝 Contributing

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="200">
</div>

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

<div align="center">

**Abdul Subhan Cheema**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abdul-SubhanCheema)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdulsubhan303)

<img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" width="100">

### 🌤️ *"Making weather information accessible and beautiful"* ✨

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="500">

**⭐ If this project helped you, consider giving it a star!**

</div>
