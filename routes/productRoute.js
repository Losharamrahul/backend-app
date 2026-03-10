import {getproducts,addproductForm,addproduct,deleteproduct,editproductForm,saveproduct } from "../controllers/productContoller.js";
import express from "express";
const productRouter=express.Router();
productRouter.get("/",getproducts);
productRouter.get("/add", addproductForm);
productRouter.post("/add", addproduct);
productRouter.get("/:id/delete",deleteproduct);
productRouter.get("/:id/edit",editproductForm);
productRouter.post("/:id/save",saveproduct);

  
export default productRouter;