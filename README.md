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