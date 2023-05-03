import mqtt from "mqtt";

const host = process.env.MQTT_HOST || "";
const port = process.env.MQTT_PORT || "";

if(host === "" || port === "") console.log("Mqtt env variables are missing! ");

function connectMqtt(){
    const client = mqtt.connect({ host: host, port: parseInt(port) });
    client.on("error", (err: any) => console.log("A client error occurred", err));
    client.on("close", () => console.log("Client disconnected"));
    return client;
};

export default connectMqtt;