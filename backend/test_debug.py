import sys
sys.path.insert(0, r'c:\Users\kapoo\OneDrive\Desktop\symtopia\backend')

from flask import Flask, request
import json

test_app = Flask('debug')

@test_app.route('/test', methods=['POST'])
def test():
    print('=== DEBUGGING REQUEST ===')
    print('request.json:', request.json)
    print('request.get_json():', request.get_json())
    print('request.get_json(force=True):', request.get_json(force=True))
    print('request.data:', request.data)
    print('========================')
    data = request.get_json(force=True)
    features = [
        int(bool(data.get('difficultyBreathing', False))),
        int(bool(data.get('cough', False))),
        int(bool(data.get('fatigue', False))),
        int(bool(data.get('fever', False))),
        int(bool(data.get('headache', False))),
        int(bool(data.get('nausea', False))),
        int(bool(data.get('bodyache', False)))
    ]
    print('Features:', features)
    print('Count:', len(features))
    return 'OK'

with test_app.test_client() as c:
    r = c.post('/test', 
        json={'difficultyBreathing':True,'cough':True,'fatigue':False,'fever':True,'headache':False,'nausea':False,'bodyache':False},
        headers={'Content-Type':'application/json'})
