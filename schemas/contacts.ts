import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'contacts',
    type: 'document',
    title: 'Contacts',
    fields: [
        defineField({
            name: 'property',
            type: 'string',
            title: 'Property Name'
        }),
        defineField({
        name: 'phonenumber',
        type: 'number',
        title: 'Phone Number'
        }),
        defineField({
        name: 'landline',
        type: 'number',
        title: 'Landline'
        }),
    ]
})

    