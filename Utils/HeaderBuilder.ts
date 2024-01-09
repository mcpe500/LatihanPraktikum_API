import { LocalRelated } from "../Contracts/enum/LocalRelated.enum";
import { getKeyFromLocalStorage } from "../Services/LocalStorageService";

class HeaderBuilder {
  private headers: Record<string, string>;

  constructor() {
    this.headers = {};
    this.addHeader("Content-Type", `application/json`);
  }
  auth() {
    const token = getKeyFromLocalStorage(LocalRelated.AUTH_TOKEN_KEY_NAME);
    if (token) this.addHeader("Authorization", `Bearer ${token}`);
  }
  addHeader(key: string, value: string) {
    this.headers[key] = value;
  }
}
