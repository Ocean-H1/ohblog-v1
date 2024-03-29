---
title: 两种架构模式——MVVM,MVC
categoires: 
 - Vue
date: 2022-10-16
cover: 'https://images.oceanh.top/bg03.png'
isShowComments: false
---

## 一、MVC(Model-View-Controller):robot:

### 1.1 MVC是什么:question:
::: tip

* MVC就是**模型-视图-控制器**。它是MVC,MVP,MVVM中**最早**产生的框架(设计思想)，MVP和MVVM都是以它为基础发展而来。经典MVC模式中，M是指业务模型，V是指用户界面，C则是控制器。其中，View的定义比较清晰，就是用户界面。
* **MVC要实现的目标是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强**，且MVC是**单向通信**，必须通过Controller来起到连接调度的作用。
* Controller层用来调度View层和Model层，将用户界面和业务逻辑合理的组织在一起，起粘合剂的效果。所以Controller中的内容能少则少，这样才能提供最大的灵活性

:::

::: tip

* Model:  模型层，数据模型及其业务逻辑，是针对业务模型建立的数据结构，与View无关

* View: 视图层，用于和用户实现交互的页面,通常实现数据的I/O

* Controller: 控制器,接受用户的输入并调用模型和视图去完成用户的需求,控制器本身不输出任何东西和做任何处理。它只是接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示返回的数据。
  :::

### 1.2 图示

![MVC图示](https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/202303051716188.png)

### 1.3 优点:rocket:

::: tip

* **耦合性低**
  * 视图层和业务层分离，这样就允许更改视图层代码而不用重新编译模型和控制器代码。

* **复用性高**

* **生命周期成本低**

* **部署快**

* **可维护性高**
  * 分离视图层和业务逻辑层也使得WEB应用更易于维护和修改

:::

### 1.4 缺点:bug:

::: tip

* **不适合小型，中等规模的应用程序**
  * 花费大量时间将MVC应用到规模并不是很大的应用程序通常会得不偿失

* **视图对模型数据的低效率访问**
  * 依据模型操作接口的不同，视图可能需要多次调用才能获得足够的显示数据。对未变化数据的不必要的频繁访问，也将损害操作性能

* **view和controller连接过于紧密**
  * 视图与控制器是相互分离，但却是联系紧密的部件，视图没有控制器的存在，其应用是很有限的，反之亦然，这样就妨碍了他们的独立重用

:::

## 二、MVVM(Model-View-ViewModel):robot:

### 2.1 MVVM是什么:question:

> MVVM是模型-视图-视图模型，本质上是MVC的改进版。它与MVC最主要的区别就是，MVVM采用双向绑定（各部分之间的通信是双向的），View的变动，自动反映在ViewModel，反之亦然。
>
> **在以前传统的开发模式即MVC模式当中**,**前端人员只负责View(视图)部分，写好页面后交由后端创建渲染模板并提供数据；随着MVVM的出现**，**前端已经可以自己写业务逻辑以及渲染模板，后端只负责提供数据即可**

::: ti

* Model: 数据模型。**Model层独立性相当强，它只用来提供数据，而不管数据是用来做什么的。**

* View: 视图层，视图元素和视图元素初始化。

* ViewModel: 视图模型，**操作业务数据，并将数据呈现在View上**。它将Model层和View层的**数据同步自动化**了，实现了View和Model的分离。
  * 并且由于 ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，所以在这种情况下，View和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel(**提高复用性**)

:::

### 2.2 图示

![MVVM图示](https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/202303051717697.png)

### 2.3 优点:rocket:

::: tip 

* **低耦合**
  * 视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

* **可复用性**
  * 可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

* **独立开发**（模块化开发，预留接口交互即可）
  * 开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计

* **可测试**
  * 界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

:::

### 2.4 缺点:bug:

::: tip

* 数据绑定使bug调试变的困难
  * 在页面上看到的bug有可能来自来自view，也可能是在model，使一个位置的bug快速传递到别的位置

* ⼀个⼤的模块中 model 也会很⼤，虽然使⽤⽅便了也很容易保证了数据的⼀致性，当时⻓期持有，不释放内存就造 成了花费更多的内存
* 当一个视图的状态很多的时候，View-Model的构建和维护成本比较高

:::



参考引用:

https://www.jianshu.com/p/898bb3f6090d

https://www.jianshu.com/p/ff6de219f988