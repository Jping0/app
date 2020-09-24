export default function TXMap(key) {
    return new Promise(function (resolve, reject) {
         window.init = function () {
        resolve(true)//注意这里
   }
   var scriptArr =[
       "http://map.qq.com/api/js?v=2.exp&callback=init&key="+key
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