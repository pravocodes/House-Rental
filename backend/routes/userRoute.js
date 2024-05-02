import express from "express";
import { addWhislistController, getPropertiesController, getReservationController, getTripsController } from "../controller/userController.js";




const router = express.Router();

router.get("/:userId/trips",getTripsController)
router.patch("/:userId/:listingId",addWhislistController)
router.get("/:userId/properties", getPropertiesController)
router.get("/:userId/reservations",getReservationController)


export default router;
