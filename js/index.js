$(function() {
    let myChart = echarts.init(document.querySelector('#tips'))
    let option = {
        color: ['#0076ff', '#69e1b0', '#ff9591', '#ffae8b', '#00a5ff', '#aefdca', '#37d8ff', '#1facff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            position: function(pt) {
                return [pt[0], 50]
            }
        },
        series: [{
            name: '点位分布',
            type: 'pie',
            radius: [8, 60],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 0
            },
            labelLine: {
                length: 5,
                length2: 3

            },
            data: [
                { value: 110, name: '云南' },
                { value: 160, name: '北京' },
                { value: 180, name: '山东' },
                { value: 180, name: '河北' },
                { value: 160, name: '江苏' },
                { value: 200, name: '浙江' },
                { value: 280, name: '四川' },
                { value: 335, name: '湖北' }
            ]
        }]
    }
    myChart.setOption(option)
})
$(function() {
    let myChart = echarts.init(document.querySelector('.users .tips'))
    let item = {
        value: 1000,
        itemStyle: {
            color: 'rgba(0,0,0,0.6)'
        }
    }
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            height: '80%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#3696e6',
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            data: ['上海', '深圳', '北京', '河北', '合肥', '', '......', '', '杭州', '浙江', '济南', '成都', '重庆'],
            textStyle: {
                color: '#30a4e9'
            }
        },
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#519cc3',
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //分割线配置
                lineStyle: {
                    color: "#24baee",
                }
            },
        }, {
            axisLine: {
                lineStyle: {
                    color: '#519cc3',
                    width: 1
                }
            }
        }],


        series: [{
                name: '用户总量统计',
                type: 'bar',
                barMaxWidth: '50%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 700, 600, 480, 240],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    )

                },
            },

        ]
    };
    myChart.setOption(option)
})
$(function() {
    let myChart = echarts.init(document.querySelector('.quarter .main .echarts '))
    let option = {
        color: ["#0096d1", "#e42a54", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)"],
        series: [{
            type: 'pie',
            radius: ['80%', '100%'],
            startAngle: 180,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            data: [{
                    value: 135,
                },
                {
                    value: 45,
                },
                {
                    value: 100,
                },
                {
                    value: 30,
                },
                {
                    value: 50,
                }
            ],
            width: '100%',
            left: 3,
            top: 14,
            z: 22
        }]
    };
    myChart.setOption(option)
})
$(function() {
    let data = [
        [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
        [
            [23, 275, 12, 397, 21, 67, 498, 421, 43, 464, 176, 38],
            [43, 31, 465, 23, 278, 21, 382, 64, 43, 260, 19, 34],
        ],
        [
            [34, 87, 32, 76, 198, 12, 32, 87, 239, 36, 329, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
        ],
        [
            [43, 73, 162, 454, 91, 254, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 187, 32, 45, 462, 68, 193, 254, 54, 24],
        ],
    ];
    let myChart = echarts.init(document.querySelector('.side .echarts'))
    let option = {
        // 标题
        title: {
            text: "单位 万",
            textStyle: {
                color: "#4996f5", //颜色
                fontSize: 12,
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "6%",
            containLabel: true,
            height: 120,
        },
        //鼠标移入的提示
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none",
            },
        },
        // 头部标签
        legend: {
            data: ["最高额度", "最低额度"],
            textStyle: {
                color: "#4995f4",
            },
            right: 4,
            top: 5,
        },
        xAxis: {
            type: "category",
            //坐标轴两边留白策略
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ],
            //x轴刻度
            axisTick: {
                show: false,
            },
            //x轴文本
            axisLabel: {
                color: "#438be5", //颜色
                align: "left", //文本对齐方式
            },
            //x轴轴线
            axisLine: {
                lineStyle: {
                    color: "#012b48",
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#012b48'
                }
            }
        },
        yAxis: {
            type: "value",
            //坐标轴刻度最大值
            max: 500,
            //自动计算的坐标轴最小间隔大小
            minInterval: 100,
            //y轴文本
            axisLabel: {
                // formatter: '{value} °C'
                color: "#438be5",
            },
            //y轴刻度
            axisTick: {
                show: false,
            },
            //y轴轴线
            axisLine: {
                lineStyle: {
                    color: "#012b48",
                },
            },
            //y轴分割线
            splitLine: {
                lineStyle: {
                    color: "#012b48",
                },
            },
        },
        series: [{
                // 系列名称
                name: "最高额度",
                // 系列类型
                type: "line",
                data: data[0][0],
                //是否平滑
                smooth: true,
                //圆点的大小
                symbolSize: 8,
                // 折线拐点标志的样式
                itemStyle: {
                    color: "#00f2f1",
                },
            },
            {
                name: "最低额度",
                type: "line",
                data: data[0][1],
                //是否平滑
                smooth: true,
                //圆点的大小
                symbolSize: 8,
                itemStyle: {
                    color: "#dd3c36",
                },
            },
        ],
    }
    myChart.setOption(option)
    let indexOp = 0
    setInterval(() => {
        indexOp++
        if (indexOp == 4) {
            indexOp = 0
        }
        $('.side .header').find('a').eq(indexOp).addClass('bgColor').siblings('a').removeClass('bgColor')
        option.series[0].data = data[indexOp][0]
        option.series[1].data = data[indexOp][1]
        myChart.setOption(option)
    }, 4000);
})
$(function() {
    let myChart = echarts.init(document.querySelector('.map'))
    var geoCoordMap = {
        '新疆玛纳斯基地': [86.22, 44.30],
        '九江': [116.00, 29.70],
        '新乡': [116.402217, 35.311657],
        ' ': [79.92, 37.12],
        '  ': [86.85, 47.70],
        '若羌县': [88.17, 39.02],
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{
            name: '新乡'
        }, {
            name: '新乡',
            value: 200
        }],
        [{
            name: '新乡'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '哈尔滨',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '石家庄',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '昆明',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '新乡'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '贵阳',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '南宁',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '济南',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '太原',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '新乡'
        }, {
            name: '武汉',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '合肥',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '南京',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '沈阳',
            value: 20
        }],
        [{
            name: '新乡'
        }, {
            name: '成都',
            value: 10
        }]
    ];

    var SHData = [
        [{
            name: '九江'
        }, {
            name: '九江',
            value: 200
        }],

        [{
            name: '九江'
        }, {
            name: '长沙',
            value: 95
        }],
        [{
            name: '九江'
        }, {
            name: '武汉',
            value: 30
        }],
        [{
            name: '九江'
        }, {
            name: '南昌',
            value: 20
        }],
        [{
            name: '九江'
        }, {
            name: '合肥',
            value: 70
        }],
        [{
            name: '九江'
        }, {
            name: '南京',
            value: 60
        }],
        [{
            name: '九江'
        }, {
            name: '福州',
            value: 50
        }],
        [{
            name: '九江'
        }, {
            name: '上海',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '深圳',
            value: 100
        }],

    ];

    var GZData = [
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '新疆玛纳斯基地',
            value: 200
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '  ',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: ' ',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '昆明',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '兰州',
            value: 95
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '银川',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '西宁',
            value: 80
        }],

    ];

    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['新乡', BJData],
        ['九江', SHData],
        ['新疆', GZData]
    ].forEach(function(item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    option = {
        backgroundColor: '#080a20',
        tooltip: {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#132937',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            },
            zoom: '1.2'
        },
        series: series
    };
    myChart.setOption(option);
})