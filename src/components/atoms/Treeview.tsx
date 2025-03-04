import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaChevronDown } from 'react-icons/fa';
import { PiFile, PiFolder } from 'react-icons/pi';
import TerminalCard from '../molecules/TerminalCard';

const Treeview = () => {
    const [treeview, setTreeview] = useState<string[]>(['images']);
    const [pagesSubMenu, setPagesSubMenu] = useState(false);

    const toggleTreeview = (name: string) => {
        if (treeview.includes(name)) {
            setTreeview((value) => value.filter((d) => d !== name));
        } else {
            setTreeview([...treeview, name]);
        }
    };

    return (
        <TerminalCard title='Treeview'>
            <ul className="font-semibold text-white">
                <li className="py-[5px]">
                    <button type="button" className="flex items-center gap-2" onClick={() => toggleTreeview('css')}>
                        <FaChevronDown className={`transition-transform duration-300 ${treeview.includes('css') ? 'rotate-180' : ''}`} />
                        <PiFolder />
                        CSS
                    </button>
                    <AnimateHeight duration={300} height={treeview.includes('css') ? 'auto' : 0}>
                        <ul className="pl-14">
                            <li className="py-[5px] flex items-center gap-2">
                                <PiFile />
                                style.css
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px]">
                    <button type="button" className="flex items-center gap-2" onClick={() => toggleTreeview('images')}>
                        <FaChevronDown className={`transition-transform duration-300 ${treeview.includes('images') ? 'rotate-180' : ''}`} />
                        <PiFolder />
                        Images
                    </button>
                    <AnimateHeight duration={300} height={treeview.includes('images') ? 'auto' : 0}>
                        <ul className="pl-14">
                            <li className="py-[5px] flex items-center gap-2">
                                <PiFile />
                                profile-16.jpeg
                            </li>
                            <li className="py-[5px] flex items-center gap-2">
                                <PiFile />
                                background.png
                            </li>
                            <li className="py-[5px] flex items-center gap-2">
                                <PiFile />
                                gallery.jpg
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px]">
                    <button type="button" className="flex items-center gap-2" onClick={() => toggleTreeview('html')}>
                        <FaChevronDown className={`transition-transform duration-300 ${treeview.includes('html') ? 'rotate-180' : ''}`} />
                        <PiFolder />
                        HTML
                    </button>
                    <AnimateHeight duration={300} height={treeview.includes('html') ? 'auto' : 0}>
                        <ul className="pl-14">
                            <li className="py-[5px]">
                                <button type="button" className="flex items-center gap-2" onClick={() => setPagesSubMenu(!pagesSubMenu)}>
                                    <FaChevronDown className={`transition-transform duration-300 ${pagesSubMenu ? 'rotate-180' : ''}`} />
                                    <PiFolder />
                                    PAGES
                                </button>
                                <AnimateHeight duration={300} height={pagesSubMenu ? 'auto' : 0}>
                                    <ul className="pl-14">
                                        <li className="py-[5px] flex items-center gap-2">
                                            <PiFile />
                                            file name
                                        </li>
                                        <li className="py-[5px] flex items-center gap-2">
                                            <PiFile />
                                            file name
                                        </li>
                                        <li className="py-[5px] flex items-center gap-2">
                                            <PiFile />
                                            file name
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>
                            <li className="py-[5px] pl-8 flex items-center gap-2">
                                <PiFile />
                                file name
                            </li>
                            <li className="py-[5px] pl-8 flex items-center gap-2">
                                <PiFile />
                                file name
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] pl-7 flex items-center gap-2">
                    <PiFile />
                    index.html
                </li>
                <li className="py-[5px] pl-7 flex items-center gap-2">
                    <PiFile />
                    components.html
                </li>
            </ul>
        </TerminalCard>
    );
};

export default Treeview;
