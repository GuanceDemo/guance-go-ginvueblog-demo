<p align="center">
	<img alt="logo" src="https://static.guance.com/dataflux-icon/official/logo-light.png">

***
## 项目简介
&emsp;&emsp;观测云是一款旨在解决云计算，以及云原生时代系统为每一个完整的应用构建全链路的可观测性的云服务平台。  
&emsp;&emsp;本项目通过搭建[开源Gin-Vue-Blog系统](https://github.com/szluyu99/gin-vue-blog)带您快速了解观测云产品以及体验完整全链路的可观测性。
***
## 方式一：Helm方式手动安装
### 1. 安装
```
$ git clone https://github.com/GuanceDemo/guance-go-ginvueblog-demo.git
$ helm upgrade -i gvb -n gvb --create-namespace ./deployment/helm
```
> 验证方式：    
>检查pod是否都正常启动：kubectl get pod -n gvb  
>部署完成后通过以下访问信息访问：
>- 博客系统页面:   k8s node ip + 30088 端口访问 
>- 博客后台页面:   k8s node ip + 30088/admin 端口访问 
>
>- 管理员账密: **admin/123456**

### 2. 卸载
```
helm unintall gvb -n gvb
```
***
## 方式二：CICD自动化部署
通过Github Action自动打包并安装至Kubernetes集群，适合编译源码进行演示的场景。    
### 1. fork代码到您Github仓库
### 2. 创建并添加以下密钥和变量
>创建路径：Repository setting --> secrets and variables --> action  

```
secrets:
KUBECONFIG     # k8s config文件，用于action执行机远程操作k8s集群
DOCKER_USERNAME    # 镜像仓库登陆用户名（如不需要CI可不创建）
DOCKER_PASSWORD    # 镜像仓库登陆密码（如不需要CI可不创建）

variables：
DOCKER_REGISTRY    # 镜像仓库地址（如不需要CI，请将此变量值配置为观测云公共镜像仓库pubrepo.guance.com）
DOCKER_NAMESPACE    # 镜像仓库项目名（如不需要CI，请将此变量值配置为观测云公共项目名demo）
```
### 3. 触发CICD流水线
3.1 CI流水线（若只想体验cd请忽略此步骤）    
Github Action手动触发或者通过修改src下任意文件触发CI流水线，流水线运行完成后请登陆到镜像仓库查看镜像是否push成功。
```
  - Build and push gvb ui demo images  # 前端CI流水线
  - Build and push gvb backend demo images # 后端CI流水线
```
3.2 CD流水线    
Github Action手动触发以下流水线即可。
```
  - Deploy gvb demo on kubernetes  # CD流水线
```
> 验证方式：    
>检查pod是否都正常启动：kubectl get pod -n gvb  
>部署完成后通过k8s node ip + 30088端口访问gvb博客系统页面    