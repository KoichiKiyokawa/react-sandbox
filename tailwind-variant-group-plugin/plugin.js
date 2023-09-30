const { createUnplugin } = require("unplugin");

const parseVariants = (code) => {
  const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
  const variantGroupMatches = [...code.matchAll(variantGroupsRegex)];

  variantGroupMatches.forEach(([matchStr, variants, classes]) => {
    const parsedClasses = classes
      .split(" ")
      .map((cls) => variants + cls)
      .join(" ");

    code = code.replace(matchStr, parsedClasses);
  });

  return code;
};

const plugin = createUnplugin(() => ({
  name: "tailwind-variant-group",
  transformInclude(id) {
    return id.endsWith(".tsx");
  },
  transform(code) {
    const classNameRegex = /className\s*:\s*\"(.*?)\"/gm;
    const classNameMatches = [...code.matchAll(classNameRegex)].filter(
      (match) => match && match.length
    );
    classNameMatches.forEach(([matchStr, className]) => {
      const parsedClasses = parseVariants(className);

      code = code.replace(matchStr, `className: "${parsedClasses}"`);
    });

    return code;
  },
}));

module.exports.webpackPlugin = plugin.webpack;
