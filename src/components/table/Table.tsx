import { LuArrowLeft, LuArrowRight } from "react-icons/lu"
import Button from "../button/Button"
import React from "react"

const Table = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="hidescroll  overflow-x-auto">
            <table className="w-full">
                {children}
            </table>
        </div>
    )
}

const TBody = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

const THeade = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <thead>
            {children}
        </thead>
    )
}

const Tr = ({
    children,
    key,
    id
}: {
    children: React.ReactNode,
    id?: any,
    key?: any
}) => {
    return (
        <tr key={key} id={id}>
            {children}
        </tr>
    )
}

const Th = ({
    children,
    key,
    id
}: {
    children: React.ReactNode,
    id?: any,
    key?: any
}) => {
    return (
        <th key={key} id={id} className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
            {children}
        </th>
    )
}

const Td = ({
    children,
    key,
    id,
    extra
}: {
    children: React.ReactNode,
    id?: any,
    key?: any,
    extra?: string
}) => {
    return (
        <td className={`${extra} border-white/0 py-3  pr-4`} id={id} key={key}>
            {children}
        </td>
    )
}

type PagenationType = {
    totalPage: number
    currentPage: number
    onChange: any
}

const Pagenation = (p: PagenationType) => {
    return (
        <div className="my-5 flex justify-between">
            <Button
                disabled={p.currentPage == 1}
                name={
                    <LuArrowLeft />
                }
                onCLick={() => p.onChange ? p.onChange(p.currentPage - 1) : {}}
            />

            <span className="m-auto">
                {p.currentPage} / {p.totalPage}
            </span>

            <Button
                disabled={p.currentPage == p.totalPage}
                name={
                    <LuArrowRight />
                }
                onCLick={() => p.onChange ? p.onChange(p.currentPage + 1) : {}}
            />

        </div>
    )
}

export { Pagenation, Table, TBody, THeade, Tr, Th, Td }