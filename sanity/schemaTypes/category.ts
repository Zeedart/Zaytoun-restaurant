import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'localeString'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  preview: {select: {title: 'name.en', subtitle: 'name.ar'}},
})