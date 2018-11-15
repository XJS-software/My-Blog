'use strict';

/*
  1. H5 基础

  2. H5 选择器 / CSS 选择器
  
  3. H5 文本

  4. H5 图片

  5. H5 链接

  6. H5 表格

  7. H5 列表

  8. H5 盒子模型

  9. H5 块级/行内元素

  10. H5 内/外边距与边框

  11. H5 背景

  12. H5 定位

  13. H5 浮动

  14. H5 重要概念

  15. 媒体查询

  16. BFC

  17. chrom 浏览器手机视口
  
  18. CSS 初始化

  19. HTTP / AJAX 请求状态码

  20. flex

  21. 过渡与动画

  22. 表单

*/




/*
                 1. H5 基础
----------------------------------------------------
	1. HTML --> Hyper Text Markup Language

	2. HTML 基本结构
	   <!DOCTYPE html>    --> 向浏览器说明这是 H5 页面 
	   <html lang='en'>   --> 指定语言类型
	   head               --> 1. 搜索引擎优化(SEO)
	                          2. meta 添加页面编码方式 / 网站信息
							  3. link 引入外部文件
							  4. style 部内样式
	   body               --> 网页主体 / 内联样式 / JS代码
    
	3. <> </> / <>
	   双标记与单标记元素
	   1. 绝大多数是双标记
	   2，单标记：meta / link / br / hr / img / input

	4. 特殊符号
	   1. &nbsp;
       2. &copy;
	   3. &reg;
	   4. &lt;
	   5. &gt;
	   6. &yen;
	   7. &times;  叉号×

	5. HTML 会压缩内容的空格/制表符成为一个空格。对换行
	   也会做出同样处理。因此需要借用特殊字符或者换行符
	   达到布局效果。

    6. 语义化HTMl
	   1. 使用恰当的 HTML 元素标记内容.
	   2. 为了搜索引擎优化(SEO)。因为搜索引擎会对特殊标记的
	      内容赋予更高的权值。

    7. 何时使用 div
	   1. div 是没有任何语义,也没有任何预设样式的。
	   
	   2. H5 中新增了 header / artical / section / nav / aside /
	      footer / main 等具有语义的标签.都可以代替 div。
       
	   3. 使用 div 应该是最后的选择。当以上语义标签都不合适
	      时,使用之。
    
	8. URL ：http://www.myself.com/me/info.html
	   1. http/https --> 传输协议
	   2. www.myself.com --> 文件所在主机的名称(ip地址)
	   3. me/info.html --> 路径 表示 me 目录下的 info.html 文件
	      有些不以 .html 文件结尾而以目录结尾的 URL 表示最后
		  一个路径下的默认文件,通常式 index.html 。所有的 web 
		  服务器的配置都将 index.html 作为默认文件名,因此可以不必
		  修改任何服务器配置。

        4. ftp 传输模式：
		   ftp://www.myself.com/me/introduction.pdf
		   以 ftp 协议传输文件 introduction.pdf
        
		5. mailto:someName@someDomain.com
		   用于电子邮箱地址的 URL .与上述两者不同的是没有 // 

        6. 绝对路径和相对路径：
		   ftp 传输 URL 全部使用绝对路径
		   而 http / https 等可以使用绝对 / 相对路径
        
		7. 引入同目录下文件 'hi.html' 同目录下的文件
		 
        8. 引入子目录下文件 'learn/student.html' 同目录下
		   learn 目录下的 student.html

        9. 引入上层目录文件：'../user.html' 上一级目录下文件
		   '../../say.html' 上两级目录下文件。

		10. 根相对 URL .
		    当文件位于 web 服务器上,应该避免使用 ../../img/header.jpg
			这样的文件路径。
			可以使用 '/' 来表示根文件夹。
			'/img/header.jpg' 假设 img 目录位于跟目录下。
			这种形式只适用于 web 服务器或者在本机上运行的 web 服务器上。
		
		11. 通常使用相对 URL 路径。

	9. 文件名和文件夹名
       1. 网页的文件名应该使用全部小写,并以短横线进行单词间的连接,
	      以 .html 作为文件扩展名。
		  index-user.html

		  能够使访问者容易找到地址,可以增强搜索引擎优化( SEO )。
		  SEO : 可以让网页在搜索引擎的搜索结果中排名靠前。

	10. 注释： <!-- 注释内容 -->
	    1. 注释不能嵌套
		2，不能注释在元素中
        3. 注释可以换行

*/


/*
                 2. H5 选择器 / CSS 选择器
----------------------------------------------------
	1. CSS 样式表
	   1. 选择器 { 声明块 }
	      selector { property: value; }
       
	   2. 声明块中可以包含多个属性和属性值; 
	      多个属性值之间多以空格相连,只有一种情况例外
		  在 font 属性中 font: large/150% sans-serif;
		  这里的 / 分割两个特定的关键字：字体的大小和行高。
		  
		  当然在 CSS3 的 border-radius 属性中也使用了 / 
		  来分割 x / y 方向上的弯曲半径设置。

	2. CSS 样式表注释： /\*\  注释内容   \*\/ 

	3. CSS样式的继承
	   1. HTML 的 DOM 树。
	   2. 为某个元素添加样式时,这些属性也会影响到该属性
	      下的分支元素,继承父级元素的样式,如背景颜色/
		  字体等。
       
	   3. 但是并不是每个属性都会被继承,文本属性 / 列表
	      / 表格 / 页面设置 会被继承下来。
		  而 padding / margin / border 等这些属性就不会
		  被继承。
    
	4. 选择器的分类
	   1. 元素选择器
	      p / div / em / li 等 HTML 元素就是最基本的选择器。
       
	   2. 通配选择器  --> *

	   3. 类选择器
	      1. 最经常使用的选择器,为需要应用的元素增加 class 
		     属性及其属性值,class 属性可以具备多个值,以空格
			 连接。

          2. 类选择器使用 
		     .test { }     --> 选中 test 类
		     p.test { }    --> test 是元素 p 的类名。
		  
		  3. .test.two { } --> 选中同时包含 test 和 two 的类设置样式
		  4. 类 名区分大小写

	   4. ID 选择器
          1. 为元素设置 id 属性,但是其属性值一定是全局唯一的。
		  2. id 选择器和类选择器的使用方式基本相同。
		  3. #test { }    --> 选中 id='test' 的元素
		  4. id 选择器 和 类选择器：
		     1. id 选择器具有唯一性,也因此不具备类选择器的
			    灵活复用性。所以应该谨慎选择使用。
		  5. id 名区分大小写

	   5. 属性/属性值选择器
	      1. 类选择器 和 id选择器 实际上是属性值选择器。除此之外还可以
		     以属性作为选择器。
		  
		  2. 简单属性选择器 
		     h1[class] { }  --> 所以具有 class 属性的 h1 元素
		     a[href][title] --> 对多个属性进行选择

		  3. 属性值选择器：
		     a[href='http://www.baidu.com'] { } --> 选择指向百度的连接

		  4. 部分属性值选择器：
		     1. class 属性可以接受多个属性值,以 空格 隔开

			 2. 属性值选择器的匹配是精确匹配,选择什么属性值
			    就需要完全匹配这个属性值。
				而部分属性值选择器可以选择多个 class 属性值中的
				一个,从而匹配到这个元素。
			 
			 3. [class ~='test'] --> 选择类属性中包含 test 属性值
			    的元素。
                [title ~='Figure'] --> 选择具有 title 属性且属性值中
				包含 Figure 字段的元素。

			 4.  

		  5. 子串匹配属性选择器
		     1. 对属性值进行模糊匹配的选择器。
			 2. [title^='bar'] {}  --> title 属性值以 bar 开头的所有元素
			    [title$='bar'] {}  --> title 属性值以 bar 结尾的所有元素
				[title*='bar'] {}  --> title 属性值包含 bar 的所有元素

		  5. 特定属性选择类型
		     [img |='Figure']{} --> 选择 src 的属性值为 Figure 或者以
			 Figure 开头的所以元素。
			 [att |='val'] {] 可以适用于任何属性及其属性值。一般用来
			 匹配语言值。

	   5. 后代选择器   空格连接
	      1. .test p em {} 
		  2. 后代选择器,只要后代中存在该选择器就会被选择,而非是子代
	   
	   6. 直接后代选择器  > 连接
	      1. 仅在自身子元素先寻找所有满足条件的元素
		  2. .test p>em {}
 
	   7. 相邻兄弟选择器  + 连接
	      1. 只在相邻在某元素后面的同级兄弟元素
		  2. .text p+p{} 选择所有满足 p 元素后面紧邻的 P 元素 
		  
	   8. 伪类选择器
	      1. a:link / :visited / :hover / :active / :focus
		     :focus 是可以接受键盘输入激活的元素。
          
		  2. 结合伪类：
		     a:link:hover {}
		     
	      3. 选择第一/最后一个元素/ n 个元素
		     :first-child / :last-child / :nth-child(2)
             注：这里指某元素的第一个 子元素
			 .test p:first-child {}   类为 test 的元素下的第一个 p 元素
			 p em:last-child{}  所有 p 元素下的最后一个 em 元素
			 li:first-child{}   某元素(ul/ol)下第一个 li 元素

	   9. 伪元素选择器
	      1. :first-letter {} 选择每段第一个字母
		  2. :first-line{}  选择每段第一行
		  3. 上述二者只能应用在标记或者段落之类的块级元素

		  4. :before{} / :after{} 
		     1. 在元素前/后插入内容并设置样式
		  5. 
	   10. 伪元素和伪类：
	       1. 伪元素 ::first-letter / ::first-line / ::befor / ::after
	          等 HTML 并不存在的元素,但却是另一个元素的部分内容。
		      在 CSS 中为了区别伪类,使用 :: 双冒号以区分伪类。

           2. :first-child / :hover / :active / :link  等是伪类。
	   
	   11.

    5. 分组
	   1. 选择器分组
	      为了对多个选择器应用相同的样式,可以将多个选择器
	      以 , 相连接。后接样式声明。

       2. 声明分组
	      将同一个选择器下的多个声明写到一起

	   3. 选择器和声明分组相互结合
	   4. 

	   5. 后代选择器   空格连接
	      1. .test p em {} 
		  2. 后代选择器,只要后代中存在该选择器就会被选择,而非是子代
	   
	   6. 直接后代选择器  > 连接
	      1. 仅在自身子元素先寻找所有满足条件的元素
		  2. .test p>em {}
 
	   7. 相邻兄弟选择器  + 连接
	      1. 只在相邻在某元素后面的同级兄弟元素
		  2. .text p+p{} 选择所有满足 p 元素后面紧邻的 P 元素 
	
	6. 层叠：当对某一元素应用样式发生冲突时
	   1. 当对指定元素应用不同的样式属性时,各类样式属性会
	      相互结合,共同作用。

       2. 但是当为指定元素应用多条相同的样式属性时,就会产生
	      冲突.
		  为了解决冲突,采用 特殊性 / 顺序 / 重要性 的层叠原则
		  判断哪个样式起作用。

	   4. 特殊性：指选择器的具体程度
	      选择器越特殊,规则越强,遇到冲突时就会优先应用。
		  特殊性值可由 4 个部分表述：0, 0, 0, 0;
		  1. 对应选择器中给定 ID选择器,加 0, 1, 0, 0;
		  2. 选择器中给定 类选择器 / 属性选择器 / 伪类选择器加：0, 0, 1, 0;
		  3. 选择器中给定的各个 元素 / 伪元素选择器加：0, 0, 0, 1;
		  4. 通配选择器没有贡献。
		  5. 内联样式的特殊性：1, 0, 0, 0;  其特殊性超过 id 选择器
		     
		  h1 {color:red;}             --> 0, 0, 0, 1;
		  p em {color:blue;}          --> 0, 0, 0, 2;
		  .green {color:green;}       --> 0, 0, 1, 0;
		  *.bright {color:yellow}     --> 0, 0, 1, 0;
		  p.bright em.dark {color:maroom;} --> 0, 0, 2, 2;
		  #id1 {color:purple;}        --> 0, 1, 0, 0;
		  div#sidbar *[href] {color:silver}; --> 0, 1, 1, 1;

          0, 1, 0, 0; 的特殊性要高于 0, 0, 10, 11; 特殊性值
		  从左向右排序。
          一个选择器中定义多个属性,由于特殊性的要求,会被解
		  组：
		  h1 { color:red; background-color:yellow; } 被解组为：
		  h1 { color:red; }
		  h1 { background-color:yellow; }
		  之后分别应用特殊性原则。

	   5. 重要性
	      1. 允许在属性声明后面添加 !important 来声明重要性。
		  p.dark {color:#333 !important;}
		  重要性规则和非重要性规则在竞争中总会胜出。

	   6. 顺序
	      1. 如果两个元素的规则/权重/特殊性都相同,那么在样式
		     表中最后一个会胜出。

          2. HTML 文档中的样式顺序要高于导入的样式表;
		     后导入的样式表要高于先导入的样式表。

          3. 由于顺序规则,才有了链接样式顺序：LVHA
            :link {color:blue;}
			:visited {color:purple;}
			:hover {color:orange;}
			:active {color:red;}

            他们的特殊性都是 0, 0, 1, 0; 且应用于同一个
			元素上面,因此会产生相互竞争。采用 LVHA 模式
			可以保证各种鼠标事件都能够改变链接样式。
			如果 hover 在 visited 之前,那么已经被访问过的
			链接将不会对 hover 行为产生样式变化。

			当然还可以通过将伪类链接起来使用可以不用考虑
			上面的问题：
			:visited:active {color:red;}			

	7. 属性值
	   em 单位,约等于对于元素的字号大小。

	8. 内联样式：
	   直接在标签内部引入 style='color:red; border:2px solid blue'
	   不需要结束符号

*/


/*
                 3. H5 文本
----------------------------------------------------
    1. 字体系列
	   1. font-family: Times, Georgia, serif;
	   优先使用靠前字体,如果系统不存在这种字体,继续向后
	   寻找。
       2. font-weight: normal / bold / light / 100 / .. 
	   3. font-size: x-small / large / 20px / 1em / 100% /..
	   4. font-style: italic / oblique / normal / inhert
	   5. font: 
	   6. line-height --> 
	      在 font 中 200%/1.2 可以设置字体大小/行高 

	   7. 引入自设字体样式
	      @font-face{
		     font-family:'字体名';
			 src:url( font path url ) format(truetype);
		  }

	2. 字体大小
	   字体大小的单位以后应该使用 em .可以将 body 中设置
	   字体大小为 100% ,表示采用系统默认字体大小。
	   之后设置各元素中的字体大小采用 em ,是相对系统字体
	   大小进行设置。

	   em 是设置相对于父元素的字体大小进行自身字体的设置。
	   如果父元素已经设置 font-size: 1.5em, 子元素再设置
	   font-size:2em, 那么实际是系统字体的 3 倍大小。

	   和 em 功能相同, 设置百分比可以实现参照父元素字体大
	   小设置本元素自身字体大小。
	   font-size: 120%;
       
	   rem 由于 em 大小是相对父元素的,因此需要考虑父元素
	   大小之后才能设置子元素大小. 
	   而 rem 的大小总是相对根字体的大小来确定自身大小的。
	   不需要考虑父元素字体大小的问题。虽然这个浏览器在
	   现代浏览器中支持度很高,但是IE9才兼容, IE8 不兼容。

	3. 行高 line-height: num / em / n%; 将会被继承
       相对自身字体大小,乘以行高系数之后得到行高。

	4. 文本相关元素
	    1. i / em / cite   都是斜体字体,但是 em 着重强调, cite 为引用
		                   电影/图书等内容。
        2. b / strong      加粗,但是后者更着眼于强调
		3. u / ins         下划线/后者表示新插入的文本
		4. s / del         删除线/后者表示已经删除的文本
		5. sup / sub       上/下标
		6. small           小号字体
		7. hn (n:1-6)      标题(块级元素)
		8. p               段落元素,自占一行。也具有 align 属性
		                   文本上下有空白间距,文本大小没有变化。
		9. br              换行(单标记) 
		10. hr             水平线(单标记) 
		    属性：
		    1. size='10px' / (10%) 设置水平线粗细程度
		    2. width='10px'/20%     
			3. align 
			4. color

		11. abbr            缩略词,在 title 属性中可以添加解释内容;或者使用 () 在其中添加解释

		12. code            表示其中内容为代码 
		13. pre             预格式化文本
		    因为 HTML 会将换行和空格进行压缩,所以想要按照自己的
		    需求显示换行和空格就需要使用 pre
		    将回车和换行保留下来,因此每行太宽时可能发生超过浏览器范围,导致
		    横向滚动条。

		14. mark            突出显示文本
		    类似于标记笔在书上做标记。将文字背景设为黄色。
		    由于时 H5 的新元素,所以旧版本的浏览器可能无法
		    显示.那么需要为其引入样式： .mark { backgroud-color:yellow; }
		
		15. meter           表示分数的值或者已知范围的测量结果。
		    属性：value / max / min / title
		    如果不设置 min / max 作为范围,默认为 0~1
		
		16. progress        和 meter 类似,也会显示进度
		    属性：value / max / min / title	
			

		17. 
		18.

    5. 颜色
	   1. 函数式 RBG 颜色
	      rgb(百分数/数值)  百分数-->0~100% / 数值--> 0~255 
       
	   2. RGBA 支持 Alpha 透明度
	      rgba(100,255,200,0.6);  透明度为 0.6 的色值。

	   3. 十六进制 RGB 颜色
	      color:#fff;

       4. 颜色关键字
	      color: red / yellow / blue / orange / ...

    6. 文本相关属性
        1. text-indent 属性 length		   
		   控制文本首行缩进, text-indent:3em;

        2. text-align : left / right / center / justify / inherit
		3. line-height:length / precentage / number / normal 
		   当值为 em 时,认为行高从父元素字体大小获取.
		   当值为数值时,认位行高从自身字体大小获取。

		4. vertical-align: base-line / sub / sup / top / 
		   middle / bottom / ...
		   设置文本垂直位置参考文本行上下边距的位置。

		5. word-spacing : length / normal / inherit
 
		6. letter-spacing : length / normal / inherit

		7. text-transform : uppercase / lowercase / capitalize / none / inherit  

		8. text-decoration: none / underline / overline / line-through / blink

		9. text-shadow : none / <color> / [len,len,len] / 
		   三个数值分别表示阴影与文本的偏移,最后一个数阴影模糊半径。

		10.white-space : normal / nowrap / pre / pre-wrap / pre-line / inherit
		
		11.direction: ltr / rtl / inherit
		   ltr --> left to right

		12.unicode-bidi: normal / embed / bidi-override / inherit
		   打开附加嵌套？
		   
	7.  问题:
	    1. 使用 letter-spacing 设置字间距以后,再次设置 text-align
		   居中设置时,字体会整体偏左.
		   解决的方法是再为字体设置 text-indent 设置与间距一样的值
		   可以重新文字居中.效果和 margin-/padding-left 相似
        2. 

*/


/*
                 4. H5 图片
----------------------------------------------------
    1. <img src='img/1.jpg'> 插入图片
	2. <img src='img/1.jpg' alt='这是替代文本'>
	
	3. 如果图像是页面设计的一部分,不是内容的一部分.那么应该使用
	   CSS 的 backgroud-image 属性引入该图像,而不是使用 img 标记。

	4. img 属于行内元素,但是由于其自身具有宽高,所以可以
	   为其设置宽高属性

    5. width / height : num / per / em;
	   当设置百分比数值时,按照父级元素的宽 / 高进行计算。
	   因为 HTML 高度不定,为其高度设置百分比数值时需要其父级元素
	   已经设定了高度。

    6. 不为 img 设置宽度,那么其宽度为原始图像宽度.
	   但是页需要为其设置为 block 之后才能应用居中.


	7. 

*/


/*
                 5. H5 链接
----------------------------------------------------

    1. a 链接,行内元素        
	   1. target 属性
	     1. 默认 __self 在当前标签页中打开新的网页
	     2. __blank  在新的标签页中打开网页       	   
    	
	   2. title 属性：弹出标签给出 title 中的内容提出 
  	   3. href --> hypertext refrence (超文本引用)
	   4. a 标签不知是否没有 value 属性,使用 querySelector()
	      无法获取 a 的 value 属性;获取到 a 元素节点之后也无法
		  访问 value 属性。

       5. 获取 a 节点之后,可以通过 for-in 遍历其中的属性。
	      a 元素没有 value 属性。

       6. a 元素有 hidden 属性,为一标志位可以设置元素隐藏。

	2. HTML 几乎允许 a 标签包含任何类型的元素,除了链接/表单/
	   音频/视频/iframe 等交互内容。
	
	3. 下载资源：
	   <a href='img/images.rar'>下载文件</a>
	   <a href='img/logo.jpg'>打开文件</a>
       <a href='img/artical.pdf'>打开文件</a>

	4. 锚点
	   1. 使用 id 属性定义锚点
	      <any id='#anchorName'>指定锚点位置</any>
       2. 使用 a 标记的 name 属性定义锚点
          <a name='anchorName'>指定锚点位置</a>
	   
	   3. 链接到当前页面的锚点
	      <a href='#anchorName'></a>
       4. 链接到其他页面的锚点(本服务器的其他页面/其他服务器页面)
	      <a href='user.html#anchorName'></a>
          <a href='http://www.me.html#anchorName'></a>
	   
	5. 链接到邮箱
	   <a href='mailto:name@qq.com'></a>

    6. 链接到 JS 代码
	   <a href='javascript:alert("执行JS代码")'>执行JS代码</a>
	   <a href='javascript:showMsg()'>执行JS代码</a>
	   执行文件内部定义函数




*/


/*
                 6. H5 表格
----------------------------------------------------

	1. 表格
	   1. <table> 
	        <tr>          (table row)
			   <td> </td> (table data)
		    </tr>
		  </table>

    2. table 属性：
		1. border
		2. width
		3. height
		4. bgcolor
		5. cellpadding : 设置单元格内边距 
		6. cellspacing ：设置单元格外边距
		   
    3. tr 属性：
		1. align:
		2. valing: top / middle / bottom       (垂直对其方式)
	    3. bgcolor

    4. td 属性
		1. width
		2. height
		3. bgcolor
	    4. align
	    5. valingn
			
		6. colspan:'n';      跨列
		   从指定单元格位置开始(包含自己),横向向右
		   合并 n 个单元格。被合并的单元格应该被删除
	    
		7. rowspan:'n';      跨行
		   从指定位置开始(包含自身),竖直向下合并 n 个单元格
		   被合并的单元格应该被删除
		   注：利用 colspan 和 rowspan 可以制作任意格式的表格
          	   <td colspan='2' rowspan='2'>11</td>
               单元格的大小由其内容决定。
 
 	5. 表格的标题
		1. 标记: <caption>标题</caption>
		   将标题放在 <table> 之后

    6. 行/列 标题
		1. 标记：<th>标题</th>
		   所有的 td 都可以被 th 取代
		   <th></th>内部数值默认是居中加粗表示。
	
	7. 表格分组管理(以防表格太大而不能快速同时加载出来)
	    1. 将连续的几行划分到一个组中进行统一管理。
		   1. 表头 
		      <thead></thead>
			  表格中最上面一行放入 thead 中。

           2. 表主体
		      <tbody></tbody>
			  允许将若干行放在 tbody 中进行统一管理。

		   3. 表尾行
		      <tfoot></tfoot>
			  表格中的最后一行放在其中管理。	

	8. 表格的嵌套
	   表格只能在 td 中进行嵌套另外一个表格。使用相同的方式。
    
	9. css 控制表格
	   1. 边框合并
	      1. border-collapse:seperate(默认,边框分离) / collapse(边框合并)
		  2. 
	   2. 边框边距,设置单元格之间的距离
	      1. border-spacing: x / x y 设置单元格间的水平/垂直距离
		     注,只有在 border-collapse:seperate; 条件下成立。

	   3. 标题位置
	      1. caption-side:top / bottom 设置标题在表格上/下
		   
	   4. 显示规则
	      1. table-layout:auto / fixed
		  2. auto 自动表格内容,列的大小由内容撑开
		  3. fixed 列的大小由认为设定

*/


/*
                 7. H5 列表
----------------------------------------------------
	1. 列表 
		1. 有序列表
		   1. ol
		   2. 属性 type 指定序号类型 type='A' ; 大写字母排序
		      1(默认) / A / a / I / i (大 / 小写罗马字体)
		   3. start  指定开始的序号  start='2';

        
		2. 无序列表
		   1. ul
		   2. 属性: dist / circle / square / none
		   3.
        
		3. 列表项
		   li
        
		4. ol / ul 之间可以相互嵌套.

    2. 列表属性：
	    1. list-style-type: circle / disc / square / decimal ..
		2. list-style-img : url()  --> 可以将一个图像作为列表符号
		3. list-style-position: inside / outside / inherit
		4. list-style: (综合上述三个) / none
		5. 

	3. 使用 li 做导航时,可以设置 inline-block 以方便为
	      其添加上下边距.

	4. 定义列表
	    常用于图文混排中
	    1. <dl></dl>     表示定义列表
		2. <dt></dt>     表示定义列表中要解释说明的名词
		3，<dd></dd>     表示对名词的解释内容。
        <dl>
          <dt></dt>
	      <dd></dd>
		</dl>




*/


/*
                 8. H5 盒子模型
----------------------------------------------------
    1. 内容和显示分离
	
	2. 盒模型
	   1. 外边距 margin
	   2. 边框 border
	   3. 内边距 padding
	   4. 内容区域
	   
	   注: 默认情况下,设置盒子的宽高只会应用到盒子的内容
	       区域之上.
		   盒子实际在网页中占据的宽高还需要加上内外边距
		   以及边框的宽度.
		   
		   盒子背景则能够延伸到边框的外侧所到之处.如果边框
		   半透明或者是虚线可以看到背景.
        
	   5. 通过设置 box-sizing: border-box;
	      将盒子宽度计算改为 内容宽度+内边距+左右边框宽度 之和
		  (height 也是如此计算.)
		  box-sizing: border-box;
		  -webkit-box-sizing: border-box;
		  -moz-box-sizing: border-box;
		  box-sizing: border-box;


	3. 控制元素的可见性
	   1. display 属性控制了一个元素是块级元素(block) / 
	      行内元素(inline) / 行内块元素(inline-block) /
		  list-item(li元素的表现方式).

       2. 设置为 block 的元素会单独占据一行而不管它的宽度
	      是多少.可以为其设置 宽 / 高 / padding / margin 等属性

	   3. 设置为 inline 的元素会一行显示,忽略掉任何 width /
	      height / margin-top / margin-bottom 的设置. 此
		  元素设置了margin-top / margin-bottom 也会被显示
		  出来.但是宽度和高度不会显示.

	   4. 设置为 inline-block 则可以使元素一行内显示,而且
	      可以像 块级元素一样设置 宽 / 高 等.
        
	   5. 使用 li 做导航时,可以设置 inline-block 以方便为
	      其添加上下边距.

	   6. display:none; 可以完全隐藏元素.
	      注: 和其相似功能的属性: visibility: hidden;
		  使元素不可见,但是在文档流中保留它,出现空白位置.

	   
	   7. 设置元素宽/高
	      1. 设置元素 display: block;/ inline-block;
		  2. 可以设置
		     -webkit-box-sizing: border-box;
		     -moz-box-sizing: border-box;
		     box-sizing: border-box;
			 以设置元素宽高的计算方式.
          
		  3. 百分比宽高是以父元素来计算的;

		  4. max-width / min-width / max-height / min-height
		  
		  5. 不显式设置宽和高,浏览器就会使用 auto. 那么元素
		     内容宽度由包含块的宽度减去元素内边距/边框/外边距
			 而计算得到

		  6. 设置元素 width 之后,在设置其margin:0 auto; 那么
		     左右间距将会自动相等,实现居中效果.
			 
			 也就是 margin:auto 的值依赖于 width 值.属性不具备
			 width 或者 不能应用 width 的化 margin:auto 也不会
			 右值.

			 为盒子设置相对宽度也能够应用 margin:auto .
    
	4. 块级元素
	   1. block-level-element
	   2. 块级元素和设置为 display:block 的元素不能等同。
	      块级元素应该是一类元素的统称,这类元素在一个水平流
		  上只能单独显示一个。多个块级元素只能换行显示。

	   3. 块级元素包括 block / table / list-item 

	   4. 每个元素可以理解为包含连个盒子,内在盒子/外在盒子。
	      外在盒子控制元素能够一行显示(inline)还是换行显示(block)
		  内在盒子负责宽高,内容的呈现。
		  内在盒子->容器盒子

		  那么 display:block; 的盒子可以理解为：display:block-block;
		       display:inline-block; 外在内联盒子控制元素一行显示,内在
			   块级容器盒子控制元素宽高。
			   display:inline; 可以认为是 display:inline-inline;
			   当然没有 block-inline; 的设置。

	   5. table 元素是块级元素,但是其默认宽度是包裹自身内容的.
	      而 div / p / h1 / li 等块级元素宽度默认为一行。

	   6.  

	6. width:auto; 的四种不同形式。
	   1. fill-available  宽度默认为一行, div / p / h1 / li
	   2. shrink-to-fit  收缩到合适(包裹性), table / 浮动 / 绝对定位 / inline-block / inline
	   3. 收缩到最小 min-content  在 table-layout:auto; 时可见。
	   4. 超出容器限制  文本有过长的连续英文或者数值,或者内联元素设置
	      white-space:nowrap; 遇到父边框也不会折断文本.
	   4. 
	   4. 
	   4. 

	7. 宽度分离
	   1. css 默认的宽度作用在 content-box 之上,在盒子上添加 padding / margin / border
	      等属性,会直接影响到盒子的最终大小。

	   2. 使用宽度分离,将想要设定宽度的盒子放在父盒子中,设置父盒子 width 也就是
	      子盒子的最终大小。想要为子盒子定义内外边距/边框,直接在子盒子上定义即可。
          这样子盒子 width 值就会更加 内外边框等值 自动变化。
	   
	   2. 
 	   




	5. 

	5. 



*/


/*
                 9. H5 块级和行内元素
----------------------------------------------------
	1. 行内元素 / 块级元素
	    1. 行内元素：不会在之前或者之后生成'行分隔符',是块级
		   元素的后代,通过设置 display: inline; 声明元素为
		   行内元素：

           1. 多个元素共享一行,元素从左向右排列
		   2. b / strong / s / del / u / ins / sup / sub / i / em / cite ...
		   3. a / span / img
		   4. 不能修改高宽属性



		2. 块级元素：在正常流中,会在框之前和之后生成'换行符'

		   1. 一个元素独占一行,从上往下排列
		   2. h1 ~ h6
           3. p
		   4. div
		   5. ul(ol) / li
		   6. 结构标记
		   7. 属性：align 设置标记内容水平对齐方式
		      取值：left / center / right

        3. 行内块元素
		    1. 表现方式如同行内元素,也就是从左向右排序;
			   但是具有块级元素的特征

			2. table 它的高宽等特性由表格内容多少决定的。
			3. 表单元素


	   4. display:none; 可以完全隐藏元素.
	      注: 和其相似功能的属性: visibility: hidden;
		  使元素不可见,但是在文档流中保留它,出现空白位置.

    2. 行内元素
	   1. 行内元素设置 margin-top/bottom 无效,其他两个有效果

	   2. 行内元素设置 padding-top/bottom 不会影响到其原始位置
	      可以撑开外边框.但是不能撑开父元素,为其重设行高之后可以
		  撑开父元素.
	   
	   2.

	   2.
*/



/*
                 10. H5 宽高 / 内/外边距与边框
----------------------------------------------------
    1. 块级元素
	   1. 由盒子模型,块级元素在文档流中占据的宽和高分别是
	      左/右外边距+左/右框+左/右内边距+内容宽度 和
		  上/下外边距+上/下框+上/下内边距+内容高度 

		  而通过 width / height 属性显式定义的只是内容的
		  宽 / 高
       
	   2. 通过设置 box-sizing : border-box; 可以设置边框
	      和内边距作为 宽 / 高 的主体。
          在 input / textarea / img / video 等替换元素,
		  特别适合使用此属性。

    
	2. 块级元素的水平布局：
	   1. margin-left / -right  |  padding-left / -right
	      border-left / -right  |  width 
		  这七个属性和块级元素水平布局相关。
       
	   2. 这七个属性的值加在一起是块级元素的实际宽度,也通常
	      是其父级元素的宽度(内容宽度),也就是父元素 width 值。
        
	   3. 这七个属性值,只有 width / margin-left / -right
	      可以设置为 auto .
		  其余值要么显式设置为确定值,要么默认为 0.
		  自然,如果不设置 width / margin-left / -right
		  的值, width 值是父元素 width 值。而后两者为 0
       
	   4. width 不显式设置确定值,其实默认是 auto ,并且其长度
	      会自动调整,以使整个块元素充满父元素。

       5. 以上三个值中若有一个值为 auto, 余下俩个为确定值,
	      那么这个值将会根据父级元素 width 大小确定自己。
		  使整个元素框充满父级元素内容。
		  也就是 auto 的设置将会弥补掉和父元素 width 的差距。

	   6. 如果以上三个都设置了一个确定的值,这是格式化属性会
	      过分受限。此时总会把 margin-rigth 强制为 auto .右边距
		  的实际宽度会根据 auto 规则来设置。

	   7. 如果两个外边距显式设置,width 设置为 auto (即使不显式
	      设置 width: auto; 它也是默认 auto 的)。width 的值将
		  设置所需以填满父元素 width .
          所以设置左右外边距相对是是元素居中的好方法。
		  而 text-align 属性则应用于块级元素的内联内容。
	   
	   8. 如果一个外边距和 width 设置为 auto. 那么这个外边距将
	      转换为 0.

	   9. 如果三个值都设置为 auto, 那么两个外边界都会变成 0. 

	   10.综上：
	      1. 七个属性都不设置, width 等于父级 width, 其余都为 0.
		  2. 只有 margin-left / right | width 可以设置为 auto.
		     会有不同影响：
			 
			 1. width 显式设置,左右外边距若是设置具体值,那么根据需要
			    更改右外边距的宽度; 若是设置 auto 则会根据需要填满
				父级元素 width; 若是没有设置值,都为 0 .

			 2. width 设置 auto (效果等同不显式设置任何值)。那么
			    width 将根据左右外边距设置的值调整自身以填满父元素
				width。若是左右外边距设置为 auto 则转化为 0.

    3. 负外边距
	   1. 外边距可以设置为负值
	   2. 这类情况会在元素 width 设置为 auto 时体现出来怪异之处。
	      若：(先不考虑 height )
		  div.father {width:500px;}
		  div.son {width:auto; margin-left:100px; margin-right:-100px; }
          此时子元素 width = 500-(100-100) = 500px;

		  加上 margin-left:100px; 子元素将向右超过父元素 100px;
        
	   3. 这个对于 width 显式设定长度作用是不明显的。

    4. 百分数长度
	   1. 如果 width / margin-left / -right 设置为百分数,那么规则基本相同。

    5. 块级元素的 height
	   1. 垂直格式化的七个属性：padding-top/-bottom | 
	      margin-top/-bottom | border-top/-bottom | height

       2. 正常流中一个元素 margin-top/-bottom 设置为 auto 时,
	      其自动计算为 0.
        
       3. height 应该设置为 auto 或者 一个非负数值。

	   4. height 不设置或者设置为 auto 时,其值由内部元素的高度之和
	      确定。也就是块级元素会被 '撑开'.
		  元素 margin-top/bottom 不会撑开父元素的高度。
		  在父元素设置边框之后能将其撑起来！
       
	6. 垂直相邻的外边距将会合并。
	
	7. 负外边距(垂直方向)
	   1. 正外边距表现出来的是将元素向下推,向下推的距离
	      需要考虑是否和上面相邻元素的下外边距发生重合。
       
	   2. 负的外边距变现出的效果是将元素向上拉。甚至会发生重合。
	      变现出来的状态就像是脱离了文档流。
		   
    8. margin: 相互接触的上下外边距会融合,使用其中大的那个
	   外边距.左右外边距则不会.
	   当margin / padding 使用 em 设置值时,em 的大小是
	   相对元素字体大小而非父元素字体大小的.

    9. 使用父元素的 padding 而不是子元素的 margin 来表示两者
	   之间的距离关系。
	   否则可能会出现一些难以解释的问题。例如在子元素添加上
	   外边距,结果并非让父/子元素发生上下间隔,而是父元素和
	   子元素同时向下偏移,好像 margin-top 发生在父元素身上一样。
	   
	   以上称为外边距溢出,解决方法有以下几种:
	      1. 为父元素加上边框,但是会影响父元素实际高度 
		  2. 为父元素设置添加上内边距,也会影响父元素实际高度
		  3. 在父元素上面添加 :before 伪元素,注意此元素 display:table
		     才能够起作用.
			 只有 :before 加在父元素之上才行,加第一个子元素上面没有效果。
		     或者空的 <table></table>
		     经过测试,选用空的 div 不行.

	   margin 本质上说控制的是兄弟元素间的距离

   10. padding
       1. 行内元素可以添加内边距,但是不会向上下挤其他元素。
	      但是可以显示行内元素背景,会遮挡到其他元素。
	   2. 

   11. 注：
	   1. 在父元素被子元素撑开获得高度时,对子元素设置 margin-top/bottom
	      的百分数值时,默认参考的值父元素的宽度!!
		  不以父元素高度为参考进行子元素高度设置以免陷入循环高度定义。

	   2. 竟然在父元素设定高度之后,为子元素设置 margin-top / bottom 为百分
	      数值时,其高度也是相对父元素宽度计算。
		  但是这里也采用宽度计算上下边距令人吃惊。
		  那么 margin 的百分比设置都是以父元素宽度来计算的了。

	   3. 经过测试, padding 的百分比设置也是依据父元素宽度计算的。

	   4. 相比而言, top 属性百分数值以父元素高度计算;当然如果父元素被子元素
	      撑开而获得高度,那么其数值无效。也不会类似 margin / padding 一样参考
		  父元素宽度计算。

	   5. 设置边框时,不能为边框的宽度设置百分比

	   5.
	   5.
	   


*/



/*
                 11. H5 背景
----------------------------------------------------
    1. background-color:
	             -image:
				 -repeat:
				 -attachment:
				 -position:
                 -size:

	2. background-color: transparent(透明) / 色值;
       background-image: url(URL.jpg) / linear-gradient / radial-gradient;  
	   background-repeat: repeat(两个方向都重复) / repeat-x / repeat-y / no-repeat;
       background-attachment: fixed / scroll(默认) (定义背景图像是否随网页滚动);
       background-position: x,y;  表示距离左上角的绝对位置或者百分数
	   background-size: length / n% / cover / contain(图像某一边适配边缘);
	   background: ; 将所有值写入,没有前后顺序的要求。

	   注：对于 background-position: ;中x,y 的值可以使用关键字：
	   x: left / right / center
	   y: top / bottom / center 
	   用以实现 x / y 轴上的居中方式.
	   因此使用 center center 可以实现背景图片的中心对齐.

    3. 背景图
	   1. background-size: num / 百分数 / cover / contain
	   2. num : 设置值
	   3. 百分数：以父元素为参考设置数值
	   4. cover : 约束长宽比例填充这个父元素
	   5. cotain : 约束长宽比例在 x / y 方向上填充满父元素就行。
       6. 一般不修改背景图的大小,重改背景图大小会消耗时间。

	4. 背景固定：
	   1. scroll
	   2. fixed

	5. 渐变背景：
	   background-image:linear-gradient(to bottom,red 10%,yellow 50%,#444 100%);
	   background-image:linear-gradient(45deg,red 10%,yellow 50%,#444 100%);

       background=image:radial-gradient(size at position, color-point,...)
	   也可以使用背景渐变做出彩条。
	   background-image:linear-gradient(to right,red 50%,yellow 50%,yellow 100%);

	6. 重复线性/径向渐变
	   1. background-image:repeating-linear-gradient(angle,color-point,...)
       2. background-image:repearing-radial-gradient(size at position,color-point,...)
       3. 在重复渐变中,位置不能是百分比。

	7. 兼容性问题：
	   1. 现代浏览器都支持前缀,不支持的可以加前缀。
	   2. 不支持的话可以加前缀：
	      chrom / safari : -webkit-
		  firfox: -moz-
		  IE: -ms-
		  opera: -o-

	   3. background-image:-webkit-linear-gradient();

	   4. http://caniuse.com 检查兼容性

*/



/*
                 12. H5 定位 
----------------------------------------------------
    1. 每个元素在文档流中都有确定的位置,相对于这个原始的位置
	   进行移动就是相对定位: relative
	   周围元素完全不受影响,因此可能会发生重叠.
	   发生重叠,文档流后方的遮蔽前方的.
	   可以通过设置 index 来指定谁在上方.
	
	2. position: static(默认,元素原始位置) / relative / 
	   absolute / fixed;
	
	3. 绝对定位: absolute
	   相对于 body 或者已知最近的已经定位的祖先元素的精确位置,
	   可以让元素脱离文档流,不会留下空白.周围元素不知道它的存在,
	   它也不知道周围元素的存在.自身只相对祖先元素偏移.

	   注: 对希望成为绝对定位参照体的祖先元素添加 position: relative;
	   那么元素将参照这个祖先元素进行绝对定位.否则将参照 body 进行
	   绝对定位计算偏移量.
       也同样会和其他元素重叠.
	
	4. 固定定位可以让元素处在页面中固定位置,但是多数浏览器对其支持
	   的效果一般.最后不要使用.

	5. 不管是相对/绝对/固定 定位都可能发生重叠,使用 index:n; n 值
	   更大的元素居上部显示.

    6. position:relative;
	   1. left / right : 可以设置从原始位置向左右移动,可以设置为数值或者
	      百分数。
		  使用百分数时,要求父级元素一定有宽度,哪怕父级元素是默认宽度或者
		  百分比宽度。

       2. top / bottom : 可以设置数值/百分数;
	      但是,当设置值为百分数时,一定需要父级元素具有显式高度,父元素的
		  高度不能是由子元素撑开的,否则设置百分数无效。

	   2. 

	6. 

	6. 


*/


/*
                 13. H5 浮动
----------------------------------------------------
    1. 块级元素可以设置宽高,但是无法并排显示.这就带来极大的不便
	   为了能够实现灵活布局,引入浮动让块级元素可以并行排列。

	   块级元素浮动之后会脱离文档流,因此也就和正常文档流之内的元素
	   不在有布局冲突,但是会发生重叠。

	   css 可以有三中手段让元素脱离 '文档流':
	   1. 浮动
	   2. 绝对定位
	   3. 固定定位

	2. 行内元素浮动之后可以设置宽高属性。
	
	3. 

	2.

	2.



*/

/*
                 14. H5 重要概念
----------------------------------------------------
    1. 正常流
	   1. 指西方语言文本从左向右,从上向下显示。也是 HTML 文档
	      的文本布局。
		  通过设置元素浮动或定位来让元素脱离文档流。

	2. 非替换元素
	   1. 元素内容包含在文档流之中,如段落中的文字内容是放在
	      段落元素之中的。

	3. 替换元素：
	   1. 用来为其他内容做占位符的元素。
	      如： img 元素,指向一个外部文件,插入到文档流中该元素
		  所在的位置。
		  大多数表单元素也可以被替换。<input type='vidio'>

	4. 块级元素

	5. 行内元素



*/

/*
-------------------------------------------------------------
                    15. 媒体查询
-------------------------------------------------------------
    1. @media (max-width:num){ }  /  (min-width:num){ }

	2. 查询当前页面宽度,满足宽度条件时应用对应样式。

	3. min-width / max-width 设置最小 / 最大值。
	   意义是：当前页面宽度在[min-width,max-width]之内时,应用
	   对应样式。
	
	4. min-width: 768px / 992px / 1200px 作为屏幕宽度的四档：
	   max-width: 767px / 991px / 1199px 
	   [0,767] / [768,991] / [992,1199] / [1200,~]
	   小屏幕(手机) / 中等屏幕(平板) / 大屏幕(电脑) / 超大屏幕(大屏电脑/电视)

	5. 如果不同时设置 min-width / max-width ,那么单独写时,前后
	   顺序要改变。
	
	6. 

	2. 
	2. 

*/


/*
-------------------------------------------------------------
                    16. BFC
-------------------------------------------------------------
   1. BFC  Block Formating Context 块级格式上下文
   2. 具有 BFC 的元素,其内部的元素在如何设置,都不会影响到外部元素
      的布局。
   
   3. 因此由于 BFC 的这一特性,就决定了其必须
      1. 自带清除浮动的效果.
	  2. margin 属性不能发生垂直重叠.

   4. 常见能够触发 BFC 的情况：
      1. HTML 根元素
	  
	  2. float 不为 none 的元素
	     1. 元素脱离文档流. 为了不影响其他元素,自身称为
		    行内块元素,并且 margin 不重叠。
		 2. 
	  
	  3. overflow: scroll / hidden / auto 
	     1. 这就是为什么 overflow:hidden; 可以清除浮动的原因

	  4. display 的值为 table-cell / table-caption / inline-block
      
	  5. position 的值不为 none / relative
	     1. position：absolute / fixed 脱离文档流。不再影响其他元素。

   5.

   6.
*/

/*
----------------------------------------------------------------
                 17. chrom 浏览器手机视口
----------------------------------------------------------------
    1. 让 chrom 浏览器的手机模拟功能开启,需要在 html 中设置手机视口

	2. <meta name='viewport' content='width=devive-width,user-scalable=no,initial-scale=1.0,
	   maximum-scale=1.0, minimum-scale=1.0'>
	   设置模拟手机显示.

	3.

	4.




*/

/*
------------------------------------------------------------
                    18. CSS 初始化
------------------------------------------------------------
    1. 设置 margin/padding
       直接使用 * 太浪费资源
	   div,p,ul,ol,dl,h1,h2,h3,h4,h5,h6{
	     padding:0;
		 margin:0;
	   }

	2. 

*/


/*
------------------------------------------------------------
                  19. HTTP / AJAX 请求状态码
------------------------------------------------------------
	1. HTTP 请求状态码
	   1xx: 信息性状态码,接收请求正在处理
	   2xx: 成功状态码,请求正常处理完毕
	      200: 表示从客户端发来的请求在服务器被正常处理
		  204: 从客户端发来的请求被正常处理,但在返回的响应报文
		       中不含实体的主体部分。
          206：客户端进行了范围请求,而服务器成功执行了部分的 
		       GET 请求。
	   
	   3xx: 重定向状态码,需要进行附加操作以完成请求
	      300: 
		  301: moved premeanently
		       永久性重定向,表示资源已被匹配到了新的 URL, 以后的
			   应使用资源现在所指的 URL。
		  302: found
		       临时性重定向,请求的资源已被分配新的 URL,希望用户本次
			   使用新的 URL 访问。
			   与 301 不同的是, 302只是临时性质的.已经移动的资源
			   未来还有可能再次改变 URL。
		  303: 表示由于请求资源存在另一个 URL,应该使用GET方法定向获取
		       请求的资源。
			   与 302 不同的是,303明确表示使用 GET 方法获取资源。

			   301 / 302 / 303 响应状态码返回时,机会所有的浏览器都会
			   把 POST 改为 GET .并删除请求报文内容的主体,之后请求会
			   自动再次发送。
		  304: 客户端发送附带条件的请求时,服务器端资源已经找到,但未
		       符合条件。304 返回时,不包含任何响应主体部分。
			   304 和重定向没有关系。
			   自从上次请求之后,请求的网页未修改过。服务器返回此状态码
			   时,不会返回网页内容。而从缓存中取得网页内容,节省流量和带宽。
	   
	   4xx: 客户端失败状态码,服务器无法处理请求
	      400: 表示报文中存在语法错误.需修改请求内容后再次发送。
		  401: 
		  402: 
		  403: 客户端对资源的访问被服务器拒绝。
		  404: 服务器无法找到请求的资源,也可以作为服务器
		       端拒绝请求且不想说明理由时使用。
	   
	   5xx: 服务器错误状态码,服务器处理请求出错
	      500: 服务器执行请求时发生错误。
		  501:
		  502:
		  503: 服务器暂时处于超负荷或者正在进行停机维护。
		  504: 网关超时,表示不能及时从远程服务器获得应答。

	2. AJAX 请求状态值/码
	   readyState:
	      0: 尚未初始化,还没有调用 send() 方法。
		  1: 正在发送请求,正在调用 send()
		  2: 载入完成,send() 方法调用完成。
		  3: 交互,正在解析响应内容。
		  4: 完成,响应内容解析完成,可以在客户端调用。
       AJAX 状态值指运行 AJAX 经历的几种状态。无论访问是否
	   成功都能够响应。相当于 AJAX的运行步骤。

	   status:
	      100:
		  200:
        
       AJAX 请求状态码指无论是否成功,由 HTTP 协议根据提交
	   的信息,服务器所返回的HTTP请求头信息代码。



*/


/*
* -----------------------------------------------------------
*                      20. flex
* -----------------------------------------------------------
    1. 弹性布局 (flexible-box)

	2. display: flex / inline-flex;
       safari 需要加 -webkit- 后缀.(兼容性问题后续添加)
	   -webkit-flex

	3. 设置 flex 之后,子元素的 float / clear / vertical-align 将失效
	   项目元素可以设置宽高,
	   父元素的 text-align 失效.

	4. 容器,项目,主轴,交叉轴
	   采用 flex 布局的元素,称为 flex 容器.它的所有子元素将自动成为
       容器的成员,简称 flex (flex item) 项目.

	5. flex 容器具有 main-axis / main-start / main-end 主轴属性
	   cross-axis / cross-start / cross-end 交叉轴属性
	   默认为水平从左到右.

	6. flex-direction
	   1. 决定主轴的方向(即项目的排列方向)
	   2. row;            主轴为水平方向
	   3. row-reverse     主轴为水平方向,起点在右端
	   4. column          主轴为垂直方向,起点在上方
	   5. column-reverse  主轴为垂直方向,起点在低端

	7. flex-wrap
	   1. 如果项目在一行排列不下,是否换行显示
	   2. nowrap        不换行.如果项目设置的总宽度超过父元素,也不会超出,反而
	                    变成弹性盒子,即使每个项目都显式确定像素宽度.
	   3. wrap          换行
	   4. wrap-reverse  换行,第一行在下方.

	8. flex-flow
	   1. flex-direction 和 flex-wrap 的简写形式
	   2. direction wrap

	9. justify-content
	   1. 定义项目在主轴方向的对齐方式
	   2. flex-start        左对齐
	   3. flex-end          右对齐
	   4. center            居中对齐
	   5. space-between    两端对齐
	   6. space-around      均匀分配间隔,每个项目两端空间相同

	10.align-items
	   1. 定义项目在交叉轴上如何对齐
	   2. flex-star  以交叉轴起点对齐
	   3. flex-end   以交叉轴低端对齐
	   4. center     以交叉轴中间对齐
	   5. baseline   以项目第一行文字的基线对齐
	   6. stretch    默认值 auto ,占满整个容器的高度

	11.align-content
	   1. 定义多根轴线的对齐方式,也就是多行多列的情况
	      具体点,与 justify-content 功能类似。交叉轴上存在列时,
		  进行对齐操作。
	   2. flex-star  以交叉轴起点对齐
	   3. flex-end   以交叉轴低端对齐
	   4. center     以交叉轴中间对齐
	   5. baseline   以项目第一行文字的基线对齐
	   6. stretch    默认值 auto ,占满整个容器的高度


	---------------- 项目属性 ---------------

	12.order
	   1. 定义项目的排列顺序.默认为 0 值越小,排列越靠前

	13.flex-grow
	   1. 该属性定义了项目的放大比例,默认为 0, 即如果
	      存在剩余空间,也不放大.

       2. 属性值取数值

	   3. 如果所有项目数值都相同,那么他们等分剩余空间.

	   4. 如果项目数值不相同,那么按照各自数值所占总数值的百分
	      比分配剩余空间.

	   5.

	14.flex-shrink
	   1. 为项目定义缩小比例,默认为 1,即空间不足时,	该项目等比
	      减小

	   2. 属性值为数字

	   3. 如果一个项目值为 0 ,其他项目值为 1,前者不缩小.

	15.flex-basis
	   1. 定义在分配多余空间之前,项目占据的主轴空间.浏览器根据这个
	      属性,计算主轴是否右多余空间.默认值为 auto.

       2. <length> / auto (default)

	16.flex
	   1. flex-grow / flex-shrink / flex-basis 三者的综合.

	17.align-self
	   1. 允许单个项目可以与其他项目不一样的对齐方式.
	   2. 默认值 auto 即继承自父元素 align-items 属性.
	      6个取值,可覆盖父元素设置的值.

* */

/*
* ----------------------------------------------------------
*                      21. 转换 与 动画
* ----------------------------------------------------------

    -------------------   转换   -------------------
    1. 转换可以使元素改变形状/尺寸/位置的一种效果.
       经过转换后的元素即使位置改变,也不会对其他元素的位置造成影响!
	   即使是行内文本,也会遮挡。
	   那么其效果类似于 position:relative; 会保留在文档流中的位置,
	   当时本身元素脱离文档流。

	2. transform:none/transform-function
	   1. 后接 transform-function: translate()/rotate()/
	      scale()/skew();
	   2. 可以接多个变换函数,使用空格连接

	3. transform-origin:数值/百分比/关键字
	   指定转换原点

	4. 2D 旋转
	   rotate(deg)
	   1. 坐标轴也会随之旋转,旋转之后会改变元素坐标轴的方向
          因此会影响旋转之后的位移效果。

	5. 2D 缩放
	   scale(num)
	   1. 以中心为原点向四周放大/缩小
	   2. 放大后的元素类似脱离文档流效果,不会影响其他元素的位置
          对应文档流而言还是处于原本位置。

	6. 2D 平移
	   translate(x/(x,y))
	   1. 默认以 x/y 轴做相对位移
	   2. x/y 轴也会受 rotate() 旋转影响,因此 rotate() 会
	      影响位移效果。

	3. skew()
	   元素倾斜
	   skew(x/(x,y))
	   1. skew(x)
	      让元素向着 x 轴发生倾斜,实际是改变 y 轴的角度
		  x 取值为正, y 轴逆时针倾斜
		  x 取值为负, y 轴顺时针倾斜

	   2. skew(y)
          让元素向着 y 轴发生倾斜,实际是改变 x 轴的角度
          y 取值为正, x 轴顺时针倾斜
		  y 取值为负, x 轴逆时针倾斜


	3. 3D 转换
	   1. 透视距离,模拟人的眼睛到 3D 转换元素之间的距离
	      属性：perspective
	      注意,该属性要加在转换元素的父元素之上。

       2. 3D 旋转
	      属性 transform
		  取值：
		  1. rotateX(xdeg)
		     以 x 轴为旋转轴,旋转一定角度

		  2. rotateY(ydeg)
		     以 y 轴为旋转角度,旋转一定角度

          3. rotateZ(zdeg)
		     以 z 轴为旋转角度,旋转一定角度

          4. rotate3D(x,y,z,ndeg)
		     x,y,z 取值大于 0 表示该轴旋转,否则不旋转。



    -------------------   动画   -------------------
    1. 动画兼容性问题
        1. 低版本浏览器需要在动画声明前加前缀
    	2. @-webkit-keyframes ani-name{
	       }

    	3. @-ms-keyframes ani-name{
	       }

	    4. @-o-keyframes ani-name{
	    }

	    5. @-moz-keyframes ani-name{
	    }

	2. 动画是通过 关键帧 来控制动画的每一步
	   关键帧：
	   1. 动画执行的时间点
	   2. 在该时间点上的样式

	3. 动画的使用步骤
	   1. 声明动画

		  1. 为动画起名,定义关键帧
		     @keyframes aniName{
			   // 关键帧
               0%{
				 // 动画开始时元素的样式
			     background-color:red;
			   }
			   25%{

			   }
			   ...
			   100%{
			     // 动画执行结束时元素的样式
			   }
			 }
          2. 注
		     动画每帧之间的过渡效果与 transition 相类似。
			 虽然不能肯定,可以推测是 transition 的过渡效果。

	   2. 调用动画
	      1. animation-name
		     指定调用动画的名称

		  2. animation-duration
		     指定动画周期时长：s / ms /

		  3. animation-timing-function
             指定动画速度曲线函数,与 transition 取值相同

		  4. animation-delay
		     指定动画延时时间

		  5. animation-iteration-count
		     指定动画播放次数：
			 数字 / infinite

          6. animation-direction
		     指定动画播放方向

		  7. animation-fill-mode
		     1. 规定动画在播放前或播放后的状态
			 2. none 默认值
			 3. forwords 动画播放完成后,将保持在最后一个
			    动画的状态上

             4. backwards 动画播放前,延迟时间内,动画将保持在第一帧
			    状态上

			 5. both 上面二者结合

          8. animation-play-state
		     1. 指定动画是暂停还是开始
			 2. paused
			 3. running

* */


