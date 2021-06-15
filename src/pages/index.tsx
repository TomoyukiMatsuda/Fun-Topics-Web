import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { useCallback, useState } from 'react'

// TODO: 自動補完機能で import 絶対パスアクセスできるか確認
export default function Home() {
  const [topic, setTopic] = useState<string>('なにをやねーん')

  const topics: Array<string> = [
    '最近あった面白いこと',
    '最近ハッピーだったこと',
    '最近失敗したこと',
    '１ヶ月の休みが会ったらなにする？',
    '１億円あったらどうする？',
    '休日はどう過ごしている？',
    'こういう人は許せない',
    '朝起きて最初にすること',
    '人生で最も乗っていたときの話',
    '無人島に持っていくもの３つ',
    'もう一度人生をやるとしたらなにになる？',
    '50歳のときにどうなっていたい？',
    '人生最大の失敗',
    '最後に泣いたのは？',
    '１年前の今頃なにしてた？',
    '５年前の今頃なにしてた？',
    '３年前の今頃なにしてた？',
    'なぞに覚えている一番小さい頃の思い出',
    '小さい頃の夢',
    '最近買った高価なもの',
    '子供に付けたい名前',
    'すべらない話',
    '今ハマっていること',
    '永遠の何歳でいたい？',
    '今の生活の中での一番の楽しみ',
    '昔学校で流行った遊び',
    '大学時代に戻ったらやりたいこと',
    '職場にいるおもろい人',
    '最近感じた青春',
    '自分の中での流行語',
    '最近「自分天才か!」と感じたこと',
    '自分の好きなところ',
    'もう一度新卒就活するとしたらどこにいく？',
    '自由に職業選べるとしたらなにやる',
    '自分に子供ができたらなにになって欲しい？',
    '何か新しく始めたいことは？',
    '無人島に持っていくもの１つ',
  ]
  const onClickSwitch = useCallback(() => {
    const topicNum = Math.floor(Math.random() * topics.length)

    setTopic(topics[topicNum])
  }, [topics])
  return (
    <div className={styles.container}>
      <Head>
        <title>FUNトピックス</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className="text-xl font-bold">{topic}</p>
        <button
          className="text-white text-2xl bg-green-400 p-2 m-5 hover:bg-green-200 rounded-3xl bg-sh shadow-lg active:shadow-none"
          onClick={onClickSwitch}
        >
          とりあえず押す
        </button>
      </div>
    </div>
  )
}
