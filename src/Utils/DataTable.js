import { useEffect, useState } from 'react';
import './Utils.css';
import arrow from '../Assests/Up.svg';

const DataTable = ({ columns, rows, title,pagination }) => {
    const [currentPage, setcurrentPage] = useState(1);
    const [rowArray, setrowArray] = useState(rows);
    useEffect(() => {
      setrowArray(rows)
    }, [rows])
    
    const onHandleSortUp = ((item) => {
        let tempArry = [...rowArray].sort((a, b) => (a[item] > b[item] ? -1 : (a[item] < b[item] ? 1 : 0)));
        setrowArray(tempArry);
    })
    const onHandleSortDown = ((item) => {
        let tempArry = [...rowArray].sort((a, b) => (a[item] < b[item] ? -1 : (a[item] > b[item] ? 1 : 0)));
        setrowArray(tempArry);
    })
    return <div className="table">
        <div className='title'>{title}</div>
        <div>
            <table style={{ width: '100%', padding: '1rem' }} >
                <tbody>
                    <tr >
                        <th style={{ padding: ".5rem", textAlign:'center'}} id={'index'}>S.No </th>
                    {columns?.map((column, i) => {
                        return <th style={{ padding: ".5rem", width: `${100 / columns.length}%`, textAlign: 'center' }} id={column.value} key={i}>{column.name} <span onClick={() => { onHandleSortUp(column.value) }}><img src={arrow} alt="up"style={ {width:'.7rem', margin:" 0 4px"}}/></span><span onClick={()=>{onHandleSortDown(column.value)}}><img src={arrow} alt="up"style={ {width:'.7rem', transform:"rotate(180deg)"}}/></span></th>
                    })}
                </tr>
                    {rowArray.length!==0?rowArray.slice(pagination*(currentPage-1),(currentPage)*pagination).map((row, index) => {
                    return <tr key={index}>
                        <td>{(currentPage-1)*pagination+(index+1) }</td>
                        {columns?.map((col,i) => {
                            return Object.keys(col)?.length === 3 ? <td key={i.toString()} >{col.render(row)}</td> : <td  key={i.toString()}>{row[`${col.value}`]}</td>
                    })}</tr>
                }):<></>}
                </tbody>
                
            </table>
            {rowArray.length === 0 && <div style={{
                textAlign: "center",
                padding: '1rem',
                border: "1px solid #000",
                borderTop:"nones"
                
                }}>
                No Data Available </div>}
            <div className='pagination'>
                <span onClick={() => { currentPage > 1 && setcurrentPage(currentPage - 1) }}>Prev</span>
                <span>{currentPage }</span>
                <span onClick={()=>{currentPage<(rowArray?.length/pagination) && setcurrentPage(currentPage+1)}}>Next</span>
            </div>
        </div>

    </div>
}
export default DataTable;