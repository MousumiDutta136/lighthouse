module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "indent": [
            "error",
            2
          ],
          "linebreak-style": [
            "error",
            "windows"
          ],
          "semi": [
            "error",
            "always"
          ],
          "no-var": "error",
          "no-console": "off",
          "no-unused-vars": "warn",
          "func-call-spacing": [
            "error",
            "never"
          ],
          "space-before-blocks": "error",
          "keyword-spacing": "error",
          "no-trailing-spaces": ["error", { "skipBlankLines": true }],
          "semi-spacing": "error",
          "func-style": ["error", "expression"],
          "space-infix-ops": "error",
          "space-in-parens": "error",
          "camelcase": "error",
          "eqeqeq": "error",
          "brace-style": "error",
          "space-before-function-paren": [ "warn", { "anonymous": "never", "named": "never", "asyncArrow": "never" } ],
          "func-names": ["error", "never"],
          "quotes": "off"
        }
  };