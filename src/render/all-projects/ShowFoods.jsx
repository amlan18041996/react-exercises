import React from 'react'
import BaseDropdown from '../../components/BaseDropdown'
import { foods } from '../../utilities/mock';

const ShowFoods = () => {
    const [store, setStore] = React.useState([]);
    const colorCombination = { 0: "blue", 1: "emerald", 2: "indigo" };

    React.useEffect(() => {
        setStore((prev) => [
            ...prev,
            { name: "Foods", lists: foods, title: "Category" },
        ]);
    }, []);

    const renderChild = (option) => {
        let clonedList = JSON.parse(JSON.stringify(store));
        const findList = Object.keys(option).filter((value) => typeof option[value] == "object");
        const checkExistingFoodList = store.findIndex((el) => el.title === findList[0]);
        if (checkExistingFoodList > 0) {
            clonedList.length = checkExistingFoodList;
            clonedList[checkExistingFoodList] = { name: option.name, lists: option[findList[0]], title: findList[0] };
        } else clonedList = [...clonedList, { name: option.name, lists: option[findList[0]], title: findList[0] }];
        if (findList.length > 0 && typeof option[findList[0]] === "object" && option[findList[0]].length > 0) setStore(clonedList);
    };
    return (
        <div className="App p-8 space-y-6">
            <h1 className="text-xl font-bold text-center mb-4">First Exercise</h1>
            <div className="flex gap-6">
                {store.map((element, index) => {
                    return (
                        <div className="space-y-1" key={index}>
                            <div className="text-sm tracking-normal text-gray-600 font-semibold font-mono">
                                All {element.name}
                            </div>
                            <BaseDropdown
                                bgColor={colorCombination[index]}
                                callback={renderChild}
                                options={element.lists}
                                title={`Choose ${element.title}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
 
export default ShowFoods;