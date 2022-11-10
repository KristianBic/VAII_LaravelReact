import React from "react";
import galleryBackgroundImage from "../../assets/image/images/gallery_home-page.png";
import EmptyGallery from "../../assets/image/icons/noImages.svg";

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-image">
                <img src={galleryBackgroundImage} alt="Sídlo Marpalu" />
                <h2>Galéria PROJEKTOV</h2>
                <p>
                    Nahliadnite bližšie do galérie naších úspešných projektov.
                </p>
            </div>

            <div className="emptyContainer">
                <img src={EmptyGallery} alt="SVG logo image" />
                <h3>Žiadne galérie.</h3>
                <p>
                    Zatiaľ sme nepridali žiadny záznam z nášho umenia, ale
                    zostaňte nablízku, čoskoro pridáme!
                </p>
            </div>
        </div>
    );
};

export default Gallery;
