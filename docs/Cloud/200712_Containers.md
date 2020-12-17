# Containers

> 컨테이너 소개

## 컨테이너는?

컨테이너는 운영 체제를 가상화 한 형태이다.  컨테이너 한 단위는 작은 마이크로서비스 혹은 소프트웨어 프로세스부터 큰 규모의 애플리케이션까지 다양하다. 컨테이너 내부에는 필수 실행파일, 바이너리 코드, 라이브러리, 설정 파일 등이 있다. VM과 달리 컨테이너는 <u>OS 이미지를 포함하지 않는다</u>.그래서 오버헤드를 줄여 프로그램을 경량화하고 휴대성을 강화할 수 있다. 규모가 큰 배포에서는 여러개의 컨테이너들이 하나 혹은 여러 컨테이너 클러스터를 구성할 수 있다. 이런 클러스터들을 관리하는 도구가 바로 쿠버네티스이다. 

### VM vs Container



<figure>
    <img src="https://cdn-images-1.medium.com/max/1600/1*ZXebwLEaHI_a6Bv9_wdbFw.png" alt="vm_container" />
    <figcaption style="text-align:center;">origin: medium<figcaption>
<figure>

### 보충 자료

- (Video) Microsoft Azure,  https://www.youtube.com/watch?v=EUitQ8DaZW8

## 컨테이너의 장점

컨테이너는 개발자가 로컬, 온-프레미스 데이터 센터 및 클라우드에 이르기까지 여러 환경에서 응용 프로그램을 빌드, 테스트, 배포 및 재배치를 비교적 간편하게 할 수 있다.

- **적은 오버 헤드** : 컨테이너는 운영 체제 이미지가 포함되어 있지 않기 때문에 기존 혹은 하드웨어 가상머신 환경보다 적은 시스템 리소스를 필요로 한다.
- **휴대성 향상** : 컨테이너에서 실행되는 응용 프로그램은 여러 운영 체제 및 하드웨어 플랫폼에 쉽게 배포할 수 있다.
- **작동 일관성** : DevOps 팀이 컨테이너의 애플리케이션을 배치 위치와 관계없이 항상 동일한 환경에서 실행할 수 있다.
- **효율성 향상**: 컨테이너를 사용하면 응용 프로그램을 빠르게 배포, 패치 또는 확장할 수 있다.
- **개발 방법론 개선** : 컨테이너는 개발, 테스트 및 생산주기를 가속화하기 위한 DevOps의 업무를 지원한다.

## 컨테이너 표준 (Container Standards)

컨테이너 표준을 지정하지 않으면 작동 방식이 제각각에다 실행환경 또한 매번 설정해줘야하는 불편함이 있고, 애초에 기술이 탄생한 이유인 빠른 "lift and shift"가 불가능할 뿐더러 작업 효율 또한 떨어지겠죠? 

### 컨테이너 표준이 왜 중요하냐고?

- 고객의 투자 비용을 보호한다.
  - 전세계 곳곳에서 컨테이너로 시스템을 옮겨가고 있는데다, 이를 위한 트레이닝과 인프라, 소프트웨어 개발에 투자한 시간과 비용을 보호해준다.
- 상품과 도구들을 새로 개발할 수 있는 생태계를 가능하게 한다.
  - 클라우드 제공자, 소프트웨어 개발자, 커뮤니티 및 개인 컨트리뷰터들이 개발 도구를 만들 수 있도록 돕는다.

- 공통 커뮤니티들의 상호 이익을 위해 함께 일할 수 있도록 한다.
  - 경쟁사들 끼리 이익을 공유하면서 일종의 하나의 목표를 위해 함께 일할 수 있도록 한다.

### 다양한 표준이 존재 

- Open Containers Initiative(OCI) - Image Specification
- Open Containers Initiative(OCI) - Runtime Specification
- Container Runtime Interface(CRI)
- Container Network Interface(CNI)
- Container Network Model(CNM)

### 컨테이너 표준들 간의 관계도

>  컨테이너 표준에 관한 더 자세한 내용은 [유튜브](https://www.youtube.com/watch?v=rlj0UZlvGp0) 를 참고하세요.

![](https://images.velog.io/images/hamon/post/f748783d-2f7e-4e4c-8ee3-d20ac9515267/Container_Standards-1.png)

### OCI ?

[OCI(Open Contaner Initiative)](https://opencontainers.org/release-notices/overview/)는 컨테이너 포맷과 런타임에 대한 개방형 업계 표준을 만들기 위한 목적으로 Linux Foundation의 지원으로 구성된 오픈 거버넌스 조직이다. 2015년 6월 22일 Docker 사와 CoreOS 사가 각각 별도로 표준화를 진행하고 있던 컨테이너의 규격을 통일하는 것을 목적으로 Docker, CoreOs, AWS, Google, Microsoft, IBM 등 주요 플랫폼 벤더가 참여해 발족한 단체다. 2017년 7월 컨테이너 런타임과 이미지의 첫번째 표준인 "OCI v1.0"을 발표했다. 가장 최근 버전은 2020년 3월 27일 "OCI v1.0.2 runtime-spec"이다.

OCI에서 제시하는 표준 컨테이너의 5가지 원칙과 구성 요소에 대한 정보는 오픈 나루의 [포스팅](Onlinexperiences.com/scripts/Server.nxp)을 참고하자.

## 컨테이너 사용 사례

- 기존 애플리케이션을 클라우드 아키텍처로 "Lift and Shift" 한다.
- 컨테이너의 기존 애플리케이션을 리팩터링한다.
- 새로운 컨테이너 네이티브 애플리케이션을 개발한다.
- 마이크로 서비스 아키텍처를 잘 지원한다.
- 지속적인 통합 및 배포(CI/CD)를 위한 DevOps 지원을 제공한다. 컨테이너 기술은 동일한 이미지에서 간소화된 빌드, 테스트 및 배포를 지원한다.
- 반복적인 작업을 쉽게 배포할 수 있는 기능을 제공한다.



## Reference

- Pantheon, (July 12, 2020), https://pantheon.io/why-containers
- Netapp, (July 12, 2020), https://www.netapp.com/us/info/what-are-containers.aspx
- Netapp, (July 12, 2020), https://blog.netapp.com/blogs/containers-vs-vms/
- Scott MacCarty, (July 12, 2020), https://www.youtube.com/watch?v=rlj0UZlvGp0
- Opennaru, (July 12, 2020), http://www.opennaru.com/kubernetes/open-container-initiative/

