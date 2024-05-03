import { FC } from 'react'
import { IApiData } from '../types/api-data'

interface Props {
    data: IApiData
}

const Info: FC<Props> = ({ data }) => {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">{data["Meta Data"]["1. Information"]}</h2>
            <p><strong>Symbol:</strong> {data["Meta Data"]["2. Symbol"]}</p>
            <p><strong>Last Refreshed:</strong> {data["Meta Data"]["3. Last Refreshed"]}</p>
            <p><strong>Output Size:</strong> {data["Meta Data"]["4. Output Size"]}</p>
            <p><strong>Time Zone:</strong> {data["Meta Data"]["5. Time Zone"]}</p>
        </div>
    )
}

export default Info