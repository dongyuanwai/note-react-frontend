const MODE = import.meta.env.MODE // 环境变量

export const baseUrl = MODE == 'development' ? '/api' : 'http://43.143.134.60:7001';