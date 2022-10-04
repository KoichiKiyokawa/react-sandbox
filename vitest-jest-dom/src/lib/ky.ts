import ky from "ky-universal"
import { API_ENDPOINT } from "~/env"

export const api = ky.extend({
  prefixUrl: API_ENDPOINT + "/",
})
