import * as React from 'react';
import { TextElm } from '../../interfaces';

const fontTypes = [
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT'
];

interface ComponentProps {
    textElm?: TextElm
}


const TextEditor: React.FC<ComponentProps> = ({ textElm }): JSX.Element => {
    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            <div className="col-span-1 text-center">
                <select id="size" name="fontSize" autoComplete="size" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-sm leading-6">
                <option value="5">5px</option>
                <option value="6">6px</option>
                <option value="7">7px</option>
                <option value="8">8px</option>
                <option value="9">9px</option>
                <option value="10">10px</option>
                <option value="11">11px</option>
                <option value="12">12px</option>
                <option value="14">14px</option>
                <option value="16">16px</option>
                <option value="18">18px</option>
                <option value="20">20px</option>
                <option value="22">22px</option>
                <option value="24">24px</option>
                <option value="26">26px</option>
                <option value="28">28px</option>
                <option value="30">30px</option>
                <option value="32">32px</option>
                <option value="34">34px</option>
                <option value="36">36px</option>
                <option value="38">38px</option>
                <option value="40">40px</option>
                <option value="42">42px</option>
                </select>
            </div>
            <div className="col-span-1 text-center">
                <select id="style" name="fontStyle" autoComplete="style" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-sm leading-6">
                    <option>Style</option>
                    <option value="bold">Bold</option>
                    <option value="italic">Italic</option>
                    <option value="underline">Underline</option>
                </select>
            </div>
            <div className="col-span-1">
                <select id="fontFamily" name="fontFamily" autoComplete="style" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-sm leading-6">
                    {
                        fontTypes.map((fontType, index) => <option key={ index } value={ fontType.toLocaleLowerCase().replace(/\s+/g, '') }> { fontType } </option>)
                    }
                </select>
            </div>
        </div>
    )
};

export default TextEditor;