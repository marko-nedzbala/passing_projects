import { Repository } from "./repository";
//import { SqlRepository } from "./sql_repository";
import { ApiRepository } from "./repository";
import { OrmRepository } from "./orm_repository";

const repository: ApiRepository = new OrmRepository();
export default repository;
