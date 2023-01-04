import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'obras',
  title: 'Obras',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(30),
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'fecha',
      title: 'Fecha',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
  ],
})
