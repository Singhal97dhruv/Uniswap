// export const shortenAddress=(address)=>{
//     `${address?.slice(0,12)}...${address?.slice(address.length-8)}`;
// }
export const shortenAddress=(address)=>`${address?.slice(0,5)}...${address?.slice(address.length-6)}`;

export const parseErrorMsg=(e)=>{
    const json= JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}