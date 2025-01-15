import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ReactNode } from "react";
import { Button } from "..";

interface TabsProps {
    tab?: string[];
    vertical?: boolean;
    children?: ReactNode | ReactNode[];
    defaultindex?: number;
}

const Tabs = ({
    tab = [],
    vertical = false,
    children,
    defaultindex = 0
}: TabsProps) => {
    return (
        <TabGroup
            defaultIndex={defaultindex}
            as="div"
            className={`${vertical ? "flex gap-4" : ""}`}
        >
            <TabList
                className={`flex flex-wrap gap-2 ${vertical ? "flex-col w-fit" : "mb-4"
                    }`}
            >
                {tab &&
                    tab.map((item, index) => (
                        <Tab key={index} as="div" className={`outline-none`}>
                            {({ selected }) => (
                                <Button
                                    variant={selected ? "solid" : "tonal"}
                                    color={selected ? "lightGreen" : "#FFFFFF"}
                                >
                                    {item}
                                </Button>
                            )}
                        </Tab>
                    ))}
            </TabList>
            <TabPanels className="flex-1">
                {Array.isArray(children) && children.length > 0 ? (
                    children.map((child, index) => {
                        return <TabPanel key={index}>{child}</TabPanel>;
                    })
                ) : (
                    <TabPanel>{children}</TabPanel>
                )}
            </TabPanels>
        </TabGroup>
    );
};

export default Tabs;
