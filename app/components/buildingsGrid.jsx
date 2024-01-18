import BuildingDetails from "./buildingDetails";
import BuildingItemPhoto from "./buildingItemPhoto";
import BuildingSingleItem from "./buildingSingleItem";

export default function BuildingsGrid({items}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16">
            {items.map((item) =>  (
                <BuildingSingleItem key={item.id} title={item.title} street={item.street}/>
            ))}
        </div>
    )
}