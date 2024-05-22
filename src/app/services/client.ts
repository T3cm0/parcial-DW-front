export const resolveResponse = (response: any) => {
    try{
        return response.then((rs: any) => {
            return rs.data;
        }).catch((erro: any) => {
            if(erro?.response?.status == 400){
                return Promise.resolve(erro.response.data);
            }
            return Promise.reject("Hubo un problema porfavor comunicar");
        });
    
    } catch(err) {
        return Promise.reject("Hubo un problema porfavor comunicar");
    };
}

export const headersRQ = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}