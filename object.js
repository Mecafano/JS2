// Digital Bookshelf
let bookshelf = [];

function addBook(title, author, genre, pages, isRead) {
    const book = {
        title: title,
        author: author,
        genre: genre,
        pages: pages,
        isRead: isRead
    };
    bookshelf.push(book);
}

function markAsRead(title) {
    const bookIndex = bookshelf.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
        bookshelf[bookIndex].isRead = true;
    } else {
        console.log("Book not found.");
    }
}

// Contact Management System
let contactList = [];

function addContact(name, email, phone, address) {
    const contact = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };
    contactList.push(contact);
}

function updateContactInfo(name, newEmail, newPhone) {
    const contact = contactList.find(contact => contact.name === name);
    if (contact) {
        contact.email = newEmail;
        contact.phone = newPhone;
    } else {
        console.log("Contact not found.");
    }
}

function extractNameAndEmail(contact) {
    const { name, email } = contact;
    return { name, email };
}

// Example:
addBook("dunyoning ishlari", "o'tkir hoshimov", "Fiction", 180, false);
addBook("ufq", "said ahmad", "Classic", 281, true);

addContact(""Abdulhafiz Yoqubjonov, "a.yoqubjonov@example.com", "+998911050316", { street: "Yangi Yer 87", city: "fergana", country: "Uzbekistan" });
updateContactInfo("Palonchi Pistonchiyev", "palonchi@example.com", "+998979018381");

const contact = contactList[0];
const { name, email } = extractNameAndEmail(contact);
console.log("Name:", name);
console.log("Email:", email);
