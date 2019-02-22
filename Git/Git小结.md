### Git 基础
#### 1. Git 快照
> 每次提交更新时，Git 保存已修改文件的副本，如果文件没有修改只保留一个链接指向之前存储的文件。Git对整个项目的所有文件制作一个快照并保存这个快照的索引。
- Git 记录快照而非差异比较
![CVS | Subversion 等版本控制系统存储每个文件与初始版本之间的差异](https://git-scm.com/book/en/v2/images/deltas.png)
**图1.** CVS | Subversion 等版本控制系统存储每个文件与初始版本之间的差异
![Git存储项目随时间改变的快照](https://git-scm.com/book/en/v2/images/snapshots.png)
**图2.** Git存储项目随时间改变的快照
---
#### 2. Git 文件的状态
1. 未跟踪( untracked )
   1. 新建的文件，尚未添加到 Git 仓库。 
2. 已跟踪( tracked )
   1. 未修改( unmodified )
      > 文件尚未修改，或者已修改但是已经 committed.
   2. 已修改( modified )
      > 表示已经修改了文件，但是还没有保存到数据库中。
   3. 已暂存( staged )
      > 表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</br>
      > git add < fileSpec >
   4. 已提交( committed )
      > 已提交表示数据已经安全的保存在本地数据库中。 </br>
      > git commit ....  </br>

![文件的状态变化周期](https://git-scm.com/book/en/v2/images/lifecycle.png)
**图3.** Git 文件的状态变化周期

- 文件的不同状态对应着三个 Git 工作区域的概念。

   1. 工作目录

      1.1 工作目录是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。
   2. 暂存区

      2.1 暂存区域是一个文件，用来存储文件的快照，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作`索引'。
   3. Git 仓库

      3.1 Git 仓库目录是 Git 用来保存项目元数据。

![工作目录、暂存区域以及 Git 仓库](https://git-scm.com/book/en/v2/images/areas.png)
**图4.** 工作目录、暂存区域以及 Git 仓库

- 检查文件状态
> git status

- 跟踪新文件 / 暂存已修改文件
> git add < fileSpec > 

- 提交更新到 Git 仓库
> git commit ....

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

#### 4. Git 设置与配置
1. Git 设置忽略文件 **.gitignore**
- .gitignore 格式规范

   1. 所有空行或者以 ＃ 开头的行都会被 Git 忽略
   2. 可以使用标准的 glob 模式匹配
   
      2.1 * 匹配零个或多个任意字符.

      2.2 [abc] 匹配任何一个列在方括号中的字符

      2.3 问号（?）只匹配一个任意字符

      2.4 使用两个星号（*) 表示匹配任意中间目录，比如`a/**/z` 可以匹配 a/z, a/b/z 等。

      2.5 方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。

      2.6 [多种语言的 .gitignore 模板](https://github.com/github/gitignore)

   3. 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反   

2. 设置用户信息
> git config --global user.name "xx" </br>
> git config --global user.email xx@example.com

3. 设置命令别名
> git config --*global* **alias**.cm commit </br>
> git config --*global* **alias**.co checkout </br>
> git config --*global* **alias**.br branch </br>
> git config --*global* **alias**.st status </br>
> git config --*global* **alias**.discard 'checkout --' 放弃修改</br> 
> git config --*global* **alias**.unstage 'reset HEAD --' 取消暂存</br> 
> git config --*global* **alias**.last 'log -1 HEAD' 查看最后一次提交</br> 
 
4. 检查配置信息
> $ git config --list

5. 自定义配置

   5.1. Linux | Mac 与 windows 的行结束符不同。在不同平台提交代码时,提交时将 crlf 转换为 lf, 检出代码时将 lf 转换为 crlf。(代码仅运行在 windows 系统可以设置为 false ) </br>
   git config --global core.autocrlf true 
        

6. 查看帮助
> git help < verb > 无需联网可以查看详细帮助手册

#### __. Git 创建与获取项目
1. 创建项目--将一个目录变成一个 Git 仓库
> git init 

2. 克隆项目 

   1. git clone [ url ] < repoName >
   
   2. Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。 当执行 git clone 命令的时候，默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来。

   3. git clone 实际上是一个封装了其他几个命令的命令：1). 创建并进入目录； 2). git init 初始化 Git 仓库； 3). 为你指定的 URL 添加一个（默认名称为 origin 的）远程仓库（git remote add）； 4). 再针对远程仓库执行 git fetch； 5).最后通过 git checkout 将远程仓库的最新提交检出到本地的工作目录。

#### __. Git 提交  
1. git commit -m "提交的简短说明"
> 不带 -m 会启动文本编辑器输入本次提交的说明( 一般是 vim )。
2. git commit -a -m "提交的简短说明"
> 自动将所有已经跟踪过的文件暂存起来一起提交。
3.  

#### __. Git 对比文件差异

#### __. Git 删除/移动文件

#### __. Git 查看文件历史

#### __. Git 分支

#### __. Git 撤销操作
1. 重新提交. 
> git commit --amend


#### __. Git 远程仓库

#### __. Git 钩子

#### __. Git 交互式暂存
- 当你修改一组文件后，希望这些改动能放到若干提交而不是混杂在一起成为一个提交时，使用 Git 自带的工具会比较有用。
- 进入交互式终端模式
> git add -i 
```
$ git add -i
           staged     unstaged path
  1:    unchanged        +0/-1 TODO
  2:    unchanged        +1/-1 index.html
  3:    unchanged        +5/-1 lib/simplegit.rb

*** Commands ***
  1: status     2: update      3: revert     4: add untracked
  5: patch      6: diff        7: quit       8: help
What now>
```

#### __. Git 子模块

#### __. Git 常用操作