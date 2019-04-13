/**
 * 小结 AMap 中常用的方法
 * https://lbs.amap.com/api/javascript-api/summary 官方文档
 */

/* ------------------------------------------------------- 引入地图 ----------------------------------------------------------------- */

// <script src="//webapi.amap.com/maps?v=1.4.13&key=27754ea45fd96a824a5dad56ee4708ca"></script>
let AMap = window.AMap;

/* ------------------------------------------------------- 初始化地图 --------------------------------------------------------------- */

/**
 * 初始化地图
 *
 * @param {Array} center [lng,lat] 初始化的地图中心
 * @returns {Object} aMap 创建的地图实例
 */
function mapInit(center) {
    let aMap = new AMap.Map("container", {
        resizeEnable: true,
        mapStyle: "amap://styles/7db95b74bb0e599d92c25f341038b4ca",
        center: center,
        zoom: 14
    });
    return aMap;
}

/* ------------------------------------------------------- 地图事件与方法 ---------------------------------------------------------- */

/** 
 * 地图事件与方法
 * 
 * 1. 事件: https://lbs.amap.com/api/javascript-api/guide/events/map_overlay/?sug_index=0
 *    1.1 complete 地图加载完成 aMap.on('complete',()=>{}); 
 * 
 * 2. 方法
 *    2.1 aMap.add( markerIns ) 新增 marker 实例
 *    2.2 aMap.remove( markerIns ) 删除 marker 实例
 *    2.3 aMap.setCenter( center ) 设置地图中心点 center: [lng,lat]
 *    2.4 aMap.setFitView([markerIns1,markerIns2,...], true, [50, 190, 20, 20]); https://lbs.amap.com/api/javascript-api/reference/map
 *    2.5 infoWindowIns.close() 关闭信息窗口，AMap 只允许显示一个信息窗口
 */

/* ------------------------------------------------------- 地图基础类 ------------------------------------------------------------ */

/** 
 * 高德地图基础类
 * https://lbs.amap.com/api/javascript-api/reference/core
 */

/* ------------------------------------------------------ 地图定位 -------------------------------------------------------------- */

/** 
 * 地图定位 https://lbs.amap.com/api/javascript-api/guide/services/geolocation/?sug_index=0
 */
aMap.plugin('AMap.Geolocation', function () {
    let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB', //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition(function (status, result) {
        if (status === 'complete') {
            console.log('定位成功');
            onComplete(result)
        } else {
            onError(result)
        }
    });

    function onComplete(data) {
        // data是具体的定位信息
    }

    function onError(data) {
        // 定位出错
    }
});

/* ------------------------------------------------------ 自定义方法 -------------------------------------------------------------- */

/**
 * 绘制图片 marker 实例
 *
 * @param {Object} { lng, lat } 经纬度信息
 * @returns markerIns 标记实例
 */
function createImgMarker({
    lng,
    lat
}) {
    let imgIns = null; // marker 图
    let imgMarker = new AMap.Marker({
        icon: new AMap.Icon({
            size: new AMap.Size(16, 16), // marker 实例大小
            image: imgIns,
            imageSize: new AMap.Size(16, 16) // 根据所设置的大小拉伸或压缩图片
        }),
        position: [lng, lat],
        offset: new AMap.Pixel(-8, -8) // 图片相对于自身左上角偏移量
    });
    return imgMarker;
}

/**
 * 绘制文本 marker 实例
 *
 * @param {Object} { lng, lat } 经纬度信息
 * @returns {Object} textMarker 文本标记实例
 */
function createTextMarker({
    lng,
    lat
}) {
    let content = "some text";
    let className = "classname";
    let textMarker = new AMap.Text({
        text: `<div class=${className}>${content}</div>`,
        position: [lng, lat],
        offset: new AMap.Pixel(-8, -8),
        anchor: "bottom-center" // 相对于 position 的锚定点
    });
    return textMarker;
}

/**
 * 绘制中空覆盖层, 带洞遮罩
 * https://lbs.amap.com/api/javascript-api/example/overlayers/cover
 * 
 * @params {Array} routeList [[lng,lat],...] 需要暴露出来的区域边界
 */
function drawPolygonArea(routeList) {
    // 外区域范围，这里包括地图所有区域
    let outer = [
        new AMap.LngLat(-360, 90, true),
        new AMap.LngLat(-360, -90, true),
        new AMap.LngLat(360, -90, true),
        new AMap.LngLat(360, 90, true)
    ];
    // outer 一定需要为第一个数组元素，并且需要包含 routerList 的范围
    let pathArray = [outer, routeList];
    let strokeColor = "#333"; // 范围颜色
    let strokeStyle = "dashed"; // 线型
    let strokeOpacity = 1; // 边线透明度
    let strokeWeight = 2; // 边线宽度
    let fillColor = "#71B3ff"; // 覆盖物颜色
    let fillOpacity = 0.2; //覆盖物透明度

    let polygon = new AMap.Polygon({
        path: pathArray,
        strokeColor,
        strokeOpacity,
        strokeWeight,
        strokeStyle,
        fillColor,
        fillOpacity
    });
    polygon.setPath(pathArray);
    aMap.add(polygon);
}

/**
 * 绘制多边形区域
 * 
 * @params {Array} routeList [[lng,lat],...] 边界线列表
 */
function drawPolyline(routeList) {
    let strokeColor = "#333"; // 范围颜色
    let strokeStyle = "dashed"; // 线型
    let strokeOpacity = 1; // 边线透明度
    let strokeWeight = 2; // 边线宽度

    let polyline = new AMap.Polyline({
        path: routeList,
        strokeColor,
        strokeOpacity,
        strokeWeight,
        strokeStyle,
    });
    polyline.setMap(aMap);
}

/**
 * 绘制 infoWindow 信息窗口
 *
 * @param {String} info
 * @param {Array} position [lng,lat]
 */
function drawInfoWindow(info, position) {
    let className = 'classname';
    // infoWindow.close(); 关闭 infoWindow
    let infoWindow = new AMap.InfoWindow({
        anchor: 'bottom-center', // 锚点
        content: `<div><span class=${className}>${info}</span></div>`,
        offset: new AMap.Pixel(0, -45),
    });
    infoWindow.open(aMap, position);
}
