var x = 9;


try{
    if(x ==5){
        console.log("you did it");
    } else {
        throw new Error("not 5");
    }
} catch (e){
    console.error(e.name);
    console.error(e.message);
} finally {
    console.log("made it");
}