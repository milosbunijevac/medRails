import React from 'react';

class SideCommentsView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var localStorageTest = JSON.parse(localStorage.getItem('defaultUser'))
        var componentToRender = '';
        if(localStorageTest){
            componentToRender = localStorageTest;
        }

        return (
            <div className="sideCommentView">
                {localStorageTest.map((value, index) => {
                    return (
                        <div key={index}>
                            <h6>{value}</h6>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SideCommentsView;