Create image:
- docker build . --tag=nodeapp:latest
- docker build . --tag=nodeapp:V2.0

Run container:
- docker run -p 4200:4200 nodeapp:latest
- docker run -p 7070:4200 nodeapp:V2.0

Publish to Docker Hub:
- docker tag nodeapp:latest nikmassv/nodeapp:latest
- docker push nikmassv/nodeapp:latest

Create deployment:
- kubectl create deployment nodeapp --image=nikmassv/nodeapp:latest

Add expose:
- kubectl expose deployment nodeapp --type=NodePort --port=4200

Get connection to a service:
- minikube service nodeapp

Update app image version:
- kubectl set image deployment/nodeapp nodeapp=nikmassv/nodeapp:V4.0

Set scaling:
- kubectl scale deployment nodeapp --replicas=2

Create deployments via manifest:
- kubectl apply -f nodeapp-deployment.yaml

Create service via manifest:
- kubectl apply -f nodeapp-service.yaml
