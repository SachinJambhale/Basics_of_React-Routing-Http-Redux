const router = require("express").Router();
const { createUser, updateUser, deleteUser, getOneUser, getAllUsers } = require("../controllers/user.controller");


const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
router.post("/", upload.single("avatar"), createUser);

// router.post("/", createUser);
router.put("/:id", upload.single("avatar"), updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getOneUser);
router.get("/", getAllUsers);

module.exports = router;