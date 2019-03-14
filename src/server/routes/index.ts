import * as express from "express";

import authRouter from "./auth";
import apiRouter from "./api";
import paymentRouter from "./payment";
import mailGunRouter from "./mailgun";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/api", apiRouter);
router.use("/payment", paymentRouter)
router.use("/mail", mailGunRouter)

export default router;
