import { defaultMatch } from '@amendable/colors';
import resolveColor from './resolveColor';
import resolveValue from './resolveValue';

export default ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: resolveValue({ value, colors }) || resolveColor({ colors, value }),
  }),
});
