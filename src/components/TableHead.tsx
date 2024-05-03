import { FC } from "react"



interface Props {
    value: string
}

const TableHead: FC<Props> = ({ value }) => {
    return (
        <th className='border border-slate-600'>{value}</th>)
}

export default TableHead