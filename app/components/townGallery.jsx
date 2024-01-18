import TownGalleryItem from "./townGalleryItem";

export default function TownGallery({items}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-48">
            <TownGalleryItem/>
            <TownGalleryItem/>
            <TownGalleryItem/>
        </div>
    )
}