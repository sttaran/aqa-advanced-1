const user = {
    name: "John",
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

const users = [
    {
        name: "John",
        address: {
            city: "New York",
            zipcode: "10001"
        }
    },
    {
        name: "Alice",
        email: "test@test.com",
        address: {
            city: "New York",
            zipcode: "10001"
        }
    },
]

for (const user of users) {
    const upperEmail = user.email?.toUpperCase()

    if(!upperEmail){
        // console.log(`User "${user.name}" has no email`)
        throw new Error("User name has no name")
    }else console.log(upperEmail)
}

