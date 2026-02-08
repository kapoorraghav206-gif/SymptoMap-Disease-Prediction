# Quick Start Guide

## Start the Backend

**Option 1: Using startup script (Recommended)**
```powershell
.\start.ps1
```

**Option 2: Manual start**
```powershell
python app.py
```

Server will run on: **http://localhost:5000**

## Test the API

Open browser and visit: http://localhost:5000

You should see:
```json
{
  "status": "online",
  "message": "SymptoMap ML API is running"
}
```

## Frontend Integration

Your React app should call:
```javascript
fetch('http://localhost:5000/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    difficultyBreathing: true,
    cough: false,
    fatigue: true,
    fever: false,
    headache: false,
    nausea: false
  })
})
```

## Backend is Ready! ✅
