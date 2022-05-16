import { useState } from "react";
import DataTable from "../../../Utils/DataTable";
// import Input from "../../../Utils/Input";

let columns = [{
    name: "Product Name",
    value:"name"
},{
    name: " Price",
    value:"price"
},{
    name: "Category ",
    value:"cat"
},{
    name: "Brand ",
    value:"brand"
    }]
let rows = [{
    name: "ASCX",
    price: "10",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "SDG",
    price: "23",
    cat: "SG",
    brand:"SAG"
},{
    name: "DSABG",
    price: "34",
    cat: "ADVSDVS",
    brand:"ARVSC"
},{
    name: "ASCX",
    price: "56",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "FSB",
    price: "12",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "SFBDF",
    price: "66",
    cat: "ADS",
    brand:"DSVZ"
},{
    name: "ASCX",
    price: "22",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "SDZV",
    price: "00",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "AGRTBF",
    price: "11",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "ASCX",
    price: "23",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "ASCX",
    price: "55",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "ASCX",
    price: "10",
    cat: "JUJ",
    brand:"ASEC"
},{
    name: "ASCX",
    price: "78",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "QQQ",
    price: "10",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "AAA",
    price: "10",
    cat: "ADS",
    brand:"ASEC"
},{
    name: "WOW",
    price: "10",
    cat: "ADS",
    brand:"ASEC"
}]
function Products() {
    // const [search, setsearch] = useState("");
    const [rowArr, setrowArr] = useState(rows)
    const handleSearch = (e) => {
        let search = e.target.value;
        setrowArr(rows.filter(item=>(item.name.includes(search)))) 
    }
    return (<div>Products
        <div style={{ width: '20rem', margin: "1rem" }}>
            <input type={'text'} style={{padding:".5rem 1rem",outline:"none"}} onChange={(e)=>{handleSearch(e)}} placeholder={'Filtering Products'} />
</div>
        <div>
            <DataTable columns={columns} rows={rowArr} pagination={10} title="List of Latest User"/>
        </div>
    </div> );
}

export default Products;