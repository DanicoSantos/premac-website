import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        /* sidebar category */

        let categoryData = [
            {categoryLink: "", categoryName: ""}
        ];

        let categoryDataList = categoryData.map((val, i)=>{
            return(
                <li key={i}><a href={`${process.env.PUBLIC_URL}/${val.categoryLink}`}>{val.categoryName}</a></li>
            )
        });
        
        /* sidebar popular post */
    


        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Pesquisar</h3>
                        <div className="sidebar-search">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button><i className="ion-ios-search" /></button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Categorias</h3>
                        <ul className="sidebar-list">
                            {categoryDataList}
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Sidebar;