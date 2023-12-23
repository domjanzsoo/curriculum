import { 
    PencilSquareIcon, 
    PhotoIcon, 
    Square2StackIcon, 
    ListBulletIcon,
    ClipboardIcon,
    CodeBracketSquareIcon
} from "@heroicons/react/24/solid"



interface ToolItem {
    title: string,
    component: object,
    icon: object
}

const ToolCollection: ToolItem[] = [
    {
        title: 'Text',
        component: {},
        icon: PencilSquareIcon
    },
    {
        title: 'Image',
        component: {},
        icon: PhotoIcon
    },
    {
        title: 'Shapes',
        component: {},
        icon: Square2StackIcon
    },
    {
        title: 'List',
        component: {},
        icon: ListBulletIcon
    },
    {
        title: 'Code',
        component: {},
        icon: CodeBracketSquareIcon
    },
    {
        title: 'Skill',
        component: {},
        icon: ClipboardIcon
    }
];

export default ToolCollection;