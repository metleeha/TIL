# OpenShift 개요

> Red Hat OpenShift 를 소개합니다.



## Red Hat OpenShift?

Openshift는 RedHat에서 제공하는 PaaS 솔루션입니다. 엔터프라이즈에 Docker와 Kuberentes를 제공하고 확장형 컨테이너 애플리케이션 플랫폼입니다. 또한, 신속한 배포를 위해 DevOps 도구를 사용해 Kubernetes 지원합니다. 

> 쿠버네티스와 공통점이 많기 때문에 자주 비교되고 있고 이 부분은 따로 포스팅으로 정리하도록 하겠습니다. 



Openshift Container Platform( 최신버전: v.4.4)과 RHEL(최신버전: v.8.2)은 현재 IT 업계에서 가장 인기있는 컨테이너 기술 표준을 완벽하게 지원하면서 기업 사용자들이 사용할 수 있도록 최적화 시킨 것이 특징입니다. 

> **레드헷 엔터프라이즈 리눅스(RHEL)**
>
> 레드헷이 유료로 기술 지원하는 기업용 리눅스 입니다. 



컨테이너 기술의 이식성을 이용해 다양한 클라우드 환경에서 운영 가능하며, 클라우드 네이티브 앱 개발도 쉽게 가능할 수 있도록 여러 도구를 제공합니다. 



### OpenShift Container Platform

- 레드헷이 제공하는 엔터프라이즈 버전의 컨테이너 플랫폼입니다.
- 라이센스를 구매해 사용하며, 전체 인프라와 설치 및 관리가 가능합니다.
- 고객이 전체 플랫폼을 소유할 수 있기 때문에 on-premise 환경 및 퍼블릭 클라우드에 모두 설치 사용 가능합니다.

#### OpenShift Container Platform Architecture Overview

OCP 버전 3.4 릴리즈 시에 업데이트 되었던 아키텍처 그림입니다. 

전체적인 구성을 이해하기 위해 첨부했습니다. 쿠버네티스를 공부해본 분들이라면 대략적인 구성이 비슷한 것을 확인하실 수 있을 것입니다.

마스터노드에 `API/Authentication`을 통해서 워커노드와 통신 및 인증을 관리하고, `Data Store` 에 이미지를 저장 관리하며, `Scheduler` , `Management/Replication` 을 통해 pod 배치 작업을 관리하고 리플리셋을 관리합니다. 쿠버네티스와 마찬가지로 영구볼륨을 제공하고 있습니다.

![](https://media.vlpt.us/images/hamon/post/e77aa9a2-e249-4843-b61f-e04d67be595e/download%20(1).png)

origin: [docs.openshift.com](https://docs.openshift.com/container-platform/3.4/architecture/index.html)

가장 최근 버전인 4.4 릴리즈 문서를 살펴보면 워크로드, `OpenShift Kubernetes Engine` 기능을 업그레이드해 기능을 소개했습니다. 크게 클라우드 네이티브 앱 개발,  개발 생산성이라는 세가지 항목으로 기능을 나누어 소개하고 있습니다. `Cluster Services` 를 통해 운영 시에 활용할 수 있는 여러 서비스(자동화 툴, 모니터링, 레지스트리, 네트워킹, 라우터 등)를 갖춘 것 또한 확인할 수 있었습니다. 

![](https://media.vlpt.us/images/hamon/post/1f707c34-9f77-4979-9535-641485ab1ea1/download.png)

origin: [docs.openshift.com](https://docs.openshift.com/container-platform/4.4/welcome/oke_about.html)

#### OpenShift 4 의 새로운 기능

- Red Hat Enterprise Linux CoreOs 개정판 설치
- 쿠버네티스 오퍼레이터 프레임워크 성능 개선 
- Openshift 서비스 메쉬 - 분산형 애플리케이션 복구 능력 성능 향상
- Knative 프레임워크 - 이벤트 기반(event-driven) 애플리케이션 구축, 서비스, 실행에 친화적인 서버리스(serverless) 프레임워크 구성 요소



## OpenShift 대표 기능 소개

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



<br>

## Reference

- OpenShift Docs, (July 13, 2020), https://docs.openshift.com/
- OpenShift Blog, (July 13, 2020), https://openshift.com/blog
- shakey7, (July 13, 2020), http://blog.naver.com/PostView.nhn?blogId=shakey7&logNo=221671778219



