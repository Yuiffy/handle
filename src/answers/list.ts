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

  ...seedShuffle([
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
    ['魔人布欧', '人'],
    ['拉人特种', '人'],
    ['湊阿库娅', '阿'],
    ['火星救援', '火'],
    ['星际穿越', '星'],
    ['骂谁罕见', '见'],
    ['学园偶像', '学'],
    ['破坏死光', '光'],
    ['大话西游', '大'],
    ['诸王峡谷', '王'],
    ['点线交织', '线'],
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
  ['我的世界', '世'],
  ['安洁莉娜', '娜'],
  ['黑崎一护', '一'],
  ['火拳艾斯', '火'],
  ['万象天引', '万'],
  ['镜花水月', '月'],
  ['藤原拓海', '海'],
  ['千石抚子', '子'],
  ['真伪莫辨', '真'],
  ['凉宫春日', '春'],
  ['樱花大战', '大'],
  ['摩天大楼', '大'],
  ['鬼灭之刃', '鬼'],
  ['垚记卷粉', '卷'],
  ['水之呼吸', '之'],
  ['强袭自由', '强'],
  ['火箭头槌', '火'],
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
