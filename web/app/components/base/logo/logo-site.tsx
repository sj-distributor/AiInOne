'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import { useSelector } from '@/context/app-context'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  const { theme } = useSelector((s) => {
    return {
      theme: s.theme,
    }
  })

  const src = 'https://static.wixstatic.com/media/4741be_2f062f6c8ef74708b64652131fad6f07~mv2.png/v1/fill/w_30,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201597883169.png'

  return (
    <img
      src={src}
      className={classNames('block w-auto h-10', className)}
      alt='logo'
    />
  )
}

export default LogoSite
