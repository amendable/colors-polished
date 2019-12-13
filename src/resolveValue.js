import resolveColor from './resolveColor';
import matchers from './matchers';

const fullRegex = new RegExp(`(.+?)(${matchers.map(matcher => `(\-${matcher.regex})`).join('|')})(?<rest>.*)`);

const resolveValue = ({ value, colors }) => {
  const resolverMatches = value.match(fullRegex);
  if (!resolverMatches) { return resolveColor({ colors, value }); }

  const color = resolveColor({ colors, value: resolverMatches[1] });
  const pattern = resolverMatches[2];
  const rest = resolverMatches.groups.rest;

  let returnColor;
  matchers.forEach(matcher => {
    const regex = new RegExp(matcher.regex);
    const matches = pattern.match(regex);
    if (!matches) { return; }
    returnColor = matcher.resolve({ value: color, matches });
  });

  return resolveValue({ value: `${returnColor}${rest}`, colors });
};

export default resolveValue;
