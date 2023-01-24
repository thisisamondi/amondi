export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artist' }] }],
    },
  ],
}
