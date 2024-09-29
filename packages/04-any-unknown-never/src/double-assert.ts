// const str: string = 'linbudu';

// (str as unknown as { handler: () => {} }).handler();
// // 使用尖括号断言
// (<{ handler: () => {} }>(<unknown>str)).handler();

const str: string = 'cjh';

(str as unknown as { handler: () => {} }).handler();
// 使用尖括号断言
(<{ handler: () => {} }>(<unknown>str)).handler();
