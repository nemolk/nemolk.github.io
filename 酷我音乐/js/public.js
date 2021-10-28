// 导航条左侧
var colorIndex = 0;
$(".NavUL>li").click(function () {
    $(".NavUL>li").css({ backgroundColor: "#fff" });
    $(".NavUL li a").css({ fontWeight: "300" });
    if ($(this).index() == 6) {
        $(".NavUL>li").eq(colorIndex).css({ backgroundColor: "#FFDF1F" });
        $(".NavUL li a").eq(colorIndex).css({ fontWeight: "900" });
    } else {
        colorIndex = $(this).index();
        $(".NavUL li").eq($(this).index()).css({ backgroundColor: "#FFDF1F" });
        $(".NavUL li a").eq($(this).index()).css({ fontWeight: "600" });
    }

})

// 搜索框下面的榜单
$(".searchNav input").focus(function () {
    $(".searchTxt").css({ display: "block" });
});
$(".searchNav input").blur(function () {
    $(".searchTxt").css({ display: "none" });
})
// 给搜索框下面排行榜添加数据
$.getJSON("http://39.96.88.57:9090/api/www/search/searchKey?key=&httpsStatus=1&reqId=c91c5da0-15eb-11ec-b709-f7d125c2ed7d", function (json) {
    $("#searchBang a").each(function (i) {
        $("#searchBang a").eq(i).text(json.data[i]);
    })
    // console.log($("#searchBang a"));
});
$.getJSON("http://39.96.88.57:9090/api/www/banner/index/bannerList?httpsStatus=1&reqId=737cfbd0-15fe-11ec-b709-f7d125c2ed7d", function (json) {
    $(".bannerImg").each(function (i) {
        $(".bannerImg").eq(i).attr({ src: json.data[i].pic });
    })
    // console.log(json.data[0].pic);
});
$(".banner").mouseenter(function () {
    $(".layui-carousel-arrow").css("display", "block")
})
$(".banner").mouseleave(function () {
    $(".layui-carousel-arrow").css("display", "none")
})

// 轮播图的title
$(".bannerTitleList").click(function (i) {
    console.log(i.target.nextElementSibling);
    $(".bannerTitle span").css({ display: 'none' });
    $(".bannerTitleList").css({ fontWeight: '300' });
    $(i.target.nextElementSibling).css({ display: 'block' });
    $(this).css({ fontWeight: '600' });
})

// 推荐歌单的title
$.getJSON("http://39.96.88.57:9090/api/www/playlist/index/tags?httpsStatus=1&reqId=d79c6472-15fe-11ec-b709-f7d125c2ed7d", function (json) {
    $(".tuijianTitle-change").each(function (i) {
        $(".tuijianTitle-change").eq(i).text(json.data[i].name);
    })
    // console.log(json.data[0].name);
});


// 推荐歌单的内容
$.getJSON("http://39.96.88.57:9090/api/www/rcm/index/playlist?loginUid=560263213&loginSid=329067434&httpsStatus=1&reqId=e6f921d1-1570-11ec-9fdc-6b0fe1baddbf", function (json) {
    // 推荐歌单图片
    $(".tuijianImg").each(function (i) {
        $(".tuijianImg").eq(i).attr({ src: json.data.list[i].img });
    })
    // console.log(json.data.list[0].img);

    // 推荐歌单内容
    $(".tuijianP").each(function (i) {
        $(".tuijianP>span").eq(i).text(json.data.list[i].name);
    })
    // console.log(json.data.list[0].name);

    // 推荐歌单播放数据listencnt
    var num;
    $(".tuijianNum").each(function (i) {
        num = (json.data.list[i].listencnt);
        if (num <= 9999) {
            $(".tuijianNum>span").eq(i).text(num);
        } else {
            num = num / 10000;
            $(".tuijianNum>span").eq(i).text(fomatFloat(num, 1) + '万');
        }
        // console.log(num);
    })

    // 推荐歌单图片放大
    $('.tuijianContent ul li').mouseenter(function () {
        $(".tuijianImg").eq($(this).index()).css({ transform: "scale(1.05,1.05)" });

    })
    $('.tuijianContent ul li').mouseleave(function () {
        $(".tuijianImg").eq($(this).index()).css({ transform: "scale(1,1)" });
    })
});

// 精选活动的图片
$.getJSON("http://39.96.88.57:9090/api/www/activity/index/activityList?httpsStatus=1&reqId=d79c8b80-15fe-11ec-b709-f7d125c2ed7d", function (json) {
    console.log(json);
    $(".jingxaunContent img").each(function (i) {
        $(".jingxaunContent img").eq(i).attr({ src: json.data[i].pic });
    })
});

// 排行榜数据
$.getJSON("http://39.96.88.57:9090/api/www/bang/index/bangList?httpsStatus=1&reqId=d79c8b81-15fe-11ec-b709-f7d125c2ed7d", function (json) {
    // console.log(json.data[0].musicList[0].pic);
    // 图片
    $(".paihangContent div").each(function (i) {
        $(".paihangContent div").eq(i).css({ "background-image": `url(${json.data[i].musicList[0].pic})` });
    })

    // 歌名
    var index = 0;
    $(".paihangList p").each(function (i) {
        if (i < 5) {
            console.log(index);
            $(".paihangList p").eq(i).text(json.data[0].musicList[i].name);
        } else if (i < 10) {
            index = i - 5;
            console.log(index);
            $(".paihangList p").eq(i).text(json.data[1].musicList[index].name);
        } else if (i < 15) {
            index = i - 10;
            $(".paihangList p").eq(i).text(json.data[2].musicList[index].name);
        } else if (i < 20) {
            index = i - 15;
            $(".paihangList p").eq(i).text(json.data[3].musicList[index].name);
        } else {
            index = i - 20;
            $(".paihangList p").eq(i).text(json.data[4].musicList[index].name);
        }
    })

    // 人名
    var indexP = 0;
    $(".paihangList a").each(function (i) {
        if (i < 5) {
            $(".paihangList a").eq(i).text(json.data[0].musicList[i].artist);
        } else if (i < 10) {
            indexP = i - 5;
            $(".paihangList a").eq(i).text(json.data[1].musicList[indexP].artist);
        } else if (i < 15) {
            indexP = i - 10;
            $(".paihangList a").eq(i).text(json.data[2].musicList[indexP].artist);
        } else if (i < 20) {
            indexP = i - 15;
            $(".paihangList a").eq(i).text(json.data[3].musicList[indexP].artist);
        } else {
            indexP = i - 20;
            $(".paihangList a").eq(i).text(json.data[4].musicList[indexP].artist);
        }
    })


    $(".paihangList p").each(function (i) {
        $(".paihangList p").eq(i).mouseenter(function () {
            $(".paihangList p").eq(i).css({ fontWeight: 800 })
        });
        $(".paihangList p").eq(i).mouseleave(function () {
            $(".paihangList p").eq(i).css({ fontWeight: 400 })
        });

        $(".paihangList a").eq(i).mouseenter(function () {
            $(".paihangList a").eq(i).css({ fontWeight: 400 })
        });
        $(".paihangList a").eq(i).mouseleave(function () {
            $(".paihangList a").eq(i).css({ fontWeight: 300 })
        });
    })

});



// 歌手推荐

// 欧美http://39.96.88.57:9090/api/www/artist/artistInfo?category=13&pn=1&rn=6&httpsStatus=1&reqId=0db2df80-1866-11ec-93f4-b15a771eb512


$.getJSON("http://39.96.88.57:9090/api/www/artist/index/tags?httpsStatus=1&reqId=d79c6473-15fe-11ec-b709-f7d125c2ed7d", function (json) {
    // console.log(json);
    $(".geshouTitle-change").each(function (i) {
        $(".geshouTitle-change").eq(i).text(json.data[i].name);
    })
});
$.getJSON("http://39.96.88.57:9090/api/www/artist/artistInfo?category=11&pn=1&rn=6&httpsStatus=1&reqId=cdeaf020-1600-11ec-b709-f7d125c2ed7d", function (json) {
    // console.log(json);
    $(".geshouContent li").each(function (i) {
        $(".geshouContent li img").eq(i).attr({ src: json.data.artistList[i].pic });
        $(".geshouContent li p").eq(i).text(json.data.artistList[i].name);
        $(".geshouContent li a").eq(i).text(json.data.artistList[i].musicNum + '首歌曲');
    });
    $(".huayu").click(function () {
        $(".geshouContent li").each(function (i) {
            $(".geshouContent li img").eq(i).attr({ src: json.data.artistList[i].pic });
            $(".geshouContent li p").eq(i).text(json.data.artistList[i].name);
            $(".geshouContent li a").eq(i).text(json.data.artistList[i].musicNum + '首歌曲');
        })
    })
});
$.getJSON("http://39.96.88.57:9090/api/www/artist/artistInfo?category=13&pn=1&rn=6&httpsStatus=1&reqId=0db2df80-1866-11ec-93f4-b15a771eb512", function (json) {
    // console.log(json);
    $(".oumei").click(function () {
        $(".geshouContent li").each(function (i) {
            $(".geshouContent li img").eq(i).attr({ src: json.data.artistList[i].pic });
            $(".geshouContent li p").eq(i).text(json.data.artistList[i].name);
            $(".geshouContent li a").eq(i).text(json.data.artistList[i].musicNum + '首歌曲');
        })
    })
});


// 主播电台
$.getJSON("http://39.96.88.57:9090/api/www/radio/index/radioList?httpsStatus=1&reqId=cdd34970-1600-11ec-b709-f7d125c2ed7d", function (json) {
    console.log(json.data.albumList[0].pic);
    $(".zhubo-left").each(function (i) {
        $(".zhubo-left").eq(i).css({ "background-image": `url(${json.data.albumList[i].pic})` });
        // $(".zhubo-left").eq(i).mouseenter(function () {
        //     $(".zhuboCover").eq(i).css({display:"block"})
        //     $(".zhuboCover").eq(i).animate({ "background-color": `rgba(46,32,60,.3)` },500);
        // })
        $(".zhubo-right p").eq(i).text(json.data.albumList[i].album);
        $(".zhubo-right a").eq(i).text(json.data.albumList[i].artist);
    })

    // $(".zhuboCover").each(function (i) {
    //     $(".zhuboCover").eq(i).animate({ "background-color": `rgba(46,32,60,.3)` });
    // })
});

var a = function () {

}

// $.getJSON("http://39.96.88.57:9090/url?format=mp3&rid=192231036&response=url&type=convert_url3&br=128kmp3&from=web&t=1631887760692&httpsStatus=1&reqId=da664d60-17c0-11ec-b53e-ffc993d0a758",function (json) {
//     console.log(json.);
// })

// 右侧固定导航栏
// $(document).scroll(function () {
//     console.log($(window).scrollTop());
//     if ($(window).scrollTop() >= 500) {
//         $(".rightFixed").fadeIn(2000);
//     } else {
//         $(".rightFixed").fadeOut(2000);
//     }
// })
$(".top").click(function () {
    console.log(1111);
    $("body,html").animate({ scrollTop: 0 });
})

$(document).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $(".rightFixed").fadeIn(2000);
    } else {
        $(".rightFixed").fadeOut(100);
    }
})

var textLength = 300;



$("#up").keyup(function () {
    if ($("#up").val().length < 300) {
        textLength = $("#up").val().length;
    } else {
        textLength = 300;
    }
    $("#textLength").text(`${textLength}/300`);
});



$(".guanbi").each(function (i) {
    $(".guanbi").eq(i).click(function () {
        $(".all").css({ display: "none" })
        $(".fankui").css({ display: "none" });
        $(".anzhuo").css({ display: "none" });
        $(".apple").css({ display: "none" });
    })
})

$(".rightFixed li").each(function (i) {
    $(".rightFixed li").eq(i).click(function () {
        $(".all").css({ display: "block" });
        if (i == 0) {
            $(".fankui").css({ display: "block" });
        } else if (i == 2) {
            $(".anzhuo").css({ display: "block" });
        } else if (i == 3) {
            $(".apple").css({ display: "block" });
        }
    })

})



$(".rightFixed li").eq(1).click(function () {
    var tt = newDate().getTime();
    var url = restUrl + '/excel/download?userId=' + userId;
    var form = $("<form>");//定义一个form表单
    form.attr("style", "display:none");
    form.attr("target", "");
    form.attr("method", "post");//请求类型
    form.attr("action", url);//请求地址
    $("body").append(form);//将表单放置在web中

    var input1 = $("<input>");
    input1.attr("type", "hidden");
    input1.attr("name", "tt");
    input1.attr("value", tt);
    form.append(input1);

    var input2 = $("<input>");
    input2.attr("type", "hidden");
    input2.attr("name", "companyId");
    input2.attr("value", companyId);
    form.append(input2);
    form.submit();//表单提交
});



// num为传入的值，n为保留的小数位
function fomatFloat(num, n) {
    var f = parseFloat(num);
    if (isNaN(f)) {
        return false;
    }
    f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂   
    var s = f.toString();
    var rs = s.indexOf('.');
    //判定如果是整数，增加小数点再补0
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + n) {
        s += '0';
    }
    return s;
}



var suoStatus = false;
$(".suoKai").click(function () {
    console.log(11111);
    $(".suoKai").css({ display: "none" })
    $(".suoGuan").css({ display: "block" })
    suoStatus = true;
    // $(".player").css({bottom:"0px"});
})
$(".suoGuan").click(function () {
    console.log(2222);
    $(".suoGuan").css({ display: "none" })
    $(".suoKai").css({ display: "block" })
    suoStatus = false;
    // $(".player").css({bottom:"0px"});
})
// $(".playerUp").mouseenter(function () {
//     console.log(1111111111111);
//     $(".player").animate({ bottom: "0px" }, 500)
// })

var timeFlag = null;
$(".player").mouseenter(function () {
    // if (timeFlag != null) {
    //     clearTimeout(timeFlag);
    // }
    // time = setInterval(function () {
    if (!suoStatus) {
        console.log(33333);
        $(".player").animate({ bottom: "0px" }, 300);
    }
    // }, 500)

})
$(".player").mouseleave(function () {
    // if (timeFlag != null) {
    //     clearTimeout(timeFlag);
    // }
    // time = setInterval(function () {
    if (!suoStatus) {
        console.log(444444);
        $(".player").animate({ bottom: "-70px" }, 300);
    }
    // }, 500)
})


