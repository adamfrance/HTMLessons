function bouclewhile (){
    for (i = 0; i < 100; i++) {
        if ( i % 3 == 0) {
            console.log('Fizz')
      } else if ( i % 5 == 0) {
            console.log('BUzz')
            }
        else if ( i % 3 == 0 && i % 5 == 0)  {
                    console.log('FizzBuzz')
                }
            else { console.log(i)}
    }
    }

bouclewhile();