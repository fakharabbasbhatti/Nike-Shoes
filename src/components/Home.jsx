import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
    const [mainImage, setMainImage] = useState('https://media.istockphoto.com/id/1479037690/photo/white-sneaker-with-a-diversity-of-colors-shoe-on-a-white-gradient-background-mens-fashion.jpg?s=612x612&w=0&k=20&c=blxtcFsoYo2HWrOFZ9HJRzfrwVDUzQu7B1_LHnZMM6E=');
    const [size, setSize] = useState('US: 7');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [editData, setEditData] = useState({
        name: 'Nick Air Jordan 1 Mid',
        brand: 'Air Jordan',
        price: '160',
    });

    const images = [
        'https://media.istockphoto.com/id/1479037690/photo/white-sneaker-with-a-diversity-of-colors-shoe-on-a-white-gradient-background-mens-fashion.jpg?s=612x612&w=0&k=20&c=blxtcFsoYo2HWrOFZ9HJRzfrwVDUzQu7B1_LHnZMM6E=',
        'https://media.istockphoto.com/id/1394359723/photo/white-sneaker-on-a-white-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=5s4AF_zGLLvmHMsnmpm8a1qTZ_OmPePftNblKeBzmQM=',
    ];

    const sizes = ['US: 7', 'US: 8', 'US: 9', 'US: 10'];

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const toggleEditForm = () => {
        setIsEditVisible(!isEditVisible);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing type
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <div id="home">
            <div className="flex flex-col md:flex-row px-6 py-10 space-y-6 md:space-y-0">
                {/* Image Section */}
                <div className="flex flex-col items-center md:w-1/2" data-aos="fade-up">
                    <div className="w-130 h-130">
                        <img src={mainImage} alt="Main Shoe" className="w-full max-w-md h-full object-cover mb-4 rounded-lg" />
                    </div>

                    <div className="flex justify-center space-x-2">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setMainImage(image)}
                                className="w-20 h-20 object-cover cursor-pointer border p-1 rounded-md hover:border-gray-500"
                                data-aos="fade-up"
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="md:w-1/2 flex flex-col justify-between mt-6 md:mt-0 md:px-8" data-aos="fade-up">
                    <div>
                        <h2 className="text-xl text-black mb-2">Man Shoes</h2>
                        <h1 className="text-6xl font-semibold text-black-600 uppercase mb-2">{editData.name}</h1>
                        <p className="text-2xl font-bold text-black mb-4">${editData.price}</p>
                        <p className="text-gray-600 mb-6 text-1xl">
                            The {editData.brand} shoes offer a blend of style and comfort, ideal for both casual and athletic wear.
                            Featuring a sleek design with premium materials, these sneakers provide excellent support and durability.
                        </p>
                    </div>

                    {/* Size and Add to Cart Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between" data-aos="fade-up">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="size" className="text-lg font-semibold block mb-2">Select Size:</label>
                            <select
                                id="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="bg-gray-150 text-black py-2 rounded-md w-full sm:w-32"
                            >
                                {sizes.map((sizeOption, index) => (
                                    <option key={index} value={sizeOption}>{sizeOption}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="bg-black text-white py-2 px-6 mt-4 sm:mt-0 rounded-md hover:bg-gray-800 transition"
                            onClick={toggleForm}
                            data-aos="fade-up"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Form */}
            {isFormVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-96" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold mb-4">Cart Details</h2>
                        <img src={mainImage} alt="Selected Shoe" className="w-full h-40 object-cover rounded-md mb-4" />
                        <p><strong>Name:</strong> {editData.name}</p>
                        <p><strong>Brand:</strong> {editData.brand}</p>
                        <p><strong>Price:</strong> ${editData.price}</p>
                        <p><strong>Size:</strong> {size}</p>
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition mt-4"
                            onClick={toggleEditForm}
                            data-aos="fade-up"
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition mt-4 ml-4"
                            onClick={toggleForm}
                            data-aos="fade-up"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Form */}
            {isEditVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-96" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold mb-4">Edit Details</h2>
                        <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleEditChange}
                            placeholder="Name"
                            className="w-full mb-4 p-2 border rounded"
                            data-aos="fade-up"
                        />
                        <input
                            type="text"
                            name="brand"
                            value={editData.brand}
                            onChange={handleEditChange}
                            placeholder="Brand"
                            className="w-full mb-4 p-2 border rounded"
                            data-aos="fade-up"
                        />
                        <input
                            type="text"
                            name="price"
                            value={editData.price}
                            onChange={handleEditChange}
                            placeholder="Price"
                            className="w-full mb-4 p-2 border rounded"
                            data-aos="fade-up"
                        />
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition mt-4"
                            onClick={() => setIsEditVisible(false)}
                            data-aos="fade-up"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
