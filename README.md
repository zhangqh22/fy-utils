# fy-utils

> fy-utils主要用于处理日常开发中常用的方法

## 一、安装

```
$ npm install fy-utils -S
```

## 二、引入方式

```
import { fyArr, fyObj, fyUrl } from 'fy-utils'
```

### 1、 fyArr用于处理数组相关

示例：

```
fyArr.del(['a', 'b', 'c'], 1); // 删除数组中索引为1的值
```

有以下方法：

1. del 删除数组中指定索引的值
2. isRepeat 是否有重复数据

### 2、fyObj用于处理对象相关

示例：

```
fyObj.isJSON([]); // false, 判断是否是json
```

有以下方法：

1. isJSON 判断是否是json对象
2. diffJSON 对比两JSON是否相等

### 3、fyUrl用于处理Url相关

示例：

```
fyUrl.query2json(); // url查询参数转JSON对象
```

有以下方法：

1. query2json url查询参数转JSON对象