import { defineField, defineType } from 'sanity'

export const menuItems = defineType({
    name: 'menuItems',
    title: 'Menu Items',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'localeString',
            validation: (r) => r.required()
        }),


        defineField({
            name: 'description',
            title: 'Description',
            type: 'localeString',
            validation: (r) => r.required()
        }),


        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (r) => r.required()
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (r) => r.required()
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        }),

        defineField({
            name: 'tag',
            title: 'Tag',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }],
        }),

        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'boolean',
            initialValue: false,
            description: 'If true, this menu item will be featured in the hero section of the website.'
        }),

        defineField({
            name: 'story',
            title: 'Story',
            type: 'boolean',
            initialValue: false,
            description: 'If true, this menu item will be featured in the story section of the website.'
        })
    ],
    preview: {
        select: { title: 'name.en', subtitle: 'category.name.en', media: 'image' },
    },

})