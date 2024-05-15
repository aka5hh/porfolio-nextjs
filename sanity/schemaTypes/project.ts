// import {defineField, defineType} from 'sanity'

// // export default {

// export const eventType = defineType({
//   name: 'project',
//   title: 'Project',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     }),
//     defineField({
//       name: 'overview',
//       type: 'string',
//       title: 'Small Overview',
//     }),
//     defineField({
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//     }),
//     defineField({
//       name: 'link',
//       type: 'string',
//       title: 'Link',
//     }),
//   ],
// })
import {defineField, defineType} from 'sanity'

const eventType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'overview',
      type: 'string',
      title: 'Small Overview',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link',
    }),
  ],
})

export default eventType
