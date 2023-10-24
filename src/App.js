import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
}

const validateInput = (userInput) => {
  if (userInput.length !== 3) {
    throw new Error('[ERROR] 3자리의 숫자를 입력해주세요.');
  }
  if (isNaN(Number(userInput))) {
    throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
  }
  if (userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[2] === userInput[0]) {
    throw new Error('[ERROR] 모두 다른 숫자를 입력해주세요.');
  }
  return true;
};

export default App;