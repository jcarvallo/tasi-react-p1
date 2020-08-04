import multer from "multer";
import {v4 as uuidv4} from 'uuid';
import path from "path";

const storage = multer.diskStorage({
  destination: "public",
  filename: (req, file, cd) => {
    cd(null, uuidv4() + path.extname(file.originalname));
  }
});

export default multer({storage});