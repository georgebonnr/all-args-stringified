export default (...args) => args.reduce((memo, val) => memo + '-' + JSON.stringify(val), '')
