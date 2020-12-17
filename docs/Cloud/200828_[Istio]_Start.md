# Istio 실습

## Istio 설치 

Install Istio on IBM Cloud Kubernetes Service
You must download and install Istio.

Either download Istio from https://github.com/istio/istio/releases or get the latest version by using curl:
```
curl -L https://git.io/getLatestIstio | sh -
```
Extract the installation files:
```
tar -xvzf istio-<istio-version>-linux.tar.gz
```

Add the istioctl client to your PATH variable. The <version-number> is in the directory name. For example, run the following command on a Mac OS or Linux system:
```
export PATH=$PWD/istio-<version-number>/bin:$PATH
```
Change the directory to the Istio file location.
```
cd istio-<version-number>
``` 
Install Istio into the istio-system namespace in your Kubernetes cluster:
```
kubectl apply -f $PWD/install/kubernetes/istio-demo.yaml
```
Ensure that the istio-* Kubernetes services are deployed before you continue:
```
kubectl get svc -n istio-system
``` 


Note: For Lite clusters, the istio-ingressgateway service will be in pending state with no external ip. This is normal.
Ensure the corresponding pods istio-citadel-*, istio-ingressgateway-*, istio-pilot-*, and istio-policy-* are all in the Running state before you continue.
```
kubectl get pods -n istio-system
```

Before your continue, make sure all the pods are deployed and running. If they're in pending state, wait a few minutes to let the deployment finish.

Congratulations! You successfully installed Istio into your cluster.

## Guestbook
Download the Guestbook app and create the Redis database
The Guestbook app is a sample app for users to leave comments. It consists of a web front end, Redis master for storage, and a replicated set of Redis slaves.

You will integrate the Guestbook app with the  Watson Tone Analyzer service. This service detects the sentiment in user comments and responds with emoticons. You need to deploy this app to your Kubernetes cluster.

Open your preferred terminal and download the Guestbook app from GitHub into the workshop directory:

git clone https://github.com/IBM/guestbook.git ../guestbook
Change to the app directory:

cd ../guestbook/v2
Next, you create a Redis database so that you can use to persist the data of your app. The Redis database comes with master and slave modules.

Create the Redis controllers and services for both the master and the slave:

kubectl create -f redis-master-deployment.yaml
kubectl create -f redis-master-service.yaml
kubectl create -f redis-slave-deployment.yaml
kubectl create -f redis-slave-service.yaml
Verify that the Redis controllers for the master and the slave are created:

kubectl get deployment


Verify that the Redis services for the master and the slave are created:

kubectl get svc


Verify that the Redis pods for the master and the slave are running:

kubectl get pods

## Install the Guestbook app with manual sidecar injection

In Kubernetes, a sidecar is a utility container in the pod, and its purpose is to support the main container.

For Istio to work, Envoy proxies must be deployed as sidecars to each pod of the deployment. You can inject the Istio sidecar into a pod in two ways:

Manually by using the istioctl CLI tool
Automatically by using the Istio Initializer
In this section, you will use the manual injection. Manual injection modifies the controller configuration, for example, deployment. It does this by modifying the pod template spec such that all pods for that deployment are created with the injected sidecar.

Inject the Istio Envoy sidecar into the guestbook pods and deploy the Guestbook app on to the Kubernetes cluster:

kubectl apply -f <(istioctl kube-inject -f ../v1/guestbook-deployment.yaml)
kubectl apply -f <(istioctl kube-inject -f guestbook-deployment.yaml)
There are two versions of deployments: a new version (v2) in the current directory and a previous version (v1) in a sibling directory. They will be used in future labs to showcase the Istio traffic routing capabilities.

Create the guestbook service:

kubectl create -f guestbook-service.yaml
Verify that the service was created:

kubectl get svc


For Lite clusters, the external IP will not be available. This is expected.

Verify that the pods are running:

kubectl get pods

Each guestbook pod has two containers in it:

- The guestbook container
- The Envoy proxy sidecar
