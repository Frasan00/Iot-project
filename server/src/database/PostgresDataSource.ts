import { DataSource } from "typeorm";
import "reflect-metadata";

interface IPostgresDataSourceOptions {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly database: string;
    readonly entities: any[];
}
  
export class PostgresDataSource extends DataSource {
    constructor(options: IPostgresDataSourceOptions) {
    super({
        type: "postgres",
        ...options,
        synchronize: true,
        logging: true,
      });
    }
  }