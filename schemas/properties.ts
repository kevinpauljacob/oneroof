import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'properties',
    type: 'document',
    title: 'Properties',
    fields: [
        defineField({
            name: 'propertyName',
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
            name: 'sharingOptions',
            type: 'string',
            title: 'Sharing Options'
        }),
        defineField({
            name: 'bathrooms',
            type: 'number',
            title: 'Bathrooms'
        }),
        defineField({
            name: 'food',
            type: 'string',
            title: 'Food'
        }),
        defineField({
            name: 'ro',
            type: 'string',
            title: 'R.O. Unit'
        }),
        defineField({
            name: 'canWater',
            type: 'string',
            title: 'Can Water'
        }),
        defineField({
            name: 'powerBackup',
            type: 'string',
            title: 'Power Backup'
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
            name: 'washingMachine',
            type: 'string',
            title: 'Washing Machine'
        }),
        defineField({
            name: 'airConditioner',
            type: 'string',
            title: 'Air Conditioner'
        }),
        defineField({
            name: 'extraEB',
            type: 'string',
            title: 'Extra E.B. for AC'
        }),
        defineField({
            name: 'inTime',
            type: 'string',
            title: 'In-Time'
        }),
        defineField({
            name: 'bookingCharges',
            type: 'string',
            title: 'Booking Charges'
        }),
        defineField({
            name: 'propertyInChargeName',
            type: 'string',
            title: 'Property In-Charge Name'
        }),
        defineField({
            name: 'phoneNumber',
            type: 'array',
            title: 'Phone Number',
            of: [{type: 'number'}]
        }),
        defineField({
            name: 'landline',
            type: 'array',
            title: 'Landline',
            of: [{type: 'number'}]
        }),
        defineField({
            name: 'rent',
            type: 'number',
            title: 'Rent',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{type: 'url'}]
        }),
        defineField({
            name: 'latitude',
            type: 'number',
            title: 'Latitude'
        }),
        defineField({
            name: 'longitude',
            type: 'number',
            title: 'Longitude'
        }),
    ]
})