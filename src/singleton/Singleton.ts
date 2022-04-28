class Store{
    private static instance: Store;
    
    private data: any[] = [];

    public static getInstance(): Store {
        if(!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

    public pushData(newData: any) {
       this.data.push(newData);
    }

    public getData() {
        return this.data;
    }
}

function myReactApp() {
    const instancia1 = Store.getInstance();

    instancia1.pushData(1);
    console.log(instancia1.getData());

    const instancia2 = Store.getInstance();

    console.log(instancia1 === instancia2);

}

myReactApp();