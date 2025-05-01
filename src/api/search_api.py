from flask import Flask, request, jsonify
from flask_cors import CORS
from features.search import ScoredIndexSearch
import os

app = Flask(__name__)
CORS(app)

search_index = ScoredIndexSearch('posts', host='localhost', port=6379)

# Index markdown files on change to the folder
markdown_dir = os.path.join(os.path.dirname(__file__), '../assets/markdown')
for filename in os.listdir(markdown_dir):
    if filename.endswith('.md'):
        filepath = os.path.join(markdown_dir, filename)
        with open(filepath, 'r') as file:
            content = file.read()
            title = os.path.splitext(filename)[0]
            search_index.add_indexed_item(title, f"{title} {content}")

response, _ = search_index.search(query)

# @app.route('/search', methods=['GET'])
# def search():
#     query = request.args.get('q', '')  # Use 'q' as the query parameter
#     response, _ = search_index.search(query)
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return jsonify({'results': [{'title': r[0], 'snippet': ''} for r in response]})

# if __name__ == '__main__':
#     app.run(debug=True)
