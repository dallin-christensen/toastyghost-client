const defaultPositionClassName = 'left-0 bottom-0'

type Props = {
  elementToHover: React.ReactNode
  tooltip: React.ReactNode
  positionClassName?: string
}

export default function Tooltip({ elementToHover, tooltip, positionClassName = defaultPositionClassName }: Props) {
  return (
    <div className="group relative inline-block cursor-default text-center font-bold">
      {elementToHover}
      <div
        className={`pointer-events-none absolute ${positionClassName} z-10 rounded-md border-2 bg-black text-white border-white shadow-brutal px-3 py-2 text-center text-xs opacity-0 transition-all delay-500 group-hover:opacity-80 w-max`}
      >
        {tooltip}
      </div>
    </div>
  )
}
