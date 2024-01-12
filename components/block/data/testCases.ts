import { NonEmptyArray, Tree, TreeLeaf } from "../algorithms/type";

interface TestTexts {
  readonly title1: string;
  readonly title2: string;
  readonly body1: string;
  readonly body2: string;
}

// TODO: title must be a unique component, due to the horizontal alignment algorithm
export const testTexts: TestTexts = {
  title1: "Performance Overview",
  title2: "Top Posts",
  body1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  body2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nNullam ut elementum erat. Proin eu dolor efficitur, bibendum.",
};

const img = {
  type: "leaf",
  label: "image",
  config: {
    content: "https://image.lexica.art/full_webp/cf298d56-8e26-47e1-b3ef-58924d314716",
  },
  value: 30,
} as TreeLeaf;

const body = {
  type: "leaf",
  label: "paragraph",
  config: { type: "normalText", content: testTexts.body1 },
  value: 80,
} as TreeLeaf;

const title = {
  type: "leaf",
  config: { type: "title", content: testTexts.title2 },
  value: 40,
  label: "paragraph",
} as TreeLeaf;

const paragraph = {
  type: "leaf",
  config: { type: "normalText", content: testTexts.title2 },
  value: 40,
  label: "paragraph",
} as TreeLeaf;

// export const testCases: NonEmptyArray<Tree> = [
//   {
//     type: "node",
//     name: "图片占比测试",
//     group: false,
//     value: 0,
//     children: [{ ...title }, { ...body }, { ...img }],
//   },
//   {
//     type: "node",
//     name: "4图+标题+正文",
//     value: 0,
//     group: false,
//     children: [
//       {
//         type: "node",
//         name: "group1",
//         value: 0,
//         group: true,
//         children: [{ ...img }, { ...img }, { ...img }, { ...img }],
//       },
//       {
//         type: "node",
//         name: "",
//         group: false,
//         value: 0,
//         children: [{ ...title }, { ...body }],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "平铺目录页",
//     value: 0,
//     group: true,
//     children: [
//       {
//         type: "node",
//         name: "1",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "2",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "3",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "4",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "5",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "6",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "3组嵌套",
//     value: 0,
//     children: [
//       {
//         type: "node",
//         name: "标题正文",
//         value: 0,
//         children: [
//           {
//             type: "node",
//             name: "标题正文",
//             value: 0,
//             children: [{ ...title }, { ...body }],
//           },
//         ],
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "group deptparagraph",
//             value: 0,

//             children: [{ ...img }, { ...paragraph }, { ...body }],
//           },
//           {
//             type: "node",
//             name: "Team Dataviz",
//             value: 0,
//             children: [{ ...img }, { ...paragraph }, { ...body }],
//           },
//           {
//             type: "node",
//             name: "Team Dataviz",
//             value: 0,
//             children: [{ ...img }, { ...paragraph }, { ...body }],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "2组嵌套",
//     value: 0,
//     children: [
//       {
//         type: "node",
//         name: "Team Dataviz",
//         value: 0,
//         children: [
//           {
//             type: "node",
//             name: "标题正文",
//             value: 0,
//             children: [{ ...title }, { ...body }],
//           },
//         ],
//       },
//       {
//         type: "node",
//         name: "Team Dataviz",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "Team Dataviz",
//             value: 0,
//             children: [{ ...img }, { ...paragraph }, { ...body }],
//           },
//           {
//             type: "node",
//             name: "Team Dataviz",
//             value: 0,
//             children: [{ ...img }, { ...paragraph }, { ...body }],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     type: "node",
//     name: "3个组",
//     value: 0,
//     children: [
//       {
//         type: "node",
//         name: "组1",
//         value: 0,
//         children: [{ ...body }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "组2",
//         value: 0,
//         children: [{ ...body }],
//       },
//       {
//         type: "node",
//         name: "组3",
//         value: 0,
//         children: [{ ...body }],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "2*2个组",
//     value: 0,
//     children: [
//       {
//         type: "node",
//         name: "组1",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "组2",
//         value: 0,
//         children: [{ ...paragraph }, { ...body }],
//       },
//     ],
//   },
// ];

// //
// // export const data: Tree = {
// //     type: "node",
// //     name: "boss",
// //     value: 0,
// //     children: [
// //         {
// //             type: "node",
// //             name: "Team Dataviz",
// //             value: 0,
// //             children: [
// //                 { type: "leaf", name: "Mark", value: 90 },
// //                 { type: "leaf", name: "Robert", value: 12 },
// //                 { type: "leaf", name: "Emily", value: 34 },
// //                 { type: "leaf", name: "Marion", value: 53 },
// //             ],
// //         },
// //         {
// //             type: "node",
// //             name: "Team DevOps",
// //             value: 0,
// //             children: [
// //                 { type: "leaf", name: "Nicolas", value: 98 },
// //                 { type: "leaf", name: "Malki", value: 22 },
// //                 { type: "leaf", name: "Djé", value: 12 },
// //             ],
// //         },
// //         {
// //             type: "node",
// //             name: "Team Sales",
// //             value: 0,
// //             children: [
// //                 { type: "leaf", name: "Mélanie", value: 45 },
// //                 { type: "leaf", name: "Einstein", value: 76 },
// //             ],
// //         },
// //     ],
// // };

// export const testCases2: NonEmptyArray<Tree> = [
//   {
//     type: "node",
//     name: "2张图",
//     value: 0,
//     children: [{ ...img }, { ...body }],
//   },

//   {
//     type: "node",
//     name: "3张图",
//     value: 0,
//     children: [{ ...img }, { ...body }, { ...title }],
//   },
//   {
//     type: "node",
//     name: "4张图-2组对称",
//     value: 0,
//     group: true,
//     children: [
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         children: [{ ...img }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         children: [{ ...img }, { ...body }],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "4张图-2组不对称",
//     value: 0,
//     // label: 'group',
//     children: [
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         children: [{ ...img }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         children: [{ ...body }, { ...img }],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "4张图-1大3小",
//     value: 0,
//     // label: 'group',
//     children: [
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         group: true,
//         children: [{ ...img }, { ...img }, { ...img }],
//       },
//       { ...title },
//     ],
//   },
//   {
//     type: "node",
//     name: "5张图-4小1大",
//     value: 0,
//     // label: 'group',
//     children: [{ ...img }, { ...img }, { ...img }, { ...img }, { ...body }],
//   },
//   {
//     type: "node",
//     name: "5张图-手动调换次序",
//     value: 0,
//     // label: 'group',
//     children: [{ ...img }, { ...img }, { ...body }, { ...img }, { ...img }],
//   },
//   {
//     type: "node",
//     name: "6张图-1+1+4",
//     value: 0,
//     // label: 'group',
//     children: [
//       {
//         type: "node",
//         name: "2张图",
//         value: 0,
//         children: [{ ...img }, { ...img }, { ...img }, { ...img }],
//       },
//       { ...title },
//       { ...body },
//     ],
//   },
//   {
//     type: "node",
//     name: "6张图-手动调换次序",
//     value: 0,
//     // label: 'group',
//     children: [
//       { ...title },
//       { ...body },
//       { ...body },
//       { ...title },
//       { ...title },
//       { ...body },
//     ],
//   },
//   {
//     type: "node",
//     name: "7张图",
//     value: 0,
//     // label: 'group',
//     children: [
//       { ...img },
//       { ...img },
//       { ...img },
//       { ...body },
//       { ...img },
//       { ...img },
//       { ...img },
//     ],
//   },
//   {
//     type: "node",
//     name: "8张图",
//     value: 0,
//     group: true,
//     children: [
//       { ...img },
//       { ...img },
//       { ...img },
//       { ...img },
//       { ...img },
//       { ...img },
//       { ...title },
//       { ...title },
//     ],
//   },
//   {
//     type: "node",
//     name: "8张图",
//     value: 0,
//     group: true,
//     children: [
//       { ...title },
//       { ...img },
//       {
//         type: "node",
//         name: "3张图1",
//         value: 0,
//         children: [{ ...img }, { ...body }, { ...body }],
//       },
//       {
//         type: "node",
//         name: "3张图2",
//         value: 0,
//         children: [{ ...img }, { ...body }, { ...body }],
//       },
//     ],
//   },
// ];

// export const testCases3: NonEmptyArray<Tree> = [
//   {
//     type: "node",
//     name: "三个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "Constellations in Culture" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Art" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     'Many famous works of art have included the constellations, such as Vincent van Gogh\'s "Starry Night."',
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Literature" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     'The constellations have also been a popular topic in literature, with books such as "The Fault in Our Stars" and "Percy Jackson and the Olympians" including them.',
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Movies" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Science fiction movies often include references to the constellations, such as the starship USS Enterprise in Star Trek.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "四个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "Navigating by the Stars" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "North Star" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "The bright star Polaris has long been used as a guide for navigation and is located in the constellation Ursa Minor.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Big Dipper" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This popular asterism is part of the larger constellation Ursa Major and can be used to find the North Star.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Orion's Belt" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "These three stars are easily recognizable and can be used to find other constellations such as Taurus and Canis Major.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件4",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Southern Cross" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This constellation can only be seen in the southern hemisphere and has been used for navigation by sailors for centuries.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "三个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         label: "image",
//         config: {
//           content: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2400/https://cdn.gamma.app/theme_images/daydream/daydream-1_9ac78165.jpg",
//         },
//         value: 30,
//       },
//       {
//         type: "leaf",
//         config: { content: "The Future of Constellations" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Constellation Naming Rights" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Some companies are now selling the rights to name a star or constellation, leading to controversy and ethical concerns.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Space Tourism" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "As space travel becomes more accessible, it's possible that people will one day be able to see the constellations up close and personal.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "New Discoveries" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "As technology advances, astronomers are able to discover new constellations and deep sky objects we never knew existed.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "三个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "Card Title" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "25%" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "3/4" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "50" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusa ntium eius modi tempora",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "2张图",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "Introduction to Constellations" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "leaf",
//         label: "paragraph",
//         config: {
//           content:
//             "Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.",
//         },
//         value: 80,
//       },
//       {
//         type: "leaf",
//         label: "image",
//         config: {
//           content: "https://wallpapercave.com/wp/4Uaz4Xs.jpg",
//         },
//         value: 30,
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "三个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "Deep Sky Objects" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Orion Nebula" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://images.telescope.com/get/ap73_9292008.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This nebula is located in the constellation Orion and can be seen with the naked eye on a clear night.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Andromeda Galaxy" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://galacticsights.ch/images/20160929_Andromeda_Galaxy_M31.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This spiral galaxy is one of the most distant objects visible to the naked eye and is located in the constellation Andromeda.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Sombrero Galaxy" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://apod.nasa.gov/apod/image/1105/sombrero_hst_3215.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This galaxy gets its name from its appearance, which resembles a sombrero hat, and is located in the constellation Virgo.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "node",
//     name: "六个组件",
//     value: 0,
//     children: [
//       {
//         type: "leaf",
//         config: { content: "The Zodiac Signs" },
//         value: 40,
//         label: "paragraph",
//       },
//       {
//         type: "node",
//         name: "group",
//         value: 0,
//         group: true,
//         children: [
//           {
//             type: "node",
//             name: "组件1",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Aries" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://tse2.mm.bing.net/th?id=OIP.YseQbCRLD09bE-8UeurnbwHaHa&pid=15.1",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This fire sign is represented by a ram and is known for its energy and passion.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件2",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Gemini" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://littleastronomy.com/wp-content/uploads/2019/03/gemini_cover.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Symbolized by the twins, this air sign is known for its intelligence and communication skills.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件3",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Scorpio" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://tse4.mm.bing.net/th?id=OIP.tm0j23ISxx99zhYWab0zxQHaHa&pid=15.1",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This water sign is represented by a scorpion and is known for its intensity and loyalty.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件4",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Scorpio" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://tse4.mm.bing.net/th?id=OIP.tm0j23ISxx99zhYWab0zxQHaHa&pid=15.1",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "This water sign is represented by a scorpion and is known for its intensity and loyalty.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件5",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Capricorn" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://telescopeobserver.com/wp-content/uploads/2019/10/capricornus-constellation-stars.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Symbolized by the goat, this earth sign is known for its ambition and determination.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//           {
//             type: "node",
//             name: "组件6",
//             value: 0,

//             children: [
//               {
//                 type: "leaf",
//                 config: { content: "Capricorn" },
//                 value: 40,
//                 label: "paragraph",
//               },
//               {
//                 type: "leaf",
//                 label: "image",
//                 config: {
//                   content: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://telescopeobserver.com/wp-content/uploads/2019/10/capricornus-constellation-stars.jpg",
//                 },
//                 value: 30,
//               },
//               {
//                 type: "leaf",
//                 label: "paragraph",
//                 config: {
//                   content:
//                     "Symbolized by the goat, this earth sign is known for its ambition and determination.",
//                 },
//                 value: 80,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// // const img = {
// //   type: "leaf",
// //   label: "image",
// //   config: {
// //     content: "https://image.lexica.art/full_webp/cf298d56-8e26-47e1-b3ef-58924d314716",
// //   },
// //   value: 30,
// // } as TreeLeaf;

// // const body = {
// //   type: "leaf",
// //   label: "paragraph",
// //   config: { content: testTexts.body1 },
// //   value: 80,
// // } as TreeLeaf;

// // const title = {
// //   type: "leaf",
// //   config: { content: testTexts.title2 },
// //   value: 40,
// //   label: "paragraph",
// // } as TreeLeaf;

// // const paragraph = {
// //   type: "leaf",
// //   config: { content: testTexts.title2 },
// //   value: 40,
// //   label: "paragraph",
// // } as TreeLeaf;
