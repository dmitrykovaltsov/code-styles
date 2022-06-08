{
    "extends": [
        "stylelint-config-recommended-scss",
        "stylelint-config-sass-guidelines",
        "stylelint-config-rational-order",
        "stylelint-prettier/recommended"
    ],
    "overrides": [
      {
        "files": ["**/*.scss"],
        "customSyntax": "postcss-scss"
      }
    ],
    "rules": {
        "order/properties-alphabetical-order": null,
        "declaration-empty-line-before": "never",
        "max-nesting-depth": [
            3,
            {
                "ignore": ["pseudo-classes"]
            }
        ],
        "max-empty-lines": 1,
        "selector-class-pattern": [
            "",
            {
                "message":
                "TODO: Temporary no rules for selectors and class names"
            }
        ],
        "string-quotes": "single",
        "number-leading-zero": "always",
        "indentation": 4
    }
}
