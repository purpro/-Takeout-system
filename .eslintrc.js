// .eslintrc.js
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
    ],
    parserOptions: {
      "parser":  '@babel/eslint-parser'
    },
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index"], //需要忽略的组件名
        },
      ],
    },
  };
  
 