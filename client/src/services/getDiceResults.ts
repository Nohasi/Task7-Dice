export const getDiceResults = async (dice: number, throws: number, players: number) => {
    try{
        const response = await fetch(`dice?dice=${dice}&throws=${throws}&players=${players}`, {
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