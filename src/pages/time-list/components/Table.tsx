import { FC } from 'react'

import { IApiData } from '../types/api-data'
import TableData from '../../../components/TableData';
import { TableHead } from '../../../components';


interface Props {
    title: string
    data: IApiData
}

interface Values {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. adjusted close": string;
    "6. volume": string;
    "7. dividend amount": string;
    "8. split coefficient": string;
}

const columnNames: string[] = ["Date", "Open", "High", "Low", "Close", "Adjusted Close", "Volume", "Dividend Amount", "Split Coefficient"]
const tableKeys: string[] = ["open", "high", "low", "close", "adjusted close", "volume", "dividend amount", "split coefficient"]



const Table: FC<Props> = ({ title, data }) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <table className="border-separate border-spacing-2 border border-slate-500">
                <thead>
                    <tr>
                        {
                            columnNames.map((columnName, key) => {

                                return <TableHead key={key} value={columnName} />
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data["Time Series (Daily)"]).map(([date, values]) => (
                        <tr key={date}>
                            <td className='border border-slate-700' >{date}</td>
                            {
                                tableKeys.map((tableKey, key) => {
                                    const newKey: keyof Values = `${key + 1}. ${tableKey}` as keyof Values;
                                    const newValue: string = values[newKey]
                                    return <TableData key={key} value={newValue} />
                                })
                            }

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table