import TableBody from "./tableBody";
import TableRowHead from "./tableRowHead";

export default function TableFlats({flats}) {
    return (
        <table class="table-auto">
            <thead>
                <tr>
                    <TableRowHead label={`Numer mieszkania`}/>
                    <TableRowHead label={`Pow. użytkowa`}/>
                    <TableRowHead label={`Balkon`}/>
                    <TableRowHead label={`Taras`}/>
                    <TableRowHead label={`Pokoje`}/>
                    <TableRowHead label={`Dostępność`}/>
                    <TableRowHead label={`Dodaj do ulubionych`}/>
                </tr>
            </thead>
            <TableBody items={flats}/>
        </table>
    )
}