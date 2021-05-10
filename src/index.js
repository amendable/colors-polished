import { defaultMatch } from '@amendable/colors';
import resolveColor from './resolveColor';
import resolveValue from './resolveValue';

const colorsPolishedResolver = ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: resolveValue({ value, colors }) || resolveColor({ colors, value }),
  }),
});

export default colorsPolishedResolver;
