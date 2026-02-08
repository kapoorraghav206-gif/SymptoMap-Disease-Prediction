# SymptoMap Backend Startup Script

Write-Host "=" -NoNewline -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan
Write-Host "  🩺 SymptoMap ML Backend - Starting..." -ForegroundColor Green
Write-Host ("=" * 61) -ForegroundColor Cyan

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✅ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python not found. Please install Python first." -ForegroundColor Red
    exit 1
}

# Check if required packages are installed
Write-Host "`n📦 Checking dependencies..." -ForegroundColor Yellow

$requiredPackages = @("flask", "flask-cors", "joblib", "numpy", "scikit-learn")
$missingPackages = @()

foreach ($package in $requiredPackages) {
    pip show $package 2>$null | Out-Null
    if ($LASTEXITCODE -ne 0) {
        $missingPackages += $package
    }
}

if ($missingPackages.Count -gt 0) {
    Write-Host "⚠️  Missing packages: $($missingPackages -join ', ')" -ForegroundColor Yellow
    Write-Host "📥 Installing missing packages..." -ForegroundColor Yellow
    pip install -r requirements.txt
} else {
    Write-Host "✅ All dependencies installed" -ForegroundColor Green
}

# Check if model files exist
Write-Host "`n🤖 Checking ML model files..." -ForegroundColor Yellow

if (Test-Path "models\disease_model.pkl") {
    Write-Host "✅ disease_model.pkl found" -ForegroundColor Green
} else {
    Write-Host "❌ disease_model.pkl NOT found in models\" -ForegroundColor Red
    exit 1
}

if (Test-Path "models\label_encoder.pkl") {
    Write-Host "✅ label_encoder.pkl found" -ForegroundColor Green
} else {
    Write-Host "❌ label_encoder.pkl NOT found in models\" -ForegroundColor Red
    exit 1
}

# Start Flask server
Write-Host "`n🚀 Starting Flask server..." -ForegroundColor Green
Write-Host ("=" * 61) -ForegroundColor Cyan
Write-Host ""

python app.py
