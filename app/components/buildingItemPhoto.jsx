export default function BuildingItemPhoto({photo_url}) {
    return (
        <div className='shape_in_house_cards bg-white mb-8 overflow-hidden mx-auto' style={{
            backgroundImage: `url('https://img.freepik.com/darmowe-zdjecie/analogowy-krajobraz-miasta-z-budynkami_23-2149661456.jpg?size=626&ext=jpg&ga=GA1.1.390068934.1701760154&semt=ais')`,
            backgroundSize: `cover`,
            backgroundPosition: `center`
        }}></div>
    )
}