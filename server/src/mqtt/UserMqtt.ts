

interface IUserMqttOptions {
    readonly id: number,
}



export class UserMqtt {

    protected id: number;

    constructor(options: IUserMqttOptions){
        this.id = options.id;
    }

    public start(){
        
    }
}