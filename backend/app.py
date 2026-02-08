from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)
@app.route("/", methods=["GET"])
def home():
    return """
    <h2>SymptoMap ML API – Live Demo</h2>
    <form id="predictForm">
        <h3>Select Symptoms:</h3>
        <label><input type="checkbox" id="difficultyBreathing"> Difficulty Breathing</label><br>
        <label><input type="checkbox" id="cough"> Cough</label><br>
        <label><input type="checkbox" id="fatigue"> Fatigue</label><br>
        <label><input type="checkbox" id="fever"> Fever</label><br>
        <label><input type="checkbox" id="headache"> Headache</label><br>
        <label><input type="checkbox" id="nausea"> Nausea</label><br>
        <label><input type="checkbox" id="bodyache"> Body Ache</label><br><br>
        <button type="button" onclick="predict()">Predict Disease</button>
    </form>
    <h3 id="result"></h3>

    <script>
        async function predict() {
            const features = ['difficultyBreathing', 'cough', 'fatigue', 'fever', 'headache', 'nausea', 'bodyache'];
            const data = {};
            features.forEach(f => data[f] = document.getElementById(f).checked);

            const response = await fetch('/predict', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const result = await response.json();
            document.getElementById('result').innerText = result.success ? 
                "Prediction: " + result.predicted_disease : "Error: " + result.error;
        }
    </script>
    """

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "models", "disease_model.pkl")
encoder_path = os.path.join(BASE_DIR, "models", "label_encoder.pkl")

model = joblib.load(model_path)
label_encoder = joblib.load(encoder_path)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(force=True)
        
        features = [
            int(bool(data.get("difficultyBreathing", False))),
            int(bool(data.get("cough", False))),
            int(bool(data.get("fatigue", False))),
            int(bool(data.get("fever", False))),
            int(bool(data.get("headache", False))),
            int(bool(data.get("nausea", False))),
            int(bool(data.get("bodyache", False)))
        ]
        
        features_array = np.array(features).reshape(1, -1)
        prediction = model.predict(features_array)
        disease = label_encoder.inverse_transform(prediction)[0]
        
        return jsonify({"success": True, "predicted_disease": disease})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

if __name__ == "__main__":
    print("✅ Backend running on http://127.0.0.1:5000")
    app.run(host="127.0.0.1", port=5000, debug=False)
