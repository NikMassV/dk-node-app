Create image:
- docker build . --tag=nodeapp:latest
- docker build . --tag=nodeapp:V2.0

Run container:
- docker run -p 4200:4200 nodeapp:latest
- docker run -p 7070:4200 nodeapp:V2.0
