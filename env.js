
import { config } from "dotenv";

export const env = () => {

    config({ path: './config/.env' })

}