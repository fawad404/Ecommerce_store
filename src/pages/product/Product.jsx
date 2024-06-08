import './product.css'
import {Link, useLocation} from 'react-router-dom'
import {Publish} from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../RequestMethods';
import { useState } from 'react';
export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);
    const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
    );

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );
  useEffect(() => {
    const getStats = async () => {
        try{
            const res = await userRequest.get("orders/income?pid=" + productId);
            res.data.map((item) =>
              setPStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], Sales: item.total },
              ])
            );
        }catch(err){
            console.log("axios error" + err);
        }
    };
    getStats();
  }, [productId, MONTHS])
    return (
  
            <div className='product'>
            <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newproduct'>
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        
                        <img src={product.img} 
                        alt="" 
                        className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5132</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" 
                        placeholder={product.title}
                        name='title'
                        />
                        <label>Product Description</label>
                        <input type="text" 
                        placeholder={product.desc}
                        name='title'
                        />
                        <label>Price</label>
                        <input type="text" 
                        placeholder={product.price}
                        name='title'
                        />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <div className="top">
                            <img src={product.img}
                            alt="" 
                            style={{marginLeft: "25px"}}
                            className="productUploadImg" 
                            />
                            </div>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id='file' 
                            style={{display: "none"}}
                            
                            />
                        </div>
                        <button className="productButton">Update</button>
                       
                    </div>
                </form>
            </div>
        </div>
    )
}


