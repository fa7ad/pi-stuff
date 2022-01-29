import { either, isEmpty, join, pipe, reduce, reject, split, startsWith, trim, uncurryN, uniq } from 'ramda';

const _getCombinedList = (customList) =>
  pipe(
    reduce((combined, list) => combined + '\n' + list, customList),
    trim,
    split('\n'),
    reject(either(startsWith('#'), isEmpty)),
    uniq,
    join('\n')
  );

const getCombinedList = uncurryN(2, _getCombinedList);

export default getCombinedList;
