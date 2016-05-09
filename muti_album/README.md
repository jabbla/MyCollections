# 多功能相册

### 使用
a. 设置布局
> ifeAlbum.setLayout(flag)
flag:1----拼图布局，2----瀑布布局，3----木桶布局

b. 初始化布局
```javascript
ifeAlbum.init(width,height,options)
width：宽度 ；height：高度；
options(可选)：
瀑布布局:options.cols(每行的列数)
木桶布局:options.BinMin(每行最少的图片数)
         options.BinMax(每行最多的图片数)

```
c.  添加图片
```javascript
ifeAlbum.setImage(['example.jpg']);
```
拼图布局会根据图片的数量选择相应的布局

b. 允许/禁止 全屏显示(默认禁止)
```javascript
ifeAlbum.enableFullscreen();//允许全屏显示
ifeAlbum.disableFullscreen();//禁止全屏显示
```

c. 获取当前全屏显示状态
```javascript
ifeAlbum.isFullscreenEnabled()
```

d. 获取主体元素的dom，选择合适的地方将它插入吧
```javascript
ifeAlbum.dom
```




