import { 
    PencilSquareIcon, 
    PhotoIcon, 
    Square2StackIcon, 
    ListBulletIcon,
    ClipboardIcon,
    CodeBracketSquareIcon
} from "@heroicons/react/24/solid"
import { ToolItem } from '../interfaces/tool';

const ToolCollection: ToolItem[] = [
    {
        type: 'text',
        component: {},
        icon: PencilSquareIcon
    },
    {
        type: 'image',
        component: {},
        icon: PhotoIcon
    },
    {
        type: 'shape',
        component: {},
        icon: Square2StackIcon
    },
    {
        type: 'list',
        component: {},
        icon: ListBulletIcon
    },
    {
        type: 'code',
        component: {},
        icon: CodeBracketSquareIcon
    },
    {
        type: 'skill',
        component: {},
        icon: ClipboardIcon
    }
];

export default ToolCollection;