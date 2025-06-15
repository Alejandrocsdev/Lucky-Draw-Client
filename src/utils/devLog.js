// 引用模式
const { MODE } = import.meta.env

// 開發模式日誌
const devLog = (...args) => {
  if (MODE === 'development') {
    console.log(...args)
  }
}

export default devLog
