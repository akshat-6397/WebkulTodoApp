import React from "react";
import CrossIcon from "../../src/CrossIcon.jpg";

const ListComponent = ({list, handleDeleteButton}) => {
    return (
        <div className="list-component">
            <p><label>{list.name} </label><img onClick={() => handleDeleteButton(list.id)}src={CrossIcon} alt="image" /></p>
        </div>
    );
};
export default ListComponent;