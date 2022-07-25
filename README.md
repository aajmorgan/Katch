# Katch

## Jack's Website for Katch

### Should take in email and add to database

When starting, create a folder called Katch, and within that folder create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

in Katch, clone the frontend and backend

Hierarchy should be:

Katch-- 

  -venv
  
  -backend
  
  -katch-frontend
  
In katch-frontend, run this command to install dependencies
```bash
npm install
```

In backend, with venv running
```bash
pip install -r requirements.txt
```

And you should be good to go

## Launch

One terminal should be in the katch-frontend directory
```bash
npm start
```

In another terminal, cd into backend and run
```bash
python manage.py runserver
```
