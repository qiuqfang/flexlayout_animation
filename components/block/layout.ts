import { Layout } from "@/components/block";

const layout: Layout[] = [
  {
  },
  {
    type: "column",
    weight: 1,
    children: [
      {
        type: "row",
        weight: 2,
        children: [
          {
            weight: 1,
            component: 'paragraph',
            config: {
              paragraphType: 'title',
              content: 'Introduction to Constellations'
            },
          },
          {
            weight: 2,
            component: "paragraph",
            config: {
              paragraphType: 'normalText',
              content:
                "Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.",
            },
          }
        ]
      }, {
        weight: 1.5,
        component: 'image',
        config: {
          content: 'https://image.lexica.art/full_webp/34de87dc-77aa-4505-94a7-213341e6f4a4'
        }
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    children: [
      {
        weight: 1,
        component: 'paragraph',
        config: {
          paragraphType: 'title',
          content: 'Constellations in Culture'
        }
      },
      {
        type: "column",
        weight: 2,
        children: [
          {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Art'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars?`
                }
              ]

            }
          }, {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Literature'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars?`
                }
              ]

            }
          }, {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Movies'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars?`
                }
              ]

            }
          }
        ]
      }
    ],
  },
  {
    type: "column",
    weight: 1,
    children: [
      {
        weight: 1,
        component: 'image',
        config: {
          content: 'https://image.lexica.art/full_webp/f09cb542-257a-4bba-8180-a816de53bb54'
        }
      }, {
        type: 'row',
        weight: 2,
        children: [
          {
            type: "row",
            weight: 2,
            children: [
              {
                weight: 1,
                component: 'paragraph',
                config: {
                  paragraphType: 'title',
                  content: 'The Future of Constellations'
                },
              },
              {
                weight: 1,
                component: 'group',
                config: {
                  type: 'concatenation',
                  children: [
                    {
                      type: 'paragraph',
                      paragraphType: 'headline',
                      content: 'North Star'
                    },
                    {
                      type: 'paragraph',
                      paragraphType: 'normalText',
                      content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day.`
                    }
                  ]
                }
              }, {
                weight: 1,
                component: 'group',
                config: {
                  type: 'concatenation',
                  children: [
                    {
                      type: 'paragraph',
                      paragraphType: 'headline',
                      content: 'Big Dipper'
                    },
                    {
                      type: 'paragraph',
                      paragraphType: 'normalText',
                      content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day.`
                    }
                  ]

                }
              }, {
                weight: 1,
                component: 'group',
                config: {
                  type: 'concatenation',
                  children: [
                    {
                      type: 'paragraph',
                      paragraphType: 'headline',
                      content: `Orion's Belt`
                    },
                    {
                      type: 'paragraph',
                      paragraphType: 'normalText',
                      content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day.`
                    }
                  ]

                }
              }
            ]
          }
        ]
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    children: [
      {
        weight: 1,
        component: 'paragraph',
        config: {
          paragraphType: 'title',
          content: 'Deep Sky Objects'
        }
      }, {
        type: "column",
        weight: 5,
        children: [
          {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'image',
                  content: 'https://image.lexica.art/full_webp/088f79bc-7733-4dbd-846b-9d455d749e53',
                },
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Orion Nebula'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars?`
                }
              ]
            }
          }, {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'image',
                  content: 'https://image.lexica.art/full_webp/118037aa-a5ba-459f-b8e3-ca843a61763a',
                },
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Andromeda Galaxy'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars?`
                }
              ]
            }
          }, {
            weight: 1,
            component: 'group',
            config: {
              type: 'concatenation',
              children: [
                {
                  type: 'image',
                  content: 'https://image.lexica.art/full_webp/d9351dca-8072-45d6-82fa-3c66d0a5ebbc',
                },
                {
                  type: 'paragraph',
                  paragraphType: 'headline',
                  content: 'Sombrero Galaxy'
                },
                {
                  type: 'paragraph',
                  paragraphType: 'normalText',
                  content: `Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.Have you ever gazed upon the starry night sky and wondered about the patterns of stars? `
                }
              ]

            }
          }
        ]
      }
    ],
  },
  {

  },
];

export default layout;