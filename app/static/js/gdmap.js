export default function GDMap(key) {
    return new Promise(function (resolve, reject) {
        // window.init = function () {
        //     resolve(true)//注意这里
        // }
   var scriptArr =[
       "https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key="+key
    //    'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js'
    ];
   for(var i=0;i<scriptArr.length;i++){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptArr[i];
    script.onerror = reject;
    document.head.appendChild(script);
   }
  
})
}