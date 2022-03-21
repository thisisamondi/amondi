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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
