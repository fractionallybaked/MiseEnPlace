import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {
                pageNumbers.map(number=>{
                    return(
                        <li key={number} className="page-item">
                            <a onClick={()=>paginate(number)}  className="page-link">{number}</a>
                        </li>
                    )
                })
            }
                
            </ul>
        </div>
    )
}

export default Pagination;