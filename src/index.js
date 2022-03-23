export default function (context, options = {}) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.ListItem](node) {
      // "Str" node
      const text = getSource(node); // Get text

      console.log("node text" + text);
      console.log("node text len" + text.trim().length);
      const trimListText = text.replace("* ", "").replace("- ", "").replace(/\d+\./, "").trim();
      if (trimListText.length === 0) {
        const indexOfBugs = node.index;
        const ruleError = new RuleError("发现空白的列表项", {
          index: indexOfBugs, // padding of index
        });
        report(node, ruleError);
      }
    },
  };
}
