import { ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type PropsFileUpload = {
    register: UseFormRegisterReturn
    children?: ReactNode
}