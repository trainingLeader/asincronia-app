/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]).then( renderValue );
    
}


const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Promesa Lenta') ;
    }, 2000 );
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Promesa media') ;
    }, 1500 );
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
       resolve('Promesa rapida') ;
    }, 1000 );
});
