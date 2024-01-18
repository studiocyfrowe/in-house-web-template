import BuildingDetails from "./buildingDetails";
import BuildingItemPhoto from "./buildingItemPhoto";

export default function BuildingSingleItem({title, street, availableNumber, maxNumber}) {
    return (
        <div className="flex flex-col p-0 mx-auto">
            <BuildingItemPhoto/>
            <BuildingDetails title={title} street={street}/>
        </div>
    )
}