

sayhello(3);

function sayhello(n){
    if(n==0){
        return;
    }
    console.log(n);
    sayhello(n-1);
}