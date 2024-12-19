@echo off
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000') do taskkill /PID %%a /F
npx mock-json-server db.json --port=8000
pause