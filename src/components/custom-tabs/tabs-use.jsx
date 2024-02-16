import CustomTabs from "./tabs";
import './styles.css';

const RandomComponent = () => {
    return (
        <div>This is from the Random component</div>
    )
};

const TabsUse = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is the content of Tab 1</div>,
        },
        {
            label: 'Tab 2',
            content: <div>This is the content of Tab 2</div>,
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />,
        },
        {
            label: 'Tab 4',
            content: <div>This is the content of Tab 4</div>,
        }
    ]

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    };

    return (
        <CustomTabs tabsContent={tabs} onChange={handleChange}/>
    )
};

export default TabsUse;