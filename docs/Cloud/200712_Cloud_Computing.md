# What is Cloud Computing?

## 클라우드 컴퓨팅이란?

클라우드 컴퓨팅은 IT 리소스를 인터넷을 통해 온디맨드로 제공하고, 사용한 만큼 비용을 지불하는 것을 의미한다.
물리적 데이터 센터와 서버 구입, 소유 및 관리 비용을 줄이고, AWS, Azure, GCP, IBM Cloud 같은 클라우드 공급자로부터 필요에 따라 컴퓨팅 파워, 스토리지, 데이터베이스와 같은 기술 서비스에 액세스할 수 있다. 

## 클라우드 컴퓨팅 서비스 모델

클라우드 컴퓨팅은 3가지 서비스 모델로 제공된다.

- Infrastructure as a Service(IaaS) : 서비스 공급자가 인프라(네트워크, 저장소, 서버  및 가상화)를 제공한다. 
- Platform as a Service(PaaS): 서비스 공급자가 인프라(네트워크, 저장소, 서버  및 가상화, OS, 미들웨어 및 런타임)를 제공한다. 
- Software as a Service(SaaS): 서비스 공급자가 모든 풀스텍을 제공한다.

아래 그림에서 보듯이 오른쪽으로 갈 수록 사용자의 책임이 줄어드는 것을 볼 수 있다.  선택하는 서비스 모델에 따라 보안 체크 및 책임 요소가 달라지는 것을 확인할 수 있다.

<figure>
    <img src="https://www.cloudindustry.com/wp-content/uploads/2017/06/Cloud-Computing-01.png" alt="@origin: www.cloudindustry.com" />
    <figcaption style="text-align:center;">origin: www.cloudindustry.com<figcaption>
<figure>

## Virtualization vs Cloud Computing

클라우드 컴퓨팅을 이해하기 위해서는 가상화에 대한 이해가 필수적이다.  가상화 기술이 지금의 클라우드 컴퓨팅까지 발전해왔기 때문이다. 

|           |                            가상화                            |                           클라우드                           |
| :-------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   정의    |                             기술                             |                             방법                             |
|   목적    | 1개의 물리적 하드웨어 시스템에서 다수의 시뮬레이션 환경 생성 |        온디맨드 사용을 위한 가상 리소스 풀링과 자동화        |
|   용도    |      특정 용도의 패키징된 리소스를 특정 사용자에게 제공      |       다양한 용도의 다양한 리소스를 사용자 그룹에 제공       |
|   설정    |                         이미지 기반                          |                         템플릿 기반                          |
| 평균 수명 |                        연 단위(장기)                         |                      시간/월 단위(단기)                      |
|   비용    |         높은 CAPEX(자본 지출), 낮은 OPEX(운영 비용)          | 프라이빗 클라우드: 높은 CAPEX, 낮은 OPEX   퍼블릭 클라우드: 낮은 CAPEX, 높은 OPEX |
|  확장성   |                          스케일 업                           |                         스케일 아웃                          |
| 워크로드  |                     스테이트풀(Stateful)                     |                   스테이트리스(Stateless)                    |
|  테넌시   |                         싱글 테넌트                          |                        멀티플 테넌트                         |

origin: [RedHat](https://www.redhat.com/ko/topics/cloud-computing/cloud-vs-virtualization)

### 추가로 읽어볼 자료

- [가상화란 무엇일까?](https://www.redhat.com/ko/topics/virtualization)
- [하이퍼바이저란?](https://www.redhat.com/ko/topics/virtualization/what-is-a-hypervisor)
- [하이퍼바이저의 종류](http://cloudrain21.com/hypervisor-types)

### Taxonomy of Virtualization

<figure>
  <img src="https://www.researchgate.net/profile/Yongjin_Seo/publication/264187311/figure/fig2/AS:295900061683713@1447559480417/Taxonomy-of-Virtualization.png" alt="Taxonomy of Virtualization"/>
	<figcaption style="text-align:center;">origin: www.researchgate.net<figcaption>  
</figure>



## Reference

- aws, (July 12, 2020), https://aws.amazon.com/ko/what-is-cloud-computing/
- Chris Lazari, (July 12, 2020), https://chrislazari.com/what-is-cloud-computing/
- RedHat, (July 12, 2020), https://www.redhat.com/ko/topics/cloud-computing/cloud-vs-virtualization