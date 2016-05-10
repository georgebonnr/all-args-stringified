export default (...args) => args.reduce(
    (memo, val) => memo + (typeof val === 'function' ? val.toString() : JSON.stringify(val)),
'')
