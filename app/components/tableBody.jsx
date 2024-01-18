import TableRow from "./tableRow";

export default function TableBody({items}) {
    return (
        <tbody>
            {items.map((item) => (
                <TableRow name={item.name}
                        area={item.area}
                        balcony={item.balcony}
                        terrace={item.terrace}
                        rooms={item.rooms}
                        available={item.available}/>
            ))}
        </tbody>
    )
}