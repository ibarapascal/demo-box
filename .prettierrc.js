// 1.List the options which are considered important.
// 2.Comment off the options in where it's value equals the default.
// 3.Leave trail comment for non-default options' explanation.
// Check the details via the prettier docs: https://prettier.io/docs/en/options.html
module.exports = {
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  singleQuote: true, // To default using single quote.
  // quoteProps: "as-needed",
  jsxSingleQuote: true, // Use single quotes instead of double quotes in JSX. Like props.
  trailingComma: 'all', // To reduce diff adding context to trail.
  // bracketSpacing: true,
  // jsxBracketSameLine: false,
  arrowParens: 'avoid', // To reduce useless parentheses.
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: "preserve",
};
