// 测试随机数生成逻辑
function testRandomNumber() {
  console.log('测试随机数生成：');
  
  // 模拟简单模式参数：min=0, max=50, type=integer
  const min = 0;
  const max = 50;
  const type = 'integer';
  
  // 测试当前的随机数生成逻辑
  console.log('\n当前逻辑：');
  for (let i = 0; i < 10; i++) {
    let targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`第${i+1}次：${targetNumber}`);
  }
  
  // 测试改进后的逻辑
  console.log('\n改进后的逻辑：');
  for (let i = 0; i < 10; i++) {
    let targetNumber = Math.floor(Math.random() * (max + 1));
    console.log(`第${i+1}次：${targetNumber}`);
  }
}

testRandomNumber();