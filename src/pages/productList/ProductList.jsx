import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from "@mui/icons-material"
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '../../redux/apiCalls'
export default function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state=>state.product.products);
    function goToProduct(params){
        navigate("/product/" + params.row._id);
    }
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);
    const handleDelete = (id)=>{
      deleteProduct(id , dispatch);
    };

    //console.log(movies);

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', 
        headerName: 'Product', 
        width: 200, 
        renderCell: (params)=>{
            return (
                <div className='productListItem'>
                    <img className='productListImg' src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'inStock', headerName: 'Stock', width: 120 },
        { field: 'price', headerName: 'Price', width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>

                    <button onClick={()=>goToProduct(params)} className="productListEdit">Edit</button>
                    
                     <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                     </>
                )
            }
        },
      ];
    return (
        <div className='productList'>
            <DataGrid
        rows={products}
        disableRowSelectionOnClick
        columns={columns}
        getRowId= {(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
      />
        </div>
    )
}


