import { TerminalCard, Treeview } from "@/components"

interface TreeNode {
    name: string;
    type: 'folder' | 'file';
    children?: TreeNode[];
}

const TreeviewPage = () => {
    const fileTree: TreeNode[] = [
        {
            name: 'CSS',
            type: 'folder',
            children: [{ name: 'style.css', type: 'file' }]
        },
        {
            name: 'Images',
            type: 'folder',
            children: [
                { name: 'profile-16.jpeg', type: 'file' },
                { name: 'background.png', type: 'file' },
                { name: 'gallery.jpg', type: 'file' }
            ]
        },
        {
            name: 'SRC',
            type: 'folder',
            children: [
                {
                    name: 'Pages',
                    type: 'folder',
                    children: [
                        { name: 'home.html', type: 'file' },
                        { name: 'about.html', type: 'file' },
                        { name: 'contact.html', type: 'file' }
                    ]
                },
                { name: 'dashboard.html', type: 'file' },
                { name: 'settings.html', type: 'file' }
            ]
        },
        { name: 'index.html', type: 'file' },
        { name: 'components.html', type: 'file' },
    ];

    return (
        <TerminalCard title="Treeview">
            <Treeview data={fileTree} />
        </TerminalCard>
    )
}

export default TreeviewPage