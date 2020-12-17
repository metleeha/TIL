# OpenShift vs Kuberentes

Jaafar Chraibi는 레드헷 [블로그 포스팅](https://www.openshift.com/blog/enterprise-kubernetes-with-openshift-part-one)에서 쿠버네티스와 오픈시프트의 차이가 뭐냐고 물어보면, "엔진과 자동차의 차이가 뭔가요?" 라고 묻는 거랑 비슷하다고 합니다. 자동차는 자체가 완성된 상품으로 생산성을 즉시 높여줄 수 있는 제품인 반면 엔진은 다른 구성요소와 함께 조립하지 않는 한 어디에도 쓰기가 어렵겠죠. 

오픈시프트의 중심은 쿠버네티스로 만들어졌으며, 클러스터에 이용하는 오픈시프트 API 는 100% 쿠버네티스에서 사용하는 것과 같습니다. 오픈시프트는 개발자 관점에서는 PaaS, 프로덕션 관점에서 볼 때는 매우 안정적인 Container-as-a-Service입니다.

OpenShift CLI 도구는 `kubectl`과 명령어가 거의 비슷해서 사용하기 편리합니다. 

| kubectl                               | oc                               |
| ------------------------------------- | -------------------------------- |
| kubectl get pods                      | oc get pods                      |
| kubectl get namespaces \| grep sample | oc get namespaces \| grep sample |
| kubectl create -f deployment.yaml     | oc create -f deployment.yaml     |

OpenShift의 대표적인 이점들은 다음과 같습니다. 

- 빌드 및 트리거 
- 통합 이미지 레지스트리 및 이미지 스트림
- 젠킨스 지원
- 웹 콘솔

Kubernetes에서는 별도의 제품을 설치하고 통합해야하지만, OpenShift에서는 기본으로 제공되고 있는 기능들은 다음과 같습니다. 

- OAuth 서버
- 로깅 및 모니터링
- 네트워킹 솔루션
- 스토리지 제공 
- 롤아웃



## OpenShift 보완 기능

### 1. oc CLI 추가 기능

kubernetes의 경우 클러스터 내의 모든 사용자를 위한 샌드 박스 환경에 필요한 네임 스페이스를 각각 제공합니다. oc의 경우 `project` 를 통해 손쉽게 작업 환경을 전환할 수 있습니다.

클러스터 네임스페이스 하위 집합에만 액세스할 수 있는 사용자가 있다고 가정해봅니다. 쿠버네티스에서는 네임스페이스의 이름에 접근할 수 없지만, oc의 경우 프로젝트 안에 네임 스페이스 목록을 만들어두고 조회할 수 있습니다. 



- 네임스페이스와 클러스터 전환 시 사용하는 명령어 비교

#### kubernetes / kubectl

1. `myproject`를 위한 kubeconfig context 작성
2. `kubectl set-context ...`

#### openshift / oc

1. ```bash
   oc project "myproject"
   ```



### 2. 개발자 경험 향상

로컬에서 개발한 코드를 원격 openshift 클러스터에 신속하게 배포할 수 있는 도구로 odo 명령어를 사용할 수 있습니다. 

kubectl 기반으로 클러스터에 배포하는 과정과 oc/odo 사용을 비교해봅시다. 



#### kubernetes / kubectl

1. 소스 코드 클론

   ```bash
   git clone https://github.com/sclorg/nodejs-ex.git
   ```

2. 코드에서 이미지 빌드하는 **Dockerfile** 작성

   ```dockerfile
   FROM node
   WORKDIR /usr/src/app
   COPY package*.json ./
   COPY index.js ./
   COPY ./app ./app
   RUN npm install
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

3. 이미지 빌드 

   ```bash
   podman build ...
   ```

4. 레지스트리 로그인

   ```bash
   podman login ...
   ```

5. 레지스트리에 이미지 푸시

   ```bash
   podman push
   ```

6. manifest 파일 배포 

   ```bash
   kubectl apply -f .
   ```

#### openshift / oc

```bash
oc new-app https://github.com/sclorg/nodejs-ex.git --name myapp
```

#### openshift / odo

```bash
git clone https://github.com/sclorg/nodejs-ex.git
odo create component nodejs myapp
odo push
```



## OpenShift 와 Kubernetes의 차이점? 

결국, 프로덕션 등급의 플랫폼을 만들기 위해서는 Kubernetes만 설치해서는 충분하지 않습니다. 인증, 네트워킹, 보안, 모니터링, 로그 관리를 위한 추가 솔루션을 설치해야합니다. 인프라 엔지니어는 사용 가능한 여러 도구들 중에서 선택해야 합니다([CNCF](https://landscape.cncf.io/) 참조).  수많은 도구들을 설치하고, 플랫폼에 최적화하고 새 버전이 나올 때마다 업데이트와 테스트를 진행해야 하는 많은 노력이 필요합니다. 



OpenShift는 핵심 Kubernetes 기능을 바탕으로 프로덕션을 자신있게 운영할 수 있는 엔터프라이즈 급 솔루션을 필수 오픈 소스 도구들을 포함해 패키지로 제공합니다. 

> OpenShift 아키텍처 이미지

위 그림을 중심으로 kubernetes에 없는 openshift 기능을 소개합니다.

### 1. 신뢰할 수 있는 OS 기반: RHEL CoreOS / RHEL 

 Red Hat이 20년 이상 비니지스 애플리케이션을 위한 Linux를 제공해온 만큼 프로덕션 환경에서 컨테이너를 실행하기 위한 여러 경험을 담은 제품으로 실제 산업군에서 두루 쓰이고 있습니다.

RHEL CoreOS와 RHEL은 동일한 커널을 공유하며 kubernetes 클러스터를 대규모로 관리하는데 최적화되어 있습니다. 설치 공간을 줄이고, 클러스터 설치와 워커노드들의 auto-scaling, auto-remediation 조작을 쉽게 할 수 있도록 돕습니다. 베어 메탈 프라이빗 클라우드부터 퍼블릭 클라우드까지 동일한 작업 환경을 제공합니다. 

### 2. 자동화된 작업

설치 자동화와 day-2 operation은 오픈시프트의 핵심기능입니다. 

OpenShift 4는 운영이 쉽도록 레드헷 자체 솔루션과 제 3사 솔루션을 모아둔 카탈로그에서 검색하고 사용할 수 있습니다. (레드헷이 제공하는  [operators catalog](https://catalog.redhat.com/software/operators/search?rows=60&p=1), 레드헷이 만든 오픈 마켓 플레이스 [operatorhub.io](https://operatorhub.io/))

![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/operatorhub-1.png?width=1676&height=857&name=operatorhub-1.png)



### 3. 개발자 서비스

2011년 부터 PaaS 였던 오픈시프트는 개발자들에게 편의를 제공하기 위해 여러 기능을 갖추고 있습니다. Java, Node.js, PHP, Ruby, Python, Go 같은 언어 및 CI/CD, 데이터베이스 등과 같은 100가지가 넘는 서비스의 풍부한 [카탈로그](https://catalog.redhat.com/software/operators/search?rows=60&p=1)를 제공합니다. 

OpenShift4는 개발자 전용 그래픽 UI([개발자 콘솔](https://www.openshift.com/blog/openshift-4-3-deploying-applications-in-the-openshift-4-3-developer-perspective)) 을 추가해서 다양한 소스(git code, 외부 레지스트리, Dockerfile 등)에서 네임스페이스에 응용 프로그램을 쉽게 배포할 수 있도록 시각화해서 보여줍니다. 

![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/devconsole_ok-1.png?width=1676&height=835&name=devconsole_ok-1.png)

또한, OpenShift 자체에서 실행되는 완전히 컨테이너화 된 웹 IDE인 [Codeready Workspaces](https://developers.redhat.com/products/codeready-workspaces/overview)와 같은 개발자를 위한 서비스형 IDE를 제공합니다. 

![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/codeready-1.png?width=1680&height=854&name=codeready-1.png)



OpenShift는 플랫폼 자체에 CI/CD 기능을 제공합니다. 파이프라인 작성 속도를 높이기 위해 [DSL](https://github.com/openshift/jenkins-client-plugin)이 포함된 컨테이너화된 Jenkins 혹은 [Teckton](https://www.openshift.com/blog/cloud-native-ci-cd-with-openshift-pipelines)을 제공합니다. 두 솔루션 모두 OpenShift 콘솔과 통합해 파이프라인을 트리거할 수 있고 배포, 로그 등을 확인할 수 있습니다. 



### 4. 응용 서비스

OpenShift는 마이크로서비스와 서버리스 같은 최신 아키텍처를 지원합니다. OpenShift Service Mesh는 Istio, Kiali 및 Jaeger를 기본으로 제공합니다. OpenShift Serverless에는 Knative와 함께 Keda와 같은 Microsoft와의 공동 이니셔티브가 포함되어 Azure기능을 제공합니다. 

![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/Kiali-1.png?width=1611&height=1494&name=Kiali-1.png)

레거시 애플리케이션과 컨테이너 간의 격차를 줄이기 위해 컨테이너 네이티브 가상화(TechPreview)를 사용해서 레거시 가상머신을 OpenShift 자체로 마이그레이션해서 하이브리드 애플리케이션을 현실화하고 프라이빗 및 퍼블릭 클라우드 이식성을 향상시킬 수 있습니다. 

*이 부분에 관해서는 개인적으로 물음표가 생기는데요, 과연 기능적으로 원활하게 잘 돌아갈지 의문입니다.* 



### 5. 클러스터 서비스

모니터링, 중앙 집중식 로그 관리, 보안 메커니즘, 인증 및 권한 부여, 네트워킹 관리 등 지원 서비스를 오픈 소스를 통해 제공합니다(ElasticSearch, Prometheus, Grafana와 같은 솔루션). 즉, 이런 솔루션들을 조합해 레드헷이 구축한 대시 보드, 메트릭 및 경고가 포함되어 잇는 대규모 클러스터 모니터링 서비스를 제공합니다. 또한, 내장 OAuth 공급자를 통해 인증, LDAP, Active Directory, OpenID Connect 등과 같은 자격 증명 공급자와 통합해 필수 엔터프라이즈 서비스를 완성시킵니다. 

![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/grafana_cluster-1024x507-1.png?width=1536&height=761&name=grafana_cluster-1024x507-1.png)



![](https://www.openshift.com/hs-fs/hubfs/Imported_Blog_Media/alerting-1024x524-1.png?width=1536&height=786&name=alerting-1024x524-1.png)





## (보충자료) OpenShift 대표 기능 소개

### Source-to-Image(S2I)

> **참고자료:**
>
> - Source-to-Image Project: https://github.com/openshift/source-to-image/
> - OpenShift Blog: https://www.openshift.com/blog/source-image-s2i-deep-dive-ben-parees-openshift-commons-briefing-43

![](https://assets.openshift.com/hubfs/Imported_Blog_Media/S2IDeveloperWorkFlow1.png)

S2I는 소스 코드에서 Docker 이미지를 빌드하기 위한 툴킷과 워크 플로우를 의미합니다. 소스 코드를 Docker 컨테이너에 주입해서 해당 소스 코드를 실행할 준비를 하도록 즉시 빌드 가능한 이미지를 생성합니다. 

전통적인 컨테이너 응용 프로그램 배포 프로세스(Docker)의 경우 다음 4단계를 거칩니다. 

1. **소스 코드**

   소스 코드를 Java, NodeJS, Net, PHP 등 툴링이 액세스 할 수 있는 곳에 커밋합니다.

2. **빌드 도구 배포** 

   응용 프로그램을 종속성들과 함께 패키지화 합니다. npm, maven 등이 대표적인 빌드 도구 입니다. 

3. **이미지 빌드** 

   Dockerfile을 사용하여 애플리케이션 서버 및 배치 빌드 도구가 포함된 이미지를 작성합니다. 

4. **컨테이너화**

   이미지가 생성되면 응용 프로그램을 인스턴스화 한 다음 컨테이너 관리 플랫폼에 배포합니다. 

#### S2I 접근법

OpenShifts의 S2I 접근 방식은 위에서 2, 3 단계를 제거하려고 시도합니다. 

개발자가 관리하는 소스 코드 저장소에 OpenShift가 접근하고, 사용자를 대신해서 응용 프로그램을 빌드하고 컨테이너에 배포합니다. 

개발자가 Docker(및 Linux) 지식 없이도 배포할 수 있도록 자동화 파이프라인을 제공한다는 점이 가장 큰 이점입니다. 



*지금까지 OpenShift와 Kubernetes의 차이점에 대해 알아봤습니다(이 글에서는 OCP(Openshift Container Platform)을 오픈시프트라고 지칭했습니다). 사실상 오픈시프트는 쿠버네티스에다가 엔터프라이즈에 공급하기 위해 여러 기능을 덧붙인 플랫폼이기 때문에  오픈시프트의 기능에 대해 살펴본 셈이 되어버렸습니다...*

*어쨌든 아직 경험을 부족하지만 몇 번 써본 결과 MSA 개발에 최적화해 쿠버네티스를 사용한다면 굉장한 편의기능을 제공합니다.* 

*업데이트도 굉장히 자주 되기 때문에 엔지니어들이 쉴 날이 없을 것 같습니다...하지만 좋은 거...겠죠! 공부할 게 산더미 같네요. 다같이 힘냅시다.*



## Reference

- OpenShift Docs, (July 13, 2020), https://docs.openshift.com/
- OpenShift Blog, (July 13, 2020), https://openshift.com/blog
- Markus Hansmair, (July 13, 2020), https://labs.consol.de/devops/2019/02/11/k8s-vs-openshift.html
- Jaafar Chraibi, (July 13, 2020), https://www.openshift.com/blog/enterprise-kubernetes-with-openshift-part-one



