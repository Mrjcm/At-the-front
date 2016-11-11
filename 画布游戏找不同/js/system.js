/*
  tgrong
  2015.8.21
*/
/*
  通过id号获取元素对象
  参数id表示元素对象的id名称
  函数返回一个指定id号的元素对象
*/
function $$(id) {
    return document.getElementById(id);
}
var postMessageOrigin='http://localhost:63342';
/*
 开关式控制元素的显示与隐藏
 参数e表示元素对象
 click方法用于显示与隐藏元素
*/
var sh= {
  click: function (e) {
    var status=e.style.display;
    if (status=="") {
      e.style.display = "block";
    } else {
      e.style.display = "";
    }
  }
}
var arrTip=new Array("你是少年！","你是青年！","你是中年！","你是中老年！","你是老年！","你可以退休了！","请输入年龄！","年龄格式出错！");
var comm= {
    setAttr: function (e, strName, strValue) {
        e.setAttribute(strName, strValue);
    },
    getAttr: function (e, strName) {
        return e.getAttribute(strName);
    },
    remAttr: function (e, strName) {
        return e.removeAttribute(strName);
    },
    cl: function (msg) {
        console.log(msg);
    },
    dw: function (v) {
        document.write(v);
    }
}