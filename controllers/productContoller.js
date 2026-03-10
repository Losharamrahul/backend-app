import productModel from "../models/productModel.js";

const getproducts=async(req,res)=>{
    const products=await productModel.find();
    res.render("products/index",{products});
};
const addproduct=async(req,res)=>{
    const product=req.body;
     await productModel.create(product);
    res.redirect("/products");
}
const addproductForm=(req,res)=>{
    res.render("products/add");
}
const deleteproduct=async(req,res)=>{
    const id=req.params.id;
    await productModel.findByIdAndDelete(id);
    res.redirect("/products");
}
const editproductForm=async(req,res)=>{ 
    const id=req.params.id;
    const product=await productModel.findOne({_id:id});
    res.render("products/edit",{product});
}

const saveproduct=async(req,res)=>{
    const id=req.params.id;
    await productModel.findByIdAndUpdate(id,req.body);
    res.redirect("/products")
}


export{getproducts,addproduct,addproductForm,deleteproduct,editproductForm,saveproduct};