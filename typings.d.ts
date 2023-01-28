export interface PropertyType {
    _id: string,
    property: string,
    location: string,
    slug: {
        current: string,
    },
    gender: string,
    distance: string,
    rooms: number,
    bathrooms: number,
    food: string,
    wifi: string,
    refrigerator: string,
    washingmachine: string,
    airconditioner: string,
    sharingoptions: string,
    phonenumber: {
      phonenumber: number,
      landline: number,
    },
    imageURL: {
      imageURL: url,
    },
    rent: number,
} 

