import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'images',
    type: 'document',
    title: 'Images',
    fields: [
        defineField({
            name: 'property',
            type: 'string',
            title: 'Property Name'
        }),
        defineField({
            name: 'imageURL',
            type: 'url',
            title: 'Image'
        }),
    ]
})
