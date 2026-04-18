export async function explainCode (code:string): Promise<string> {
    const trimmedCode = code.trim();
    if(trimmedCode === ""){
        throw new Error(`输入内容是：${trimmedCode}`);
    }
    await new Promise <void> ((resolve) => {
        setTimeout(() => {
            resolve();
        }, 300);
    })
    return "none";
}
