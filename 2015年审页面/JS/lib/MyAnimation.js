/**
 * Created by gssl on 15-12-15.
 */
define(["jquery"], function($) {
        // 作为静态类, 直接返回实例
        return new function () {
            // 伸缩效果
            this.grew = function(config, speed){
                /*
                 config 数组结构如下:
                 [{selector: "...", end: .., direction: "0: width/1: height}, {...}, ...]
                 */
                function task(){
                    if(config.length != 0) {
                        var c = config.shift();
                        if(c.direction == 0) {
                            $(c.selector).animate({"width": c.end + "px"});
                        }else{
                            $(c.selector).animate({"height": c.end + "px"});
                        }
                    }else{
                        clearInterval(job);
                    }
                }
                var job = setInterval(task, speed);
            };

            // 数字递增效果
            this.showNumber = function(selector, number, isAdd){
                var i = 1000;
                function task(){
                    if(isAdd) {
                        if (i != 0) {
                            $(selector).text(Math.round(number * ((1000 - i) / 1000)));
                            i = i - 1;
                        } else {
                            $(selector).text(number);
                            clearInterval(job);
                        }
                    }else{
                        if (i != 0) {
                            $(selector).text(Math.round(number * (i / 1000)));
                            i = i - 1;
                        } else {
                            $(selector).text(0);
                            clearInterval(job);
                        }
                    }
                }
                var job = setInterval(task, 1);
            };

            // 出现效果
            this.haveALook = function(config, speed, interval){
                // config [{selector: "..."}, {...}, ...]
                function task(){
                    if(config.length != 0){
                        var c = config.shift();
                        $(c.selector).fadeIn();
                    }else{
                        clearInterval(job);
                    }
                }
                var job = setInterval(task, interval);
            };

            // 滑动效果
            this.slide = function(config, speed, interval){
                /*
                    config 数组结构如下:
                    [{selector: "...", end: .., direction: "0: top/1: right/2: bottom/3: left"}, {...}, ...]
                 */
                function task(){
                    if(config.length != 0) {
                        var c = config.shift();
                        switch (c.direction) {
                            case 0:
                                $(c.selector).animate({marginTop: c.end + "px"}, speed);
                                break;
                            case 1:
                                $(c.selector).animate({marginRight: c.end + "px"}, speed);
                                break;
                            case 2:
                                $(c.selector).animate({marginBottom: c.end + "px"}, speed);
                                break;
                            case 3:
                                $(c.selector).animate({marginLeft: c.end + "px"}, speed);
                                break;
                        }
                    }else{
                        clearInterval(job);
                    }
                }
                var job = setInterval(task, interval);
            };

            // 沿Y轴翻转效果(h5)
            this.rollover_Y = function(config, delay) {
                // config: [{selector: "...", speed: ..}, {...}, ...]
                function task (){
                    if(config.length != 0) {
                        var c = config.shift();
                        $(c.selector).css({"-webkit-animation-name": "reverseY", "-moz-animation-name": "reverseY", "-o-animation-name": "reverseY", "animation-name": "reverseY", "-webkit-animation-duration": c.speed + "s", "-moz-animation-duration": c.speed + "s", "-o-animation-duration": c.speed + "s", "animation-duration": c.speed + "s"});
                        $(c.selector).css({"filter": "alpha(opacity=1)", "-moz-opacity": "1", "-khtml-opacity": "1", "opacity": "1"});
                    }else{
                        clearInterval(job);
                    }
                }
                var job = setInterval(task, delay)
            };

            // 沿X轴翻转效果(h5)
            this.rollover_X = function(config, delay) {
                // config: [{selector: "...", speed: ..}, {...}, ...]
                function task (){
                    if(config.length != 0) {
                        var c = config.shift();
                        $(c.selector).css({"-webkit-animation-name": "reverseX", "-moz-animation-name": "reverseX", "-o-animation-name": "reverseX", "animation-name": "reverseX", "-webkit-animation-duration": c.speed + "s", "-moz-animation-duration": c.speed + "s", "-o-animation-duration": c.speed + "s", "animation-duration": c.speed + "s"});
                        $(c.selector).css({"filter": "alpha(opacity=1)", "-moz-opacity": "1", "-khtml-opacity": "1", "opacity": "1"});
                    }else{
                        clearInterval(job);
                    }
                }
                var job = setInterval(task, delay)
            };

            // 鼠标经过沿Y轴翻转效果, 需要给img一个div为浮动.
            this.hover_rollover_Y = function(e, speed) {
                var w = $(e).width();
                // 撑开div
                $(e).parent().css("width", $(e).width() + "px");
                $(e).parent().css("height", $(e).height() + "px");
                // 设死宽高
                $(e).css("width", $(e).width() + " px");
                $(e).css("height", $(e).height() + "px");
                $(e).hover(function () {
                    if(w != 0) {
                        $(this).stop().animate({width: 0}, speed, function () {
                            $(this).animate({width: w + "px"}, speed);
                        });
                    }else{
                        $(this).animate({width: w + "px"}, speed);
                    }
                }, function () {
                });
            };

            // 文字逐字出现效果
            this.showWordsOneByOne = function(e, words, speed){ // 接受一个对象数组和一组文字数组
                var list = [];
                for(var i = 0; i < e.length; i ++){
                    for(var j = 0; j < words[i].length; j++){
                        list.push([e[i], words[i][j]]);
                    }
                }
                list.reverse();
                function showWord(){
                    if(list.length != 0){
                        var buffer = list.pop();
                        $(buffer[0]).append(buffer[1]);
                    }else{
                        window.clearInterval(flag);
                    }
                }
                var flag = window.setInterval(showWord, speed);
            };
        };
    }
);