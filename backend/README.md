# SymptoMap ML Backend

Flask API for disease prediction using Machine Learning.

## Setup

1. Install dependencies:
```powershell
pip install -r requirements.txt
```

2. Run the server:
```powershell
python app.py
```

Server runs on: http://localhost:5000

## API Endpoints

### GET /
Health check - returns API status

### POST /predict
Get disease prediction from symptoms

**Request Body:**
```json
{
  "difficultyBreathing": true,
  "cough": false,
  "fatigue": true,
  "fever": false,
  "headache": false,
  "nausea": false
}
```

**Response:**
```json
{
  "success": true,
  "predicted_disease": "Disease Name"
}
```

## Structure

```
backend/
├── models/
│   ├── disease_model.pkl
│   └── label_encoder.pkl
├── app.py
├── requirements.txt
└── .gitignore
```
