export default function NavFavoritesFlatsBtn() {
    return (
        <div className="ms-auto flex flex-row cursor-pointer">
            <div className="uppercase tracking-[.25em] transition-all nav_link_fav lg:text-center my-auto">Ulubione</div>
            <div className="py-2 px-4 bg_brown ms-3 shape_in_house_favs flex text-center">
                <span className="my-auto mx-auto text-black">10</span>
            </div> 
        </div>
    )
}