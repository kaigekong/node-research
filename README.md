# node-research
node
--

# 淘宝 npm 映像
	
	* npm install -g cnpm --registry=https://registry.npm.taobao.org
	
	* 安装命令和npm安装插件一样，只不过前面多了一个c。
	
	* cnpm install gulp-less
	
# npm 模块管理
	
### 安装模块： 
	* 安装或者删除插件，用以下相关命令

###### 局部安装： 

	* npm install --save-dev gulp(当前目录下安装，–save-dev是为了把文件版本信息自动写入package.json文件)，
	
###### 全局安装： 

	* npm install -g gulp 
	
	* 一次可以安装多个模块，以空格间隔。
	
### 删除模块：

	* npm uninstall 模块名 例如 npm uninstall gulp-less 
	
	* 一次可以删除多个模块，以空格间隔。
	
	* 检查过时并更新模块：npm outdated 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新。
	
### 更新模块：npm update 模块名 例如 npm update gulp-less 

# 使用 nvm 管理 node/npm 的版本

### 卸载已安装到全局的 node/npm 
	* npm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

	* sudo rm -rf /usr/local/lib/node_modules #删除全局 node_modules 目录

	* sudo rm /usr/local/bin/node #删除 node

	* cd /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm #删除全局 node 模块注册的软链

### 安装 nvm 

	* curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

### 安装切换 node/npm 各版本

	* nvm install stable #安装最新稳定版 node，现在是 5.0.0

	* nvm install 4.2.2 #安装 4.2.2 版本

	* nvm install 0.12.7 #安装 0.12.7 版本

	* # 特别说明：以下模块安装仅供演示说明，并非必须安装模块

	* nvm use 0 #切换至 0.12.7 版本

	* npm install -g mz-fis #安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis

	* nvm use 4 #切换至 4.2.2 版本

	* npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli

	* nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7

### 使用 .nvmrc 文件配置项目所使用的 node 版本
	
	* cd <项目根目录>  #进入项目根目录

	* echo 4 > .nvmrc #添加 .nvmrc 文件

	* nvm use #无需指定版本号，会自动使用 .nvmrc 文件中配置的版本

	* node -v #查看 node 是否切换为对应版本

# PS

### [nvm 配置使用](http://www.cnblogs.com/kaiye/p/4937191.html "参考博客")