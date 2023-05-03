import { MqttClient } from "mqtt";
import { UserMqtt } from "./UserMqtt";

interface IServerMqttOptions {
    clientMqtt: MqttClient,
    userList: UserMqtt[]
}

export class ServerMqtt {

    protected clientMqtt: MqttClient;
    protected userList: UserMqtt[];
    protected dispatcher: any;

    constructor(options: IServerMqttOptions){
        this.clientMqtt = options.clientMqtt;
        this.userList = options.userList;
    }

    public start(){
        // init server
        this.initialize();
        console.log("Mqtt server initialized");
    }

    public initialize(){

    }
}