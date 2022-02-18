/**
 * SPOILERS
 *
 * This file contains the list of answers for the game. It's not recommended to continue reading this file.
 *
 * 剧透警告
 *
 * 该文件包含了游戏的答案列表。不建议继续阅读。
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { seedShuffle } from './utils'

function prepare<T>(len: number, arr: T[]) {
  if (arr.length !== len)
    throw new Error(`expect array length ${arr.length} to be ${len}`)
  return arr
}

export const _PRE = prepare(1, [[]])

export const _2022_JAN = prepare(31, [
  ...Array.from({ length: 28 }, () => []),
  ['天南海北'],
  ['地动山摇'],
  ['福寿安康'],
])

export const _2022_FEB = prepare(28, [
  ['虎虎生威', '虎'],
  ['酒虎诗龙', '虎'],
  ['虎啸风生', '虎'],
  ['卧虎藏龙', '虎'],
  ['虎视眈眈', '虎'],
  ['春华秋实'],
  ['一面之辞'],
  ['变化莫测'],
  ['穷山恶水'],
  ['百废待兴'],
  ['百年树人', '人'],
  ['吃里扒外'],
  ['井然有条'],
  ['本性难移'],
  ['口是心非', '是'],
  ['雄心勃勃'],
  ['各有千秋'],
  ['筒隐月子', '月'],
  ...seedShuffle([
    ['史尔特尔', '史'],
    ['特兰克斯', '兰'],
    ['逢坂大河', '河'],
    ['甲贺忍蛙', '忍'],
    ['中单光一', '一'],
    ['黑暗之魂', '黑'],
    ['刀塔霸业', '刀'],
    ['飞叶快刀', '刀'],
    ['艾雅法拉', '法'],
    ['死亡笔记', '笔'],
  ], '2022-02'),
])

export const _2022_MARCH = prepare(31, seedShuffle([
  ['火影忍者', '火'],
  ['苇名一心', '心'],
  ['电车之狼', '狼'],
  ['幕下力士', '下'],
  ['神女劈观', '神'],
  ['殖民火星', '火'],
  ['马格纳斯', '马'],
  ['一路向北', '一'],
  ['妙蛙种子', '子'],
  ['地爆天星', '天'],
  ['森下下士', '森'],
  ['雷犁热刀', '犁'],
  ['干柿鬼鲛', '干'],
  ['月牙天冲', '冲'],
  ['蓬荜生辉', '生'],
  ['苦口婆心', '心'],
  ['独树一帜', '一'],
  ['走马观花', '花'],
  ['燃眉之急', '眉'],
  ['不翼而飞', '飞'],
  ['不言而喻', '言'],
  ['花前月下', '月'],
  ['春风化雨', '风'],
  ['高深莫测', '高'],
  ['铁石心肠', '石'],
  ['飞蛾扑火', '火'],
  ['鬼斧神工', '鬼'],
  ['无中生有', '生'],
  ['风调雨顺', '雨'],
  ['坐吃山空', '山'],
  ['愤世嫉俗', '世'],
], '2022-03'))

export const answers: string[][] = [
  ..._PRE,
  ..._2022_JAN,
  ..._2022_FEB,
  ..._2022_MARCH,
]

// duplicated check
if (import.meta.hot) {
  const map = new Map<string, number>()
  answers.forEach((a, i) => {
    if (!a[0])
      return
    if (!map.has(a[0]))
      map.set(a[0], i)
    else
      throw new Error(`Word ${a[0]} is duplicated at ${map.get(a[0])}`)
  })
}
