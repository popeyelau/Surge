// https://manual.nssurge.com/scripting/http-response.html

var body = JSON.parse(body);

if (url.indexOf('/ad/getAll') != -1) {
    body.data.adList = [];
}

if (url.indexOf('/user/profile') != -1) {
    body.data.user.medalList = JSON.parse('[{"name":"大魔王／原画","endTime":"2022-12-22 22:22:22","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1}]');
    body.data.user.privilegeList = JSON.parse('[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1671718942000},{"effectObject":"coin","action":"sign","func":"5","description":"签到额外银币+5","icon":"qiandaoyinbi","endTime":1671718942000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":1671718942000}]');
    body.data.user.level = 30;
}

JSON.stringify(body);