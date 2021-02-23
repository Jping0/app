(function(){
    function xingkongInit(configs){
        let config = {
            el:configs.el,//绑定canvas元素
            colorVal:configs.colorVal,//颜色值0到360范围
            starCount:configs.starCount,//星星数量
        }
        let canvas = document.getElementById(config.el)||document.querySelector('.'+config.el),
        ctx = canvas.getContext('2d'),
        w = canvas.width = (document.documentElement.clientWidth || document.body.clientWidth)*window.devicePixelRatio,
        h = canvas.height = (document.documentElement.clientHeight || document.body.clientHeight)*window.devicePixelRatio,
    
        hue = config.colorVal||217,
        stars = [],
        count = 0,
        maxStars = config.starCount||1300; //星星数量
        // 星星元素
        let canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        let half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#CCC');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');
    
        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();
    
        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }
            if (min > max) {
                let hold = max;
                max = min;
                min = hold;
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        function maxOrbit(x, y) {
            let max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
            //星星移动范围，值越大范围越小，
        }
    
        let Star = function () {
    
            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 8;
            //星星大小
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 200000;
            //星星移动速度
            this.alpha = random(2, 10) / 10;
            count++;
            stars[count] = this;
        }
    
        Star.prototype.draw = function () {
            let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);
    
            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            }
    
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        }
    
        for (let i = 0; i < maxStars; i++) {
            new Star();
        }
        let isStop = false;
        let xzxkAnimate = null;
        window.xkObj = {
            xkCreate: true,//是否创建了星空对象
            xkStatus: true,//是否正在运行星空效果
        }
        function xzXKongimation() {
            if(isStop){
                window.cancelAnimationFrame(xzxkAnimate);
            }else{
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 0.5; //尾巴
                ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = 'lighter';
                for (let i = 1, l = stars.length; i < l; i++) {
                    stars[i].draw();
                };
    
                xzxkAnimate = window.requestAnimationFrame(xzXKongimation);
            }
        }
    
        xzXKongimation();
        // 取消动画
        window.xkObj.cancel  = function(){
            isStop = true;
            window.xkObj.xkStatus = false;
        }
        // 重新执行动画
        window.xkObj.again = function(){
            isStop = false;
            window.xkObj.xkStatus = true;
            xzXKongimation();
        }
        window.addEventListener("resize", function () {
            // window.cancelAnimationFrame(xzxkAnimate);
            // xingkongInit(config);
            count = 0;
            w  = canvas.width = (document.documentElement.clientWidth || document.body.clientWidth)*window.devicePixelRatio;
            h  = canvas.height = (document.documentElement.clientHeight || document.body.clientHeight)*window.devicePixelRatio;
            
            ctx.clearRect(0,0,w,h);
            Star.orbitRadius = random(maxOrbit(w, h));
            Star.radius = random(60, Star.orbitRadius) / 8;
            for (let i = 0; i < maxStars; i++) {
                new Star();
            }
        })
    }
    
    window.xingkongInit = xingkongInit;
    // new xingkongInit({
        // el:'boxEl',
        // colorVal:217,//0-360颜色值
        // starCount: 1300,//星星数量
    // });
    // window.xkObj.again();//重新执行星空效果
    // window.xkObj.cancel();//停止运行星空效果
    // window.xkObj.xkCreate;//是否创建了星空对象
    // window.xkObj.xkStatus;//是否正在运行星空效果

})()
    