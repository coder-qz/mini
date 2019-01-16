
##组合选择符

###1.后代选择器
用于选取某元素的后代元素 div p

###2.子元素选择器
div>p
选择<div>元素中所有直接子元素<p>

###3.相邻兄弟选择器
选择紧接在另一元素后的元素，且二者有相同父元素。 div+p

###4.后续兄弟选择器
选取所有指定元素之后的相邻兄弟元素。div~p


##伪类
语法
selector:pseudo-class {property:value;}
CSS类也可以使用伪类：
selector.class:pseudo-class {property:value;}

    a:link {color:#FF0000;} /* 未访问的链接 */
    a:visited {color:#00FF00;} /* 已访问的链接 */
    a:hover {color:#FF00FF;} /* 鼠标划过链接 */
    a:active {color:#0000FF;} /* 已选中的链接 */

伪类和CSS类

伪类可以与 CSS 类配合使用：

    a.red:visited {color:#FF0000;}
 
    <a class="red" href="css-syntax.html">CSS 语法</a>

:first-child 选择父元素的第一个子元素

:first-line 伪元素文本的首行设置特殊样式 

**注意:只能用户块状元素**

:first-letter 伪元素首字母设置样式'

**注意:只能用户块状元素**

:before 伪元素可以在元素的内容前面插入新内容。

:after 伪元素可以在元素的内容之后插入新内容。


##CSS文本

text-decoration:none;//移除下划线

text-decoration:overline;//顶部

text-decoration:line-through;//中间

text-decoration:underline;//底部

text-transform:uppercase;

text-transform:lowercase;

text-transform:capitalize; 首字母大写

text-indent:50px;首行缩进

letter-spacing:2px; 字符间距

line-height:70%; 行间距

word-spacing:30px; 单词间距

white-space:nowrap;禁止文字换行

![](https://i.imgur.com/1qzxOdH.png)