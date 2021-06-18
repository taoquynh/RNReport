import { Issue } from "./Issue";
import { User } from "./User";

interface Result {
  code: number;
  message: string;
  data: User | [Issue];
}

export { Result };
