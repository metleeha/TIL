# OpenStack 



## OpenStack(오픈 스택)이란?

### 주요 참고 자료

- OpenStack 공개 소프트웨어 파헤치기: [slide](https://www.slideshare.net/ianychoi/openstack-111324177)

- OpenStack 이해 : [RedHat docs](https://www.redhat.com/ko/topics/openstack)

오픈 스택은 클라우드 환경에서 컴퓨팅 자원과 스토리지 인프라를 셋업하고 구동하기 위해 사용하는 오픈 소스 소프트웨어 프로젝트의 집합입니다. 

![](https://www.openstack.org/software/images/diagram/overview-diagram-new.svg)

origin: openstack.org

<br>

공통 인증 메커니즘이 있는 API 를 통해 관리 및 프로비저닝 된 데이터 센터 전체의 대규모 컴퓨팅, 스토리지 및 네트워킹 리소스 풀을 제어하는 거대한 클라우드 운영체제라고 할 수 있습니다. IaaS 기능 외에도 추가 구성요소로 오케스트레이션, 장애 관리 및 서비스 관리 기능 을 제공합니다. 

### OpenStack Overview Map 

![](https://www.openstack.org/assets/openstack-map/openstack-map-v20190601.svg)

origin: openstack.org

### OpenStack 구성 요소

| 자원 종류         | Open Stack 구성 요소                                  |
| ----------------- | ----------------------------------------------------- |
| Compute(컴퓨팅)   | Nova                                                  |
| Storage(스토리지) | Swift(Objects)<br />Cinder(Block)<br />Glance(Images) |
| Identity(인증)    | Keystone                                              |
| Network(네트워크) | (Quantum) Neutron                                     |

#### Sample Configuration : Web Application

오픈스택은 여러 산업군과 워크로드에 걸쳐서 케이스 스터디와 레퍼런스를 바탕으로 구성한 [아키텍처 샘플](https://www.openstack.org/software/sample-configs#web-applications)을 제공합니다. 

#### RedHat OpenStack Platform

레드헷에서 꼭 필수로 필요한 오픈스택 요소를 구성해서 플랫폼 현태로 배포 버전을 제공합니다. 





## 오픈소스 프로젝트 참여

### 1. 번역 참여

- 라이선스: Apache License v2
- 공식 문서: https://docs.openstack.org
- 번역: https://translate.openstack.org

### 2. 개발 참여

#### OpenStack 공식 프로젝트

- git 저장소: https://github.com/openstack
- 오픈소스 프로젝트 가이드: https://docs.openstack.org/infra/manual/creators.html
- 릴리즈 명에 "project:offical"이라는 태그를 붙여 공식 프로젝트를 표기

#### 릴리즈 주기

- 6개월 주기로 릴리즈 발표 

- 현재 릴리즈 버전: Ussuri(2020-05-13), Victoria(2020-10-14 예정)
- 릴리즈 문서 및 정보 집합 : https://release.openstack.org

#### Gerrit 및 OpenStack CI

- 개발자 커밋은 [Gerrit](https://review.openstack.org) 을 통해 패치 관리되고, 최종 머지되었을 때 반영 됩니다.
- 개발자가 올린 패치를 테스트하기 위해 OpenStack CI에서 tox 등에 작업을 확인할 수 있습니다.

#### OpenStack 컨트리뷰션 워크플로우 

> flow chart는 포스팅 초반에 올려드린 Slide를 참고해주세요.

1. OpenStack Git Repository에서 Clone
2. Branch 생성 후 작업
3. Local에서 Commit
4. Git-review로 gerrit에 push
5. Jenkins, member에 의한 review
6. Review 반영 및 충돌 해결

#### Sandbox Launchpad

- openstack-dev/sandbox 저장소와 관련 있는 보고된 버그 및 이슈를 추척하고 관리합니다.
  - 링크: https://launchpad.net/openstack-dev-sandbox
  - 저장소: https://git.openstack.org/cgit/openstack-dev/sandbox
  - 버그 목록: https://bugs.launchpad.net/openstack-dev-sandbox

#### Gerrit 리뷰 과정 

- 점수 부여
  - -2: 받아들일 수 없는 수정 사항
  - -1: 수정 및 필요한 사항
  - 0: 중립 또는 자세한 comment 작성 시
  - +1: 리뷰 결과 괜찮음
  - +2: 해당 프로젝트의 핵심 개발자가 괜찮음을 표현
- 일반적인 코드 병학
  - 2명의 핵심 개발자가 각각 +2를 주었을 때 병합됨
  - workflow를 +1로 주었을 때 최종 코드 병합 이뤄짐





<br>

## Reference

- openstack, (13 July, 2020), https://www.openstack.org/software/

