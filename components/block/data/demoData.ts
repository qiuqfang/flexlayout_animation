import { AINodeToTreeNode } from '../algorithms/buildTreeFromAINodes';
import {NonEmptyArray, AITreeLeaf, AITreeNode, TreeNode, Tree} from '../algorithms/type';
import { calculateImageLeaf, calculateLeaf, mergeGroup, recalculate, resetNodeToZero } from '../algorithms/valueRecalculate';
import { PHI } from './utils';
import * as d3 from "d3";
import { title1 } from '../algorithms/TreemapTitle';
import { buildLayout } from '../algorithms/buildSplitLinesFromNodes';
import { Layout } from "../index.d";

export const demoData1: NonEmptyArray<AITreeNode> = [
    {
        name: '三个组件',
        children: [
            {
                content: 'Constellations in Culture',
                label: 'title',
            },
            {
                group: true,
                children: [
                    {
                        children: [
                            {
                                content: 'Art',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Many famous works of art have included the constellations, such as Vincent van Gogh\'s "Starry Night."',
                            },
                        ],
                    },
                    {
                        children: [
                            {
                                content: 'Literature',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'The constellations have also been a popular topic in literature, with books such as "The Fault in Our Stars" and "Percy Jackson and the Olympians" including them.',
                            },
                        ],
                    },
                    {
                        children: [
                            {
                                content: 'Movies',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Science fiction movies often include references to the constellations, such as the starship USS Enterprise in Star Trek.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '四个组件',
        children: [
            {
                content: 'Navigating by the Stars',
                label: 'title',
            },
            {
                group: true,
                children: [
                    {

                        children: [
                            {
                                content: 'North Star',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'The bright star Polaris has long been used as a guide for navigation and is located in the constellation Ursa Minor.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Big Dipper',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'This popular asterism is part of the larger constellation Ursa Major and can be used to find the North Star.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: "Orion's Belt",
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'These three stars are easily recognizable and can be used to find other constellations such as Taurus and Canis Major.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Southern Cross',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'This constellation can only be seen in the southern hemisphere and has been used for navigation by sailors for centuries.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '三个组件',
        children: [
            {
                content: 'The Future of Constellations',
                label: 'title',
            },
            {
                label: 'image',
                content:
                    'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2400/https://cdn.gamma.app/theme_images/daydream/daydream-1_9ac78165.jpg',
            },
            {
                group: true,
                children: [
                    {

                        children: [
                            {
                                content: 'Constellation Naming Rights',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Some companies are now selling the rights to name a star or constellation, leading to controversy and ethical concerns.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Space Tourism',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: "As space travel becomes more accessible, it's possible that people will one day be able to see the constellations up close and personal.",
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'New Discoveries',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'As technology advances, astronomers are able to discover new constellations and deep sky objects we never knew existed.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '三个组件',
        children: [
            {
                content: 'Card Title',
                label: 'title',
            },
            {
                group: true,
                children: [
                    {

                        children: [
                            {
                                content: '25%',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: '3/4',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: '50',
                                label: 'headline',
                            },
                            {
                                label: 'normalText',
                                content: 'Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusa ntium eius modi tempora',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '2张图',
        children: [
            {
                content: 'Introduction to Constellations',
                label: 'title',
            },
            {
                label: 'normalText',
                content:
                    "Have you ever gazed upon the starry night sky and wondered about the patterns of stars? These patterns, called constellations, have captured our imaginations for centuries and still do to this day. Let's explore some of the most fascinating ones.",
            },
            {
                label: 'image',
                content: 'https://wallpapercave.com/wp/4Uaz4Xs.jpg',
            },
        ],
    },
    {
        name: '三个组件',
        children: [
            {
                content: 'Deep Sky Objects',
                label: 'title',
            },
            {
                group: true,
                children: [
                    {
                        children: [
                            {
                                content: 'Orion Nebula',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://images.telescope.com/get/ap73_9292008.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'This nebula is located in the constellation Orion and can be seen with the naked eye on a clear night.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Andromeda Galaxy',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://galacticsights.ch/images/20160929_Andromeda_Galaxy_M31.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'This spiral galaxy is one of the most distant objects visible to the naked eye and is located in the constellation Andromeda.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Sombrero Galaxy',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://apod.nasa.gov/apod/image/1105/sombrero_hst_3215.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'This galaxy gets its name from its appearance, which resembles a sombrero hat, and is located in the constellation Virgo.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: '六个组件',
        children: [
            {
                content: 'The Zodiac Signs',
                label: 'title',
            },
            {
                group: true,
                children: [
                    {

                        children: [
                            {
                                content: 'Aries',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://tse2.mm.bing.net/th?id=OIP.YseQbCRLD09bE-8UeurnbwHaHa&pid=15.1',
                            },
                            {
                                label: 'normalText',
                                content: 'This fire sign is represented by a ram and is known for its energy and passion.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Gemini',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://littleastronomy.com/wp-content/uploads/2019/03/gemini_cover.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'Symbolized by the twins, this air sign is known for its intelligence and communication skills.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Scorpio',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://tse4.mm.bing.net/th?id=OIP.tm0j23ISxx99zhYWab0zxQHaHa&pid=15.1',
                            },
                            {
                                label: 'normalText',
                                content: 'This water sign is represented by a scorpion and is known for its intensity and loyalty.',
                            },
                        ],
                    },
                    {

                        children: [
                            {
                                content: 'Scorpio',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://tse4.mm.bing.net/th?id=OIP.tm0j23ISxx99zhYWab0zxQHaHa&pid=15.1',
                            },
                            {
                                label: 'normalText',
                                content: 'This water sign is represented by a scorpion and is known for its intensity and loyalty.',
                            },
                        ],
                    },
                    {
                        name: '组件5',
                        children: [
                            {
                                content: 'Capricorn',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://telescopeobserver.com/wp-content/uploads/2019/10/capricornus-constellation-stars.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'Symbolized by the goat, this earth sign is known for its ambition and determination.',
                            },
                        ],
                    },
                    {
                        name: '组件6',
                        children: [
                            {
                                content: 'Capricorn',
                                label: 'headline',
                            },
                            {
                                label: 'image',
                                content: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://telescopeobserver.com/wp-content/uploads/2019/10/capricornus-constellation-stars.jpg',
                            },
                            {
                                label: 'normalText',
                                content: 'Symbolized by the goat, this earth sign is known for its ambition and determination.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export const demoTestCases1 = demoData1.map((data) => AINodeToTreeNode(data));

console.log(demoTestCases1);

function toLayout(treeNode: TreeNode): Layout {
    // 计算文本节点大小
    calculateLeaf(treeNode);

    // 合并元素为组件
    mergeGroup(treeNode);

    // 重新计算每个元素的大小
    recalculate(treeNode);
    // console.log('toLayout 1', JSON.stringify(treeNode));

    const totalValue = treeNode.value;
    const imageRatio = totalValue > 1800 ? 0.2 : totalValue > 1000 ? 1 / PHI : PHI;

    calculateImageLeaf(treeNode, imageRatio);

    // d3 需要所有非叶结点 value 为 0, 否则会按照实际大小排序而不是比例排序
    resetNodeToZero(treeNode);
    // console.log('toLayout 2', JSON.stringify(treeNode));

    const hierarchy = d3.hierarchy(treeNode as Tree).sum((d) => d.value);

    const treeGenerator = d3
    .treemap<Tree>()
    .size([1600, 900]) // 需要改为参数
    .padding(0)
    .tile(title1);
  const finalLayout = buildLayout(treeGenerator(hierarchy));
//   console.log('finalLayout', JSON.stringify(finalLayout));
  return finalLayout;

}

// export const demoLayout1 = [demoTestCases1[0]].map(toLayout);
export const demoLayout1 = demoTestCases1.map(toLayout);

