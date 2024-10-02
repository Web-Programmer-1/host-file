

class dog{
    constructor(sound){
        this.sound = sound;
    }
    doggyMethod(){
        const doggyBehaviour = `My cute doggy animals sound are : ${this.sound}`;
        console.log(doggyBehaviour);
    }
}
// const dog1 = new dog(`Rex Sound`);
// dog1.doggyMethod();


class cat extends dog{
    constructor(weight, sound){
     super(sound)
     this.weight = weight

    }

    catMethod(){
        const catBheviour  = `My favourite pussy cat are sound : ${this.weight}`
        console.log(catBheviour);
    }


}



const cat_one = new cat("rex sound", " barks sound")


cat_one.doggyMethod()

cat_one.catMethod()

