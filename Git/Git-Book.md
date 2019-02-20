[Git Book学习](https://git-scm.com/book/zh/v2)
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
#### 10. Git 移动
- ^ 在当前分支相对向上移动一位
- ~<num> 在当前分支相对向上移动 num 位
> git checkout HEAD^ </br>
> git checkout HEAD~2

- git branch -f master HEAD~3 强制使 master 分支移动到当前 HEAD 的前 3 次提交。

---
#### 11. Git 查看提交历史

---
#### 12. Git 撤销操作
