module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    'no-control-regex': 0,
    'no-useless-escape': 0,
    'semi': [1, 'never'], // 禁止不必要的分号
    'quotes': [1, 'single'] //强制使用一致的单引号
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
