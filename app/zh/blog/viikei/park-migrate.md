---

title: "软通动力助力某园区解决方案完成CentOS项目迁移"
date: 2022-12-07
category: blog
tags:
​    - 园区解决方案迁移实践案例
​    - 重装迁移
sig: sig-Compatibility-Infra
archives: 2022-12
author: viikei
summary: "详细介绍了软通动力将某园区解决方案从CentOS迁移到openEuler操作系统的整体迁移流程。"

---

# 软通动力助力某园区解决方案完成CentOS项目迁移



## 迁移背景

------



**CentOS 7/8** 开源社区版操作系统相继停服，操作系统安全补丁无法升级，面临很大的安全风险，无法支持上层应用的更新升级，进而难以支撑业务。因此对基础软件(操作系统、上层各类应用软件)的替换迫在眉睫。



## 迁移说明

------

江苏南京某社区在数字化改造企业中首个将某园区应用解决列为重点改造项目。并联合软通动力进行服务器硬件、操作系统、上层业务软件全面替换工作。

本次替换项目主要有**服务器硬件替换、操作系统替换、开源组件替换、业务软件适配**等。软通动力结合openEuler开源社区提供的DevKit迁移工具和优秀的服务领域能力，成功将客户的业务系统迁移至新的服务器硬件上，业务系统运行稳定，且在原有的操作系统上性能提升3%。



## 迁移保障

------

在进行业务系统迁前，内部成立管理(2人)、研发(5人)、测试(5人)、实施(2人)以及各业务ISV厂商(外围系统) 迁移保障组织，为操作系统、业务系统的快速迁移提供技术支持和人力保障。



## 迁移调研

------

迁移实施前需要对客户的现有业务系统进行调研，如下表格所示：

| 调研项       | 详细描述                                     |
| ------------ | -------------------------------------------- |
| 诉求调研     | 需要详细了解客户诉求、痛点，并输出列表。     |
| 硬件调研     | 服务器型号、CPU、内存、存储、网络等信息。    |
| 软件调研     | 主软件包、第三方商业软件、开源软件信息调研。 |
| 部署场景调研 | 单机、集群、分布式部署等多形态部署方式调研。 |
| 业务形态调研 | 有状态、无状态、业务流程走向等信息调研。     |
| 系统配置调研 | 操作系统配置、安全配置等信息配置调研。       |



## 迁移策略

以业务系统为单元，遵循复杂度从易到难，从小范围试点到适度验证到大范围推广，根据业务系统的业务开发语言、部署方式、业务状态等，多维度考虑。根据调研分析情况，按照业务影响范围及技术复杂度，制定业务迁移的优先级，以及业务迁移的策略，根据业务的部署形态、是否可并行替换、是否可中断等自身特点定制整体搬迁思路。

### **按操作系统**

- 对于存量的 CentOS 7 系列采用原地升级。

- 对于存量的 CentOS 6 系列采用重装替换。

### **按部署方式**

-  优先主备和集群的业务系统搬迁(不中断业务)。

- 其次是单机系统搬迁(中断业务)。

### **按开发语言**

- 优先解释类的语言，如JAVA、Python等。

- 然后编译型语言，如C、C++等。

**说明：**根据兼容性评估结果，兼容情况下，高优先级搬迁，少数需要适配的，低优先级。

###  **按业务状态**

- 优先无状态业务

​		无状态业务不涉及本地数据存储，可以优先业务软件搬迁。

- 然后有状态业务

​		有状态业务涉及本地数据存储，有状态业务优先数据搬迁，然后业务搬迁。

## 迁移方案

------

根据客户长期诉求和整体调研信息，本次的迁移方案采用重装替换，包括操作系统跨架构替换和业务软件的适配重装，并将原有业务数据恢复至新装系统。

![image-20220914111347393](./images/park-migrate-1.png)



## 评估工具

------

| 迁移工具   | 工具描述                                                     | 下载地址                                                     |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| DevKit工具 | 提供涵盖代码迁移、开发调试、编译、测试、调优及诊断等各环节的开发使能工具，方便开发者快速开发出鲲鹏亲和的高性能软件。 | [DevKit系列工具](https://kunpeng-repo.obs.cn-north-4.myhuaweicloud.com/Porting%20Advisor/Porting%20Advisor%202.5.RC1/Porting-advisor_2.5.RC1_linux-Kunpeng.tar.gz) |

## 迁移适配

#### 软件列表

------

| 软件名称  | 原版本     | 新版本            | 备注           |
| --------- | ---------- | ----------------- | -------------- |
| mysql     | 5.7.25     | 5.7.38            | 系统替换       |
| kafka     | 2.11-2.1.1 | 2.6.0             | 系统替换       |
| jdk       | 1.8        | openjdk-1.8.0.342 | 系统替换       |
| zookeeper | 3.4.11     | 3.6.2             | 系统替换       |
| tomcat    | 8.0.3      | 9.0.10            | 系统替换       |
| redis     | 4.0.6      | 4.0.14            | 系统替换       |
| nginx     | 1.9.9      | 1.21.5            | 系统替换       |
| ruby      | 2.4.3      | 3.0.3             | 系统替换       |
| mongodb   | 3.4.2      | 5.0.5             | 系统替换       |
| zlib      | 1.2.4      | 1.2.11            | 系统替换       |
| FastDFS   | 5.05       | 5.05              | 重新编译适配   |
| mapserver | 7.0.8      | 7.0.8             | 重新编译适配   |
| gcc       | 4.8.5      | 10.3.1            | 采用同系统自带 |
| glibc     | 2.17       | 2.34              | 采用同系统自带 |
| .......   | .......    | .......           |                |

#### 兼容性扫描报告



![park-migrate-5](./images/park-migrate-5.png)

![park-migrate-6](./images/park-migrate-6.png)

![park-migrate-7](./images/park-migrate-7.png)



## 迁移实施

------

**说明：**迁移实施前，建议进行多次预迁移演练，确保所有操作和数据都正常进行无事故出现。

------

| 序号 | 列表           | 描述                                                         |
| :--: | -------------- | ------------------------------------------------------------ |
|  1   | 迁移计划表     | 需要制定详细的迁移计划时间和操作具体内容项。                 |
|  2   | 迁移人员保障表 | 输出迁移实施人员保障名单（客户、第三方厂商、业务软件研发、实施、测试等保障人员） |
|  3   | 迁移前检查     | 迁移需要对现有业务系统信息进行详细的配置检查并输出列表或者文档。 |
|  4   | 迁移操作       | 全量数据库备份、操作系统安装及检查、业务软件安装、全量数据库数据恢复、增量业务数据停机备份、增量数据恢复、业务上线等一系列操作，做到有计划，有步骤，有回退方案。 |
|  5   | 迁移后数据检查 | 对新系统上的业务系统进行功能、数据一致性检查。               |
|  6   | 迁移后测试     | 根据操作系统和业务系统测试用例，进行功能测试，确保所有业务正常稳定运行。 |
|  7   | 迁移后业务上线 | 测试完毕后，进行业务系统对外正式上线。                       |
|  8   | 迁移后验收     | 根据项目验收报告内容搜集项目验收资料并完成签署验收。         |
|  9   | 服务保障       | 采取线上、线下、驻场等服务对客户业务系统进行7*24小时在线服务保障。 |



## 业务上线

![park-migrate-3](./images/park-migrate-3.png)

![image-20221205190231472](./images/park-migrate-4.png)



## 迁移亮点

------

软通动力助力某园区解决方案迁移成功后，业务系统运行稳定，稳定性方面和原有系统无明显差异，但在性能和部署时间上有所提升，完全满足江苏南京某社区的迁移后使用要求，本次迁移的成功为后续多个行业的核心业务迁移积累了丰富的宝贵经验。

![image-20220914161956197](./images/park-migrate-2.png)

**奋而敢为，软通助力。未来，软通动力将在数字化赋能过程中以服务客户为本，质量至上的原则服务于基础设施，助力更多的企业快速数字化转型和业务拓展。**
