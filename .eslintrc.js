module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
    },
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/destructuring-assignment": ['never'],
        "react/prop-types": "off",
        "react/button-has-type": "off",
        "react/jsx-one-expression-per-line": 0,
        "react/prefer-stateless-function": 0,
        "react/no-access-state-in-setstate": 0,
        "react/jsx-indent-props": [1, 4],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        // "object-curly-newline": "never",
        "no-use-before-define": 0,
        "class-methods-use-this": 0,
        "import/order": 0
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": [".", "src"]
            }
        }
    }
};