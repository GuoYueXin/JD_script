const shell = require('shelljs');
const dayjs = require('dayjs');
const notify = require('./sendNotify');


setInterval(() => {
  const hour = dayjs().hour();
  const minute = dayjs().minute();
  try {
    if (hour === 0) {
      // 京小超兑换奖品
      if (minute === 0) {
        shell.exec('node jd_blueCoin.js');
      }

      // 签到
      if (minute === 5) {
        shell.exec('node jd_bean_sign.js');
        shell.exec('node 52pj_sign.js');
      }

      // 进店领豆
      if (minute === 9) {
        shell.exec('node jd_shop.js');
      }

      // 摇京豆
      if (minute === 15) {
        shell.exec('node jd_club_lottery.js');  
      }

      if (minute === 20) {
        shell.exec('node jd_small_home.js');
      }

      // 京豆变化
      if (minute === 30) {
        shell.exec('node jd_bean_change.js');
      }

      // 全民开红包
      if (minute === 58) {
        shell.exec('node jd_redPacket.js');
      }
  
    }
    if ((hour === 0 || hour === 20) && minute === 9) {
      shell.exec('node jd_necklace.js');
    }
  } catch (e) {
    console.log('脚本执行出错', e);
    notify.sendNotify('脚本执行出错啦！', `错误信息如下：${e}`);
  }


}, 1000 * 60);
