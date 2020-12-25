const shell = require('shelljs');
const dayjs = require('dayjs');
const notify = require('./sendNotify');


setInterval(() => {
  const hour = dayjs().hour();
  const minute = dayjs().minute();
  try {

    if (minute === 40) {
      shell.exec('node jd_daily_egg.js');
      shell.exec('node jd_joy_feedPets.js');
    }
    if (minute === 18) {
      shell.exec('node jd_pigPet.js');
    }
    if (hour % 2 === 0 && minute === 10) {
      shell.exec('node jd_moneyTree.js');
    }
    if (hour % 2 === 0 && minute === 8) {
      shell.exec('node jd_joy.js');
    }
    
  
    if (hour === 7 && minute === 11) {
      shell.exec('node jd_crazy_joy.js');
      shell.exec('node jd_crazy_joy_coin.js');
    }

  
    if (hour === 16 && minute === 10) {
      shell.exec('node jd_unsubscribe.js');
    }
  } catch (e) {
    console.log('脚本执行出错', e);
    notify.sendNotify('脚本执行出错啦！', `错误信息如下：${e}`);
  }


}, 1000 * 60);
