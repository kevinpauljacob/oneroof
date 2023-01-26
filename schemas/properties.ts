import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'properties',
    type: 'document',
    title: 'Properties',
    fields: [
        defineField({
        name: 'property',
        type: 'string',
        title: 'Property Name'
        }),
        defineField({
        name: 'location',
        type: 'string',
        title: 'Location'
        }),
        defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'property',
            maxLength: 96,
        },
        }),
        defineField({
        name: 'gender',
        type: 'string',
        title: 'Gender'
        }),
        defineField({
        name: 'distance',
        type: 'string',
        title: 'Distance from Campus'
        }),
        defineField({
        name: 'rooms',
        type: 'number',
        title: 'Rooms'
        }),
        defineField({
        name: 'bathrooms',
        type: 'number',
        title: 'Bathrooms'
        }),
        defineField({
        name: 'rent',
        type: 'number',
        title: 'Rent',
        }),
        defineField({
        name: 'food',
        type: 'string',
        title: 'Food'
        }),
        defineField({
        name: 'wifi',
        type: 'string',
        title: 'Wifi'
        }),
        defineField({
        name: 'refrigerator',
        type: 'string',
        title: 'Refrigerator'
        }),
        defineField({
        name: 'washingmachine',
        type: 'string',
        title: 'Washing Machine'
        }),
        defineField({
        name: 'airconditioner',
        type: 'string',
        title: 'Air Conditioner'
        }),
        defineField({
        name: 'sharingoptions',
        type: 'string',
        title: 'Sharing Options'
        }),
        defineField({
            name: 'phonenumber',
            type: 'reference',
            title: 'Phone Number',
            to: {type: 'contacts'}
        }),
        defineField({
            name: 'landline',
            type: 'reference',
            title: 'Landline',
            to: {type: 'contacts'}
        }),
        defineField({
            name: 'imageURL',
            type: 'reference',
            title: 'imageURL',
            to: {type: 'images'}
        }),
    ]
})