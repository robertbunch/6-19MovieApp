const MovieApp = require("./MovieApp")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new MovieApp.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new MovieApp.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSubmit({ preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleSubmit({ preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
