[Git Book学习](https://git-scm.com/book/zh/v2)</br>
[The Git Parable](http://tom.preston-werner.com/2009/05/19/the-git-parable.html)</br>
[Git命令](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/)
---
#### 0. 心得总结
1. mster / dev / HEAD 表示的意义 </br>
   1.1 仅仅只是指针，指向不同的提交版本。 master / dev 都指代不同的分支名以帮助区分。HEAD指向当前的提交对象，决定了当前使用哪个提交对象。</br>
   1.2 HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交。 这表示 HEAD 将是下一次提交的父结点。 通常，理解 HEAD 的最简方式，就是将它看做 你的上一次提交 的快照。可以通过 cat .git/HEAD | git symbolic-ref HEAD 查看 HEAD 的指向。正常情况下，HEAD 指向分支名而不是具体的提交记录，分支名指向具体提交记录。
   1.3 当 master / dev 进行切换分支时，HEAD 分支随之自动切换，才会让我们使用不同的提交对象。</br>
   1.4 当手动切换 HEAD 的指向时，当前使用的提交对象随之改变。
   1.5 分支名可以认为是指向此分支最新提交的一个指针。

2. 为什么说 Git 每次提交时都只提交了文件快照，什么是快照？ </br>
   1.1 每次提交时，Git 都会将完整的文件提交为一个新的提交对象，并为之建立索引。(内部是否有比较算法判断文件是否修改暂未了解，此部分需要后续研究。)
   1.2 正是因为每次提交都将整个文件进行提交，所以 Git 在切换分支，撤销操作，等非常快速。



---
#### 1. 知识点速记
- Git 命令别名
> git config --*global* **alias**.cm commit </br>
> git config --*global* **alias**.co checkout </br>
> git config --*global* **alias**.br branch </br>
> git config --*global* **alias**.st status </br>
> git config --*global* **alias**.discard 'checkout --' </br>
> git config --*global* **alias**.unstage 'reset HEAD --' </br>
---
#### 2. git 文件状态
- untracted
- tracted
- modified
- staged
---
#### 3. git add 命令
> `git add . `</br>
> `git add -u` </br>
> `git add -A` </br>
---
#### 4. git diff 命令
---
#### 5. Git 分支
- Git保存的不是文件变化或者差异，而是一系列不同时刻的文件快照。
![首次提交对象及其树结构](./images/commit-and-tree.png)

- Git 每次提交产生的对象都包含一个指向上次提交对象的指针。
![提交对象及其父对象](./images/commits-and-parents.png)

- Git 默认分支为 master 分支，并不是一个特殊分支。
![分支及其提交历史](./images/branch-and-history.png)

- Git 创建分支仅仅只是创建一个可以移动的指针。这会在当前提交对象上新建 一个指针。
> git branch testing
![两个指向相同提交历史的分支](./images/two-branches.png)

- Git 中 HEAD 也是一个指针，指向当前分支，可以认为是当前分支的别名。
![HEAD 指向当前所在分支](./images/head-to-master.png)

- Git 通过 checkout 切换分支，可以改变 HEAD 的指向
> git checkout testing
![切换分支后 HEAD 指向当前分支 ](./images/head-to-testing.png)

- Git 在提交之后 HEAD 分支随着提交操作自动向前移动
![testing 分支提交一次](./images/advance-testing.png)

![Git 切换分支时 HEAD 随之移动](./images/checkout-master.png)

- 在项目的不同分支上提交，产生分叉。查看历史
> git log --online --decorate --graph --all </br>
![项目分叉历史](./images/advance-master.png)
---
#### 6. 新建分支与合并
- 创建一个分支并且切换到此分支
> git checkout -b issue01

- 切换分支时，Git 会重置工作，使工作目录恢复到当前分支最后一次提交的样子。因此 Git 会自动添加、修改、删除文件。
- git checkout master
- git checkout -b hotfix
![基于 mster 分支的紧急修复分支 hotfix](./images/basic-branching-4.png)

- 完成 hotfix 分支任务之后可以合并到 master 分支上
> git checkout master </br>
> git merge hotfix
![master 被快进到 hotfix ](./images/basic-branching-5.png)

- 删除分支
> git branch -d hotfix

- 合并更早地分支
> git checkout master </br>
> git merge issue01
![master 分支已经不是 issue01 分支的直接祖先了, Git 将会使用两个分支的末端所指快照以及二者的工作祖先做合并](./images/basic-merging-1.png)
**合并后：**
![合并后](./images/basic-merging-2.png)

- 遇到冲突时的分支合并
- 遇到冲突时需要手动解决冲突，之后通过 add 命令可以将此文件状态改为已解决冲突。
- 冲突解决完成可以使用 commit 提交文件。
---
#### 7. 分支管理
> git branch </br> 分支列表
> git branch newBrName </br> 创建新分支
> git branch -v </br> 查看每个分支的最后一次提交
> git branch --merged </br> 查看已经合并的到当前分支的分支，这些分支可以删除
> git branch --no-merge </br> 查看尚未合并到当前分支的分支
> git branch -d brName </br> 删除分支
> git branch -D brName </br> 强制删除分支，不保留工作
---
#### 8. 远程分支
- 远程分支
> git ls-remote </br>
> git fetch </br> 拉取而不合并
> git pull </br>  拉取并且合并
> git push origin --delete brName 删除远程分支 </br>
---
#### 9. 变基 rebase
- 引入某分支的所有修改到另一个分支上，叫做变基。
> git checkout experiment </br>
> git rebase master </br>
> 等价于 git rebase master experiment -> git rebase [basebranch] [topicbranch]
![通过 merge 操作整合分叉的历史](./images/basic-rebase-2.png)
![通过变基整合分叉历史](./images/basic-rebase-3.png)

- 原理是：找到两分支的最近共同祖先，对比当前分支对应此祖先的多次历史提交，提取相应的修改存为临时文件。然后将当前分支指向目标基底 (C3)。最后据此将之前的临时文件的修改依序应用。
![master分支的快进合并](./images/basic-rebase-4.png)

- 好处是：确保在向远程分支推送时能保持提交历史记录的整洁。

- 更加复杂的变基例子
![从一个分支中再分出一个特性分支的提交历史](./images/interesting-rebase-1.png)

> git checkout client </br>
> git rebase --onto master server client
![截取特性分支上的另一个特性分支，然后变基到其他分支](./images/interesting-rebase-2.png)

> git checkout master </br>
> git merge client
![快进合并 master 分支](./images/interesting-rebase-3.png)

> git rebase master server
![将server分支的修改变基到master分支](./images/interesting-rebase-4.png)

> git checkout master </br>
> git merge server </br>
> git branch -d server </br>
> git branch -d client </br>
![删除另外两个分支之后的最终版本](./images/interesting-rebase-5.png)

- 准则是：不要对在你的仓库之外有副本的分支执行变基操作！
---
#### 10. HEAD / master 在 Git 提交树上的移动
##### 1. 移动 HEAD
- ^ 在当前分支相对向上移动一位
- ~<num> 在当前分支相对向上移动 num 位
> **git checkout HEAD^** </br>
> **git checkout HEAD~2**

##### 2. 移动 master 
- 强制使 master 分支移动到某提交对象
> **git branch -f master C2**
- 强制使 master 分支移动到 HEAD 前 n 次提交
> **git branch -f master HEAD~n**

---
#### 11. Git 查看提交历史
- 查看提交历史的详细信息
> git log </br>
- -p 查看每次提交内容的差异, -2 查看最近两次提交
> git log -p -2 
- --stat 每次提交的简要统计信息
> git log --stat
- --pretty 可以指定使用不同于默认格式的方式提交历史。一些内建的子选项如，oneline / short / full / fuller ，展示的信息各有不同。
> git log --pretty=oneline
- --oneline 以一行简短信息查看提交历史
> git log --oneline
- --pretty=format:"%h - %an, %ar : %s" 定制显示的格式(格式列表请查看[git-book-历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2))
> git log --pretty=format:"%h - %an, %ar : %s"
- --graph 以 ASCII 图形方式表示分支的合并历史
> git log --pretty=format:"%h %s" --graph
- 限制 Git 输出的选项，如 -<n> / --since / --after / --S ... (详见[Git 提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2))
---
#### 12. Git 撤销变更
- git reset 将分支记录回退几个提交记录实现撤销更改。这种更改可以修改本地仓库。
> git reset HEAD~1

- git **revert** 将提交一个更改，这些更改就是撤销了上一个提交的。revert 可以修改远程分支。
> git revert HEAD
---
#### 13. git diff 对比差异
- 对比当前工作区与暂存区之间的差异
> git diff
- 暂存区与最后提交之间的差异
> git diff --staged
- 连个提交记录之间的差异
> git diff master dev / git diff c1 c2
---
#### 14. Git checkout 命令
[git checkout](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-checkout.html#_examples)

#### 15. Git add  
- git add  __  < fileSpec > 将指定文件加入到暂存区。
- < fileSpec > 文件名 | 目录 | 通配符 
- -u ( --update ) 将所有被删除和修改的文件加入到暂存区
- -A ( --all ) 将所有被删除、修改、新建文件加入到暂存区
- -f ( --force) 允许添加 .gitignore 中的文件
- -n ( --dry-run ) 不会提交到暂存区，仅查看是否存在，或者是否被忽略。
