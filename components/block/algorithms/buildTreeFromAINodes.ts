// 输入一个AINode，输出一个TreeNode

import { ElementType, ParagraphType } from "../elements";
import { AITreeLeaf, AITreeNode, TreeLeaf, TreeNode, isAITreeLeaf, isAITreeNode } from "./type";

export function AINodeToTreeNode(node: AITreeNode): TreeNode {
    return {
        type: "node",
        value: 0,
        name: node.name ?? "",
        group: node.group ?? false,
        // TODO: 要不要把标题放到第一个？
        children: [...node.children.filter(isAITreeLeaf).map(AILeafToTreeLeaf),
        ...node.children.filter(isAITreeNode).map(AINodeToTreeNode)],
    };
}

export function AILeafToTreeLeaf(leaf: AITreeLeaf): TreeLeaf {
    const label = leaf.label ?? 'normalText';
    if (["paragraph", "image", 'icon', 'chart', 'shape', 'video', 'map', 'table'].includes(label)) {
    return {
        type: "leaf",
        value: 0,
        label: label as ElementType,
        config: {
            content: leaf.content,
        },
    };
} else if (['title', 'headline', 'subheadline', 'normalText', 'link'].includes(label)) {
        return {
            type: "leaf",
            value: 0,
            label: "paragraph",
            config: {
                paragraphType: label as ParagraphType,
                content: leaf.content,
            },
        };
    } else {
        return {
            type: "leaf",
            value: 0,
            label: "paragraph",
            config: {
                paragraphType: "normalText",
                content: leaf.content,
            },
        };
    }
}