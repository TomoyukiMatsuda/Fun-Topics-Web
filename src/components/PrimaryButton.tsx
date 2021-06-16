import { memo, ReactNode, VFC } from 'react'

interface Props {
  children: ReactNode
  onClick: () => void
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props
  return (
    <button
      className="text-white text-2xl bg-green-400 p-2 m-5 hover:bg-green-200 rounded-3xl bg-sh shadow-lg active:shadow-none"
      onClick={onClick}
    >
      {children}
    </button>
  )
})
