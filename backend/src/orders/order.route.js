import express from "express"
import { createOrder, getOrderByEmail } from "./order.controller.js";

const router = express.Router();

// create order endpoint
router.post("/",createOrder)

// get orders by email
router.get("/email/:email",getOrderByEmail)


export default router;