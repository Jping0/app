/**
 * Ribbons Class File.
 * Creates low-poly ribbons background effect inside a target container.
 */

(function(){
        
    var _w = window,
    _b = document.body,//返回html dom中的body节点 即<body>
    _d = document.documentElement;//返回html dom中的root 节点 即<html>
    // random helper
    var random = function () {
        if (arguments.length === 1) // only 1 argument
        {
            if (Array.isArray(arguments[0])) // extract index from array
            {
                var index = Math.round(random(0, arguments[0].length - 1));
                return arguments[0][index];
            }
            return random(0, arguments[0]); // assume numeric
        } else
            if (arguments.length === 2) // two arguments range
            {
                return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
            }
        return 0; // default
    };
    // screen helper
    var screenInfo = function (e) {
        // console.log('有调用screenInfo');
        var width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0),
            height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0),
            scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0),
            scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);

        return {
            width: width*window.devicePixelRatio,
            height: height*window.devicePixelRatio,
            ratio: width*window.devicePixelRatio / height*window.devicePixelRatio,
            centerx: width*window.devicePixelRatio / 2,
            centery: height*window.devicePixelRatio / 2,
            scrollx: scrollx,
            scrolly: scrolly
        };

    };
    // mouse/input helper
    var mouseInfo = function (e) {
        var screen = screenInfo(e),
            mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
            mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0;

        return {
            mousex: mousex,
            mousey: mousey,
            centerx: mousex - screen.width / 2,
            centery: mousey - screen.height / 2
        };

    };
    // point object
    var Point = function (x, y) {
        this.x = 0;
        this.y = 0;
        this.set(x, y);
    };
    Point.prototype = {
        constructor: Point,
        set: function (x, y) {
            this.x = x || 0;
            this.y = y || 0;
        },
        copy: function (point) {
            this.x = point.x || 0;
            this.y = point.y || 0;
            return this;
        },
        multiply: function (x, y) {
            this.x *= x || 1;
            this.y *= y || 1;
            return this;
        },
        divide: function (x, y) {
            this.x /= x || 1;
            this.y /= y || 1;
            return this;
        },
        add: function (x, y) {
            this.x += x || 0;
            this.y += y || 0;
            return this;
        },
        subtract: function (x, y) {
            this.x -= x || 0;
            this.y -= y || 0;
            return this;
        },
        clampX: function (min, max) {
            this.x = Math.max(min, Math.min(this.x, max));
            return this;
        },
        clampY: function (min, max) {
            this.y = Math.max(min, Math.min(this.y, max));
            return this;
        },
        flipX: function () {
            this.x *= -1;
            return this;
        },
        flipY: function () {
            this.y *= -1;
            return this;
        }
    };
    // class constructor
    var Ribbons = function (options) {
        /**
         * el                       外部创建元素
         * colorAlpha               背景色透明度，默认0.65
         * colorCycleSpeed          颜色变化速度，默认6
         * horizontalSpeed          水平速度，默认200
         * ribbonCount              显示条数量，默认3
         * strokeSize               线条粗细，默认0
         * parallaxAmount           视觉差量，默认-0.5
         */
        // console.log(window.devicePixelRatio);
        this._canvas = options.el?document.getElementById(options.el):document.createElement("canvas");
        this._canvas.width = window.innerWidth*window.devicePixelRatio;
        this._canvas.height = window.innerHeight*window.devicePixelRatio;
        this._context = null;
        this._sto = null;
        this._width = 0;
        this._height = 0;
        this._scroll = 0;
        this._ribbons = [];
        this._anima = null;//动画对象
        this._options = {
            colorSaturation: "80%",
            colorBrightness: "60%",
            colorAlpha: options.colorAlpha?options.colorAlpha:0.65,
            colorCycleSpeed: options.colorCycleSpeed?options.colorCycleSpeed:6,
            verticalPosition: "center",
            horizontalSpeed: options.horizontalSpeed?options.horizontalSpeed:200,
            ribbonCount: options.ribbonCount?options.ribbonCount:3,
            strokeSize: options.strokeSize?options.strokeSize:0,
            parallaxAmount: options.parallaxAmount?options.parallaxAmount:-0.5,
            animateSections: true
        };
        
        this._onDraw = this._onDraw.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScroll = this._onScroll.bind(this);
        // this.setOptions(options);
        this.init();
    };
    // class prototype
    Ribbons.prototype = {
        constructor: Ribbons,
        // Set and merge local options
        setOptions: function (options) {
            if (typeof options === "object") {
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        this._options[key] = options[key];
                    }
                }
            }
        },
        // Initialize the ribbons effect
        init: function () {
            try {
                // this._canvas = document.createElement("canvas");
                // this._canvas = document.getElementById("canvas");
                this._onResize();
                this._context = this._canvas.getContext("2d");
                this._context.clearRect(0, 0, this._width, this._height);
                this._context.globalAlpha = this._options.colorAlpha;
                window.addEventListener("resize", this._onResize);
                // window.addEventListener("scroll", this._onScroll);
                // console.log(this._canvas);
            }
            catch (e) {
                console.warn("Canvas Context Error: " + e.toString());
                return;
            }
            this._onDraw();
            var _this = this;
            
            setTimeout(function(){
                var _canvasStyle = document.defaultView.getComputedStyle(_this._canvas,null);
                if(_canvasStyle.width&&_canvasStyle.height&&_canvasStyle.zIndex =='auto'&&_canvasStyle.position =='static'){
                    this._canvas.style["display"] = "block";
                    this._canvas.style["position"] = "fixed";
                    this._canvas.style["margin"] = "0";
                    this._canvas.style["padding"] = "0";
                    this._canvas.style["border"] = "0";
                    this._canvas.style["outline"] = "0";
                    this._canvas.style["left"] = "0";
                    this._canvas.style["top"] = "0";
                    this._canvas.style["width"] = "100%";
                    this._canvas.style["z-index"] = "1";
                    this._canvas.id = "bgCanvas";
                    if(!options.el){
                        document.body.append(_this._canvas);
                    }
                }
                
            },600)
            window.ribbonObj = {
                ribbonCreate: true,//是否已经创建ribbon动画
                ribbonStatus: true,//是否正在运行ribbon动画
            }
            window.ribbonObj.again = function(){
                window.ribbonObj.ribbonStatus = true;
                _this._anima = window.requestAnimationFrame(_this._onDraw());
            }
            window.ribbonObj.cancel = function(){
                window.ribbonObj.ribbonStatus = false;
                window.cancelAnimationFrame(_this._anima);
            }
        },

        // Create a new random ribbon and to the list
        addRibbon: function () {
            // movement data
            var dir = Math.round(random(1, 9)) > 5 ? "right" : "left",
                stop = 1000,
                hide = 200,
                min = 0 - hide,
                max = this._width + hide,
                movex = 0,
                movey = 0,
                startx = dir === "right" ? min : max,
                starty = Math.round(random(0, this._height));
            // asjust starty based on options
            if (/^(top|min)$/i.test(this._options.verticalPosition)) {
                starty = 0 + hide;
            } else
                if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
                    starty = this._height / 2;
                } else
                    if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
                        starty = this._height - hide;
                    }
            // ribbon sections data
            var ribbon = [],
                point1 = new Point(startx, starty),
                point2 = new Point(startx, starty),
                point3 = null,
                color = Math.round(random(0, 360)),
                delay = 0;
            // buils ribbon sections
            while (true) {
                if (stop <= 0) break; stop--;
                movex = Math.round((Math.random() * 1 - 0.2) * this._options.horizontalSpeed);
                movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));
                point3 = new Point();
                point3.copy(point2);
                if (dir === "right") {
                    point3.add(movex, movey);
                    if (point2.x >= max) break;
                } else
                    if (dir === "left") {
                        point3.subtract(movex, movey);
                        if (point2.x <= min) break;
                    }
                // point3.clampY( 0, this._height );
                ribbon.push({ // single ribbon section
                    point1: new Point(point1.x, point1.y),
                    point2: new Point(point2.x, point2.y),
                    point3: point3,
                    color: color,
                    delay: delay,
                    dir: dir,
                    alpha: 0,
                    phase: 0
                });
                point1.copy(point2);
                point2.copy(point3);
                delay += 4;
                color += this._options.colorCycleSpeed;
            }
            this._ribbons.push(ribbon);
        },
        // Draw single section
        _drawRibbonSection: function (section) {
            if (section) {
                if (section.phase >= 1 && section.alpha <= 0) {
                    return true; // done
                }
                if (section.delay <= 0) {
                    section.phase += 0.02;
                    section.alpha = Math.sin(section.phase) * 1;
                    section.alpha = section.alpha <= 0 ? 0 : section.alpha;
                    section.alpha = section.alpha >= 1 ? 1 : section.alpha;

                    if (this._options.animateSections) {
                        var mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1;

                        if (section.dir === "right") {
                            section.point1.add(mod, 0);
                            section.point2.add(mod, 0);
                            section.point3.add(mod, 0);
                        } else {
                            section.point1.subtract(mod, 0);
                            section.point2.subtract(mod, 0);
                            section.point3.subtract(mod, 0);
                        }
                        section.point1.add(0, mod);
                        section.point2.add(0, mod);
                        section.point3.add(0, mod);
                    }
                } else { section.delay -= 0.5; }

                var s = this._options.colorSaturation,
                    l = this._options.colorBrightness,
                    c = "hsla(" + section.color + ", " + s + ", " + l + ", " + section.alpha + " )";

                this._context.save();

                if (this._options.parallaxAmount !== 0) {
                    this._context.translate(0, this._scroll * this._options.parallaxAmount);
                }
                this._context.beginPath();
                this._context.moveTo(section.point1.x, section.point1.y);
                this._context.lineTo(section.point2.x, section.point2.y);
                this._context.lineTo(section.point3.x, section.point3.y);
                this._context.fillStyle = c;
                this._context.fill();

                if (this._options.strokeSize > 0) {
                    this._context.lineWidth = this._options.strokeSize;
                    this._context.strokeStyle = c;
                    this._context.lineCap = "round";
                    this._context.stroke();
                }
                this._context.restore();
            }
            return false; // not done yet
        },

        // Draw ribbons
        _onDraw: function () {
            // cleanup on ribbons list to rtemoved finished ribbons
            for (var i = 0, t = this._ribbons.length; i < t; ++i) {
                if (!this._ribbons[i]) {
                    this._ribbons.splice(i, 1);
                }
            }
            // draw new ribbons 
            this._context.clearRect(0, 0, this._width, this._height);
            for (var a = 0; a < this._ribbons.length; ++a) // single ribbon
            {
                var ribbon = this._ribbons[a],
                    numSections = ribbon.length,
                    numDone = 0;

                for (var b = 0; b < numSections; ++b) // ribbon section
                {
                    if (this._drawRibbonSection(ribbon[b])) {
                        numDone++; // section done
                    }
                }
                if (numDone >= numSections) // ribbon done
                {
                    this._ribbons[a] = null;
                }
            }
            // maintain optional number of ribbons on canvas
            if (this._ribbons.length < this._options.ribbonCount) {
                this.addRibbon();
            }
            this._anima = requestAnimationFrame(this._onDraw);
        },
        // Update container size info
        _onResize: function (e) {
            var screen = screenInfo(e);
            this._width = screen.width;
            this._height = screen.height;
            if (this._canvas) {
                this._canvas.width = this._width;
                this._canvas.height = this._height;
                if (this._context) {
                    this._context.globalAlpha = this._options.colorAlpha;
                }
            }
        },

        // Update container size info
        _onScroll: function (e) {
            var screen = screenInfo(e);
            this._scroll = screen.scrolly;
        }
    };
    window.Ribbons = Ribbons;
})()
// new Ribbons({el:'canvas',colorCycleSpeed:10,horizontalSpeed:300,parallaxAmount:-1});
// window.ribbonObj.again();//再次执行ribbon效果
// window.ribbonObj.cancel();//停止执行ribbon效果
// window.ribbonObj.ribbonCreate;//是否创建了ribbon对象
// window.ribbonObj.ribbonStatus;//是否正在执行ribbon效果