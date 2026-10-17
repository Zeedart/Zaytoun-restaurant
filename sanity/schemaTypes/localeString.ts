import {defineField, defineType} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({name: 'en', title: 'English', type: 'string'}),
    defineField({name: 'ar', title: 'Arabic', type: 'string'}),
  ],
})