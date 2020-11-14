const shell = require('shelljs');
const dayjs = require('dayjs');
const notify = require('./sendNotify');

notify.sendNotify('叮咚！', '脚本开始执行啦');

setInterval(() => {
  const hour = dayjs().hour();
  const minute = dayjs().minute();
  try {
    if (minute === 40) {
      shell.exec('node jd_daily_egg.js');
      shell.exec('node jd_joy_feedPets.js');
    }
    if ([6, 12, 18].includes(hour) && minute === 3) {
      shell.exec('node jd_fruit.js');
    }
    if (hour % 2 === 0 && minute === 10) {
      shell.exec('node jd_moneyTree.js');
    }
    if (hour % 2 === 0 && minute === 8) {
      shell.exec('node jd_joy.js');
    }
    if ([0,8,16].includes(hour) && minute === 0) {
      shell.exec('node jd_reward.js');
    }
    if ([1,4,7,10,13,16,19,22].includes(hour) && minute === 7) {
      shell.exec('node jd_mohe.js');
      shell.exec('node jd_speed.js');
    }
    if ([7,11,13,15,17,19, 21].includes(hour) && minute === 5) {
      shell.exec('node jd_plantBean.js');
    }
    if (hour === 11 && minute === 8) {
      shell.exec('node jd_rankingList.js');
    }
    
    if (hour % 5 === 1 && minute === 11) {
      shell.exec('node jd_superMarket.js');
    }
  
    if (hour >= 6 && hour <=18 && hour % 6 === 0 && minute === 15) {
      shell.exec('node jd_pet.js');
    }
  
    if (hour === 0) {
      // 京小超兑换奖品
      if (minute === 0) {
        shell.exec('node jd_blueCoin.js');
      }

      // 签到
      if (minute === 5) {
        shell.exec('node jd_bean_sign.js');
      }

      // 进店领豆
      if (minute === 9) {
        shell.exec('node jd_shop.js');
      }

      // 摇京豆
      if (minute === 15) {
        shell.exec('node jd_club_lottery.js');  
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

    // 京东抽奖机
    if (hour === 1 && minute === 8) {
      shell.exec('node jd_lotteryMachine.js');
    }
  
    

  
    if (hour === 16 && minute === 10) {
      shell.exec('node jd_unsubscribe.js');
    }
  } catch (e) {
    console.log('脚本执行出错', e);
    notify.sendNotify('脚本执行出错啦！', `错误信息如下：${e}`);
  }


}, 1000 * 50);