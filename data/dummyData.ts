//image imporation from public/images folder
// import { StaticImageData } from "next/image";
// import Avatar from "../public/images/Avatar.png";
// import Avatar1 from "../public/images/Avatar1.png";

interface IDummyData {
    
    // Photo: string | StaticImageData,
    Photo: string,
    ItemName: string,
    Category: string,
    Hub: string,
    InStorage: number,
    InDelivery: number,
    ItemPrice: string,
    LastUpdated: string
    
}

export const InventoriesStorages : IDummyData[] = [

    {
      
        Photo:"/images/Avatar.png",
        ItemName: "Thrift Shirts",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 30,
        InDelivery: 10,
        ItemPrice: "GHS 400",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    },

    {
      
        Photo: "/images/Avatar.png",
        ItemName: "Thrift Shirts",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 0,        InDelivery: 10,
        ItemPrice: "GHS 200",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    
    },
    {
      
        Photo: "/images/Avatar.png",
        ItemName: "Thrift Shirts",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 73,
        InDelivery: 10,
        ItemPrice: "GHS 8100",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    
    },

    {
      
        Photo: "/images/Avatar.png",
        ItemName: "Thrift Shirts",
        Category: "Clothing/Shirts",
        Hub: "Kumasi",
        InStorage: 73,
        InDelivery: 5,
        ItemPrice: "GHS 400",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    
    },

    {
      
        Photo: "/images/Avatar.png",
        ItemName: "Thrift Shirts",
        Category: "Clothing/Shirts",
        Hub: "Kumasi",
        InStorage: 20,
        InDelivery: 5,
        ItemPrice: "GHS 200",
        LastUpdated:"30 Sep 2022, 12:14 pm"


    },

    {
        Photo: "/images/Avatar1.png",
        ItemName: "New Balance Zoom",
        Category: "Clothing/Shirts",
        Hub: "Kumasi",
        InStorage: 20,
        InDelivery: 10,
        ItemPrice: "GHS 8100",
        LastUpdated:"30 Sep 2022, 12:14 pm"

        
    },

    {

        Photo: "/images/Avatar1.png",
        ItemName: "New Balance Zoom",
        Category: "Clothing/Shirts",
        Hub: "Kumasi",
        InStorage: 65,
        InDelivery: 10,
        ItemPrice: "GHS 400",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    },

    {

        Photo: "/images/Avatar1.png",
        ItemName: "New Balance Zoom",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 65,
        InDelivery: 5,
        ItemPrice: "GHS 200",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    },
    {

        Photo: "/images/Avatar1.png",
        ItemName: "New Balance Zoom",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 30,
        InDelivery: 5,
        ItemPrice: "GHS 8100",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    },

    {

        Photo: "/images/Avatar1.png",
        ItemName: "New Balance Zoom",
        Category: "Clothing/Shirts",
        Hub: "Accra",
        InStorage: 30,
        InDelivery: 10,
        ItemPrice: "GHS 400",
        LastUpdated:"30 Sep 2022, 12:14 pm"

    }

];
