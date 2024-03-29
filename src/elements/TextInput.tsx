import { ChangeEvent, InputHTMLAttributes, RefObject } from 'react'
import { TbAlertOctagonFilled } from 'react-icons/tb'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  autoFocus?: boolean
  error?: string
  inputRef?: RefObject<HTMLInputElement>
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function TextInput({
  value,
  onChange,
  placeholder,
  autoFocus = false,
  inputRef,
  error,
  className = '',
  ...rest
}: Props) {
  return (
    <>
      <input
        autoFocus={autoFocus}
        className={`rounded-md border-2 border-black dark:border-white bg-white dark:bg-black dark:text-white p-[10px] w-full flex-1 font-bold shadow-brutal dark:shadow-brutaldark outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none dark:transition-all dark:focus:translate-x-[3px] dark:focus:translate-y-[3px] dark:focus:shadow-none ${className}`}
        type="text"
        name="text"
        id="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={placeholder}
        ref={inputRef}
        {...rest}
      />
      {!!error && (
        <div className="flex pl-1 text-danger">
          <TbAlertOctagonFilled className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
          <p>{error}</p>
        </div>
      )}
    </>
  )
}
