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

const RANGE_HINT = {
  mrfz: ['明日方舟', 'https://prts.wiki/'],
  pokemon: ['宝可梦', 'https://wiki.52poke.com/zh-hans/'],
  animeCharacter: ['动漫角色'],
  gameCharacter: ['游戏角色'],
  uper: ['up主/主播'],
  game: ['电子游戏', 'https://indienova.com/gamedb'],
  gameRelated: ['游戏相关'],
  jumpManga: ['jump少年漫相关'],
  genshin: ['原神相关', 'https://wiki.biligame.com/ys/'],
  easy: ['不好说，不过没范围也能猜', 'https://www.baidu.com'],
  liuzhou: ['柳州相关', 'http://www.dianping.com/liuzhou'],
  food: ['食物', 'https://www.baidu.com'],
}

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
    ['史尔特尔', '史', RANGE_HINT.mrfz],
    ['特兰克斯', '兰', RANGE_HINT.animeCharacter],
    ['逢坂大河', '河', RANGE_HINT.animeCharacter],
    ['甲贺忍蛙', '忍', RANGE_HINT.pokemon],
    ['中单光一', '一', RANGE_HINT.uper],
    ['黑暗之魂', '黑', RANGE_HINT.game],
    ['刀塔霸业', '刀', RANGE_HINT.game],
    ['飞叶快刀', '刀', RANGE_HINT.pokemon],
    ['艾雅法拉', '法', RANGE_HINT.mrfz],
    ['死亡笔记', '笔'],
  ], '2022-02'),
])

export const _2022_MARCH = prepare(31, seedShuffle([
  ['火影忍者', '火'],
  ['苇名一心', '心', RANGE_HINT.gameCharacter],
  ['电车之狼', '狼', RANGE_HINT.game],
  ['幕下力士', '下', RANGE_HINT.pokemon],
  ['神女劈观', '神', RANGE_HINT.genshin],
  ['殖民火星', '火', RANGE_HINT.easy],
  ['马格纳斯', '马', RANGE_HINT.gameCharacter],
  ['一路向北', '一', RANGE_HINT.easy],
  ['妙蛙种子', '子', RANGE_HINT.pokemon],
  ['地爆天星', '天', RANGE_HINT.jumpManga],
  ['森下下士', '森', RANGE_HINT.pokemon],
  ['雷犁热刀', '犁', RANGE_HINT.jumpManga],
  ['干柿鬼鲛', '干', RANGE_HINT.jumpManga],
  ['月牙天冲', '冲', RANGE_HINT.jumpManga],
  ['我的世界', '世', RANGE_HINT.game],
  ['安洁莉娜', '娜', RANGE_HINT.mrfz],
  ['黑崎一护', '一', RANGE_HINT.jumpManga],
  ['火拳艾斯', '火', RANGE_HINT.jumpManga],
  ['万象天引', '万', RANGE_HINT.jumpManga],
  ['镜花水月', '月', RANGE_HINT.jumpManga],
  ['藤原拓海', '海', RANGE_HINT.animeCharacter],
  ['千石抚子', '子', RANGE_HINT.animeCharacter],
  ['真伪莫辨', '真', RANGE_HINT.easy],
  ['凉宫春日', '春', RANGE_HINT.animeCharacter],
  ['樱花大战', '大', RANGE_HINT.game],
  ['摩天大楼', '大', RANGE_HINT.easy],
  ['鬼灭之刃', '鬼'],
  ['垚记卷粉', '卷', RANGE_HINT.liuzhou],
  ['水之呼吸', '之', RANGE_HINT.jumpManga],
  ['强袭自由', '强'],
  ['火箭头槌', '火', RANGE_HINT.pokemon],
], '2022-03'))

export const _2022_APRIL = prepare(5, seedShuffle([
  ['莫斯提马', '莫', RANGE_HINT.mrfz],
  ['莫德雷德', '莫', RANGE_HINT.gameCharacter],
  ['莫里亚蒂', '莫', RANGE_HINT.gameCharacter],
  ['剑刃风暴', '风', RANGE_HINT.gameRelated],
  ['麦趣鸡盒', '鸡', RANGE_HINT.food],
], '2022-04'))

export const answers: (any[] | string[] | (string | string[])[])[] = [
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
