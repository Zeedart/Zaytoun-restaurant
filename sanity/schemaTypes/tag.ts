import {defineField, defineType} from 'sanity'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (r) => r.required(),
    }),
  ],
  preview: {select: {title: 'name.en', subtitle: 'name.ar'}},
})