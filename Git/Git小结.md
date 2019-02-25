## Git 基础
（参考： [Git-Book](https://git-scm.com/book/zh/v2) | [Git 文档](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/)）
### 1. Git 快照
> 每次提交更新时，Git 保存已修改文件的副本，如果文件没有修改只保留一个链接指向之前存储的文件。Git对整个项目的所有文件制作一个快照并保存这个快照的索引。
- Git 记录快照而非差异比较 </br>
![CVS | Subversion 等版本控制系统存储每个文件与初始版本之间的差异](https://git-scm.com/book/en/v2/images/deltas.png) </br>
**图1.** CVS | Subversion 等版本控制系统存储每个文件与初始版本之间的差异
![Git存储项目随时间改变的快照](https://git-scm.com/book/en/v2/images/snapshots.png) </br>
**图2.** Git存储项目随时间改变的快照
---
### 2. Git 文件的状态
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

![文件的状态变化周期](https://git-scm.com/book/en/v2/images/lifecycle.png) </br>
**图3.** Git 文件的状态变化周期

- 文件的不同状态对应着三个 Git 工作区域的概念。

   1. 工作目录

      1.1 工作目录是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。
   2. 暂存区

      2.1 暂存区域是一个文件，用来存储文件的快照，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作'索引'( index )。
   3. Git 仓库

      3.1 Git 仓库目录是 Git 用来保存项目元数据。

![工作目录、暂存区域以及 Git 仓库](https://git-scm.com/book/en/v2/images/areas.png) </br>
**图4.** 工作目录、暂存区域以及 Git 仓库

- 检查文件状态
> git status
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

- 跟踪新文件 / 暂存已修改文件
> git add < fileSpec > 

- 提交更新到 Git 仓库
> git commit ...

### 3. Git 设置与配置
1. Git 设置忽略文件 **.gitignore**

   1.1 /node_modules | *.zip | ...
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

### 4. Git 创建与获取项目
1. 创建项目 - 将一个目录变成一个 Git 仓库
> git init 

2. 克隆项目 

   1. git clone [ url ] < repoName >
   
   2. Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。 当执行 git clone 命令的时候，默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来。

   3. git clone 实际上是一个封装了其他几个命令的命令：1). 创建并进入目录； 2). git init 初始化 Git 仓库； 3). 为你指定的 URL 添加一个（默认名称为 origin 的）远程仓库（git remote add）； 4). 再针对远程仓库执行 git fetch； 5).最后通过 git checkout 将远程仓库的最新提交检出到本地的工作目录。

---
### 5. Git add
1. 暂存文件
- git add  __  < fileSpec > 将指定文件加入到暂存区。
- < fileSpec > 文件名 | 目录 | 通配符 

   1. git add . | ./ | *.js
- -u ( --update ) 将所有被删除和修改的文件加入到暂存区
- -A ( --all ) 将所有被删除、修改、新建文件加入到暂存区
- -f ( --force) 允许添加 .gitignore 中的文件
- -n ( --dry-run ) 不会提交到暂存区，仅查看是否存在，或者是否被忽略。

2. 交互式暂存
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

### 6. Git commit  
1. git commit -m "提交的简短说明"
> 不带 -m 会启动文本编辑器输入本次提交的说明( 一般是 vim )。
2. git commit -a -m "提交的简短说明"
> 自动将所有已经跟踪过的文件暂存起来一起提交。

### 7. Git diff
- 对比当前工作区与暂存区之间的差异
> git diff
- 暂存区与最后提交之间的差异
> git diff --staged
- 两个提交记录之间的差异
> git diff master dev / git diff c1 c2

---
### 8. Git 分支
1. 提交对象
> 在进行提交操作时，Git 会保存一个提交对象（commit object）。知道了 Git 保存数据的方式，我们可以很自然的想到——该提交对象会包含一个指向暂存内容快照的指针。 但不仅仅是这样，该提交对象还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象，而由多个分支合并产生的提交对象有多个父对象。</br>
> 每次提交产生的提交对象形式如下（假设只有三个文件）：
![提交对象](https://git-scm.com/book/en/v2/images/commit-and-tree.png)
*三个 blob 对象（保存着文件快照）、一个树对象（tree）（记录着目录结构和 blob 对象索引）以及一个提交对象（commit）（包含着指向前述树对象的指针和所有提交信息）。*

2. 提交对象树
> 多次提交后产生提交对象树：
![提交对象及其父对象](https://git-scm.com/book/en/v2/images/commits-and-parents.png)

3. 分支
> Git 的分支，其实本质上仅仅是指向提交对象的可变指针, Git 的默认分支名字是 master，它会在每次的提交操作中自动向前移动。</br>
> Git 有一个名为 HEAD 的特殊指针，是一个符号引用，指向当前所在的本地分支，是一个指向其他引用的指针。</br>
> 
![git 分支](https://git-scm.com/book/en/v2/images/branch-and-history.png)

4. 创建分支
> git branch testing | git checkout testing 创建以及检出分支</br>
> git checkout -b testing 等价于上者</br>
![切换分支](https://git-scm.com/book/en/v2/images/head-to-testing.png)

5. 在当前分支提交
> git commit -m "xxx" </br>
![提交](https://git-scm.com/book/en/v2/images/advance-testing.png)
*提交时，HEAD分支将会随着提交自动向前移动*

6. 检出分支
> git checkout master </br>
![检出分支](https://git-scm.com/book/en/v2/images/checkout-master.png)
> 这条命令做了两件事。 一是使 HEAD 指回 master 分支，二是将工作目录恢复成 master 分支所指向的快照内容。</br>
> 检出操作实质只是改变了 HEAD 分支的指向，所以操作非常迅速。</br>
**注意：** 在切换分支时，一定要注意你工作目录里的文件会被改变。

7. 提交产生分叉
> git commit -m "xxx" 对文件作出修改，并提交。</br>
![产生分叉的提交历史](https://git-scm.com/book/en/v2/images/advance-master.png)

8. 分支合并
- 快进合并( fast-forward )
> 当试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）” </br>
![拥有三个分支的Git仓库](https://git-scm.com/book/en/v2/images/basic-branching-4.png)
> git checkout master </br>
> git merge hotfix </br>
![快进合并](https://git-scm.com/book/en/v2/images/basic-branching-5.png)
> </br>

- 三方合并
> 当开发历史从一个更早的地方开始分叉开来（diverged），Git 会使用两个分支的末端所指的快照（C4 和 C5）以及这两个分支的工作祖先（C2），做一个简单的三方合并。
![分叉的提交历史](https://git-scm.com/book/en/v2/images/basic-merging-1.png)
> git checkout master </br>
> git merge iss53 </br>
![三方合并](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

9. 遇到冲突时的分支合并
> 有时候合并操作不会如此顺利。 如果你在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，Git 就没法干净的合并它们，而产生冲突。</br>
> 可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件：</br>
```
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```
> Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。</br>
```
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
 please contact us at support@github.com
</div>
>>>>>>> iss53:index.html

```
> 在你解决了所有文件里的冲突之后，对每个文件使用 *git add* 命令来将其标记为冲突已解决。 一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。之后通过 *git commit* 完成提交。</br>

10. 变基
- 引入某分支的所有修改到另一个分支上，叫做变基。
> git checkout experiment </br>
> git rebase master </br>
> 等价于 git rebase master experiment -> git rebase [basebranch] [topicbranch]
![通过 merge 操作整合分叉的历史](https://git-scm.com/book/en/v2/images/basic-rebase-2.png)
![通过变基整合分叉历史](https://git-scm.com/book/en/v2/images/basic-rebase-3.png)

- 原理是：找到两分支的最近共同祖先，对比当前分支对应此祖先的多次历史提交，提取相应的修改存为临时文件。然后将当前分支指向目标基底 (C3)。最后据此将之前的临时文件的修改依序应用。
![master分支的快进合并](https://git-scm.com/book/en/v2/images/basic-rebase-4.png)

- 好处是：确保在向远程分支推送时能保持提交历史记录的整洁。

- 更加复杂的变基例子
![从一个分支中再分出一个特性分支的提交历史](https://git-scm.com/book/en/v2/images/interesting-rebase-1.png)

> git checkout client </br>
> git rebase --onto master server client
![截取特性分支上的另一个特性分支，然后变基到其他分支](https://git-scm.com/book/en/v2/images/interesting-rebase-2.png)

> git checkout master </br>
> git merge client
![快进合并 master 分支](https://git-scm.com/book/en/v2/images/interesting-rebase-3.png)

> git rebase master server
![将server分支的修改变基到master分支](https://git-scm.com/book/en/v2/images/interesting-rebase-4.png)

> git checkout master </br>
> git merge server </br>
> git branch -d server </br>
> git branch -d client </br>
![删除另外两个分支之后的最终版本](https://git-scm.com/book/en/v2/images/interesting-rebase-5.png)

- 准则是：不要对在你的仓库之外有副本的分支执行变基操作！

11. 分支管理
> git branch 查看分支列表。</br>
> git branch -v 查看每一个分支最后一次提交。</br>
> git branch --merged 查看哪些分支已经合并到当前分支。</br>
> git branch --no-merged 查看所有包含未合并工作的分支。</br>

12. 删除分支
> git branch -d [ branName ] </br>
> git branch -D [ branName ] 强制刪除</br> 

13. HEAD / master 等分支在 Git 提交树上的移动

    13.1. 移动 HEAD
    - ^ 在当前分支相对向上移动一位；~<num> 在当前分支相对向上移动 num 位
    > **git checkout HEAD^** </br>
    > **git checkout HEAD~2**

    13.2. 移动 master 等分支
    - 强制使 master 分支移动到某提交对象
    > **git branch -f master C2**
    - 强制使 master 分支移动到 HEAD 前 n 次提交
    > **git branch -f master HEAD~n**

14. 远程分支
    - 远程引用
    > 远程引用是对远程仓库的引用（指针），包括分支、标签等等。 </br>
    > git ls-remote 显式地获得远程引用的完整列表。</br>
    > git remote show 获得远程分支的更多信息。</br>
    - 远程跟踪分支
    > 远程跟踪分支是远程分支状态的引用。以 *(remote)/(branch)* 形式命名。它们是你不能移动的本地引用，当你做任何网络通信操作时，它们会自动移动。 远程跟踪分支像是你上次连接到远程仓库时，那些分支所处状态的书签。
    - to be continued ...

---
### 9. Git 撤销操作
1. commit --amend 重新提交. 

   1.1 若是自上次提交之后暂存区未改动，此命令仅仅会改变提交信息
   > git commit --amend -m "xxx"

   1.2 若是第一次提交之后发现有部分文件忘记提交，此命令就会只有一个提交，后一次将覆盖前一次。例如：
   > git commit -m '第一次提交, 但是忘记提交某文件' </br>
   > git add forgotten_file 继续操作 </br>
   > git commit --amend -m '再次提交，此次提交将会覆盖上一次提交。提交记录仅有本次'

2. 取消暂存的文件( unstage )   
> git reset HEAD < file > </br>
*关于 reset 更多信息将在 重置 中讲述* 

3. 撤销对文件的修改
> git checkout -- < file > 这个命令会丢失当前文件的全部修改，谨慎使用。
---
### 10. Git 重置 [详情请参见源文档](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86#r_git_reset)
- Git 的三个工作区

   1. HEAD
  > HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交。 这表示 HEAD 将是下一次提交的父结点。 通常，理解 HEAD 的最简方式，就是将它看做 你的上一次提交 的快照

   2. index (暂存区)
   > 索引是你的预期的下一次提交。 我们也会将这个概念引用为 Git 的 **“暂存区域”**，这就是当你运行 git commit 时 Git 看起来的样子。

   3. Working Directory
   > 以上两个工作区以一种高效但并不直观的方式，将它们的内容存储在 .git 文件夹中。 工作目录会将它们解包为实际的文件以便编辑。 你可以把工作目录当做 沙盒。在你将修改提交到暂存区并记录到历史之前，可以随意更改。（reset 命令实质是在操作 Git 的三棵树）
![工作目录、暂存区域（index）以及 Git 仓库](https://git-scm.com/book/en/v2/images/reset-workflow.png)

- Git reset
1. git reset --soft HEAD~
> reset 做的第一件事是移动 HEAD 的指向。它本质上是撤销了上一次 git commit 命令。--soft 不会更新索引。

![](https://git-scm.com/book/en/v2/images/reset-soft.png)

2. git reset HEAD~ | git reset --mixed HEAD~
> 依然会撤销一上次 提交，但还会 取消暂存 所有的东西。 于是，我们回滚到了所有 git add 和 git commit 的命令执行之前。
![](https://git-scm.com/book/en/v2/images/reset-mixed.png)

3. git reset --hard HEAD~
> 撤销了最后的提交、git add 和 git commit 命令以及工作目录中的所有工作。
![](https://git-scm.com/book/en/v2/images/reset-hard.png)

4. 小结：
> 1. reset --soft 移动了 HEAD 分支的指向。等于撤销最后一次 commit </br>
> 2. reset 将索引区变得和 HEAD 区一样 </br>
> 3. reset --hard 将工作区变得和索引区一样(此命令包含上面一个命令的效果) </br>
**此过程刚好与提交过程相逆：** </br>
> 4. git add 使索引区变得和工作区一样 </br>
> 5. git commit 使 HEAD 区变得和索引区一样 </br>

5. 通过路径来重置
> 若指定了一个路径，reset 将会跳过 --soft 步骤，并且将它的作用范围限定为指定的文件或文件集合。 </br>
> git reset file.txt === git reset --mixed HEAD file.txt </br> 
*以上命令正是 git add 命令的逆命令*

---
### 11. Git checkout
- checkout 也会操作三棵树 </br>
1. checkout 命令不带路径：

   1.1 我们有 master 和 develop 分支，它们分别指向不同的提交；我们现在在 develop 上（所以 HEAD 指向它）。我们运行 *git checkout master* 的话，develop 不会移动，HEAD 自身会移动， 现在 HEAD 将会指向 master。而我们运行 *git reset master*，那么 develop 自身现在会和 master 指向同一个提交。
   ![二者区别](https://git-scm.com/book/en/v2/images/reset-checkout.png)

2. checkout 命令带路径：
 
   2.1 运行 checkout 的另一种方式就是指定一个文件路径，这会像 reset 一样不会移动 HEAD。 它就像 git reset [ branch ] file 那样用该次提交中的那个文件来更新索引，但是它也会覆盖工作目录中对应的文件。 它就像是 git reset --hard [ branch ] file（如果 reset 允许你这样运行的话）- 这样对工作目录并不安全，它也不会移动 HEAD。

---
### 12. Git 查看提交历史
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
### 13. Git 钩子
1. Git 能在特定的重要动作发生时触发自定义脚本。有两组这样的钩子：客户端的和服务器端的。
2. 钩子都被存储在 Git 目录下的 hooks 子目录中，即 .git/hooks 。Git 默认会在这个目录中放置一些示例脚本，如果想启用它们，得先移除 .sample 后缀。
3. 提交工作流钩子

   3.1 *pre-commit* 
   > 钩子在键入提交信息前运行，它用于检查即将提交的快照。例如，检查是否有所遗漏，确保测试运行，以及核查代码。 如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用 git commit --no-verify 来绕过这个环节。

   3.2 *prepare-commit-msg*
   > 钩子在启动提交信息编辑器之前，默认信息被创建之后运行。

   3.3 *commit-msg*

   3.4 *post-commit*
   > 钩子在整个提交过程完成后运行。

4. [husky](https://github.com/typicode/husky)
> 运行 Git 钩子脚本
```
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged"
    }
  }
```

### 14. Git 子模块
1. 开始使用子模块
- 将一个已存在的 Git 仓库添加为正在工作的仓库的子模块。
> git submodule add https://github.com/xxx/JS.git (子模块项目 URL)
- 此时，项目中会创建子模块同名目录以及 .gitmodules 文件，记录了子模块的 URL 地址。
- JS 是主项目中一个子目录，但是 Git 会将其作为一个子模块，当不在这个目录下时，Git 不会跟踪其内容，将其作为该仓库的一个特殊提交。

2. 克隆含有子模块的项目
- 克隆含有子模块的项目时，默认包含子模块目录，但是其中不包含任何文件。
> git clone https://github.com/xxx/My-Blog.git
- 使用如下两条命令来抓取子模块的提交
> git submodule init </br>
> git submodule update
- 或者使用简洁方式,以递归的方式克隆整个项目,克隆主项目时添加参数 --recursive
> git clone --recursive https://github.com/xxx/My-Blog.git 
- 遍历子模块，拉取所有子模块上的更新
> git submodule foreach git pull

3. 子模块拉取上游修改
- 在子模块中查看最新工作，可以进入子模块目录先后运行
> git fetch </br>
> git merge origin/master
- 如果不想在子模块中手动抓取更新，可以在主模块中运行
> git submodule update --remote JS 
- Git 会自动进入子模块中进行更新。
- 如上只能更新 master 分支，如果需要更新其他分支，可以通过 .gitmodules 文件设置,或者 .git/config 文件中设置。区别在于其他合作者是不是也能跟踪它。
> git config -f .gitmodules submodule.JS.branch dev </br>
> git submodule update --remote (默认更新所有子模块，可以后接子模块名字)

4. 在子模块上工作
- 需要先做两件事。首先，进入子模块并检出对应工作分支。
> git checkout dev
- 接着在主分支上，拉取上游工作. 使用 --merge 选项。运行
> git submodule update --remote --merge

- 如果我们提交的更新与远程服务器中的有冲突，那么参考 Git 教程。

5. 发布子模块改动
- 在推送主项目之前检查所有子模块是否已推送。如果子模块中没有推送将会使主模块推送失败。
> git push --recurse-submodules=check
- 也可以通过另一个命令在推送主项目之前推送子模块，如果子模块因为某种原因没有推送成功，那么主模块也会推送失败。
> git push --recurse-submodules=on-demand

6. 删除子模块
> git rm --cached JS </br>
> rm -rf JS </br>
> rm .gitmodules </br>
- 之后提交到服务器
> git add . </br>
> git commit -m "remove submodule JS" </br>

7. 经常使用的操作
> git clone --recursive https://github.com/xxx/My-Blog.git </br>
> git submodule init & git submodul update
> git submodule foreach git pull </br>
> git submodule update --remote JS </br>
> git submodule add https://github.com/xxx/JS.git </br>
- 对于主项目和子项目的更新和维护可以在各自项目中进行 add / commit / push 进行提交。