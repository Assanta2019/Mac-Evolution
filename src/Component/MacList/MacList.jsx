import React from "react";
import Item from "../Item/Item";

function MacList() {
    return (
        <div className="list">
            <Item
                name="Macintosh 128K"
                src="https://www.ixbt.com/short/images/2014/Jan/Untitled-1_016.jpg"
                year="1984"
                id="1"
            />
            <Item
                name="iMac G4"
                src="https://yablyk.com/wp-content/uploads/2012/07/imacg4.jpg"
                year="2003"
            />
            <Item
                name="iMac Pro"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-21-cto-hero-201903?wid=1254&hei=1044&fmt=jpeg&qlt=80&.v=1553120926388"
                year="2019"
            />
        </div>
    )
}

export default MacList;