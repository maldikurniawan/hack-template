import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaChevronRight } from 'react-icons/fa';
import { PiFile, PiFolder } from 'react-icons/pi';

interface TreeNode {
    name: string;
    type: 'folder' | 'file';
    children?: TreeNode[];
}

interface TreeviewProps {
    data: TreeNode[];
}

const TreeItem = ({ node }: { node: TreeNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (node.type === 'folder') {
        return (
            <li className="py-[5px]">
                <button type="button" className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                    <FaChevronRight className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    <PiFolder />
                    {node.name}
                </button>
                <AnimateHeight duration={300} height={isOpen ? 'auto' : 0}>
                    <ul className="pl-6">
                        {node.children?.map((child, index) => (
                            <TreeItem key={index} node={child} />
                        ))}
                    </ul>
                </AnimateHeight>
            </li>
        );
    }

    return (
        <li className="py-[5px] flex items-center gap-2 pl-7">
            <PiFile />
            {node.name}
        </li>
    );
};

const Treeview = ({ data }: TreeviewProps) => {
    return (
        <ul className="font-semibold text-white">
            {data.map((node, index) => (
                <TreeItem key={index} node={node} />
            ))}
        </ul>
    );
};

export default Treeview;
