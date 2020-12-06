$(function() {
    let index = 0
    let num = 0
    let heigth = $('.abnormal .swiper1 .sw ul li').eq(1).height()
    let orderData = [
        { orders: "301,987", amount: "99834" }, //0
        { orders: "20,301", amount: "9834" }, //1
        { orders: "1,987", amount: "3834" }, //2
        { orders: "987", amount: "834" }, //3
    ];
    let hotData = [
        { name: "可爱多", num: "9,086" },
        { name: "娃哈哈", num: "8,341" },
        { name: "喜之郎", num: "7,407" },
        { name: "八喜", num: "6,080" },
        { name: "小洋人", num: "6,724" },
        { name: "好多鱼", num: "2,170" },
    ];
    $('.abnormal .tabs a').on('click', function() {
        $(this).addClass('current').siblings('a').removeClass('current')
        let index = $(this).index()
        $('.abnormal .swiper1').eq(index).show().siblings('.swiper1').hide()
        clearInterval(timer)
        num = 0
        timer = setInterval(function() {
            num++
            if (num == (heigth * 5)) {
                num = 0
                $('.sw').eq(index).find('ul').css({ top: num })
            }
            $('.sw').eq(index).find('ul').stop(true, false).animate({ top: -num }, 20, 'linear')
        }, 20)
    })


    let timer = setInterval(function() {
        num++
        if (num == (heigth * 5)) {
            num = 0
            $('.sw').eq(index).find('ul').css({ top: num })
        }
        $('.sw').eq(index).find('ul').stop(true, false).animate({ top: -num }, 20, 'linear')
    }, 20)
    let orderIndex = 0
    setInterval(() => {
        orderIndex++
        if (orderIndex == 4) {
            orderIndex = 0
        }

        $('.order .times a').eq(orderIndex).addClass('current').siblings('a').removeClass('current')
        $('.order .data .item:eq(0) h3').text(orderData[orderIndex].orders)
        $('.order .data .item:eq(1) h3').text(orderData[orderIndex].amount)
    }, 4000);

    let hotIndex = 0
    setInterval(() => {
        hotIndex++
        if (hotIndex == 5) {
            hotIndex = 0
        }
        let hotL = hotData[0]
        hotData.splice(0, 1)
        hotData.push(hotL)
        $('.hot_right>ul li').eq(hotIndex).addClass('bg').siblings('li').removeClass('bg')
        for (let i = 0; i < 6; i++) {
            $('.hot_tip ul li:eq(' + i + ') span:eq(0)').text(hotData[i].name)
            $('.hot_tip ul li:eq(' + i + ') span:eq(1)').html(hotData[i].num + `<i class='icon-up' style="color:#dc3c33"'></i>`)
        }
    }, 4000);
})