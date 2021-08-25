import express from  'express';
import  resturantController from "../controllers/resturantController";

const router = express.Router();

router.get("/listResturant", resturantController.listResturant);
router.post("/registerResturant", resturantController.registerResturant);
router.put("/updateResturant", resturantController.updateResturant);


router.get("/resturantProductsList", resturantController.resturantProductsList);
router.post("/createResturantProduct", resturantController.createResturantProduct);
router.put("/changeResturantProduct", resturantController.changeResturantProduct);
router.delete("/deleteResturantProduct", resturantController.deleteResturantProduct);






export default  router;