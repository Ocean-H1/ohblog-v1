---
title:  Less基础语法
categories: 
 - Plugin
date: 2023-04-15
isShowComments: false
cover: 'https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/css3.png'
---

## 什么是Less:question:

::: tip

​		Less （Leaner Style Sheets ） 是一门CSS 预处理语言(预处理器), 并且兼容CSS。它扩充了CSS语言,增加了诸如变量、混合(mixin)、函数等功能,让CSS更易维护、方便制作主题、扩充

​	更多详细信息可见: [Less官网](https://lesscss.org/)

:::

## Less的基础语法:keyboard:

### 1. 变量(Variables)

::: tip

在一个大型的网页项目中，我们CSS使用到的某几种属性值往往是特定的

* 比如我们使用到的主题颜色值，那么每次编写类似于#f3c258格式的语法；
* 一方面是记忆不太方便，需要重新编写或者拷贝样式；
* 另一方面如果有一天主题颜色改变，我们需要修改大量的代码；
* 所以，我们可以将常见的颜色或者字体等定义为变量来使用；

:::

#### 1.1 通过变量控制css规则中的值

**less:** 

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

**编译后:**

```css
#header {
  width: 10px;
  height: 20px;
}
```

#### 1.2 变量插值

::: tip

​	上面的示例着重于使用变量来控制*CSS 规则中的值*，但它们也可以用在其他地方，例如选择器名称、属性名称、URL 和`@import`语句

:::

**例如选择器:** 

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

**编译后**:

```css
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

### 2. 混合(Mixins)

::: tip

​	混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法

:::

**假设我们定义了一个类（class）如下：**

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
// 如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，如下所示
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
// .bordered 类所包含的属性就将同时出现在 #menu a 和 .post a 中了
```

### 3. 嵌套(Nesting)

::: tip

​	Less 提供了使用嵌套（nesting）代替层叠或与层叠结合使用的能力。

​	用 Less 书写的代码更加简洁，并且模仿了 HTML 的组织结构。

:::

**假设我们有以下 CSS 代码：**

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

用 Less 语言我们可以这样书写代码：

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

**还可以使用此方法将伪选择器（pseudo-selectors）与混合（mixins）一同使用。下面是一个经典的 clearfix 技巧，重写为一个混合（mixin） (`&` 表示当前选择器的父级）**：

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

### 4. 运算(Operations)

::: tip

​		算术运算符 `+`、`-`、`*`、`/` 可以对任何数字、颜色或变量进行运算。**如果可能的话，算术运算符在加、减或比较之前会进行单位换算**。**计算的结果以最左侧操作数的单位类型为准**。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换

:::

```less
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
```

**乘法和除法不作转换。**因为这两种运算在大多数情况下都没有意义，一个长度乘以一个长度就得到一个区域，而 CSS 是不支持指定区域的。Less 将按数字的原样进行操作，并将为计算结果指定明确的单位类型:

```less
@base: 2cm * 3mm; // 结果是 6cm
```

### 5. 转义(Escaping)

::: tip

​	转义（Escaping）允许你使用任意字符串作为属性或变量值

:::

例如: 

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
// 从 Less 3.5 开始，可以简写为：
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

**编译后：**

```css
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

### 6. 函数(Functions)

::: tip

Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在[Less 函数手册](https://less.devjs.cn/functions/)中有详细介绍。

:::

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

### 6.  命名空间和访问符

::: tip

​	有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 `#bundle` 之下，为了以后方便重用

:::

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}

// 如果我们希望把 .button 类混合到 #header a 中，我们可以这样做
#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
```

### 7. 映射(Maps)

从 Less 3.5 版本开始，你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

**编译后**:

```css
.button {
  color: blue;
  border: 1px solid green;
}
```

### 8. 作用域(scope)

Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

### 9. 注释(Comments)

块注释和行注释都可以使用：

```less
/* 一个块注释
 * style comment! */
@var: red;

// 这一行被注释掉了！
@var: white;	
```

### 10. 导入(Importing)

“导入”的工作方式和你预期的一样。你可以导入一个 `.less` 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 `.less` 扩展名，则可以将扩展名省略掉

```less
@import "library"; // library.less
@import "typo.css";
```

