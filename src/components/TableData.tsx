import React, { FC } from 'react'

interface Props {
    value: string
}


const TableData: FC<Props> = ({ value }) => {
    return (
        <td className='border border-slate-700'>{value}</td>
    )
}

export default TableData