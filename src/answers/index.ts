import seedrandom from 'seedrandom'
import DATA from '../data/idioms.json'
import { getHint } from '../logic'
import { answers } from './list'
import { RANDOM_SEED } from '~/logic'
import { t } from '~/i18n'

const DATA_SET = DATA.length

export function getAnswerOfDay(day: number) {
  let [word = '', hint = '', descriptionHint] = answers[day] || []
  let [descriptionHintText = '', descriptionHintUrl = ''] = descriptionHint || [];
  if (!word) {
    const rng = seedrandom(RANDOM_SEED)
    for (let i = 0; i <= day; i++)
      rng()
    word = DATA[Math.floor(rng() * DATA_SET - 1)][0]
  }
  if (!hint)
    hint = getHint(word)
  if (!descriptionHintText)
    descriptionHintText = t('range-hint-default-text');
  if (!descriptionHintUrl)
    descriptionHintUrl = t('range-hint-default-url');
  return {
    word,
    hint,
    descriptionHintText,
    descriptionHintUrl,
  }
}
