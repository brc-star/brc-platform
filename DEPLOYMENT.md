# Enterprise Deployment Guide: BRC STAR

---

## 1. Cloudflare DNS & Subdomain Routing

Configure Cloudflare CNAME records pointing to the ingress load balancer:

* `brcstar.in` $\rightarrow$ Next.js 16 Production Ingress
* `www.brcstar.in` $\rightarrow$ Redirect to apex `brcstar.in`
* `app.brcstar.in` $\rightarrow$ Ingress route to `/app`
* `investor.brcstar.in` $\rightarrow$ Ingress route to `/investor-portal`
* `partner.brcstar.in` $\rightarrow$ Ingress route to `/partner`
* `ops.brcstar.in` $\rightarrow$ Ingress route to `/operations`

---

## 2. Docker & Container Deployment

```bash
# Build production Docker container
docker build -t registry.brcstar.in/enterprise/platform:latest .

# Run with Docker Compose
docker-compose up -d --build
```

---

## 3. Kubernetes Deployment (Production Cluster)

```bash
# 1. Create namespace
kubectl create namespace production

# 2. Apply secrets & configmaps
kubectl apply -f k8s/configmap.yaml -n production
kubectl apply -f k8s/secrets.yaml -n production

# 3. Apply deployment & services
kubectl apply -f k8s/deployment.yaml -n production
kubectl apply -f k8s/service.yaml -n production

# 4. Apply Ingress with TLS
kubectl apply -f k8s/ingress.yaml -n production
```
