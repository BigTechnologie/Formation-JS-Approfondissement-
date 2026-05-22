"use stricte";

const books = new Books();

async function initBooks() {
    try {
        await books.load();
        
    } catch (error) {
        
    }
}