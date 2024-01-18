export default function TableRow({name, area, balcony, terrace, rooms, available}) {
    function renderAvailable(available) {
        switch (available) {
            case 'TRUE':
                return <td className="bg-green-400/35 hover:bg-green-400/25"></td>
                break;
        
            case 'FALSE':
                return <td className="bg-red-400/35 hover:bg-red-400/25"></td>
                break;

            case 'WAITING':
                return <td className="bg-orange-400/35 hover:bg-orange-400/25"></td>
            break;
        }
    }

    return (
        <tr className="uppercase">
            <td className="uppercase hover:bg-slate-400/20">{name}</td>
            <td className="uppercase hover:bg-slate-400/20">{area} <span className="lowercase">m</span><sup>2</sup></td>
            {balcony ? <td className="uppercase hover:bg-slate-400/20">{balcony} <span className="lowercase">m</span><sup>2</sup></td> : <td className="bg-red-400/35 hover:bg-red-400/25"></td>}
            {terrace ? <td className="uppercase hover:bg-slate-400/20">{terrace} <span className="lowercase">m</span><sup>2</sup></td> : <td className="bg-red-400/35 hover:bg-red-400/25"></td>}
            <td className="uppercase hover:bg-slate-400/20">{rooms}</td>
            {renderAvailable(available)}
        </tr>
    )
}