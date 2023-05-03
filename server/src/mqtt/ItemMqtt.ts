

interface IItemMqttOptions {
    readonly id: number,
}



export class ItemMqtt {

    protected id: number;

    constructor(options: IItemMqttOptions){
        this.id = options.id;
    }

    public start(){
        
    }
}