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
  ...seedShuffle([
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
    ['异口同声', '声'],
    ['因噎废食', '食'],
    ['惊世骇俗', '世'],
    ['同甘共苦', '同'],
    ['见风使舵'],
    ['地北天南'],
    ['筒隐月子', '月'],
    ['史尔特尔'],
    ['特兰克斯', '兰'],
    ['八重神子', '神'],
    ['甲贺忍蛙'],
  ], '2022-02'),
])

export const _2022_MARCH = prepare(31, seedShuffle([
  ['火影忍者', '火'],
  ['苇名一心', '心'],
  ['电车之狼', '狼'],
  ['幕下力士', '下'],
  ['断罪皇女', '罪'],
  ['殖民火星', '火'],
  ['轻声细语', '语'],
  ['自不量力', '力'],
  ['平步青云', '云'],
  ['谈笑风生', '风'],
  ['见义勇为', '为'],
  ['回天乏术', '天'],
  ['首当其冲', '其'],
  ['千姿百态', '百'],
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
