const {User} = require('./users')

describe("User Model", () => {
    // test get user
    test("get a user", async () => {
        const user = await User.findOne({
            where: {
                id: 1,
            }
        })
        expect(user.email).toBe('kiettrana1b2@gmail.com')
        expect(user.firstName).toBe('Kiet')
        expect(user.lastName).toBe('Tran')
        expect(user.id).toBe(1)
    })

    // test create a new user
    test("create a user", async () => {
        let result = true
        try {
            await User.create({
                firstName: 'Tran',
                lastName: 'Kiet',
                email: 'kiettranuit@gmail.com',
                password: '123',
            })
        } catch(error) {
            result = false
        }

        expect(result).toBe(true)
    })

    // test delete a user
    test("delete a user", async () => {
        let result = true
        try {
            await User.destroy({
                where: {
                    email: 'kiettranuit@gmail.com',
                }
            })
        } catch(error) {
            result = false
        }

        expect(result).toBe(true)
    })
})