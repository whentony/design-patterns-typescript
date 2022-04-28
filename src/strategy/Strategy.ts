interface Strategy {
    login(credentials: any): boolean;
}

class Passport {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public login(credentials: any) {
        this.strategy.login(credentials);
    }

}

class JWTStrategy implements Strategy {
    login(credentials: any): boolean {
        console.log("Realizando login com token JWT");
        return true;
    }    
}

class FacebookStrategy implements Strategy  {
    login(credentials: any): boolean {
        console.log("Realizando login com Facebook Auth2");
        return true;
    }
}

const strategia1 = new Passport(new JWTStrategy());

strategia1.login({});

const strategia2 = new Passport(new FacebookStrategy());

strategia2.login({});