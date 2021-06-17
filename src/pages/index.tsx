import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Main } from '../components/Main'

interface CommonTopic {
  id: number
  content: string
}

// TODO: 自動補完機能で import 絶対パスアクセスできるか確認
export default function Home() {
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
  const [topic, setTopic] = useState<string>('なにをやねーん')
  const [commonTopics, setCommonTopics] = useState<Array<string>>(topics)
  // todo デバッグ用確認している
  console.log(commonTopics)

  const getCommonTopics = useCallback(() => {
    axios
      .get<Array<CommonTopic>>('/common_topic/list')
      .then((res) => {
        const commonTopicList = res.data.map((commonTopic) => commonTopic.content)
        setCommonTopics(commonTopicList)
      })
      .catch()
  }, [])

  const onClickShuffle = useCallback(() => {
    // TODO: ランダム確率の最適化
    const topicNum = Math.floor(Math.random() * commonTopics.length)

    setTopic(commonTopics[topicNum])
  }, [commonTopics])
  return (
    <div className={styles.container}>
      <Head>
        <title>FUNトピックス</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main topic={topic} onClickShuffle={onClickShuffle} getCommonTopics={getCommonTopics} />
    </div>
  )
}
