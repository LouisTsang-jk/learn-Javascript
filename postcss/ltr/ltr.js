
const postcss = require('postcss');
module.exports = postcss.plugin('ltrAutoFill', () => {
  return function (root) {
    root.walkRules(function (rule) {
      // decl => declarations => property: value;
      const matchTextAlign = rule.nodes.find(e => e.type === 'decl' && e.prop === 'text-align' && ['start', 'end'].includes(e.value))
      if (matchTextAlign) {
        const value = matchTextAlign.value === 'start' ? 'left' : 'right';
        const fillDecl = postcss.decl({
          prop: 'text-align',
          value
        });
        rule.insertBefore(matchTextAlign, fillDecl);
      }
    })
    console.info('\n %c process success', 'color: red');
  }
})