import { memo, VFC } from 'react'
import { PrimaryButton } from './PrimaryButton'

interface Props {
  topic: string
  onClickShuffle: () => void
  getCommonTopics: () => void
}
export const Main: VFC<Props> = memo((props) => {
  const { topic, onClickShuffle, getCommonTopics } = props
  return (
    <div>
      <p className="text-xl font-bold">{topic}</p>
      <PrimaryButton onClick={onClickShuffle}>シャッフル</PrimaryButton>
      <PrimaryButton onClick={getCommonTopics}>話題を取得</PrimaryButton>
    </div>
  )
})
