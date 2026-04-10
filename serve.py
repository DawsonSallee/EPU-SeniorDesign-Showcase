"""
Tiny dev server — run this then open http://localhost:8000 in Chrome.
"""
import http.server
import os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "presentation"))
print("Serving presentation at http://localhost:8000")
print("Press Ctrl+C to stop.\n")
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=8000)
