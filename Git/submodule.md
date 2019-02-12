<a href="https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97">Git 教程 - 子模块</a>

#### 1. 开始使用子模块
- 将一个已存在的 Git 仓库添加为正在工作的仓库的子模块。
> git submodule add https://github.com/jinshan-xu/JS.git (子模块项目 URL)
- 此时，项目中会创建子模块同名目录以及 .gitmodules 文件，记录了子模块的 URL 地址。
- JS 是主项目中一个子目录，但是 Git 会将其作为一个子模块，当不在这个目录下时，Git 不会跟踪其内容，将其作为该仓库的一个特殊提交。

#### 2. 克隆含有子模块的项目
- 克隆含有子模块的项目时，默认包含子模块目录，但是其中不包含任何文件。
> git clone https://github.com/jinshan-xu/My-Blog.git
- 使用如下两条命令来抓取子模块的提交
> git submodule init </br>
> git submodule update
- 或者使用简洁方式,以递归的方式克隆整个项目,克隆主项目时添加参数 --recursive
> git clone --recursive https://github.com/jinshan-xu/My-Blog.git 
- 遍历子模块，拉取所有子模块上的更新
> git submodule foreach git pull

#### 3. 子模块拉取上游修改
- 在子模块中查看最新工作，可以进入子模块目录先后运行
> git fetch </br>
> git merge origin/master
- 如果不想在子模块中手动抓取更新，可以在主模块中运行
> git submodule update --remote JS 
- Git 会自动进入子模块中进行更新。
- 如上只能更新 master 分支，如果需要更新其他分支，可以通过 .gitmodules 文件设置,或者 .git/config 文件中设置。区别在于其他合作者是不是也能跟踪它。
> git config -f .gitmodules submodule.JS.branch dev </br>
> git submodule update --remote (默认更新所有字模块，可以后接子模块名字)

#### 4. 在子模块上工作
- 需要先做两件事。首先，进入子模块并检出对应工作分支。
> git checkout dev
- 接着在主分支上，拉取上游工作. 使用 --merge 选项。运行
> git submodule update --remote --merge

- 如果我们提交的更新与远程服务器中的有冲突，那么参考 Git 教程。

#### 5. 发布子模块改动
- 在推送主项目之前检查所有子模块是否已推送。如果子模块中没有推送将会使主模块推送失败。
> git push --recurse-submodules=check
- 也可以通过另一个命令在推送主项目之前推送子模块，如果子模块因为某种原因没有推送成功，那么主模块也会推送失败。
> git push --recurse-submodules=on-demand