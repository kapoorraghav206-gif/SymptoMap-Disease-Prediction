import sys
sys.path.insert(0, r'c:\Users\kapoo\OneDrive\Desktop\symtopia\backend')

import app

data = {
    'difficultyBreathing': True,
    'cough': True,
    'fatigue': False,
    'fever': True,
    'headache': False,
    'nausea': False,
    'bodyache': False
}

with app.app.test_client() as client:
    r = client.post('/predict', json=data)
    print('Status:', r.status_code)
    print('Response:', r.get_json())
