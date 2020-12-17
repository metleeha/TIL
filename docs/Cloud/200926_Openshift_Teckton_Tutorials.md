# Tekton이란? 튜토리얼 소개 

Teckton은 CI/CD 파이프라인을 만들기 위한 오픈 소스이며 Linux Foundation 프로젝트인 CD Foundation의 일부이다. 개발자가 클라우드 제공 업체와 온 프레미스 시스템 전반에 걸쳐 구축, 테스트 및 배포할 수 있도록 하는 프로젝트다. 최근 출시한 Tekton Pipelines는 Pod 및 기타 리소스와 마찬가리조 Kubernetes CLI(kubectl) 및 API 호출을 통해 사용할 수 있다. yaml 파일로 작성한다. 

![](https://1.bp.blogspot.com/-JpN87wN9vvk/XrSU2RsA_1I/AAAAAAAAAbY/D6LAXCQqGM4tOaQ_Hu9uUn_lv5VJY7X3gCLcBGAsYHQ/s1600/tekton-horizontal-color.png)

### Teckton 관련 링크
- Github [링크](https://github.com/tektoncd/pipeline/tree/master/docs)
- 파이프라인 튜토리얼 [링크](https://github.com/tektoncd/pipeline/blob/master/docs/tutorial.md)

## Teckton 구성 요소
Tekton Pipelines는 다음 유형으로 구성되어 있습니다.

|Entity|Description|
|-|-|
|Task|특정 결과물을 출력하도록 빌드와 딜리버리 툴들의 실행을 단계별로 정의. TaskRun으로 시작|
|Pipeline|특정 빌드와 배포를 완성하기 위해 정의한 여러 Task 실행 순서를 정의한 리소스 타입. PipelineRun으로 시작|
|TaskRun| Task 실행|
|PipelineRun|Pipeline 실행|
|PipelineResource|TaskRun, PipelineRun이 참조하는 리소스 타입|
|Run(alpha)|특정 입력이 있을 때 실행할 사용자 지정 작업을 인스턴화|

## OpenShift Pipelines
OpenShift Pipelines는 Tekton을 사용하여 파이프 라인을 구축하기위한 클라우드 네이티브 CI / CD 솔루션입니다 . 

OpenShift Pipelines 기능 :

- Tekton을 기반으로 한 표준 CI / CD 파이프 라인 정의
- S2I, Buildah, Buildpacks, Kaniko 등과 같은 Kubernetes 도구로 이미지 빌드
- Kubernetes, 서버리스 및 VM과 같은 여러 플랫폼에 애플리케이션 배포
- 기존 도구와 쉽게 확장 및 통합
- 요구에 맞게 파이프 라인 확장 용이
- 모든 Kubernetes 플랫폼에서 이식 가능
- 마이크로 서비스 및 분산 된 팀을 위해 설계됨
- OpenShift 개발자 콘솔과 통합

### 파이프라인을 생성하기 위한 Steps
![](https://github.com/openshift/pipelines-tutorial/raw/master/docs/images/tekton-architecture.svg)

간단히 말해 파이프 라인을 생성하려면 다음을 수행합니다.

- 사용자 지정 생성 또는 기존 재사용 가능한 `Tasks` 설치
- 애플리케이션의 전달 파이프 라인을 정의하기 위해 `Pipeline` 및 `PipelineResources` 만들기
- `PersistentVolumeClaim` 생성하고 파이프 라인 실행을 위한 볼륨 / 파일 시스템을 제공하거나
`PersistentVolumeClaim`을 생성하기 위한 `VolumeClaimTemplate` 만들기
- 파이프라인을 인스턴스화하고 호출하는 `PipelineRun` 만들기 

파이프 라인 개념에 대한 자세한 내용은 Tekton [문서](https://github.com/tektoncd/pipeline/tree/master/docs) 를 참조하십시오 .

## Openshift Piplines Tutorials
- Github [링크](https://github.com/openshift/pipelines-tutorial)