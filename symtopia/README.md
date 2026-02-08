# 🏥 SymptoMap – AI-Based Disease Outbreak Prediction System

An AI-powered early disease outbreak prediction system using anonymous symptom data from Tamil Nadu, India.

## 🎯 Project Overview

SymptoMap collects anonymous symptom reports from users across Tamil Nadu and uses machine learning to predict potential disease outbreaks. The system provides real-time risk visualization on an interactive dashboard.

## ✨ Features

- **Anonymous Symptom Reporting**: Privacy-first data collection
- **Real-time Dashboard**: Interactive map showing outbreak risk levels
- **District-wise Analysis**: Track disease patterns across Tamil Nadu
- **Risk Assessment**: AI-powered clustering and prediction
- **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **React Router** for navigation
- **Leaflet** for interactive maps
- **CSS** for styling

### Backend
- **Firebase Firestore** for database
- **Firebase Authentication** (anonymous)
- **Firebase Cloud Functions** (planned)

### Machine Learning
- **Python** with scikit-learn
- **KMeans Clustering** for pattern detection
- **LSTM** for outbreak prediction (planned)

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Python 3.8+ (for ML components)

### Setup

1. Clone the repository
```bash
git clone https://github.com/kapoorraghav206-gif/SymptoMap-Disease-Prediction.git
cd SymptoMap-Disease-Prediction
```

2. Install dependencies
```bash
npm install
```

3. Set up Firebase
- Create a Firebase project at [firebase.google.com](https://firebase.google.com)
- Enable Firestore Database
- Copy your Firebase config to `src/firebase.js`

4. Run the development server
```bash
npm run dev
```

5. Open your browser at `http://localhost:5173`

## 🎨 Project Structure

```
symtopia/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main pages (Home, Report, Dashboard)
│   ├── utils/           # Helper functions and constants
│   ├── firebase.js      # Firebase configuration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── package.json         # Dependencies
```

## 🚀 Usage

1. **Report Symptoms**: Navigate to the Report page and submit anonymous symptom data
2. **View Dashboard**: Check real-time outbreak risk levels across Tamil Nadu districts
3. **Filter Data**: Use filter buttons to view specific risk levels (High, Medium, Low)

## 🔐 Privacy & Security

- All symptom reports are **100% anonymous**
- No personal information is collected
- Data is used solely for outbreak prediction
- Firebase security rules ensure data integrity

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Raghav Kapoor**
- GitHub: [@kapoorraghav206-gif](https://github.com/kapoorraghav206-gif)

## 🙏 Acknowledgments

- OpenStreetMap for map tiles
- Firebase for backend infrastructure
- React and Vite communities

---

**Note**: This is a demo project for educational purposes. For production deployment, additional security measures and testing are required.
