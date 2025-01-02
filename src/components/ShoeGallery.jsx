import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ShoeCard Component
const ShoeCard = ({ shoe, onPriceSubmit, isSelected, onCardClick }) => {
    const [selectedImage, setSelectedImage] = useState(shoe.mainImage);
    const [editedPrice, setEditedPrice] = useState(shoe.price);

    // Handle price change
    const handlePriceChange = (e) => {
        setEditedPrice(e.target.value);
    };

    // Submit the edited price
    const handleSubmit = (e) => {
        e.preventDefault();
        onPriceSubmit(shoe.name, editedPrice); // Call the parent function to update price
    };

    return (
        <div
            data-aos="zoom-in-down" // AOS Animation
            className={`rounded-lg shadow-lg p-4 w-full sm:w-100 bg-[#e5f1f3] hover:shadow-xl transition-shadow duration-300 ${
                isSelected ? "animate__animated animate__zoomInUp" : ""
            }`}
            onClick={() => onCardClick(shoe.name)} // Trigger the click to select this shoe
        >
            {/* Main Image */}
            <img
                src={selectedImage}
                alt={shoe.name}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
            />

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mb-4">
                {shoe.thumbnails.map((thumb, index) => (
                    <img
                        key={index}
                        src={thumb}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105 ${
                            selectedImage === thumb
                                ? "ring-4 ring-blue-200"
                                : "hover:ring-2 hover:ring-gray-300"
                        }`}
                        onClick={() => setSelectedImage(thumb)}
                    />
                ))}
            </div>

            {/* Shoe Details */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{shoe.name}</h3>
            <p className="text-gray-600 text-sm">{shoe.brand}</p>

            {/* Price Display */}
            <p className="text-xl font-bold text-blue-600 mt-2">${shoe.price}</p>

            {/* Price Edit Form (only if this shoe is selected) */}
            {isSelected && (
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="number"
                        value={editedPrice}
                        onChange={handlePriceChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        min="0"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

// Main Gallery Component
const ShoeGallery = () => {
    // Sample Data for Shoes (6 shoes)
    const shoesData = [
        {
            mainImage: "https://img.freepik.com/premium-photo/brown-highheeled-shoes-with-laces-isolate-white-background_273893-229.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
            thumbnails: [
                "https://img.freepik.com/premium-photo/brown-highheeled-shoes-with-laces-isolate-white-background_273893-229.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
                "https://img.freepik.com/free-photo/brown-leather-shoes_1203-8176.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/free-photo/men-shoes_1203-8428.jpg?ga=GA1.1.1635256637.1732171187",
            ],
            name: "Air Max",
            brand: "Nike",
            price: "120",
        },
        {
            mainImage: "https://img.freepik.com/premium-photo/black-women-s-shoes-white-isolated-background_262193-189.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
            thumbnails: [
                "https://img.freepik.com/premium-photo/black-women-s-shoes-white-isolated-background_262193-189.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
                "https://img.freepik.com/free-photo/shoes_1203-8155.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
                "https://img.freepik.com/free-photo/shoes_1203-8105.jpg?ga=GA1.1.1635256637.1732171187&semt=ais_hybrid",
            ],
            name: "Ultra Boost",
            brand: "Adidas",
            price: "150",
        },
        {
            mainImage: "https://media.istockphoto.com/id/1437303729/photo/fashionable-modern-blue-leather-sports-casual-shoes-or-sneakers-on-white-background.jpg?s=612x612&w=0&k=20&c=3uCY1FPpoyeDZe7PD0Pq4M80h1B1jS7fVIjgjCrgni4=",
            thumbnails: [
                "https://media.istockphoto.com/id/1437303729/photo/fashionable-modern-blue-leather-sports-casual-shoes-or-sneakers-on-white-background.jpg?s=612x612&w=0&k=20&c=3uCY1FPpoyeDZe7PD0Pq4M80h1B1jS7fVIjgjCrgni4=",
                "https://media.istockphoto.com/id/1664169659/photo/pair-of-stylish-colorful-sneakers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eUKmqAc6rfOHn8TI72YtwN3e0MOnP7m1eDW_H8MXMbU=",
                "https://media.istockphoto.com/id/1284957327/photo/pair-of-sport-shoes-on-white-background.jpg?s=612x612&w=0&k=20&c=_WtRMGbcOIiTXP7bEkBd3199YUe5oAtgGRS46buTJTk=",
            ],
            name: "Gel Kayano",
            brand: "ASICS",
            price: "140",
        },
        {
            mainImage: "https://img.freepik.com/premium-photo/beautiful-black-female-shoes-bag-flowers-isolated-white_392895-201450.jpg?ga=GA1.1.1635256637.1732171187",
            thumbnails: [
                "https://img.freepik.com/premium-photo/beautiful-black-female-shoes-bag-flowers-isolated-white_392895-201450.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/premium-photo/beautiful-woman-shoes-with-flowers-isolated-white_392895-428603.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/premium-photo/beautiful-woman-shoes-with-flowers-isolated-white_392895-428605.jpg?ga=GA1.1.1635256637.1732171187",
            ],
            name: "Classic Leather",
            brand: "Reebok",
            price: "100",
        },
        {
            mainImage: "https://img.freepik.com/premium-photo/ladies-shoes_253658-2018.jpg?ga=GA1.1.1635256637.1732171187",
            thumbnails: [
                "https://img.freepik.com/premium-photo/ladies-shoes_253658-2018.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/free-photo/sandal-beach-accessory-decoration-clothes_1203-6440.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/premium-photo/close-up-sandals-against-white-background_1048944-4106790.jpg?ga=GA1.1.1635256637.1732171187",
            ],
            name: "Old Skool",
            brand: "Vans",
            price: "80",
        },
        {
            mainImage: "https://img.freepik.com/premium-photo/yellow-sneakers-skateboard-bright-acid-purple-color-with-green-wheels-retro-style-as-symbol_1096505-801.jpg?ga=GA1.1.1635256637.1732171187",
            thumbnails: [
                "https://img.freepik.com/premium-photo/yellow-sneakers-skateboard-bright-acid-purple-color-with-green-wheels-retro-style-as-symbol_1096505-801.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/premium-photo/old-used-wooden-skateboard_248415-17770.jpg?ga=GA1.1.1635256637.1732171187",
                "https://img.freepik.com/premium-photo/photo-girl-wearing-sports-knee-elbow-pads-skateboarding_1077802-138739.jpg?ga=GA1.1.1635256637.1732171187",
            ],
            name: "Chuck Taylor",
            brand: "Converse",
            price: "70",
        },
    ];

    // State to keep track of the selected shoe
    const [selectedShoe, setSelectedShoe] = useState(null);

    // Function to update the price
    const updatePrice = (shoeName, newPrice) => {
        const updatedShoesData = shoesData.map((shoe) =>
            shoe.name === shoeName ? { ...shoe, price: newPrice } : shoe
        );
        // Here, you can update your state to reflect the change, for example:
        console.log(updatedShoesData);
    };

    // Function to handle card click and select a shoe
    const handleCardClick = (shoeName) => {
        setSelectedShoe((prevSelected) => (prevSelected === shoeName ? null : shoeName)); // Toggle the selection
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    return (
        <div id="shoegallery" className="py-10">
            <div className="text-center py-4 mb-8">
                <h1 className="text-4xl font-semibold text-indigo-600">NEW THIS WEEK</h1>
                <h2 className="text-lg text-gray-700">The latest collection of trendy shoes</h2>
            </div>

            {/* Shoe Grid */}
            <div className="container mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {shoesData.map((shoe, index) => (
                    <ShoeCard
                        key={index}
                        shoe={shoe}
                        onPriceSubmit={updatePrice}
                        isSelected={selectedShoe === shoe.name} // Show form if the shoe is selected
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoeGallery;
