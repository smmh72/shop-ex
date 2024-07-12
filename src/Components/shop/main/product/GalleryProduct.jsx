import React from 'react';

const GalleryProduct = ({ myproduct }) => {

    const images = [
        {
            id: 1,
            img: myproduct.image
        },
        {
            id: 2,
            img: myproduct.image
        },
        {
            id: 3,
            img: myproduct.image
        },
        {
            id: 4,
            img: myproduct.image
        },
        {

            id: 5,
            img: myproduct.image
        },

    ]



    return (
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <article className=" p-3 shadow-sm rounded bg-white overflow-hidden">
                <section className="row">
                    <section className="p-2 rounded mb-4">
                        <section className="product-gallery">
                            <section className="product-gallery-selected-image  ">
                                <img className='mainImage rounded-3 ' src={myproduct.image} alt="pic-main" />
                            </section>
                            <section className="product-gallery-thumbs">
                                <div className="w-75 row-cols-6 m-5 rounded-2 justify-content-center align-items-center">
                                    {images && images.map((imgage, setImg) => {
                                        return (<img className='m-1 p-1 img-thumbnail' src={imgage.img} key={imgage.id} onClick={() => setImg(imgage.img)} />)
                                    })
                                    }
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            </article>
        </section>
    );
};

export default GalleryProduct;