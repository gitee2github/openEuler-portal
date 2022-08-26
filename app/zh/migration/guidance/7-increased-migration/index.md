---
title: 迁移实施（新增/扩容）
category: migration
---

## 迁移实施（新增/扩容）

### <span id="SystemDeploy">系统部署</span>

系统部署可使用系统部署工具进行自动化批量部署，能够大幅提升部署效率。

- 如果客户已有 pxe 服务器，则可复用原 pxe 服务器。
- 如果客户没有 pxe 服务器，可基于 gkit 工具搭建 pxe 服务器。
  使用 pxe 服务器，同步配置文件后可快速完成 OS 安装，具体的操作如下。

1. 配置 pxe 服务器信息。
   **图 6** 配置 pxe 服务器信息
   ![配置PXE服务器信息](./ConfiguringPXEServerInformation.png)
2. 导入配置的模板，点击安装，自动配置 pxe 服务器。
   **图 7** 自动部署
   ![自动部署](./Autodeploy.png)
3. 确认“pxe 服务器状态”为绿色时，表示 pxe 服务器搭建完成。
   **图 8** pxe 服务器状态
   ![PXE服务器状态](./Pxeserverstatus.png)
4. 进入服务器 KVM，设置服务器从 pxe 启动并重启。
   **图 9** 设置服务器
   ![设置服务器](./Settinguptheserver.png)
5. 待其他步骤自动完成后，同步配置 IP，OS 安装完成（此步骤自动完成）。

### <span id="ConfigSyn">配置同步</span>

根据[配置适配](#配置适配)完成适配，可基于 x2openEuler 集成的配置工具，实现系统参数配置、服务状态配置等一键同步。通过该工具可确保基础运行环境及状态信息同步移植，保证业务搬迁后系统运行环境状态一致。

### <span id="AppDeploy">应用部署</span>

应用部署前可将需要部署的应用打包成 RPM 包形式，通过编写应用部署安装脚本，在实验环境上进行验证，确保部署脚本的准确性。进行基础验证后，将脚本批量拷贝到待部署的服务器执行，完成自动化应用部署。
针对主流的开源软件，如大数据、数据库、虚拟化、容器等，openEuler 已提供完备的 rpm 包，可直接应用和部署。