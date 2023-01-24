export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of artist or group',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
    {
      name: 'country',
      title: 'Country',
      description: 'Where have you worked with this artist/group?',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'country' }] }],
    },
    {
      name: 'category',
      title: 'Category',
      description: 'What was your role(s)?',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
