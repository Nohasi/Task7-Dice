export const getCoinflipResult = async (flips:string, side:string) => {
    try{
        const response = await fetch(`coinflip?flips=${flips}&side=${side}`, {
            method: 'GET',
            mode: 'cors',
            headers: {'Accept': 'application/json'}
        });

        return await response.json();
    }
    catch (error) {
        console.log('error: Could not connect to API server');
        return 'error: Could not connect to API server';
    }
}